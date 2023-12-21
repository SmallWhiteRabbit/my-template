import { defineComponent, ref } from "vue";
import { IFormItemConfig } from "@/hooks/useBaseComponents";
import Myform from "@/components/common/my-form";

export default defineComponent({
  name: "my-dialog",
  props: {
    formList: {
      type: Array<IFormItemConfig>,
      default: [],
    },
    formData: {
      type: Object,
    },
    formRules: {},
  },
  components: { Myform },
  setup(props, ctx) {
    const { emit, attrs, expose } = ctx;
    const dialogRef = ref(null);

    const visible = ref(false);
    const submitForm = () => {
      dialogRef.value?.formRef.validate().then((res) => {
        if (res) {
          emit("success");
        }
      });
    };
    expose({ visible });
    const cancel = () => {
      dialogRef.value?.formRef.resetFields();
      visible.value = false;
    };
    return (): JSX.Element => {
      return (
        <el-dialog {...attrs} vModel={visible.value}>
          <Myform
            class="my-filter-form"
            inline={true}
            formList={props.formList}
            rules={props.formRules}
            vModel={props.formData}
            model={props.formData}
            ref={dialogRef}
          ></Myform>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" onClick={submitForm}>
              确 定
            </el-button>
            <el-button onClick={cancel}>取 消</el-button>
          </div>
        </el-dialog>
      );
    };
  },
});

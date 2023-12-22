import type {
  IFormItemConfig,
  IBtnConfigItem,
} from "@/hooks/useBaseComponents";
import Myform from "@/components/common/my-form";
export default defineComponent({
  name: "my-filter",
  props: {
    formList: {
      type: Array<IFormItemConfig>,
      default: [],
    },
    modelValue: {
      type: Object,
    },
    btnList: {
      type: Array<IBtnConfigItem>,
      default: [],
    },
  },
  components: { Myform },
  setup(props, ctx) {
    return (): JSX.Element => {
      return (
        <div class="my-filter">
          <Myform
            class="my-filter-form"
            inline={true}
            formList={props.formList}
            vModel={props.modelValue}
          ></Myform>
          <div class="my-filter-btn">
            {props.btnList.map((item) => {
              return <el-button {...item}> {item.label}</el-button>;
            })}
          </div>
        </div>
      );
    };
  },
});

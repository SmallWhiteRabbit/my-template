import type {
  IFormItemConfig,
  IBtnConfigItem,
} from "@/hooks/useBaseComponents";
import Myform from "@/components/common/my-form";
import { useI18n } from "vue-i18n";

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
    const { t } = useI18n();

    return (): JSX.Element => {
      return (
        <div class="my-filter">
          <Myform
            class="my-filter-form"
            inline={true}
            formList={props.formList}
            vModel={props.modelValue}
          >
            <div class="my-filter-btn el-form-item">
              {props.btnList.map((item) => {
                return <el-button {...item}> {t(item.label)}</el-button>;
              })}
            </div>
          </Myform>
        </div>
      );
    };
  },
});

import { ElOption, type FormInstance } from "element-plus";
import type { VNode } from "vue";
import type { IFormItemConfig } from "@/hooks/useBaseComponents";
import { defineComponent, resolveComponent } from "vue";
import { renderSlots } from "@/hooks/useBaseComponents";

export default defineComponent({
  name: "my-form",
  props: {
    formList: {
      type: Array<IFormItemConfig>,
      default: [],
    },
    modelValue: {
      type: Object,
    },
  },
  setup(props, ctx) {
    const { emit, attrs, expose, slots } = ctx;
    const formRef = ref<FormInstance>();

    expose({ formRef });
    // 渲染组件
    const renderComponent = (
      componentData: IFormItemConfig,
      parentProps: any,
      ctx: any
    ) => {
      const { is, prop, options, ...rest } = componentData;
      if (is) {
        if (prop) {
          return h(
            resolveComponent(is),
            {
              modelValue: parentProps.modelValue[prop as string],
              "onUpdate:modelValue": (value: any) => {
                parentProps.modelValue[prop as string] = value;
              },
              ...rest,
            },
            () => {
              if (options) {
                const optionDom: VNode[] = [];
                options.forEach((row: { label: string; value: string }) => {
                  optionDom.push(
                    h(ElOption, {
                      label: row.label,
                      value: row.value,
                      disabled: false,
                    })
                  );
                });
                return optionDom;
              }
            }
          );
        }
        return h(resolveComponent(is), {});
      }
    };
    //渲染
    const renderComponents = (
      componentData: IFormItemConfig,
      parentProps: any,
      ctx: any
    ): JSX.Element | VNode[] | void => {
      if (componentData.is) {
        return renderComponent(componentData, parentProps, ctx);
      }
      return renderSlots(componentData.slotName || "", ctx);
    };

    return (): JSX.Element => {
      return (
        <el-form ref={formRef} {...attrs}>
          {props.formList.map((item) => {
            const { renderFormItem, renderItem, is, ...rest } = item;
            return renderFormItem ? (
              renderFormItem(item, props, ctx)
            ) : (
              <el-form-item {...rest}>
                {renderItem
                  ? renderItem(item, props, ctx)
                  : renderComponents(item, props, ctx)}
              </el-form-item>
            );
          })}
          {slots.default ? renderSlots("", ctx) : ""}
        </el-form>
      );
    };
  },
});

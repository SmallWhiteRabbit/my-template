import type { ITableColumnConfig } from "@/hooks/useBaseComponents";
import { defineComponent, renderSlot, resolveComponent } from "vue";
import { renderSlots } from "@/hooks/useBaseComponents";
export default defineComponent({
  name: "my-table",
  props: {
    tableList: {
      type: Array<ITableColumnConfig>,
      default: [],
    },
    data: {
      type: Array,
    },
  },
  setup(props, ctx) {
    const { emit, attrs } = ctx;
    const { treeProps } = attrs;
    return (): JSX.Element => {
      return (
        <el-table data={props.data} border {...attrs}>
          {props.tableList.map((item) => {
            const { slotName, prop, ...rest } = item;
            if (treeProps) {
              return <el-table-column {...rest}></el-table-column>;
            }
            return (
              <el-table-column
                {...rest}
                v-slots={{
                  default: (props: Record<"row", any>) =>
                    slotName ? (
                      renderSlots(slotName || "", ctx, props)
                    ) : (
                      <div>{prop ? props?.row[prop] : ""}</div>
                    ),
                  //在这里实现自定义内容，参数是props，比如要自定义显示图片就可以<img :src="props.row.image"/>
                }}
              ></el-table-column>
            );
          })}
        </el-table>
      );
    };
  },
});

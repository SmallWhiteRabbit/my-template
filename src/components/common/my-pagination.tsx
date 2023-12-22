import { defineComponent } from "vue";
export default defineComponent({
  name: "my-pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      },
    },
    // 移动端页码按钮的数量端默认值5
    pagerCount: {
      type: Number,
      default: document.body.clientWidth < 992 ? 5 : 7,
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const { emit, attrs } = ctx;
    const currentPage = computed({
      get() {
        return props.page;
      },
      set(val) {
        emit("update:page", val);
      },
    });
    const pageSize = computed({
      get() {
        return props.limit;
      },
      set(val) {
        emit("update:limit", val);
      },
    });

    function handleSizeChange(val: number) {
      if (currentPage.value * val > props.total) {
        currentPage.value = 1;
      }
      emit("pagination", { page: currentPage.value, limit: val });
      if (props.autoScroll) {
        scrollTo(0, 800);
      }
    }
    function handleCurrentChange(val: number) {
      emit("pagination", { page: val, limit: pageSize.value });
      if (props.autoScroll) {
        scrollTo(0, 800);
      }
    }
    return (): JSX.Element => {
      return (
        <el-pagination
          background={props.background}
          vModel:current-page={currentPage.value}
          vModel:page-size={pageSize.value}
          layout={props.layout}
          page-sizes={props.pageSizes}
          pager-count={props.pagerCount}
          total={props.total}
          size-change={handleSizeChange}
          current-change={handleCurrentChange}
        />
      );
    };
  },
});

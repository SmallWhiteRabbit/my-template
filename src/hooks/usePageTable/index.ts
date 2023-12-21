import { reactive, ref } from "vue";

export default function usePageTable(
  queryParams: Object,
  listFunc?: (arg0: {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
    pageNum: number;
    pageSize: number;
  }) => Promise<any>
) {
  const pageInfo = reactive({
    pageNum: 1,
    pageSize: 5,
    total: 10,
  });
  const tableData = ref([]);

  const getList = () => {
    return new Promise((resolve, reject) => {
      listFunc({
        pageNum: pageInfo.pageNum,
        pageSize: pageInfo.pageSize,
        ...queryParams,
      })
        .then((res) => {
          pageInfo.total = res.total;
          tableData.value = res.rows;
          resolve(res.data);
        })
        .catch((res) => {
          reject(res);
        });
    });
  };

  return {
    pageInfo,
    tableData,
    getList,
  };
}

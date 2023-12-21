// 注册全局组件
import { defineAsyncComponent } from "vue";
export const componentPligin = {
  install(app: { component: (arg0: string, arg1: any) => void }) {
    const requireModules = import.meta.glob("./common/**.tsx", { eager: true });
    for (const path in requireModules) {
      const module = path.match(/.*\/(.+).tsx$/);
      const moduleName = module ? module[1] : "";
      app.component(
        moduleName,
        defineAsyncComponent(() => {
          return import(`./common/${moduleName}.tsx`);
        })
      );
    }
  },
};

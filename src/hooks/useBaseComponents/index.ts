import console from "console";
import type { Slot } from "vue";
import { defineComponent, renderSlot, resolveComponent } from "vue";

export interface IFormItemConfig {
  renderFormItem?: Slot;
  renderItem?: Slot;
  is?: string;
  slotName?: string;
  prop: string;
  options?: [];
}

export interface IBtnConfigItem {
  label: string;
  onClick?: Function;
}

export interface ITableColumnConfig {
  renderFormItem?: Slot;
  renderItem?: Slot;
  is?: string;
  slotName?: string;
  prop?: string;
  label: string;
}

export const renderSlots = (name: string, ctx: any, scope?: any) => {
  const { slots } = ctx;
  return renderSlot(slots, name ? name : "default", scope);
};

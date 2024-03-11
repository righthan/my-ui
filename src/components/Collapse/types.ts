import type { Ref, InjectionKey } from 'vue'
export type CollapseActiveName = string | number

export interface CollapseItemProps {
  name: CollapseActiveName
  title?: string
  disabled?: boolean
}

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')

export interface CollapseProps {
  modelValue: CollapseActiveName[]
  // 是否开启手风琴样式（最多打开一个选项）, 默认打开可打开多个
  accordion?: boolean
}
export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseActiveName[]): void
  // 用户展开或折叠某个面板时触发change事件
  (e: 'change', values: CollapseActiveName[]): void
}

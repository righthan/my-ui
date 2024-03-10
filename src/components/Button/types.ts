import type { PropType } from 'vue'

export type ButtonType = 'primary' | 'success' | 'info' | 'warning'

export type ButtonSizeType = 'medium' | 'small' | 'large'

export type NativeType = 'button' | 'submit' | 'reset'

export const ButtonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'medium'
  },
  plain: {
    type: Boolean
  },
  round: {
    type: Boolean
  },
  circle: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  autofocus: {
    type: Boolean
  },
  loading: {
    type: Boolean
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  icon: {
    type: String
  }
}

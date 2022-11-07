import ViewNode from './ViewNode'

export enum Concept {
  ViewNode = 'ViewNode',
  Animate = 'Animate',
}

export interface ActionType {
  action: 'update' | 'add' | 'delete'
}

export interface ActionChange {
  path?: string
  content?: any
  index?: number
}

export interface BindItemType<T> {
  value: T
  label: string
}
export type ActionItem = ActionType & ActionChange

interface NumberInput extends BindItemType<number> {
  type: 'number'
}

interface StringInput extends BindItemType<string> {
  type: 'string'
}

interface SelectInput extends BindItemType<string> {
  type: 'select'
  options: { label: string; value: string }[]
}

interface SwitchInput extends BindItemType<boolean> {
  type: 'switch'
}

interface MultipleInput extends BindItemType<Array<string>> {
  type: 'multiple'
  options: { label: string; value: string }[]
}
export interface BindType {
  placeholder?: StringInput
  gutter?: NumberInput
  span?: NumberInput
  offset?: NumberInput
  order?: NumberInput
  pull?: NumberInput
  push?: NumberInput
  type?: SelectInput
  size?: SelectInput
  activeText?: StringInput
  inactiveText?: StringInput
  disabled?: SwitchInput
  clearable?: SwitchInput
  danger?: SwitchInput
  shape?: SelectInput
  block?: SwitchInput
  dashed?: SwitchInput
  orientation?: SelectInput
  plain?: SwitchInput
  align?: SelectInput
  justify?: SelectInput
  wrap?: SwitchInput
  direction?: SelectInput
  arrow?: SwitchInput
  autoFocus?: SwitchInput
  destroyPopupOnHide?: SwitchInput
  placement?: SelectInput
  trigger?: MultipleInput
  loading?: SwitchInput
}

export interface ViewNodeType {
  typename: string
  name: string
  property: BindType
  slot: boolean
  text?: string
  children?: (ViewNodeType | ViewNode)[]
  parentname?: string
}

export interface AppType {
  views?: (ViewNodeType | ViewNode)[]
  name: string
}

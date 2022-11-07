import { ViewNodeType } from '@lowcode/concept'
const materials: ViewNodeType[] = [
  {
    name: '按钮',
    typename: 'Button',
    slot: false,
    text: '按钮',
    property: {
      block: {
        type: 'switch',
        value: false,
        label: '将按钮宽度调整为其父宽度的选项',
      },
      danger: {
        type: 'switch',
        value: false,
        label: '设置危险按钮',
      },
      disabled: {
        type: 'switch',
        value: false,
        label: '按钮失效状态',
      },
      shape: {
        type: 'select',
        value: 'default',
        label: '设置按钮形状',
        options: [
          { value: 'default', label: '默认形状' },
          { value: 'round', label: '椭圆形' },
          { value: 'circle', label: '圆形' },
        ],
      },
      size: {
        type: 'select',
        value: 'middle',
        label: '设置按钮大小',
        options: [
          { value: 'middle', label: '默认大小' },
          { value: 'large', label: '偏大' },
          { value: 'small', label: '偏小' },
        ],
      },
      type: {
        type: 'select',
        value: 'default',
        label: '设置按钮类型',
        options: [
          { value: 'primary', label: '主要按钮' },
          { value: 'default', label: '次要按钮' },
          { value: 'ghost', label: '幽灵按钮' },
          { value: 'dashed', label: '虚线按钮' },
          { value: 'link', label: '链接按钮' },
          { value: 'text', label: '文本按钮' },
        ],
      },
    },
  },
  {
    name: '分割线',
    typename: 'Divider',
    slot: false,
    text: '分割线',
    property: {
      dashed: {
        type: 'switch',
        value: false,
        label: '是否虚线',
      },
      orientation: {
        type: 'select',
        value: 'center',
        label: '分割线标题的位置',
        options: [
          { value: 'center', label: '中心' },
          { value: 'left', label: '靠左' },
          { value: 'right', label: '靠右' },
        ],
      },
      plain: {
        type: 'switch',
        value: false,
        label: '文字是否显示为普通正文样式',
      },
      type: {
        type: 'select',
        value: 'horizontal',
        label: '水平还是垂直类型',
        options: [
          { label: '水平', value: 'horizontal' },
          { value: 'vertical', label: '垂直' },
        ],
      },
    },
  },
  {
    name: '行布局',
    typename: 'Row',
    slot: true,
    property: {
      align: {
        type: 'select',
        value: 'top',
        label: '垂直对齐方式',
        options: [
          { label: '顶部', value: 'top' },
          { label: '居中', value: 'middle' },
          { label: '底部', value: 'bottom' },
          { label: '延申', value: 'stretch' },
        ],
      },
      gutter: {
        value: 0,
        label: '栅格间隔',
        type: 'number',
      },
      justify: {
        type: 'select',
        value: 'start',
        label: '水平排列方式',
        options: [
          {
            label: '起始位置',
            value: 'start',
          },
          {
            label: '结束位置',
            value: 'end',
          },
          {
            label: '居中',
            value: 'center',
          },
        ],
      },
      wrap: {
        type: 'switch',
        value: true,
        label: '是否自动换行',
      },
    },
    children: [
      {
        name: '列布局',
        typename: 'Col',
        slot: true,
        property: {
          offset: {
            type: 'number',
            value: 0,
            label: '栅格左侧的间隔格数，间隔内不可以有栅格',
          },
          order: {
            type: 'number',
            value: 0,
            label: '栅格顺序',
          },
          pull: {
            type: 'number',
            value: 0,
            label: '栅格向左移动格数',
          },
          push: {
            type: 'number',
            value: 0,
            label: '栅格向右移动格数',
          },
          span: {
            type: 'number',
            value: 6,
            label: '栅格占位格数',
          },
        },
      },
      {
        name: '列布局',
        typename: 'Col',
        slot: true,
        property: {
          offset: {
            type: 'number',
            value: 0,
            label: '栅格左侧的间隔格数，间隔内不可以有栅格',
          },
          order: {
            type: 'number',
            value: 0,
            label: '栅格顺序',
          },
          pull: {
            type: 'number',
            value: 0,
            label: '栅格向左移动格数',
          },
          push: {
            type: 'number',
            value: 0,
            label: '栅格向右移动格数',
          },
          span: {
            type: 'number',
            value: 6,
            label: '栅格占位格数',
          },
        },
      },
      {
        name: '列布局',
        typename: 'Col',
        slot: true,
        property: {
          offset: {
            type: 'number',
            value: 0,
            label: '栅格左侧的间隔格数，间隔内不可以有栅格',
          },
          order: {
            type: 'number',
            value: 0,
            label: '栅格顺序',
          },
          pull: {
            type: 'number',
            value: 0,
            label: '栅格向左移动格数',
          },
          push: {
            type: 'number',
            value: 0,
            label: '栅格向右移动格数',
          },
          span: {
            type: 'number',
            value: 6,
            label: '栅格占位格数',
          },
        },
      },
      {
        name: '列布局',
        typename: 'Col',
        slot: true,
        property: {
          offset: {
            type: 'number',
            value: 0,
            label: '栅格左侧的间隔格数，间隔内不可以有栅格',
          },
          order: {
            type: 'number',
            value: 0,
            label: '栅格顺序',
          },
          pull: {
            type: 'number',
            value: 0,
            label: '栅格向左移动格数',
          },
          push: {
            type: 'number',
            value: 0,
            label: '栅格向右移动格数',
          },
          span: {
            type: 'number',
            value: 6,
            label: '栅格占位格数',
          },
        },
      },
    ],
  },
  {
    name: '布局容器',
    typename: 'Layout',
    slot: true,
    property: {},
    children: [
      {
        parentname: 'Layout',
        name: '容器头部',
        typename: 'Header',
        slot: true,
        children: [],
        property: {},
      },
      {
        parentname: 'Layout',
        name: '容器内容',
        typename: 'Content',
        slot: true,
        children: [],
        property: {},
      },
      {
        parentname: 'Layout',
        name: '容器底部',
        typename: 'Footer',
        slot: true,
        children: [],
        property: {},
      },
    ],
  },
  {
    name: '间隔容器',
    typename: 'Space',
    slot: true,
    property: {
      align: {
        type: 'select',
        value: '',
        label: '对齐方式',
        options: [
          { label: '起始位置', value: 'start' },
          { label: '居中', value: 'center' },
          {
            label: '结束位置',
            value: 'end',
          },
          {
            label: '底线位置',
            value: 'baseline',
          },
        ],
      },
      direction: {
        type: 'select',
        value: 'horizontal',
        label: '间距方向',
        options: [
          {
            label: '水平方向',
            value: 'horizontal',
          },
          { label: '垂直方向', value: 'vertical' },
        ],
      },
      size: {
        type: 'select',
        value: 'small',
        label: '间距大小',
        options: [
          { label: '大', value: 'large' },
          { label: '中', value: 'middle' },
          { label: '小', value: 'small' },
        ],
      },
    },
  },
  {
    name: '面包屑',
    typename: 'Breadcrumb',
    slot: true,
    property: {},
    children: [
      {
        name: '面包屑项',
        typename: 'Item',
        parentname: 'Breadcrumb',
        slot: false,
        text: 'Item1',
        property: {},
      },
      {
        name: '面包屑项',
        typename: 'Item',
        parentname: 'Breadcrumb',
        slot: false,
        text: 'Item2',
        property: {},
      },
      {
        name: '面包屑项',
        typename: 'Item',
        parentname: 'Breadcrumb',
        slot: false,
        text: 'Item3',
        property: {},
      },
    ],
  },
  {
    name: '下拉菜单',
    typename: 'Dropdown',
    slot: true,
    property: {
      arrow: {
        type: 'switch',
        value: false,
        label: '下拉框箭头是否显示',
      },
      autoFocus: {
        type: 'switch',
        value: false,
        label: '打开后自动聚焦下拉框',
      },
      disabled: {
        type: 'switch',
        value: false,
        label: '菜单是否禁用',
      },
      destroyPopupOnHide: {
        type: 'switch',
        value: false,
        label: '关闭后是否销毁 Dropdown',
      },
      placement: {
        type: 'select',
        value: 'bottomLeft',
        label: '菜单弹出位置',
        options: [
          { label: '下', value: 'bottom' },
          { label: '左下', value: 'bottomLeft' },
          { label: '右下', value: 'bottomRight' },
          { label: '上', value: 'top' },
          { label: '左上', value: 'topLeft' },
          { label: '右上', value: 'topRight' },
        ],
      },
      trigger: {
        type: 'multiple',
        value: ['hover'],
        label: '触发下拉的行为',
        options: [
          { label: '悬浮', value: 'hover' },
          { label: '点击', value: 'click' },
          { label: '右击', value: 'contextMenu' },
        ],
      },
    },
    children: [],
    text: '下拉菜单',
  },
  {
    name: '下拉按钮菜单',
    parentname: 'Dropdown',
    typename: 'Button',
    slot: true,
    property: {
      arrow: {
        type: 'switch',
        value: false,
        label: '下拉框箭头是否显示',
      },
      autoFocus: {
        type: 'switch',
        value: false,
        label: '打开后自动聚焦下拉框',
      },
      disabled: {
        type: 'switch',
        value: false,
        label: '菜单是否禁用',
      },
      destroyPopupOnHide: {
        type: 'switch',
        value: false,
        label: '关闭后是否销毁 Dropdown',
      },
      placement: {
        type: 'select',
        value: 'bottomLeft',
        label: '菜单弹出位置',
        options: [
          { label: '下', value: 'bottom' },
          { label: '左下', value: 'bottomLeft' },
          { label: '右下', value: 'bottomRight' },
          { label: '上', value: 'top' },
          { label: '左上', value: 'topLeft' },
          { label: '右上', value: 'topRight' },
        ],
      },
      trigger: {
        type: 'multiple',
        value: ['hover'],
        label: '触发下拉的行为',
        options: [
          { label: '悬浮', value: 'hover' },
          { label: '点击', value: 'click' },
          { label: '右击', value: 'contextMenu' },
        ],
      },
      danger: {
        type: 'switch',
        value: false,
        label: '设置危险按钮',
      },
      loading: {
        type: 'switch',
        value: false,
        label: '设置按钮载入状态',
      },
      size: {
        type: 'select',
        value: 'middle',
        label: '设置按钮大小',
        options: [
          { value: 'middle', label: '默认大小' },
          { value: 'large', label: '偏大' },
          { value: 'small', label: '偏小' },
        ],
      },
      type: {
        type: 'select',
        value: 'default',
        label: '设置按钮类型',
        options: [
          { value: 'primary', label: '主要按钮' },
          { value: 'default', label: '次要按钮' },
          { value: 'ghost', label: '幽灵按钮' },
          { value: 'dashed', label: '虚线按钮' },
          { value: 'link', label: '链接按钮' },
          { value: 'text', label: '文本按钮' },
        ],
      },
    },
    children: [],
    text: '下拉按钮菜单',
  },
]

export default materials

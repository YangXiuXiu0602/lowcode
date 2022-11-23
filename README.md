# lowcode

一个基于 React+TypeScript 的前端低代码 MonoRepo 项目

安装

```
pnpm install
```

运行前端项目

```
pnpm run dev
```

运行后端服务

```
pnpm run server
```

该项目分为三个模块，主要分为概念层、核心层、以及存储层。核心层主要负责前端页面绘制，包括画布、物料、属性设置等相关模块，以及封装了部分组件如 Transition 相关动画组件。概念层主要负责定义 lowcode 上所有可定义的数据结构，主要包含 JSON 相关的操作节点的数据结构，实现了多个数据结构可对 JSON 进行操作，实现了撤销重做功能。存储层负责后端对应 appJSON 信息的保存。

## 概念层和核心层

​ 将页面和 JSON 处理大幅度分离，使页面层更加专注于页面功能和页面逻辑的书写，不需要过度关心 JSON 相关的操作。概念层主要负责定义低代码平台上所有的数据结构，包括 APP，ViewNode 等，同时监听了所有涉及到更新或者操作 JSON 的操作，支持了撤销、返回等操作。同时对 JSON 的 storage 进行了批处理，当修改多次 JSON 时保证只会触发一次 storage

#### 概念层

##### 撤销和回退

​ 通过事件总线的原理监听所有 JSON 相关的 update、add、delete 操作，每个操作都会将其左右一个 job 保存入撤销栈中，每个 job 的数据结构主要为：action 表示此次操作的类型，主要有三个值: add、update、delete, content 表示此次操作的节点的旧内容, path 表示此次操作的具体路劲, 主要结构为以 app 为基准当前节点的路劲. 注: 如果是 add 或者 delete 操作时, path 的值为其父节点的 path. 然后撤销操作即为从栈中弹出一个 job, 同时对其进行撤销操作, 通过对应 job 的 path 找到操作的节点, 在通过 action 判断对应的操作, 因为是撤销, 所以当 action 为 add 时进行 delete 操作. 当 action 为 delete 时进行 add 操作.其操作的内容即为原来 job 中保存的 content. 同时通过全局维护一个变量表示当前状态是处于撤销还是正常状态, 如果是撤销状态则将对应操作的 job 保存在回退栈中, 否则将其保存在撤销栈中.

##### 批处理保存

​ 监听了对所有更新 JSON 的操作，同时对所有更新操作进行了批处理。当同时触发多个更新操作时只会触发一次保存操作，也就是只会调用一次保存 JSON 信息的结构。主要实现原理借鉴了框架中的 scheduler 原理，将每次更新操作对应的 job 存入到队列中，同时调用更新操作，每次将 job 存入到队列中时，都会调用更新操作。全局会维护一个变量，表示是否已经触发过更新，如果触发过直接返回，同时会往微任务中放入一个微任务，这个微任务所做的事情就是拿到 job 队列，将其中所有 job 进行保存操作，然后将全局变量改为更新完毕。

##### JSON 响应式

​ 概念层声明了一个装饰器，该装饰器会对对应变量进行拦截，当我们访问该变量时会自动对其进行实例化操作。如果值是对象或者数组类型也会在其访问到对应项时自动对齐进行实例化。同时如果给对应变量赋值新的值时也会进行拦截重新进行实例化操作。借鉴了 Vue 框架的响应式原理，对所有使用了改装饰器的属性进行响应式拦截和响应式实例化。

#### 核心页面层

##### Transition 组件的封装

​ 在页面层封装了 SwitchTransition 组件，用来支持 React 框架下的组件动画。

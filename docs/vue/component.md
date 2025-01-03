# 官方定义

首先看一下官方的定义
![1.png](..%2Fpublic%2Fvue%2Fcomponent%2F1.png)
![2.png](..%2Fpublic%2Fvue%2Fcomponent%2F2.png)
这是一个类似于组件的“元组件”，渲染的内容由is接收到的参数进行决定的。

## 通过字符串渲染HTML元素

```javascript
  <component is="h1">HTML的h1标签和内容</component>
```

![3.png](..%2Fpublic%2Fvue%2Fcomponent%2F3.png)
我们可以看到通过传递一个HTML标签名称的字符串给is属性会渲染成传入的HTML标签，内容为component标签包裹的内容。

## 通过字符串渲染组件

```javascript
<script>
    import Foo from './Foo.vue'
    import Bar from './Bar.vue'

    export default {
    components: {Foo, Bar},
    data() {
    return {
    view: 'Foo'
}
}
}
</script>

<template>
    <component
    :is="view" />
</template>
```

属于Vue2的一个选项式语法，需要引入并注册，最后传给is属性的是一个字符串，值为注册的组件名称

## 通过导入的组件渲染组件

```javascript
<script setup lang="ts">
    import {ref,shallowRef,reactive,markRaw} from "vue";
    import AVue from "./views/A/index.vue";
    import BVue from "./views/B/index.vue";
    import CVue from "./views/C/index.vue";

    const com = shallowRef(AVue)
    const active = ref(0)
    const data = reactive([
    {name:'A组件',com:markRaw(AVue)},
    {name:'B组件',com:markRaw(BVue)},
    {name:'C组件',com:markRaw(CVue)},
    ])
    const changeCom = (v:any,i:number)=>{
    com.value = v.com
    active.value = i
}
</script>
<template>
    <button
    :class="index===active?'active ':''" v-for="(v,index) in data" @click="changeCom(v,index)">{{ v.name }}
</button>
<component :is = "com" > < /component>
</template> 
```

这个语法风格为Vue3的setup语法糖，我们可以直接将组件导入并传递给is即可。但是为了避免以下报错
![4.png](..%2Fpublic%2Fvue%2Fcomponent%2F4.png)
出现这个报错的原因是因为ref或者reactive会将保存的数据进行深层次的响应式，导致保存的组件数据也成为响应式的了，但是这是没有必要且耗费性能的。

所以当使用ref来保存组件的地方推荐使用shallowRef来替代，进行浅层次的响应式。

如果是reactive中包裹组件数据可以使用markRaw对组件数据进行包裹，标记这个数据不需要进行响应式处理，减少性能的消耗。

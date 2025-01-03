# Vue3语法之ref&reactive

## 声明响应式状态之 ref()

### ref()传参——用于声明响应式数据

1.在代码中使用ref声明的响应式数据**需要.value**

![1.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F1.png)

2.模板中使用看文档截图是**不需要.value**

![2.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F2.png)
3.ref声明的响应式数据是具备**深层次的响应式**，且可以用于**声明任何数据**类型的值

![3.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F3.png)
4.非原始值将通过 reactive() 转换为响应式代理
![4.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F4.png)

5.对于深层次嵌套的数据希望其只具备浅层次的响应时使用 shallow ref

![5.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F5.png)

### ref() 不传参 用于获取组件实例或DOM对象

1.组件实例身上获取组件实例
![6.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F6.png)
![7.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F7.png)

2. 在标签身上获取DOM
   ![8.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F8.png)
   ![9.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F9.png)

## reactive

1.ref 是包装成一个.value的对象.value具备响应式，而reactive是直接整个对象具备响应式不需要.value
![10.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F10.png)

2.reactive能声明复杂数据类型不能声明基本数据类型
![11.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F11.png)

3.不能直接把整个对象替换掉，这样将丢失响应式
![12.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F12.png)

4.解构或传参时传过去的丢失响应式
![13.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F13.png)

只有这样才是响应式的
![14.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F14.png)

### reactive注意点

1. reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：
   ![15.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F15.png)

   其中只有更改reactive()返回的代理对象proxy才是响应式的，直接对原始数据raw进行更改的话不是响应式的
   ![16.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F16.png)


2. 对于通过reactive()返回的代理对象再次进行代理的话返回自身

   ![17.png](..%2Fpublic%2Fvue%2Fref%26reactive%2F17.png)


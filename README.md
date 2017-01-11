# Angular1.0+ES6+Lodash前端种子 
> @author xiaran

* 初始化 `npm install`
* 调试开发 `npm run dev`
  http://localhost:5000
* 代码规范校验 `npm run lint`

## 开发目的
* 学习ES6与angular开发规范
* 学习业务代码与框架(angular)松耦合
    

## 技术选型
* angular1.5 多用component
* ui-router 或 component router(待完成,强烈推荐)
* ES6语法
* 代码规范校验(待完成)
* 测试karma+jasmine(待完成)
* 与框架松耦合(app.js 和 index.js 以外程序与angular无关)

## ES6
* 使用es6的语法
    - 变量解构赋值
    - class，后续controller什么的都写成类，可以用setter和getter
    - 箭头函数，告别this=self
    - ...arg代替apply，以及函数参数
    - 合并数组 [...arr1, ...arr2, ...arr3]
    - 模板字符串
    - import

## 测试(待完成)
* 单测karma+jasmine
* e2e 还没想好 ng自带的有一个protractor

## 规范

* 使用eslint 具体规范见.eslintrc文件

## 工程化
* webpack
* 打包现在用的webpack 后续用rollup或者webpack2吧 tree-shaking可以干掉冗余代码(待完成)
* envify:和ugify一起用，移除所有的调试代码和详细的错误信息,以此来提升效率并缩减文件(待完成)

## 规范写法
* ui-router里直接写component

## 文件结构，自己定义自己模块名和文件目录吧

> 文件名规范我还没想好

```
├── app.js 入口js
├── index

├── main.css css
├── common 通用组件，服务都放在这里
│   ├── common.js
│   ├── service
│   │   ├── http
│   │       ├── httpService.js http通用接口
├── moduleA 模块A (ui-router实现)
│   │   ├── pageA A页面
├── moduleB 模块B (component + component router实现 待完成)
│   │   ├── pageA A页面

```



## 其他



官方的[gitbook](https://mobx.js.org/index.html)


### 1 如何使用decorators

decorators是未来的js特性，如果有用到babel，那么需要安装transform-decorators-legacy插件

```
npm i --save-dev babel-plugin-transform-decorators-legacy
npm install babel-preset-stage-2 --save-dev
npm install babel-preset-react-native-stage-0 --save-dev
npm install --save mobx mobx-react
```

同时需要配置.babelrc/webpack配置文件如下：
```
{
  "presets": ["react-native-stage-0/decorator-support"]
}
// 非react-native
{
  "presets": [
    "es2015",
    "stage-1"
  ],
  "plugins": ["transform-decorators-legacy"]
}
```
需要注意的是transform-decorators-legacy需要放在插件列表的首位。

如果webpack打包的时候报与“stage-1”相关的错误，那么需要执行:
```
npm install babel-preset-stage-1
```

###   ！！！！以下来自(https://github.com/yaojijiayou/React-Mobx-ReactRouter-Webpack-Decorators-Demo)
### 2 如何理解Derivations


在mobx中，存在两种Derivations：computed value和Reactions。

computed value就是基于observable state衍生出的值。它会随着observable state改变而自动改变。

比如observable state是一个数组，里面存放了全校同学的档案。那么computed value可以是:全校所有男生的人数、全校同学的最大年龄、全校最高同学的身高等等。

Reactions与computed value的不同之处是：computed value只是一个单纯的值，而Reaction是根据这个值来搞事情。

它接受两个参数，这两个参数都是函数形式。第一个用来获取‘computed value’，第二个函数则是根据第一个函数产出的值来“搞事情”。

举个例子：第一个函数计算出全校最胖同学的体重，第二个函数可以实现当最胖体重超过某个阈值的时候，向校长报告的功能。

官方文档中有句话我觉得讲的特别好,自己感受一下:
```
Reaction is roughly speaking sugar for: computed(expression).observe(action(sideEffect)) or autorun(() => action(sideEffect)(expression)
```


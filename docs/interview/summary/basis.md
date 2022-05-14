---
title: JS / 网络基础
---

## JS 基础

1. 基本数据类型：`Number`、`String`、`Boolean`、`Symbol`、`Undefined`、`Null`
2. 引用数据类型：`Function`、`Array`、`Object`、`RegExp`、`Date`

3. `typeof` 的返回值：

    ```js
    typeof 1            // ===> 'number'
    typeof '1'          // ===> 'string'
    typeof true         // ===> 'boolean'
    const symbolVal = Symbol(1)
    typeof symbolVal    // ===> 'symbol'
    typeof undefined    // ===> 'undefined'
    typeof null         // ===> 'object' *** (null 表示空对象指针)

    const func = function() {}
    typeof func         // ===> 'function'
    const arr = [1, 2, 3]
    typeof arr          // ===> 'object'
    const obj = { a: 1 }
    typeof obj          // ===> 'object'
    ```

    在 `Array` 和 `Object` 无法用 `typeof` 区分的情况下，可以借助 静态方法`Array.isArray()` 和 `Object.prototype.toString()` 方法进行判定：

    ```js
    const arr = [1, 2, 3]
    const obj = { a: 1 }
    // 1. 方案一
    Array.isArray(arr) // true
    Array.isArray(obj) // false
    
    // 2. 方案二
    Object.prototype.toString.call(arr) // '[object Array]'
    Object.prototype.toString.call(obj) // '[object Object]'
    ```

## 原型、原型链

### 原型

> 所有的对象都是通过 `new 函数` 来创建的，<br>
> 即使是 `const arr = []` 的写法，本质上也是通过 `new Array()` 来创建的；<br>
> `function fn() {}` 的写法，本质上也是通过 `new Function()` 来创建的；<br>
> 所有的函数，本质上也是对象

- <span style="color: red;font-weight: bold;">所有的函数「非箭头函数」</span>都有一个属性：`prototype`，它被称之为 **函数原型**
    - 默认情况下，`prototype` 是一个普通的 `Object` 对象
    - `prototype` 里面有一个属性 `constructor`，默认情况下它指向 **构造函数本身**，如下：

    ```js
    class Person {
        constructor(name) {
            this.name = name
        }
    }
    function Man(name) {
        this.name = name
    }
    // 可以得到：
    // Person.prototype.constructor === Person 为 true
    // Man.prototype.constructor === Man 为 true
    const p = new Person('Saul')
    const m = new Man('Saul')
    ```

    引申问题：下面的代码，变量 `p` 的构造函数是什么？

    ```js
    function Person() {
        return {}
    }
    const p = new Person()
    // 结论：由于构造函数 Person 返回了一个对象
    //      new 操作符得到的对象会是其返回的结果
    //      因而会将 p 的构造函数指向 Object
    // 那么就有：
    // p.constructor === Object 为 true
    // p.constructor === Person 为 false
    ```

- <span style="color: red;font-weight: bold;">所有的对象</span>都有一个属性：`__proto__`，称之为 `隐式原型 `；默认情况下，它指向创建该对象的函数的原型，从而就有： `p.__proto__ === Person.prototype 为 true`

如下关系图所示：

![原型图解](/images/prototype.png)

### 原型链

特殊点：

- `Function` 的隐式原型指向自己的原型：`Function.__proto__ === Function.prototype` （上面我们知道：`Person.__proto__ !== Person.prototype`）

- `Object` 原型的隐式原型指向 `null`：`Object.prototype.__proto__ === null`

关系图如下：

![原型链关系图示](/images/proto_chain.png)

面试题：

```js
function User(name) {
    this.name = name
}
User.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`)
}
const u1 = new User('Saul')
const u2 = new User('K.')

console.log(u1.sayHello === u2.sayHello) // true
console.log(User.prototype.constructor) // User Function
console.log(User.prototype === Function.prototype) // false
console.log(User.__proto__ === Function.prototype) // true
console.log(User.__proto__ === Function.__proto__) // true
console.log(u1.__proto__ === u2.__proto__) // true
console.log(u1.__proto__ === User.__proto__) // false
console.log(Function.__proto__ === Object.__proto__) // true
console.log(Function.prototype.__proto__ === Object.prototype.__proto__) // false
console.log(Function.prototype.__proto__ === Object.prototype) // true
```

### 原型链的应用

#### 基础方法

W3C 不推荐直接使用系统成员属性 `__proto__`

**Object.getPrototypeOf()**

http 报文
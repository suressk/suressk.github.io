---
title: JavaScript 基础
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

4. 判断某个变量是一个 `数组`

    ```js
    const arr = [1, 2, 3];
    ```

    - **`Array.isArray()`**
        ```js
        Array.isArray(arr); // true
        ```

    - **`toString`**
        ```js
        Object.prototype.toString.call(arr) === "[object Array]"; // true
        ```

    - **`isPrototypeOf()`**
        ```js
        Array.prototype.isPrototypeOf(arr); // true
        ```

    - **`constructor`**
        ```js
        // 不推荐直接访问 __proto__ 属性
        // arr.__proto__.constructor === Array; // true
        Object.getPrototypeOf(arr).constructor === Array // true
        // 或者
        arr.constructor === Array; // true
        ```

    - **`instanceof`**
        ```js
        arr instanceof Array; // true 一般不推荐使用
        ```

5. this 指向

    - 全局环境中的 this 指向全局对象(window)(ES5也是)

    - 函数中的 this，由调用函数的方式来决定

        + 如果函数是独立调用，在严格模式下，this 指向 `undefined`，而不是全局对象；非严格模式下，this 指向 `window`

        + 如果函数是被某个对象调用，那 this 指向被调用的这个对象。

    - 构造函数里的 this 及原型里的 this 对象，指向的都是生成的实例，即由 new 决定的

6. ***new的作用：***

    1. 创建一个新对象
    2. 将构造函数的 this 指向这个新对象
    3. 返回这个新对象

    实现 `new` 操作符方法

    ```js
    // 我们协商第一个参数传递我们需要生成实例的构造函数，
    // 构造函数需要的参数，后面依次传入即可
    function newFunc(Fn, ...args) {
        if (typeof Fn !== 'function') {
            throw new Error('The first param is not a function')
        }
        if (!Fn.prototype) {
            throw new Error('The function doesnot have the prototype property')
        }
        // 创建一个对象，并将它的隐式原型指向 构造函数 Fn 的原型
        const obj = Object.create(Fn.prototype)
        const res = Fn.call(obj, ...args)
        // const res = Fn.apply(obj, [...args])
        // 存在 Fn 函数自己返回一个对象（原型指向 Object.prototype)
        return (typeof res === 'object') ? res : obj
    }
    ```

## 原型、原型链

### 原型

> JavaScript 常被描述为一种**基于原型的语言 (prototype-based language)**——每个对象拥有一个**原型对象**，对象以其原型为模板、从原型继承方法和属性

> 所有的对象都是通过 `new 函数` 来创建的，<br>
> 即使是 `const arr = []` 的写法，本质上是通过 `new Array()` 来创建的；<br>
>  `function fn() {}` 的写法，本质上是通过 `new Function()` 来创建的；<br>
> 所有的函数，本质上也是对象

- <span style="color: red;font-weight: bold;">所有的函数「非箭头函数」</span>都有一个属性：`prototype`，它被称之为 **函数原型**
    - 默认情况下，`prototype` 是一个普通的 `Object` 对象
    - 函数原型里面有一个属性 `constructor`，默认情况下它指向 **构造函数本身**，如下：

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

> 对象的原型（可以通过 `Object.getPrototypeOf(obj)` 或者已被弃用的 `__proto__` 属性获得）与构造函数的 `prototype` 属性之间的区别是很重要的。前者是 **每个实例** 上都有的属性，后者是 **构造函数** 的属性

如下关系图所示：

![原型图解](/images/prototype.png)

### 原型链

> 原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推，这种关系常被称为**原型链 (prototype chain)**

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

- 获取对象的隐式原型：**`Object.getPrototypeOf(对象)`** （Object 对象的静态方法）

    ```js
    const person = new Person('Saul')

    // 获取 person 对象的 __proto__ 属性值
    // 得到的结果等价于： person.__proto__ 
    Object.getPrototypeOf(person)
    ```

- 判断当前对象是否在指定对象的原型链上：**`Object.prototype.isPrototypeOf(当前对象)`**

    ```js
    const person = new Person('Saul')
    const obj = {}
    const arr = []

    // Object原型是否在 person 实例的原型链上
    Object.prototype.isPrototypeOf(person) // true
    Array.prototype.isPrototypeOf(arr) // true
    // obj 是否在 person 实例的原型链上
    obj.isPrototypeOf(person) // false
    person.isPrototypeOf(obj) // false
    // 得到 obj 的隐式原型，这里即是 Object原型
    Object.getPrototypeOf(obj).isPrototypeOf(person) // true
    ```

- 判断某个对象的原型链上有没有目标函数的原型：**`对象 instanceof 函数`**

    ```js
    const obj = {}
    const arr = []

    obj instanceof Object // true
    arr instanceof Array // true 一般不推荐此方案
    ```

- 从指定原型去创建一个新对象：**`Object.create(原型)`**

    ```js
    const person = new Person('Saul')
    const obj = Object.create(person)

    // 则 person 实例是对象 obj 的原型
    person.isPrototypeOf(obj) // true
    // 那么 obj.__proto__ 就没有 constructor 属性了，但访问时会沿着
    // 原型链继续向上寻找，得到 Person 构造函数
    ```

- 判断对象是否具有自身的属性：**`Object.prototype.hasOwnProperty(属性名)`**

    ```js
    const person = new Person('Saul')
    const o = Object.create(person)
    person.hasOwnProperty('name')   //true
    o.hasOwnProperty('name')        // false

    // 我们在遍历对象时，也会循环出原型链上的属性
    o.age = 20
    o.city = 'Shenzhen'
    for (const prop in o) {
        // console.log(prop)
        // 这会打印出：
        // age, city, name

        // 我们如果加一层判断
        if (o.hasOwnProperty(prop)) {
            console.log(prop)
            // 只会打印出对象 o 自身的属性：
            // age, city
        }
    }
    ```

    > 在 Javascript 中， `属性` 由一个字符串类型的 `“名字”（name）` 和一个 `“属性描述符”（property descriptor）对象` 构成

    这里你会发现 原型链 上的属性有那么多，为什么 `for...in...` 循环遍历出来的属性却很少呢？这就跟 [属性描述符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 有关了

    我们知道 `vue2` 的响应式原理就是基于 `Object.defineProperty()` 来进行数据劫持的

    ```js
    Object.defineProperty(o, 'x', {
        value: 'x的值', // 与 get & set 不能同时存在
        writable: false, // 当前属性是否可以被重写覆盖
        configurable: false, // 当前属性是否可以重新配置，是否能被删除
        enumerable: false, // 当前属性是否可被枚举（也就是能否被遍历出来）
        get() {},
        set(val) {}
    })
    ```

    我们可以通过 **`Object.getOwnPropertyDescriptor(obj, prop)`** 来获取目标对象 `(obj)` 目标属性 `(prop)` 的 `属性描述符对象`

#### 应用

- 类数组转换为真数组：**`Array.prototype.slice.call(类数组)`**，ES6 新增 **`Array.from()`** 也可以实现

    ```js
    const nodeList = document.getElementsByTagName('*')
    const nodeArr = Array.prototype.slice.call(nodeList)
    Array.isArray(nodeList) // false
    Array.isArray(nodeArr)  // true
    ```

- ES5 实现 **继承** （ES6 有 `class ... extends`）：

    ```js
    function inherit (Son, Father) {
        // 以父级原型创建对象
        Son.prototype = Object.create(Father.prototype)
        // 将子类原型 constructor 指向 子类（子函数）
        Son.prototype.constructor = Son
        // 添加 uber 属性，方便访问父类原型
        Son.prototype.uber = Father.prototype
        // 或者与大家协商，改写为：
        // Son.prototype.uber = Father
        // 方便子类调用 this.uber() 来初始化，而不用手动调用 父类.call
    }

    // 旧版的继承实现方案
    /**
     * const inherit = (function() {
     *    // 通过闭包声明一个可重用的空函数
     *    const F = function () {}
     *    return function (Son, Father) {
     *         F.prototype = Father.prototype
     *         Son.prototype = new F()
     *         Son.prototype.constructor = Son
     *         Son.prototype.uber = Father.prototype
     *    }
     * }())
    */
    // 使用
    // User 类
    function User(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.fullName = this.firstName + ' ' + this.lastName
    }
    User.prototype.sayHello = function() {
        console.log(`Hello! 我是${this.fullName}, 今年${this.age}岁`)
    }
    // VipUser 类
    function VipUser(firstName, lastName, age, money) {
        // this.firstName = firstName
        // this.lastName = lastName
        // this.age = age
        // this.fullName = this.firstName + ' ' + this.lastName
        // 为避免上述重复代码的书写，我们可以使 VipUser 继承自 User
        User.call(this, firstName, lastName, age)
        this.money = money
    }

    inherit(VipUser, User) // 先继承，再添加自定义原型方法

    VipUser.prototype.upgrade = function() {
        this.money -= 10
        console.log('已升级，消耗 ¥10')
    }
    const u = new User('S', 'K', 20)
    const vUser = new VipUser('Saul', 'K', 20, 100)
    u.sayHello() // ...
    u.upgrade() // ... is not a function
    vUser.sayHello() // ...
    vUser.upgrade() // 已升级，消耗 ¥10
    ```

## 函数柯里化

```js
/**
 * @description: 通用柯里化工具函数
 * @param {Function} fn 待柯里化的函数
 * @param {array} args 已经接收的参数列表
 * @return {Function}
 */
const currying = function(fn, ...args) {
  // fn需要的参数个数
  const len = fn.length
  // 返回一个函数接收剩余参数
  return function (...params) {
      // 拼接已经接收和新接收的参数列表
      const _args = [...args, ...params]
      // 如果已经接收的参数个数还不够，继续返回一个新函数接收剩余参数
      if (_args.length < len) {
          return currying.call(this, fn, ..._args)
      }
     // 参数全部接收完调用原函数
      return fn.apply(this, _args)
  }
}

function add(a, b, c, d) {
  return a + b + c + d
}

const curryingAdd = currying(add)

// 我们就可以像下面这种方式进行调用
// 参数不够的情况下，执行结果的返回值还是一个函数
curryingAdd(1)(2)(3)(4) // => 10
curryingAdd(1, 2)(3)(4) // => 10
curryingAdd(1, 2, 3)(4) // => 10
```
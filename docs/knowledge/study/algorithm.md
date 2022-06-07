---
title: Summary of Interview Algorithm
---

## 面试所遇算法题目小结

### 1. 括号字符串匹配：

```js
// 实现一个 isMatch 函数，输入字符只有 '()[]{}' 三种括号字符之中的若干项，
// 要求括号成对匹配且左右顺序不可颠倒
// 示例及预期结果：
// '(([]))' // true
// '()[]{}(())' // true
// '())([]()' // false

// 实现方案如下：
const isMatch = (str) => {
  if (typeof str !== "string" || str.length % 2 === 1) {
    return false;
  }
  const brackets = new Map([
    ["(", 1],
    ["[", 1],
    ["{", 1],
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  const resMap = new Map([
    ["(", 0],
    ["[", 0],
    ["{", 0],
  ]);

  for (const item of str) {
    // 左半括号 => 左括号统计数 +1 '(' / '[' / '{'
    if (brackets.get(item) === 1) {
      resMap.set(item, resMap.get(item) + 1);
      continue;
    }
    // 右半括号 ')' / ']' / '}'
    const lastNum = resMap.get(brackets.get(item));
    // 左括号统计数为 0，则匹配失败
    if (lastNum === 0) return false;
    // 否则，左括号统计数 -1
    resMap.set(brackets.get(item), lastNum - 1);
  }
  return (
    resMap.get("(") === 0 && resMap.get("[") === 0 && resMap.get("{") === 0
  );
};
console.log("()[(]()): ", isMatch("()[(]())")); // 交叉情况则也会返回 true
// 测试结果达到预期（欢迎提出新解法）

// LeetCode 第 20 题说明是不允许括号有交叉的情况，即 '[(])' 为 false，则实现如下：
const isMatch = (str) => {
  if (typeof str !== "string" || str.length % 2 === 1) {
    return false;
  }
  const brackets = new Map([
    ["(", 1],
    ["[", 1],
    ["{", 1],
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];
  for (const item of str) {
    const matchedItem = brackets.get(item);
    // 左半括号 => 入栈
    if (matchedItem === 1) {
      stack.unshift(item);
      continue;
    }
    const top = stack[0]; // 栈顶项 ['(', '[']
    // 右半括号 => 栈内无左括号 || 栈顶项与右括号不匹配
    if (top === undefined || matchedItem !== top) {
      return false;
    }
    // 否则，左括号出栈
    stack.shift();
  }
  return stack.length === 0;
};
```

### 2. 数字对称判定

```js
// 如数字 3，121，12321 成左右对称（在不转换类型的情况下，实现数字的对称判定）
// 初始拿到这几个举例数字时，就直接想的是个位数单独判定，
// 另外的开方再判定结果是不是整数不就行了吗？
// 但比如 11, 123321 这种就不适用了
// 回文数，实现如下（TypeScript）：
const isPalindrome = (n: number) => {
  // 负数或个位为 0 的数字不可能对称
  if (n < 0 || (n % 10 === 0 && n !== 0)) return false;
  let revertedNumber: number = 0;
  while (n > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (n % 10);
    n = ~~(n / 10); // 取整
  }
  return n === revertedNumber || n === ~~(revertedNumber / 10);
};
```

### 3. 字符串解析编译

```js
// 描述：给定字符串如：'a[2]bc[3](def)[4]((g[2]h)[1]i)[2]'
// 通过函数实现编译解析，输出：'aabcccdefdefdefdefgghigghi'，不可使用正则表达式
// 即：[] 中数字表示其重复次数，小括号表示一个整体，存在多层嵌套的情况
// 提升：[] 中的数字可以是计算表达式，如：'a[1+2*10]'

// 初步实现方案如下 (部分实现)：
const compileStr = (str: string) => {
  // TODO ...
  if (typeof str !== "string" || str.length === 0) return "";
  const stack = [];
  let res = "" /* 最终结果字符串 */,
    cache = "" /* 中间缓存字串 */,
    num = 0 /* 重复次数 */,
    level = 0; /* 记录成组数 */
  for (const char of str) {
    if (char === "(") {
      cache = "";
      level++;
    } else if (char === ")") {
      // 一个组结束
      level--;
    } else if (char === "[") {
      // 后续是重复次数
      stack.push(cache);
      cache = "";
    } else if (char === "]") {
      // 一个组的重复次数结束
      if (level === 0) {
        res += stack.join("").repeat(num);
      } else {
        cache += stack.join("").repeat(num);
      }
      stack.length = 0;
      num = 0; // 计数置0
    } else if (!isNaN(char)) {
      // 是数字字符
      num = num * 10 + Number(char); // 数字可能不只是个位数重复
    } else {
      // 普通字符
      if (cache !== "") {
        // 前一个是普通字符
        if (level === 0) {
          // 没有分组
          res += cache;
          cache = char;
        } else {
          // 已有分组
          cache += char;
        }
      } else {
        cache = char;
      }
      // 有成组的字符
    }
  }
  return res;
};

const str1 = "a[2]bc[3](def)[4]((g[2]h)[1]i)[2]"; // √
console.log("a[2]bc[3](def)[4]((g[2]h)[1]i)[2]: ", compileStr(str1));
const str2 = "a[2]bc[3]"; // √
console.log("a[2]bc[3]: ", compileStr(str2));
const str3 = "a[2]bc[3](def)[4]"; // aabcccdefdefdefdef // √
console.log("a[2]bc[3](def)[4]: ", compileStr(str3));
const str4 = "(a[2]bc[3])[3](def)[4]"; // aabcccaabcccaabcccdefdefdefdef // ×
console.log("(a[2]bc[3])[3](def)[4]: ", compileStr(str4)); // 此结果尚还不对，待做......
```

### 4. 斐波那契数列

```js
// 传入一个非负整数，获取斐波那契数列该项的值，并优化
// 方案一（简单递归实现，存在调用栈内存溢出问题）：
const recursionFib = (n: number) => {
  if (n < 0) {
    throw new Error(
      "The required parameters must be non-negative integers."
    );
  }
  if (n === 0 || n === 1) return n;
  return recursionFib(n - 1) + recursionFib(n - 2);
};

// 方案二（缓存优化）：
const cacheFib = (function () {
  const cacheArr: number[] = [0, 1];
  return function (n: number) {
    if (n < 0) {
      throw new Error(
        "The required parameters must be non-negative integers."
      );
    }
    if (cacheArr[n] !== undefined) {
      return cacheArr[n];
    }
    for (let i = 2; i <= n; i++) {
      cacheArr[i] = cacheArr[i - 1] + cacheArr[i - 2];
    }
    return cacheArr[n];
  };
})();

// 方案三（动态规划）：
const dynamicFib = (n: number) => {
  if (n < 0) {
    throw new Error(
      "The required parameters must be non-negative integers."
    );
  }
  let current = 0;
  let next = 1;
  while (n-- > 0) {
    [current, next] = [next, current + next];
  }
  return current;
};

// 方案四（ES6尾调用优化）：
("use strict"); // 必须开启严格模式
const tailCallFib = (n: number, current = 0, next = 1) => {
  if (n < 0) {
    throw new Error(
      "The required parameters must be non-negative integers."
    );
  }
  if (n === 0) return 0;
  if (n === 1) return next;
  return fibonacci(n - 1, next, current + next);
};
```

### 5. 遍历二叉树

```js
// 例如，遍历二叉树，示例结构如下：
const testData = {
  value: 1,
  left: {
    value: 2,
    right: {
      value: 4,
    },
  },
  right: {
    value: 3,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  },
};
// 输出根节点到叶子节点：[[1, 2, 4], [1, 3, 5], [1, 3, 6]]
```

### 6. 找出数组中第 k 大的和第 m 大的数字相加之和

```js
/* 描述：
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m);
 *   第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 * */
function findTopSum(arr, k, m) {
  const temp = Array.from(new Set(arr)); // 数组去重
  temp.sort((a, b) => b - a); // 去重之后的数组从大到小进行排序
  const len = temp.length;
  if (m > len || k > len) return;
  const max = temp[k - 1]; // 第 k 大 = 1 => temp[0]
  const min = temp[m - 1]; // 第 m 大 = 3 => temp[2]
  let num = 0;
  // 遍历原数组
  arr.forEach((item) => {
    if (item === max || item === min) {
      num += item;
    }
  });
  return num;
}
```

### 7. 实现一个方法 addJoin

```js
/**
 * 描述：
 * 实现一个方法 addJoin(arr, condition)
 * 合并满足条件的项
 * 示例：
 *      let arr = [1, 2, 3, 4, 5]
 *      addJoin(arr, item => item !== 3); // [[1, 2], 3, [4, 5]]
 *      addJoin(arr, item => item < 3); // [[1, 2], 3, 4, 5]
 * */
function addJoin(arr, condition) {
  const len = arr.length;
  if (len === 0) return [];
  arr.sort((a, b) => a - b); // 升序排序
  const res = [];
  const tempArr = [];
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    if (condition(item)) {
      tempArr.push(item);
    } else {
      if (tempArr.length > 0) {
        res.push([...tempArr]);
        tempArr.length = 0;
      }
      res.push(item);
    }
  }
  if (tempArr.length > 0) {
    res.push([...tempArr]);
    tempArr.length = 0;
  }
  return res;
}
```

### 8. 实现一个方法 EatMan

```js
// 分别输出如下：
// 1. EatMan('Hank')
//     Hi! This is Hank!
// 2. EatMan('Hank').eat('dinner').eat('supper')
//     Hi! This is Hank!
//     Eat dinner~
//     Eat supper~
// 3. EatMan('Hank').eat('dinner').eatFirst('lunch')
//     Eat lunch~
//     Hi! This is Hank!
//     Eat dinner~
// 4. EatMan('Hank').eat('dinner').eatFirst('lunch').eatFirst('breakfast')
//     Eat breakfast~
//     Eat lunch~
//     Hi! This is Hank!
//     Eat dinner~

function EatMan(name) {
  return new _EatMan(name); // 返回一个实例
}

class _EatMan {
  constructor(name) {
    this.tasks = [];
    this.tasks.push({
      type: "EatMan",
      name,
    });
    this.next();
  }
  eat(thing) {
    this.tasks.push({
      type: "eat",
      name: thing,
    });
    return this; // 要实现链式调用的效果，则必须返回当前实例
  }
  eatFirst(thing) {
    this.tasks.unshift({
      type: "eatFirst",
      name: thing,
    });
    return this;
  }
  next() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.runTask();
    }, 0);
  }
  runTask() {
    this.tasks.forEach((task) => {
      switch (task.type) {
        case "EatMan":
          console.log(`Hi! This is ${task.name}!`);
          break;
        default:
          console.log(`Eat ${task.name}~`);
          break;
      }
    });
  }
}
```

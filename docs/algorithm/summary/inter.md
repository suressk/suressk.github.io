---
title: Summary of Interview Algorithm
---

> 面试所遇算法题目小结

## 1. 括号字符串匹配：

```ts
// 对应 LeetCode 第 20 题
// 实现一个 isMatch 函数，输入字符只有 '()[]{}' 三种括号字符之中的若干项，
// 要求括号成对匹配且左右顺序不可颠倒
// 不允许括号有交叉的情况，即 '[(])' 为 false
// 示例及预期结果：
// '(([]))' // true
// '()[]{}(())' // true
// '())([]()' // false
```

:::details code

```ts
// 实现方案如下：
const isMatch = (str) => {
  if (typeof str !== 'string' || str.length % 2 === 1) {
    return false;
  }
  // 直接用普通 对象 也可以
  const brackets = new Map([
    ['(', 1],
    ['[', 1],
    ['{', 1],
    [')', '('],
    [']', '['],
    ['}', '{'],
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

:::

## 2. 数字对称判定

```ts
// 如数字 3，121，12321 成左右对称（在不转换类型的情况下，实现数字的对称判定）
// 初始拿到这几个举例数字时，就直接想的是个位数单独判定，
// 另外的开方再判定结果是不是整数不就行了吗？
// 但比如 11, 123321 这种就不适用了
```

:::details code

```ts
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

:::

## 3. 字符串解析编译

```ts
// 描述：给定字符串如：'a[2]bc[3](def)[4]((g[2]h)[1]i)[2]'
// 通过函数实现编译解析，输出：'aabcccdefdefdefdefgghigghi'，不可使用正则表达式
// 即：[] 中数字表示其重复次数，小括号表示一个整体，存在多层嵌套的情况
// 提升：[] 中的数字可以是计算表达式，如：'a[1+2*10]'
```

:::details code

```ts
// 递归+栈实现，支持嵌套和表达式
const compileStr = (str: string): string => {
  if (typeof str !== 'string' || str.length === 0) return '';

  // 解析表达式（安全起见仅允许数字和+ - * / 空格）
  function safeEval(expr: string): number {
    if (!/^[-+*/\d\s]+$/.test(expr)) throw new Error('Invalid expression');
    // eslint-disable-next-line no-eval
    return Function('return ' + expr)();
  }

  function parse(s: string, i: { value: number }): string {
    let res = '';
    while (i.value < s.length) {
      const char = s[i.value];
      if (char === '(') {
        i.value++;
        const group = parse(s, i);
        // 处理 group 后面可能跟 [num]
        if (s[i.value] === '[') {
          i.value++;
          let expr = '';
          while (i.value < s.length && s[i.value] !== ']') {
            expr += s[i.value++];
          }
          i.value++; // 跳过 ]
          const repeat = safeEval(expr);
          res += group.repeat(repeat);
        } else {
          res += group;
        }
      } else if (char === ')') {
        i.value++;
        return res;
      } else if (char === '[') {
        // 只重复最后一个字符或分组
        let last = '';
        if (res.length > 0) {
          last = res[res.length - 1];
          res = res.slice(0, -1);
        }
        i.value++;
        let expr = '';
        while (i.value < s.length && s[i.value] !== ']') {
          expr += s[i.value++];
        }
        i.value++; // 跳过 ]
        const repeat = safeEval(expr);
        res += last.repeat(repeat);
      } else {
        res += char;
        i.value++;
      }
    }
    return res;
  }

  return parse(str, { value: 0 });
};

// 测试用例
const str1 = 'a[2]bc[3](def)[4]((g[2]h)[1]i)[2]';
console.log(`${str1}:`);
console.log(`实际输出：${compileStr(str1)}`);
console.log(`预期输出：aabcccdefdefdefdefgghigghi\n`);

const str2 = 'a[2]bc[3]';
console.log(`${str2}:`);
console.log(`实际输出：${compileStr(str2)}`);
console.log(`预期输出：aabccc\n`);

const str3 = 'a[2]bc[3](def)[4]';
console.log(`${str3}:`);
console.log(`实际输出：${compileStr(str3)}`);
console.log(`预期输出：aabcccdefdefdefdef\n`);

const str4 = '(a[2]bc[3])[3](def)[4]';
console.log(`${str4}:`);
console.log(`实际输出：${compileStr(str4)}`);
console.log(`预期输出：aabcccaabcccaabcccdefdefdefdef\n`);

// 进阶测试（支持表达式）
const str5 = 'a[1+2]b[2*3]c';
console.log(`${str5}:`);
console.log(`实际输出：${compileStr(str5)}`);
console.log(`预期输出：aaabbbbbbc\n`);
```

:::

## 4. 斐波那契数列

```ts
// 传入一个非负整数，获取斐波那契数列该项的值，并优化
```

:::details code

```ts
// 方案一（简单递归实现，存在调用栈内存溢出问题）：
const recursionFib = (n: number) => {
  if (n < 0) {
    throw new Error('The required parameters must be non-negative integers.');
  }
  if (n === 0 || n === 1) return n;
  return recursionFib(n - 1) + recursionFib(n - 2);
};

// 方案二（缓存优化）：
const cacheFib = (function () {
  const cacheArr: number[] = [0, 1];
  return function (n: number) {
    if (n < 0) {
      throw new Error('The required parameters must be non-negative integers.');
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
    throw new Error('The required parameters must be non-negative integers.');
  }
  let current = 0;
  let next = 1;
  while (n-- > 0) {
    [current, next] = [next, current + next];
  }
  return current;
};

// 方案四（ES6尾调用优化）：
('use strict'); // 必须开启严格模式
const tailCallFib = (n: number, current = 0, next = 1) => {
  if (n < 0) {
    throw new Error('The required parameters must be non-negative integers.');
  }
  if (n === 0) return 0;
  if (n === 1) return next;
  return tailCallFib(n - 1, next, current + next);
};
```

:::

## 5. 遍历二叉树

```ts
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

:::details code

```ts
interface TreeNode {
  value: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

// 递归方案
function pathToLeaves(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  function dfs(node: TreeNode | null, path: number[]) {
    if (!node) return;

    // 添加当前节点值
    path.push(node.value);

    // 如果是叶子节点，保存路径
    if (!node.left && !node.right) {
      result.push([...path]);
    } else {
      // 继续遍历左右子树
      dfs(node.left, path);
      dfs(node.right, path);
    }

    // 回溯
    path.pop();
  }

  dfs(root, []);
  return result;
}

// 迭代方案（使用栈）
function pathToLeaves(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const stack: [TreeNode, number[]][] = [[root, [root.value]]];

  while (stack.length > 0) {
    const [node, path] = stack.pop()!;

    // 叶子节点
    if (!node.left && !node.right) {
      result.push(path);
      continue;
    }
    // 子节点
    if (node.right) {
      stack.push([node.right, [...path, node.right.value]]);
    }
    if (node.left) {
      stack.push([node.left, [...path, node.left.value]]);
    }
  }

  return result;
}
```

:::

## 6. 找出数组中第 k 大的和第 m 大的数字相加之和

```ts
/* 描述：
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m);
 *   第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 * */
```

:::details code

```ts
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

:::

## 7. 实现一个方法 addJoin

```ts
/**
 * 描述：
 * 实现一个方法 addJoin(arr, condition)
 * 合并满足条件的项
 * 示例：
 *   let arr = [1, 2, 3, 4, 5]
 *   addJoin(arr, item => item !== 3); // [[1, 2], 3, [4, 5]]
 *   addJoin(arr, item => item < 3); // [[1, 2], 3, 4, 5]
 * */
```

:::details code

```ts
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
      continue;
    }
    if (tempArr.length > 0) {
      res.push([...tempArr]);
      tempArr.length = 0;
    }
    res.push(item);
  }
  if (tempArr.length > 0) {
    res.push([...tempArr]);
    tempArr.length = 0;
  }
  return res;
}
```

:::

## 8. 实现一个方法 EatMan

```ts
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
```

:::details code

```ts
function EatMan(name) {
  return new _EatMan(name); // 返回一个实例
}

class _EatMan {
  constructor(name) {
    this.tasks = [];
    this.tasks.push({
      type: 'EatMan',
      name,
    });
    this.next();
  }
  eat(thing) {
    this.tasks.push({
      type: 'eat',
      name: thing,
    });
    return this; // 要实现链式调用的效果，则必须返回当前实例
  }
  eatFirst(thing) {
    this.tasks.unshift({
      type: 'eatFirst',
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
        case 'EatMan':
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

:::

## 9. 找出趋近 limit 的值

```ts
/*
  给定一个数组 arr，里面只含 0~9 不重复的数字
  给定一个 limit 值
  实现一个方法，返回用数组中数字可以组成的小于 limit 值的最大值
  例：
  arr = [2, 9, 4, 5]
  limit = 22221 => 返回：9999
  limit = 22212 => 返回：9999
  limit = 59996 => 返回：59995
  limit = 25218 => 返回：24999
*/
```

:::details code

```ts
TODO～
```

:::

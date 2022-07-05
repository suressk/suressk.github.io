---
title: 认识复杂度与简单排序
layout: cover
background: https://sli.dev/demo-cover.png
---

## 认识时间复杂度

常数操作：一个操作如果和样本的数据量没有关系，每次都是固定时间内完成的操作

常数时间 O(1) 代表这个操作和数据量没关系，是一个固定时间的操作，比如说四则运算（`+`、`-`、`*`、`/`）或位运算（`&`、`|`、`~`、`^`、`<<`、`>>`）等

**`在描述时间复杂度的表达式中，只要最高阶项，不要低阶项及高阶项的系数，即为该算法的时间复杂度`**

比如我们初中接触过的一元二次方程的表达式：

```ts
// 最终化简结果为
aN^2 + bN + c

// a, b, c 都是常数
```

对这个栗子，我们使用 `O(N^2)` 来表示此算法的时间复杂度（读作：`Big O N 的平方`）

评价一个算法流程的好坏，先看时间复杂度的指标（`O(N^2)` 与 `O(N)` 比较），然后再分析不同数据样本下的实际运行时间（如两个算法分析得到的时间复杂度均为 `O(N)` 时，就需要实际运行结果来区分了）

## 空间复杂度

与上面的意思一致，假如我们只需要有限的几个变量需要申请存储空间，与样本数据量无关时，我们称其空间复杂度为 `O(1)`

若类似需要额外开辟跟样本数据一样大小的内存空间来实现算法功能，我们则称其空间复杂度为 `O(N)`

## 位运算

既然上面提到了位运算，这里就简单讲讲吧：

- `&`：（`与`）两个位都为 1 时，结果才为 1，其余为 0
- `|`：（`或`）两个位都为 0 时，结果才为 0，其余为 1
- `~`：（`非`）取反，0 变 1，1 变 0
- `^`：（`异或`）两个位相同为 1（同为 0 或同为 1），不同则为 0（`无进位相加`）
- `<<`：各二进位全部左移若干位，高位丢弃，低位补 0
- `>>`：各二进位全部右移若干位，对无符号数，高位补 0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补 0（逻辑右移）

```ts
10 << 1

// 10 转换为二进制数为：1010，<< 1 表示左移一位
// 即变为：10100，转换为十进制即为：20
// 同样可以把左移看作以下公式：a * (2 ^ b)
// 10 << 1 = 10 * (2 ^ 1) = 20

11 >> 1 // 10 >> 1 的结果同样是 5

// 11 转换为二进制数为：1011，>> 1 表示右移一位，
// 并去除多余的右边，即变为：101，转换为十进制即为：5
// 同样可以把右移看作以下公式：~~(a / (2 ^ b))
// 11 >> 1 = ~~(11 / (2 ^ 1)) = 5
```

## 面试题练手

> 在一个数组（`arr: number[]`）中，<br/> > `问题1`：已知其中一种数出现了奇数次，其他数出现了偶数次，求这个出现奇数次的数是啥？<br/> > `问题2`：已知其中两种数出现了奇数次，其他数出现了偶数次，求这两个出现奇数次的数是啥？<br/>
> 要求：时间复杂度为 `O(N)`，空间复杂度为 `O(1)`

```ts
// 有上面的铺垫，我们可以知道问题1很简单，
// 直接将数组中的数全部一起进行 异或运算，最后的结果就是这个数
function resolveOne(arr: number[]) {
  if (!arr || !Array.isArray(arr) || arr?.length = 0) {
    throw new Error(`The array is of the wrong type or
      the array is empty!`)
  }
  let eor = 0
  arr.forEach(item => {
    eor ^= item
    // 上面是下面的简写语法（应该都看得懂）
    // eor = eor ^ item
  })
  return eor
}
```

```ts
// 问题2，我们需要借助无进位相加的思想来方便理解
// 转换为二进制来看时，异或运算计算时，只看对应位上 1 的个数有关
// 这一位上出现奇数个 1，最后结果这位上就是 1，否则为 0
function resolveTwo(arr: number[]) {
  if (!arr || !Array.isArray(arr) || arr?.length === 0) {
    throw new Error(`The array is of the wrong type or the array is empty!`)
  }
  let eor = 0,
    onlyOne = 0
  // 首先，还是得像问题1一样全部进行异或运算
  // 得到这两个出现奇数次的数（假设为 a, b）的异或结果
  arr.forEach(cur => {
    eor ^= cur
  })
  // 此时得到的 eor = a ^ b
  // 且 eor !== 0
  // 那么在转换为二进制时，eor 必然有一个位置上的值为 1

  // 那么 a, b 两数在这一位上必然是不同的，我们就能得到其中一个

  // 提取出 eor 二进制数最右的 1
  let rightOne = eor & (~eor + 1)
  // 我们不妨假设 eor 为：100101100
  // 那 rightOne 为：100101100 & (011010011 + 1) = 0000000100
  arr.forEach(cur => {
    // 括号别丢，否则运算顺序错误会导致结果异常
    // rightOne 仅为最右侧数为 1（二进制）
    // 两个奇数次的数在这一位上：一个为 0，另一个数一定为 1
    // 由 & 操作特性我们得到结果为 0 的数一定是其中一个出现奇数次的数
    if ((cur & rightOne) === 0) {
      // 得到 a 或者 b 其中一个
      onlyOne ^= cur
    }
  })
  // 得到 a 或者 b 的另一个
  eor ^= onlyOne
  return [eor, onlyOne]
}
```

## 选择排序

先简单理解一下思路吧：

```js
// 比如说有一个无序数组，我们需要实现升序排列
[4, 2, 6, 3, 8, 9, 0, 1, 5, 7]

// 简单选择排序的思路就是，从左往右扫（右往左也行）
// 找到最小的值，将它放到最左侧记录到的最小值位置

// 简单说明如下：
[4, 2, 6, 3, 8, 9, 0, 1, 5, 7]
 ↑  ↑
 i  j

i: 记录当前最小值索引
j: 从 i 的下一位开始依次往后扫到数组结束，找到
   比当前 i 位置上的值小的值，进行交换
```

示例实现代码如下：

```ts
function selectSort(arr: number[]) {
  if (!arr || arr?.length < 2) return

  const len = arr.length
  // i 从 0 → N-1
  for (let i = 0; i < len - 1; i++) {
    // j 从 i+1 → N
    for (let j = i + 1; j < len; j++) {
      // j 位置上的小
      if (arr[j] < arr[i]) {
        // 两数交换
        swap(arr, i, j)
      }
    }
  }
  console.log('after sort: ', arr)
}

// 交换 arr 数组中 i，j 位置上的数
function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
```

从上面的示例代码，我们看到需要两层 `for` 循环，从时间复杂度上分析需要 `O(N^2)` （常数操作为 等差数列 求和），空间复杂度为 `O(1)`

## 冒泡排序

简单说明：

```ts
// 还是上面的示例无序数组，依旧升序排
[4, 2, 6, 3, 8, 9, 0, 1, 5, 7]

// 依次比较索引位置上的数
// 1. 0 与 1 位置上的数比较，大的往后移
// 2. 1 与 2 位置上的数比较，大的往后移
// 3. 2 与 3 位置上的数比较，大的往后移
// 4. 3 与 4 位置上的数比较，大的往后移
// 依次进行比较（效果上来看就是，大的数会逐渐往后冒，直到排好序）
```

示例实现代码如下：

```ts
function bubbleSort(arr: number[]) {
  if (!arr || arr?.length < 2) return

  const len = arr.length
  // i 从 N → 1
  for (let i = len - 1; i > 0; i--) {
    // j 从 0 → i
    for (let j = 0; j < i; j++) {
      // j 位置与 j+1 位置上的值比较，大的后移
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  console.log('after sort: ', arr)
}

// 交换 arr 数组中 i，j 位置上的数
function swap(arr: number[], i: number, j: number) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
  // 解构语法
  // [arr[i], arr[j]] = [arr[j], arr[i]]
}
```

从上面的示例代码，我们看到还是需要两层 `for` 循环，从时间复杂度上分析需要 `O(N^2)`，空间复杂度为 `O(1)`

另外，可能你会注意到这里的 `swap` 方法好像有点 **黑魔法** 的意思！！！

这里也就是巧用了 `异或运算`（`^`）的性质达到了两数交换的效果

我们可能在学校里学习过异或运算：即 `相同为 0，不同为 1`，举个栗子：

```ts
// 二进制数进行异或运算
01001001 ^ 11010101

// 我们写得好看一点就是：
  01001001
^ 11010101
-----------
  10011100
```

其实按另一种更简单的理解就是 **`无进位相加`**

但它还有一些性质：

> 1. 0 与任何数异或，结果都是这个数：`0 ^ N = N`
> 2. 对于任意一个数 N 与它自己异或（包括六亲不认的 `NaN`），结果为 0：`N ^ N = 0`
> 3. 异或运算满足数学的 `交换律` 和 `结合律`：`a ^ b ^ c ^ d = a ^ (b ^ d) ^ c`

由上面这些性质描述，我们解释一下上面的 黑魔法 `swap` 方法

```ts
// 我们假设
let a = 甲
let b = 乙

// 跑这三行代码，a, b 的值互换
// 这里我们带入值并运用上面的性质就一目了然了
a = a ^ b // a = 甲 ^ 乙
b = a ^ b // b = (甲 ^ 乙) ^ 乙 → b = 甲
a = a ^ b // a = (甲 ^ 乙) ^ (甲 ^ 乙 ^ 乙) → a = 乙
```

**注意：** 上面的 `a`，`b` 必须得是内存中两块不同的区域（值可以相同，但内存不能是同一块，否则会把它抹为 0）

## 插入排序

时间复杂度 `O(N^2)`（算法流程按最差情况来估计时间复杂度），空间复杂度 `O(1)`

与数据状况有关，会优于 `冒泡排序` 与 `选择排序`（最好情况是 `O(N)`，最差是 `O(N^2)`）

> 思路：
>
> 1. 索引从 0 到 n - 1，依次将第 n - 1 位的数依次与前一个数比较，小于前一个数，则交换
> 2. 交换后，记载索引位前移一位（此时为：n-2），再将它与前一个比较，依次类推
> 3. 则依次排列：0 ～ 1 索引位，0 ～ 2 索引位，0 ～ 3 索引位... 直到 0 ～ n-1 上有序则结束

```ts
// 实现
const arr = [4, 2, 6, 3, 8, 9, 0, 1, 5, 7]

function insertSort(arr: number[]) {
  if (!arr || !Array.isArray(arr) || arr?.length === 0) {
    throw new Error(`The array is of the wrong type or the array is empty!`)
  }
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1) // 此方法见上面的实现
    }
    // 或者这样：
    // for (let j = i - 1; j >= 0; j--) {
    //   if (arr[j] > arr[j + 1]) {
    //      swap(arr, j, j + 1)
    //   }
    // }
  }
  console.log('after sort: ', arr)
}
```

## 二分法

在一个 **有序** 数组中，查找某个数是否存在，普通遍历时间复杂度为 `O(N)`，二分法的时间复杂度为 `O(logN)`

二分法：每次对数组中的数据进行对半拆分，比较要查找的这个数与中间数（对半分的位置数）的大小，则可在剩下的一半数据中继续此操作，找到则返回 `true`（可能无需二分完全结束）

> 对于二分法极小几率存在的求中间点索引计算，常规计算为：<br/> > `~~((leftIdx + rightIdx) / 2)`<br/>
> 极小几率存在越界的问题（比如 `rightIdx` 为临界值，`(leftIdx + rightIdx)` 刚好超过最大值）， 那么我们可以换一种求值方案：<br/> > `~~(leftIdx + (rightIdx - leftIdx) / 2)`<br/>
> 另外再进一步可以写为：`leftIdx + ((rightIdx - leftIdx) >> 1)`

**变式：**

1. 在一个有序数组中，查找 `>= 某个数` 最左侧的位置（需要完全二分结束才能判定）
2. `局部最小值` 问题
   > 某个 `无序数组` 中，相邻的数一定 **`不相等`**，当存在 `N` 位置上的数小于 `N-1` 和 `N+1` 位置上的数时，那么这个第 `N` 位上的数即为我们要找的局部最小数，要求时间复杂度小于 `O(N)`

```js
思路：
1. 首先看 arr[0]、arr[n-1] 的值与其相邻数的比较结果，
   若存在 arr[0] 或 arr[n-1] 的数小，则直接返回这其中一个即可
2. 若二者均大于相邻数（即：arr[0] > arr[1], arr[n-1] > arr[n-2]），
   那么 0～N-1 范围内必定存在一个拐点（也就是局部最小值）
3. 根据这点，我们开始二分查找（记中间数拆分点索引为 m，比较
   arr[m-1], arr[m], arr[m+1]）；判断 0～m 或者 m～n-1 区间上的情况
   若与第 2 步一样，则继续二分
```

算法优化思路：`数据状况特殊` or `求解的问题特殊`

## 对数器

> 有一个你想要测的方法 a
>
> 1. 实现一个绝对正确但是复杂度不好的方法 b
> 2. 实现一个随机样本产生器
> 3. 实现比对的方法
> 4. 把方法 a 和方法 b 比对很多次来验证方法 a 是否正确
> 5. 如果有一个样本使得比对出错，打印样本分析是哪个方法出错，当样本数量很多时比对测试依然正确，可以确定方法 a 已经正确

如下示例所示：

```ts
// 比如说你用 插入排序 实现的方法 insertSort 是我们说的方法 a
// Array.prototype.sort 为 js 内部实现的排序算法，就是我们说的算法 b
function insertSort(arr: number[]) {
  // ... 插入排序实现代码
}

// 得到 [min, max] 区间上的随机整数
function getRamdomInteger(min: number = 0, max: number = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// 得到随机长度的随机数
function generateRandomArr(maxLength = 0, minValue = 0, maxValue = 10) {
  const arr = new Array(maxLength)
  for (let i = 0; i < maxLength; i++) {
    arr[i] = getRamdomInteger(minValue, maxValue)
  }
}

function testFn() {
  const testTimes = 500000
  const maxLength = 100
  const minValue = -100
  const maxValue = 100
  let succeed = true
  for (let i = 0; i < testTimes; i++) {
    const arr1 = generateRandomArr(maxLength, minValue, maxValue)
    // 这里直接用扩展运算符复制一份（这里只是一维数组）
    const arr2 = [...arr1]
    insertSort(arr1) // 插入排序 arr1，假设是升序排序
    arr2.sort((a, b) => a - b) // 升序
    if (!isEqual(arr1, arr2)) {
      succeed = false
      break
    }
  }
  console.log(succeed ? 'Good job!' : 'Looks like something wrong~~')
}

function isEqual(originArr: number[], targetArr: number[]) {
  // 简便比较两个数组排序结果是否一致，直接转成字符串比较就好
  return originArr.join(',') === targetArr.join(',')
}

testFn() // 执行看结果如何
```

## 递归行为与其时间复杂度估算

举个 🌰：我们有一个数组，我们要得到其中的最大数，当然实现方案有很多，单纯遍历比较就可以，我们这里用一个递归方案实现一下：

```ts
function getMaxNum(arr: number[]) {
  return process(arr, 0, arr.length - 1)
}

function process(arr: number[], l: number, r: number) {
  // 就一个数
  if (l === r) {
    return arr[l]
  }
  const midIdx = l + ((r - l) >> 1) // 看上面二分法
  // 还是会遍历到每个数，这个数组并不一定是有序的
  const leftMax = process(arr, l, midIdx)
  const rightMax = process(arr, midIdx + 1, r)
  return Math.max(leftMax, rightMax)
}
```

但是递归操作十分容易导致调用栈溢出的问题，所以得想办法避免使用递归，或者使用 `ES6 尾调用优化方案`（比如：[斐波那契数列 方案四 🔗](/knowledge/study/algorithm.html#_4-斐波那契数列))

尾调用优化需要满足下列条件：

> - 必须在 `严格模式` 下：`'use strict'`
> - 尾调用 `不访问` 当前栈帧的变量（也就是说函数不是一个闭包）
> - 在函数内部，尾调用是最后一条语句
> - 尾调用的结果作为 `函数值`返回

递归算法的时间复杂度问题比较麻烦，从而出现了 `Master 公式` 来进行估算

```js
T(N) = a*T(N/b) + O(N^d)
```

> 解释：<br/> > `N` 表示 `问题的规模`，`a` 表示 `递归的次数`，也就是生成的子问题数，<br/> > `N/b` 表示 `子问题的规模`， `O(N^d)` 表示除了递归操作以外其余操作的复杂度

结论：

![公式结论](/images/masterResult.png)

**注意 ⚠️：不管分成几部分，子问题规模必须等分**

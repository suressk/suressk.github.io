---
title: 要么孤独，要么庸俗
heroText: 小K. 的小窝
# metaTitle: 小K. 的小窝
# tagline:
---

<!-- # {{ $frontmatter.title }} -->

:::tip
:tada: 你好，陌生人，很高兴能在这里与你相遇！
:::

```tsx
// Highlighted
import React, { useState, useEffect, memo } from "react";

const Index: React.FC<any> = () => {
  const [count, setCount] = useState();

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default memo(Index);
```

<!-- ![](./images/gif.gif) -->

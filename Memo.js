import React, { useState, useEffect, useMemo } from 'react';

const fibonacci = n => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);
  // const fib = fibonacci(num);

  const style = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <div style={style}>
        <button onClick={() => setNum(num + 1)}>Increment ➕</button>
      </div>
    </div>
  );
}

export default MemoComponent;
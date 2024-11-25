import { useEffect, useState } from "react";

const UseEffect = () => {
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // ক্লিনআপ ফাংশন
    return () => clearInterval(timer); // কম্পোনেন্ট আনমাউন্ট হলে টাইমার বন্ধ হবে
  }, []); // একবারই রান হবে (কম্পোনেন্ট মাউন্ট হওয়ার পর)

  return <p>Seconds: {seconds}</p>;
};

export default UseEffect;
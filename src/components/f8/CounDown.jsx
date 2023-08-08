import { useEffect, useRef, useState } from 'react';

const CounDown = () => {
  const [count, setCount] = useState(180);
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
    console.log('🚀 ~ file: CounDown.jsx:8 ~ useEffect ~ prevCount.current:', prevCount.current);
  }, [count]);
  const timeId = useRef();

  const handleUpCount = () => {
    timeId.current = setInterval(() => {
      setCount((preValue) => preValue - 1);
    }, 1000);
  };
  const handleDownCount = () => {
    clearInterval(timeId.current);
  };
  console.log('🚀 ~ file: CounDown.jsx:24 count, prevCount:', count, prevCount.current);
  return (
    <div>
      <h3>{count}</h3>
      <button
        type="button"
        onClick={handleUpCount}
        className="bg-red-500 text-white rounded-xl m-4 px-5 cursor-pointer hover:bg-red-700"
      >
        Start
      </button>
      <button
        type="button"
        onClick={handleDownCount}
        className="bg-yellow-500 text-white rounded-xl m-4 px-5 cursor-pointer"
      >
        Stop
      </button>
    </div>
  );
};

export default CounDown;

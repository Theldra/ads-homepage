import { useEffect, useState } from "react";

const Counter = () => {
    const [count,setCount ] = useState(0);
   
    // let count = 0;

    const handleClick = () => {
        // count = count + 1; babystep *don't use this!
        // count += 1;
        // count++; pre-increment & post-increment
        // ++count;
      setCount(count + 1);
        console.log(count);
    };

    useEffect(() => {
      alert(`Current value of count is ${count}`);
    }, [count]);
    
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p>Count: {count}</p>
        <button
         onClick={handleClick}
        //  onClick={() => handleClick()} second opt.

         className="bg-blue-500 shadow p-2 text-white rounded-md">Click me </button>
    </div>
  );
};

export default Counter;
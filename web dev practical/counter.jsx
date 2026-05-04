import {useState} from "react";

 function Counter() {
    
   const [count, setCount] = useState(0);


   console.log({count});



   const handleIncrement = () => {
     setCount(count + 1);
   };


   const handleDecrement = () => {
     setCount(count - 1);
   };


   const handleReset = () => {
     setCount(0);
   };

   return (
     <div>
       <h1>Count: {count}</h1>
       <button onClick={handleAdd}>increment</button>
       <button onClick={() => setCount(count - 1)}>decrement</button>
       <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Counter;
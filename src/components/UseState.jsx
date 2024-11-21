import { useState } from "react";

// React UseState
const UseState = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleReduce = () =>{
        const newAmount = count - 1;
        setCount(newAmount);
    }
    return (
        <div style={{border : '2px solid tomato '}} className="p-4">
            <h2>Counter : {count}</h2>
            <button onClick={handleAdd} className="btn border px-4 bg-slate-400 text-white">Add</button>
            <button onClick={handleReduce} className="btn border px-4 bg-slate-500 text-white">Reduce</button>
        </div>
    );
};

export default UseState;
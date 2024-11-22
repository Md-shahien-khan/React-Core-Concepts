import { useState } from "react";

// React UseState
const UseState = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [name, setName] = useState('');

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

            <p>Button :  {isOn ? 'ON' : 'OFF'}</p>
            <button className="btn border px-4 bg-slate-500 text-white" onClick={() => setIsOn(!isOn)}>
            {isOn ? 'OFF' : 'ON' }
            </button>

            <input
            type="text"
            value={name}  // name will be state
            onChange={(e) => setName(e.target.value)} // if you write something 'name' will be the output
            placeholder="write your name"
            />
            <p>Your name: {name}</p>
        </div>
    );
};

export default UseState;
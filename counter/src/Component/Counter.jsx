import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {

    let [counter, setCounter] = useState(1);
    const maxValue = 1000;

    const decrement = () => {
        setCounter(--counter);
    }

    const increment = () => {
        if (counter < maxValue) {
            setCounter((parseInt(counter) || 0) + 1);
        }
    }

    return (
        <div>
            <button className="button" id="btn1" onClick={decrement}>-</button>
            <input
                type="text"
                name="counter"
                value={counter}
                id="input1"
                onChange={e => setCounter(e.target.value)}
            />
            <button className="button" id="btn2" onClick={increment}>+</button>
        </div>
    )
}

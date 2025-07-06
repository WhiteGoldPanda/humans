import React, { useState, useEffect } from 'react';

export function Counter() { 
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        return () => {
            document.title = 'React App'; // Reset title on unmount
        }
    }, [count]);
    const increment = () => setCount(prev => prev + 1);

    return (
        <div className="p-4 border border-gray-300 rounded">
            <p>Count: <strong>{count}</strong></p>
            <button onClick={increment} className='px-3 py-1 bg-blue-500 text-white rounded'>Increment</button>
        </div>
    )
}
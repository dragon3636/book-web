import React, { useEffect, useState } from 'react';

const CounDown = () => {
    const [count, setCount] = useState(180);
    useEffect(() => {
        const timeId = setInterval(() => {
            setCount(preValue => preValue - 1)
        }, 1000)
        return () => clearInterval(timeId);
    }, [])
    return (
        <div>
            <h3>{count}</h3>
        </div>
    );
};

export default CounDown;
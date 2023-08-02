import React, { useEffect, useState } from 'react';

const CounDownTimeout = () => {
    const [count, setCount] = useState(180);
    useEffect(() => {
        const timeId = setTimeout(() => {
            setCount(count-1);
            console.log("🚀 ~ file: CounDownTimeout.jsx:8 ~ timeId ~ count:", count)
        }, 1000)
        return () => clearTimeout(timeId);
    }, [count])
    return (
        <div>
            <h3 className='text-lime-400 font-bold text-lg text-center'>{count}</h3>
        </div>
    );
};

export default CounDownTimeout;
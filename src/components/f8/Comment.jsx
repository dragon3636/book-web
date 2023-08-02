import React, { useEffect, useState } from 'react';
const leason = ['Bai 1', 'Bai 2', 'Bai 3'];
const Comment = () => {
    const [commnets, setCommnet] = useState([]);
    const [topic, setTopic] = useState();
    useEffect(() => {
        console.log('useEffect running!')
        const handleCommnet = (detail) => {
            console.log("🚀 ~ file: Comment.jsx:8 ~ handleCommnet ~ detail:", detail)
        }
        topic && window.addEventListener(`listen-${topic}`, handleCommnet)
        return () => window.removeEventListener(`listen-${topic}`, handleCommnet)
    }, [topic])

    const handleLeason = (event) => {
        setTopic(event.target.value);
    }
    return (
        <div>
            <ul>
                {leason.map((item, index) => (<li className={`font-normal text-xl  hover:text-red-300 active:text-red-500 cursor-pointer ${topic === (index + 1) ? 'text-red-500' : 'text-red-100'}`} value={index + 1} onClick={handleLeason} key={index}>{item}</li>))}
                {topic && commnets.length > 0 && commnets.map((message, index) => {
                    (<ul>
                        <li key={index}>{message}</li>
                    </ul>)
                })}
            </ul>
        </div>
    );
};

export default Comment;
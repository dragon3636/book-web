import { useLayoutEffect, useState } from "react"

const Layer = () => {
    const [count, setCount] = useState(1);
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count])
    const handleCountUp = () => {
        setCount(preVal => preVal + 1);
    }
    return (
        <div>
            <h3 className={`font-normal ${count === 4 ? 'bg-blue-300' : 'bg-red-300'}`}>Discorver book</h3>
            <h1>
                {count}
            </h1>
            <button type="button" className="bg-cyan-700 p-3 rounded-lg text-white" onClick={handleCountUp}>Count up</button>
        </div>
    )
}
export default Layer;
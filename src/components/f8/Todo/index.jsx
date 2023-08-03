import { useReducer, useRef } from "react";
import reducerState, { initState } from "./reduce";
import { addJob, removeJob, setJob } from "./action";
import logger from "./logger";
const Todo = () => {
  const [state, dispatch] = useReducer(logger(reducerState), initState);
  const inputRef = useRef(null);
  const { job, jobs } = state;

  const handleAddJob = () => {
    dispatch(addJob(job));
    inputRef.current.focus();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddJob();
    }
  };
  return (
    <div className="w-full max-w-xs mb-6">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        ref={inputRef}
        id="username"
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        onClick={handleAddJob}
      >
        Add job
      </button>
      <ul>
        {jobs.length > 0 &&
          jobs.map((item, index) => (
            <div key={index} className="flex justify-between gap-x-3">
              <ol className="inline-block">{item}</ol>
              <span
                className="inline-block cursor-pointer text-red-200 hover:text-red-500"
                onClick={() => dispatch(removeJob(index))}
              >
                X
              </span>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Todo;

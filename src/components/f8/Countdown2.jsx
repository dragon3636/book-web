import { useReducer } from "react";
const stateInit = 0;
const UP_COUNT = "UP_COUNT";
const D0WN_COUNT = "D0WN_COUNT";
const reducerCount = (state, action) => {
  console.log("Running reducer....!");
  switch (action) {
    case UP_COUNT:
      return state + 1;
    case D0WN_COUNT:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};
const Countdown2 = () => {
  const [count, dispatch] = useReducer(reducerCount, stateInit);
  return (
    <div className="m-auto max-w-[400px] mx-0 my-3">
      <h1 className="inline-block">{count}</h1>
      <div
        className="flex w-full
       justify-between text-center gap-2"
      >
        <button
          type="button"
          className="bg-red-200 p-3 rounded-3xl"
          onClick={() => dispatch(UP_COUNT)}
        >
          Up
        </button>
        <button
          type="button"
          className="bg-red-200 p-3 rounded-3xl"
          onClick={() => dispatch(D0WN_COUNT)}
        >
          Down
        </button>
      </div>
    </div>
  );
};

export default Countdown2;

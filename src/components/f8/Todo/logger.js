export default function logger(reducerFun) {
  return (state, action) => {
    console.group(action.type);
    console.log('Pre value:', state);
    const result = reducerFun(state, action);
    console.log('🚀 ~ file: logger.js:6 ~ return ~ result:', result);
    console.groupEnd();
    return result;
  };
}

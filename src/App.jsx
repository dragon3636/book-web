import { useState } from "react";
import "./App.css";
// import List from './components/f8/List';
// import Content from './components/f8/Content';
import Login from "./components/f8/Login";
// import CounDownTimeout from './components/f8/CounDownTimeout';
// import PreviewAvatar from './components/f8/PreviewAvatar';
// import Layer from "./components/f8/Layer";
// import Dropdown from "./components/dropdown/Dropdown";
// import Select from './components/dropdown/Select';
// import Item from './components/dropdown/Item';
// import List from './components/dropdown/List';
// import { DropdownProvider } from './components/dropdown/dropdown-context';
// const countryData = ['Vietname', 'Thailand', 'China', 'Japan'];

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  console.log("re-render app");
  return (
    <div className="w-full h-96">
      <Login></Login>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={increase}
        className="bg-orange-400 px-5 py-2 rounded-2xl"
      >
        Increase
      </button>
    </div>
  );
}

export default App;

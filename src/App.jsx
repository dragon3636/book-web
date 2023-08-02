import { useState } from "react";
import "./App.css";
// import List from './components/f8/List';
// import Content from './components/f8/Content';
import CounDown from "./components/f8/CounDown";
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
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-96">
      <button
        type="button"
        className="bg-orange-500 rounded font-bold text-white p-3"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      {toggle && <CounDown></CounDown>}
    </div>
  );
}

export default App;

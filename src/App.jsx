// import { useCallback, useState } from "react";
import { useContext } from 'react';
import './App.css';
import { useStore, Action } from './components/f8/store';
import Pharagraph from './components/f8/Paragraph/Pharagraph';
import Heading from './components/f8/Heading/Heading';
import Button from '@components/f8/Button';
// import Paragraph from "./components/f8/Theme/Paragraph";
// import { ThemeContext } from "./components/f8/Theme";
// import List from './components/f8/List';
// import Content from './components/f8/Content';
// import Login from "./components/f8/Login";
// import Product from "./components/f8/Product";
// import Countdown2 from "./components/f8/Countdown2";
// import Todo from "./components/f8/Todo";
// import CounDownTimeout from './components/f8/CounDownTimeout';
// import PreviewAvatar from './components/f8/PreviewAvatar';
// import Layer from "./components/f8/Layer";
// import Dropdown from "./components/dropdown/Dropdown";
// import Select from './components/dropdown/Select';
// import Item from './components/dropdown/Item';
// import List from './components/dropdown/List';
// import { DropdownProvider } from './components/dropdown/dropdown-context';
// const countryData = ['Vietname', 'Thailand', 'China', 'Japan'];
import GlobalStyle from './components/f8/GlobalStyle';
function App() {
  const [state, dispath] = useStore();
  const { todoInput, todos } = state;
  console.log('todos ', todos);
  return (
    <GlobalStyle>
      <Button primary>Button primary</Button>
      <Button>Button nomal</Button>
    </GlobalStyle>
  );
}

export default App;

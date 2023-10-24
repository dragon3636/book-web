// import { useCallback, useState } from "react";
import { Fragment } from 'react';
// import { useStore, Action } from './components/f8/store';
// import Pharagraph from './components/f8/Paragraph/Pharagraph';
// import Heading from './components/f8/Heading/Heading';
// import Button from '@components/f8/Button';
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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DeffaulLayout } from './Layouts';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './routes/error-page';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';
import Index from './routes';
import AuthLayout from './Layouts/AuthLayout';
import Login, { action as loginAction } from './pages/Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

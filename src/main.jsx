import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
// import { ThemeProvider } from "./components/f8/Theme/ThemeContext";
// import { StoreProvider } from "./components/f8/store";
// const createCommnet = (postId) => {
//   console.log("🚀 ~ file: main.jsx:6 ~ createCommnet ~ postId:", postId);
//   setInterval(() => {
//     const event = new CustomEvent(`listen-${postId}`, {
//       detail: `Comment of ${postId}`,
//     });
//     window.dispatchEvent(event);
//   }, 2000);
// };
// createCommnet(2);
// createCommnet(3);
// createCommnet(1);
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

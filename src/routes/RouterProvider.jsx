import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from '@/pages/error-page';
import Contact, { loader as contactLoader } from '@/routes/contact';
import EditContact, { action as editAction } from '@/routes/edit';
import { action as destroyAction } from '@/routes/destroy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
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
]);

const RouterProviderApp = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default RouterProviderApp;

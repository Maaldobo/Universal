import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Temperatura from './components/TemperatureConverter.jsx';
import TodoList from './components/Todolist.jsx';
import Contador from './components/Counter.jsx';
import Carrusel from './components/Carrusel.jsx';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TodoList />,
      },
      {
        path: "/contador",
        element: <Contador />,
      },
      {
        path: "/temperatura",
        element: <Temperatura />,
      },
      {
        path: "/carrusel",
        element: <Carrusel />,
      }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={routerConfig} />
  </StrictMode>
);

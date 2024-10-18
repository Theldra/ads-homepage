import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/products';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Settings from './pages/dashboard/Settings';
import Counter from './pages/Counter';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/counter',
      element: <Counter />
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "settings",
          element: <Settings />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
export default App;
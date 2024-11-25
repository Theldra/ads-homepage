import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/products/ProductListing';
import DashboardLayout from './layouts/DashboardLayout';
import Settings from './pages/dashboard/Settings';
import Counter from './pages/Counter';
import UserProfile from './components/UserProfile';
import CartManager from './components/CartManager';
import LocationSelector from './components/LocationSelector';
import Messaging from './pages/buyer/Messaging';
import Notifications from './components/Notifications';
import ReviewAndRatings from './components/ReviewAndRatings';
import Payment from './components/Payment';
import Dashboard from './pages/buyer/Dashboard';
import AddProduct from './pages/products/AddProduct';
import ProductCard from './pages/products/ProductCard';
import Product from './pages/products/Product';
import EditProfile from './components/EditProfile';
import ProductListing from './pages/products/ProductListing';
import Register from './components/Register';
import Login from './components/Login';

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
      path: "regist",
      element: <Register />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/lists',
      element: <ProductListing />
    },
    {
      path: '/counter',
      element: <Counter />
    },
    {
      path: '/prod',
      element: <Product />
    },
    {
      path: '/add',
      element: <AddProduct />
    },
    {
      path: '/pay',
      element: <Payment/>
    },
    {
      path: '/review',
      element: <ReviewAndRatings />
    },
    {
      path: '/notify',
      element: <Notifications/>
    },
    {
      path: '/message',
      element: <Messaging/>
    },
    {
      path: '/location',
      element: <LocationSelector />
    },
    {
      path: '/cart',
      element: <CartManager />
    },
    {
      path: '/userdashboard',
      element: <Dashboard />,
      children: [
        {
          path: 'profile',
          element: <UserProfile />
        },
        {
          path: 'edit',
          element: <EditProfile />
        },
      ]
    },
    
    {
      path: '/card',
      element: <ProductCard />
    },
    
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
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
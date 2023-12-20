
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  userData } from './store/features/User/userReducer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css'
import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorElement from './components/ErrorElement';
import Dashboard from './pages/DashboardScreen/DashboardComponent/Dashboard';
import DashBoardScreen from './pages/DashboardScreen/DashBoardScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';




function App() {
  const user = useSelector(userData);
  const router = createBrowserRouter([
    {path: '/', element: user.data !== null ? <DashBoardScreen/> : <LoginScreen/> , errorElement: <ErrorElement />,
      children :[
        {index: true, element: <Dashboard />},
      ]
    },
    {path: '/login', element: <LoginScreen/> , errorElement: <ErrorElement />,},
  ]);

  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer theme="dark" autoClose={2000}/>
    </>
  );
}

export default App;

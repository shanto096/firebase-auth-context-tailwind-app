import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './__layout/Main.jsx';
import Home from './Componets/Home.jsx';
import Login from './Componets/Login.jsx';
import Register from './Componets/Register.jsx';
import About from './Componets/About.jsx';
import Blog from './Componets/Blog.jsx';
import Profile from './Componets/Profile.jsx';
import AuthProvider from './Componets/provider/AuthProvider.jsx';
import PrivateRoute from './routerPrivate/PrivateRoute.jsx';
import Shop from './Componets/Shop.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/shop',
        element:<PrivateRoute><Shop></Shop></PrivateRoute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './Componemts/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Componemts/News/News';
import NewsDetails from './Componemts/NewsDetails/NewsDetails';
import DetailsLandingPage from './Componemts/DetailsLandingPage/DetailsLandingPage';
import UserContext from './Componemts/UserContext/UserContext';
import SignUp from './Componemts/SignUp/SignUp';
import Login from './Componemts/Login/Login';
import PrivateRoute from './Componemts/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
    children: [
      {
        path: "news/:id",
        element: <News></News>,
        loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },
     
    ],
   
  
  },
  {
    path: 'news/:id',
    element: <PrivateRoute><DetailsLandingPage></DetailsLandingPage></PrivateRoute>,
    children: [
      {
        path: "news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
    
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
    
  },
  {
    path: "/login",
    element: <Login></Login>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>,
)

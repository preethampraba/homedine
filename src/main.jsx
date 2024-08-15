import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/About';
import HomeChef from './components/Homechef';
import HomeChefRegistration from './components/Registeration';
import ContactForm from './components/Contact';
import Order from './components/Order';
import Signup from './components/Signup';
import SwiggyPartnerRegistration from './components/Deliverypartner';
import Homecheflogin from'./components/Homechefsign.jsx';
import Login1 from './components/Deliverypartnerlogin..jsx';
import LoginSignup from './components/Cheflogin.jsx';
import DeliveryPartnerLogin from './components/Partner.jsx';
import FoodMenu from './components/Homechef';
import PaymentPage from './components/Paymentpage.jsx';
import AdminPage from './components/Adminpage.jsx';

// import Signup1 from './components/Signuporder';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },

      {
        path: '/about',
        element: <AboutUs />
      } ,
      // {
      //    path:'/signup1',
      //    element:<Signup1/>
      // },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/deliver',
        element:<SwiggyPartnerRegistration/>
      },

      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/register",
        element: <Signup />
      },
      {
        path: "/contact",
        element: <ContactForm />
      },
      {
        path: "/order",
        element: <Order />
      },
      {
        path: "/homechef",
        element: <HomeChef />
      },
     {
      path:"/homecheflogin",
      element:<Homecheflogin/>
     },
     {
       path:"/login1",
       element:<Login1/>
     },
     {
path:"/homech",
element:<FoodMenu/>
     },
{
path:"/homecheflogin",
element:<Homecheflogin/>
},
{
  path:"/partner",
  element:<DeliveryPartnerLogin/>
},
{
path:"/paymentpage",
  element:<PaymentPage/>
},
{
  path:"/Admin",
  element:<AdminPage/>
},
{
path:"/cheflogin",
element:<LoginSignup/>
},


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import UpdateItem from "../Pages/DashBoard/ManageItems/UpdateItem";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import Reservation from "../Pages/DashBoard/Reservation/Reservation";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Payment from "../Pages/DashBoard/Payment/Payment";
import UserReview from "../Pages/DashBoard/Review/UserReview";
import UserBookings from "../Pages/DashBoard/UserBookings/UserBookings";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/shop/:category",
          element: <Shop></Shop>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      element: <Dashboard></Dashboard>,
      path:'dashboard',
      children: [
        // User Routes....
        {
          path: 'home',
          element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
          path:'reservation',
          element:<PrivateRoute><Reservation></Reservation></PrivateRoute>
        },
        {
          path:'payment_history',
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
          path: 'mycart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'bookings',
          element:<PrivateRoute><UserBookings></UserBookings></PrivateRoute>
        },
        {
          path:'review',
          element:<PrivateRoute><UserReview></UserReview></PrivateRoute>
        },
        {
          path:'payment',
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        // Admin Routes....
        {
          path:'admin_home',
          element:<PrivateRoute><AdminHome></AdminHome></PrivateRoute>
        },
        {
          path:'all_users',
          element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },
        {
          path: 'manage_items',
          element:<PrivateRoute><ManageItems></ManageItems></PrivateRoute>
        },
        {
          path: 'update_item/:id',
          element:<PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>
        },
        {
          path: 'add_item',
          element:<PrivateRoute><AddItem></AddItem></PrivateRoute>
        }
      ]
    }
  ]);
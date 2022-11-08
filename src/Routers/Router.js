import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute";
import Register from "../Pages/Register/Register";
import Reviews from "../Shared/Reviews";
import Services from "../Shared/Services";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [

        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'/services',
          element:<PrivateRoute><Services></Services></PrivateRoute>
        },
        {
            path : '/reviews',
            element: <Reviews></Reviews>
        }
    
    ]
    
  }

])
   




export default router
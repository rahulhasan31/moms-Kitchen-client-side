import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
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
          path: '/services ',
          element:<Services></Services>
        },
        {
            path : '/reviews',
            element: <Reviews></Reviews>
        }
    
    ]
    
  }

])
   




export default router
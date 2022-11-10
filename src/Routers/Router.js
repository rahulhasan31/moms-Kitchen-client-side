import Main from "../LayOut/Main";
import AddReview from "../Pages/AddReview";
import AddServices from "../Pages/AddServices";
import Blog from "../Pages/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute";
import Register from "../Pages/Register/Register";
import EditReview from "../Shared/EditReview";
import Reviews from "../Shared/Reviews";
import Services from "../Shared/Services";
import ServicesDetails from "../Shared/ServicesDetails";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>, 
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
          element:<Services></Services>,
          // loader: ()=> fetch('http://localhost:5000/services')
        },
        {
         path: '/addService',
         element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
          path: "/services/:id",
          element: <ServicesDetails></ServicesDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`) 
        },
       
        {
            path : '/reviews',
            element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
         path:'/edit/:id',
         element:<EditReview></EditReview>,
         loader : ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
        },
        {
          path: '/reviews',
          element:<AddReview></AddReview>, 
        
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
    
    ]
    
  }

])
   




export default router
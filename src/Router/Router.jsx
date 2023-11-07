import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Blogs from "../Pages/Blogs/Blogs";
import SingleFood from "../Pages/SingleFood/SingleFood";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/allfooditems',
            element : <AllFoods></AllFoods>
        },
        {
            path : '/blogs',
            element : <Blogs></Blogs>
        },
        {
            path : '/food/:id',
            element : <SingleFood></SingleFood>,
            loader : ({params}) => fetch(`http://localhost:5173/food/${params.id}`)
        },
        {
            path : '/login',
            element : <Login></Login>
        }
      ]
    },
  ]);

  export default router;
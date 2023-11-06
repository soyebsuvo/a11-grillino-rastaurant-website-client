import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Blogs from "../Pages/Blogs/Blogs";

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
        }
      ]
    },
  ]);

  export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Blogs from "../Pages/Blogs/Blogs";
import SingleFood from "../Pages/SingleFood/SingleFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFoodPage from "../Pages/AddFoodPage/AddFoodPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FoodPurchasePage from "../Pages/FoodPurchasePage/FoodPurchasePage";
import MyAddedFoodItems from "../Pages/MyAddedFoodItems/MyAddedFoodItems";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/allfooditems',
            element : <AllFoods></AllFoods>,
            loader : () => fetch(`http://localhost:5000/foodsCount`)
        },
        {
            path : '/blogs',
            element : <Blogs></Blogs>
        },
        {
            path : '/food/:id',
            element : <SingleFood></SingleFood>,
            loader : ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/addFood',
            element : <AddFoodPage></AddFoodPage>
        },
        {
            path : '/purchase/:id',
            element : <FoodPurchasePage></FoodPurchasePage>
        },
        {
            path : '/myAddedFood',
            element : <MyAddedFoodItems></MyAddedFoodItems>
        },
        {
            path : "/updateFood/:id",
            element : <UpdateFood></UpdateFood>
        }
      ]
    },
  ]);

  export default router;
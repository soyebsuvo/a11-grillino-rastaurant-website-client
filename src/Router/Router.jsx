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
import MyOrderedItems from "../Pages/MyOrderedItems/MyOrderedItems";
import PrivateRoute from "./PrivateRoute";

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
            loader : () => fetch(`https://grillino-assignment-server.vercel.app/foodsCount`)
        },
        {
            path : '/blogs',
            element : <Blogs></Blogs>
        },
        {
            path : '/food/:id',
            element : <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
            loader : ({params}) => fetch(`https://grillino-assignment-server.vercel.app/food/${params.id}`)
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
            element : <PrivateRoute><AddFoodPage></AddFoodPage></PrivateRoute>
        },
        {
            path : '/purchase/:id',
            element : <PrivateRoute><FoodPurchasePage></FoodPurchasePage></PrivateRoute>
        },
        {
            path : '/myAddedFood',
            element : <PrivateRoute><MyAddedFoodItems></MyAddedFoodItems></PrivateRoute>
        },
        {
            path : "/updateFood/:id",
            element : <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
        },
        {
            path : '/orderedItems',
            element : <PrivateRoute><MyOrderedItems></MyOrderedItems></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;
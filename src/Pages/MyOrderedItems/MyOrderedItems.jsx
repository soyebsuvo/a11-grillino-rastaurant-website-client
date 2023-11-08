import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyOrderedItem from "../MyOrderedItem";
import { Helmet } from "react-helmet-async";

export default function MyOrderedItems() {
    const {user} = useContext(AuthContext);
    const { data: sortedFoods, isLoading, isError, error , refetch} = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
          const res = await axios.get(`http://localhost:5000/orders?email=${user?.email}`);
          return await res.data;
        }
      })
    
      
      if (isLoading) {
        return <div className="flex justify-center items-center h-[50vh]"><span className="loading loading-ring loading-lg"></span></div>
      }
      if (isError) {
        console.log(error.message);
        return;
      }
    return (
        <div className="px-20">
          <Helmet>
                <title>Grillino | My Orders</title>
            </Helmet>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">My Ordered Foods</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-6">
                {
                    sortedFoods?.map(food => <MyOrderedItem key={food._id} food={food} refetch={refetch}></MyOrderedItem>)
                }
            </div>
            
        </div>
    )
}

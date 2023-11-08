import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import FoodCard from "./FoodCard";
import LoginButton from "../Navbar/LoginButton";
import { Link } from "react-router-dom";

export default function FoodCards() {
  const { data: foods, isLoading, isError, error } = useQuery({
    queryKey: ['foods'],
    queryFn: async () => {
      const res = await axios.get(`https://grillino-assignment-server.vercel.app/foods`  , { withCredentials : true});
      return await res.data;
    }
  })

  
  if (isLoading) {
    return <div className="flex justify-center items-center h-[50vh]"><span className="loading loading-ring loading-lg"></span></div>
  }
  const sortedFoods = foods.sort((a, b) => b.count - a.count)
  if (isError) {
    console.log(error.message);
    return;
  }
  return (
    <div className="px-20">
      <div className="text-center py-5">
        <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
        <h2 className="font-open-sans text-4xl font-bold">Our Food Menu</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-6">
        {
          sortedFoods?.slice(0, 6).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
        }
      </div>
      <div className="py-3 pb-8 flex justify-center">
        <Link to='/allfooditems'><LoginButton variant="contained">See All Foods</LoginButton></Link>
      </div>
    </div>
  )
}

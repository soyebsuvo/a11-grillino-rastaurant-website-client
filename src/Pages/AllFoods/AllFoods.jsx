import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FoodCard from "../../components/FoodMenus/FoodCard";

export default function AllFoods() {
    const { data: foods, isLoading, isError, error } = useQuery({
        queryKey: 'foods',
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/foods`);
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
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Our All Food Menu</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-6">
                {
                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    )
}

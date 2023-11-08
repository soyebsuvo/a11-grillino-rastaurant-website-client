import { useQuery } from "@tanstack/react-query"
// import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import MyAddedFoodItem from "./MyAddedFoodItem";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../components/AxiosSecure/useAxiosSecure";

export default function MyAddedFoodItems() {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: foods, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['myfoods'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/foodss?email=${user?.email}` , {withCredentials : true});
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
                <title>Grillino | My Added Food</title>
                <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
            </Helmet>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">My Added Food Items</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-6">
                {
                    foods.length > 0 && foods?.map(food => <MyAddedFoodItem key={food?._id} food={food} refetch={refetch}></MyAddedFoodItem>)
                }
            </div>
            <div>
                {
                    foods.length === 0 && <div className="flex justify-center items-center"><h2 className="text-center font-bold text-2xl mb-6">No Food Item Available Here..</h2></div>
                }
            </div>
        </div>
    )
}

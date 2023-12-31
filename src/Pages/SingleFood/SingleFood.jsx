import {  useLoaderData, useNavigate } from "react-router-dom"
import LoginButton from "../../components/Navbar/LoginButton";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export default function SingleFood() {
    const navigate = useNavigate();
    const {setQuantityValue , user} = useContext(AuthContext)
    const [quantity, setQuantity ] = useState(1)
    const food = useLoaderData();
    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            // setQuantityValue(quantity)
        }
    }
    const handlePlus = () => {
        if(food?.quantity > quantity){
            setQuantity(quantity + 1)
        }else{
            toast.error('You can not Order more than available quantity')
        }        
        // setQuantityValue(quantity)
    }
    const handleSetQuantity = () => {        
        if(food?.made_by === user?.displayName){
            setQuantityValue(quantity)
            toast.error("You can not buy you own added food")
            return;
        }
        navigate(`/purchase/${food?._id}`)
    }
    return (
        <div className="py-14">
            <Helmet>
                <title>Grillino | Food Details</title>
                <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
            </Helmet>
            <div className="flex flex-col md:flex-row gap-8 px-4 md:px-16">
                <div className="flex-1">
                    <img src={food?.food_image} alt="food" className="w-full" />
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-orange-500 text-xl">${food?.price}</h2>
                    <h2 className="text-5xl font-bold my-3 mb-5">{food?.food_name}</h2>
                    <p className="font-bold text-gray-500 my-1">Category - {food?.food_category}</p>
                    <p className="font-bold text-gray-500 my-1">Made By - {food?.made_by}</p>
                    <p className="font-bold text-gray-500 my-1">Available Quantity - {food?.quantity}</p>
                    <p className="font-bold text-gray-500 my-1">Sold - {food?.count}</p>
                    <p className="pt-8 font-bold text-gray-500 my-1">Insert here how many items you want to buy</p>
                    <div className="flex items-center pb-8">
                        <p className="mr-3">Quantity : </p>
                        <button onClick={handleMinus} className="py-2 px-4 bg-orange-100 border border-orange-100 hover:bg-orange-400 duration-300 rounded-sm hover:text-white">-</button>
                        <input className="py-2 text-center w-12 border border-orange-100" type="number" name="quntity" id="quantity" value={quantity} />
                        <button onClick={handlePlus} className="py-2 px-4 bg-orange-100 border border-orange-100 hover:bg-orange-400 duration-300 rounded-sm hover:text-white">+</button>
                    </div>
                    <LoginButton onClick={handleSetQuantity}>Order</LoginButton>
                </div>
            </div>
            <div className="px-4 md:px-16">
                <h2 className="font-bold text-4xl my-6">Description</h2>
                <p>{food?.desc}</p>
            </div>
        </div>
    )
}

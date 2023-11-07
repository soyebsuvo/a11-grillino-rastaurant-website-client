import { Link, useLoaderData } from "react-router-dom"
import LoginButton from "../../components/Navbar/LoginButton";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function SingleFood() {
    const {setQuantityValue} = useContext(AuthContext)
    const [quantity, setQuantity ] = useState(1)
    const food = useLoaderData();
    console.log(food)
    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            // setQuantityValue(quantity)
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1)
        // setQuantityValue(quantity)
    }
    const handleSetQuantity = () => {
        setQuantityValue(quantity)
    }
    return (
        <div className="py-14">
            <div className="flex gap-8 px-16">
                <div className="flex-1">
                    <img src={food?.food_image} alt="food" className="w-full" />
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-orange-500 text-xl">${food?.price}</h2>
                    <h2 className="text-5xl font-bold my-3 mb-5">{food?.food_name}</h2>
                    <p className="font-bold text-gray-500 my-1">Category - {food?.food_category}</p>
                    <p className="font-bold text-gray-500 my-1">Made By - {food?.made_by}</p>
                    <p className="font-bold text-gray-500 my-1">Available Quantity - {food?.quantity}</p>
                    <p className="font-bold text-gray-500 my-1">Ordered - {food?.count}</p>
                    <div className="flex items-center py-8">
                        <p className="mr-3">Quantity : </p>
                        <button onClick={handleMinus} className="py-2 px-4 bg-orange-100 border border-orange-100 hover:bg-orange-400 duration-300 rounded-sm hover:text-white">-</button>
                        <input className="py-2 text-center w-12 border border-orange-100" type="number" name="quntity" id="quantity" value={quantity} />
                        <button onClick={handlePlus} className="py-2 px-4 bg-orange-100 border border-orange-100 hover:bg-orange-400 duration-300 rounded-sm hover:text-white">+</button>
                    </div>
                    <Link to={`/purchase/${food?._id}`}><LoginButton onClick={handleSetQuantity}>Order</LoginButton></Link>
                </div>
            </div>
            <div className="px-16">
                <h2 className="font-bold text-4xl my-6">Description</h2>
                <p>{food?.desc}</p>
            </div>
        </div>
    )
}

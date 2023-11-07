import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FoodPurchasePage() {
    const { quantityValue } = useContext(AuthContext);
    const params = useParams();
    const { user } = useContext(AuthContext);
    const { data: food } = useQuery({
        queryKey: ['purchaseFood'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/food/${params.id}`)
            return await res.data;
        }
    })
    const { food_name, food_image,  price } = food || {}
    // console.log("from purfkdhfdh" , food)
    return (
        <div className="px-3 md:px-32 py-8">
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Purchase Food</h2>
            </div>
            <div>
                <div className="py-8">
                    <form>
                        <div className="md:flex gap-4">
                            <div className="w-full">
                                Food Name <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="name" id="name" placeholder="Food Name*" defaultValue={food_name} required readOnly />
                            </div>
                            <div className="w-full">
                            Food Photo <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="photo" id="photo" defaultValue={food_image} placeholder="Food Photo URL*" required readOnly />
                            </div>
                        </div>
                        <div className="md:flex gap-4">
                            <div className="w-full">
                            Your Name <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="userName" id="userName" defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="w-full">
                            Your Email <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="email" name="userEmail" id="userEmail" defaultValue={user?.email} readOnly placeholder="Email" />
                            </div>
                        </div>
                        <div className="md:flex gap-8">
                            <div className="w-full">
                                Pick Date <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="date" name="date" id="date" required/>
                            </div>
                            {/* <div className="w-full">
                                <select className="w-full py-4 border-2 rounded-lg px-2 my-2" name="origin" id="origin" defaultValue={origin} required>
                                    <option value="Bangladesh">Select Origin</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Italian">Italian</option>
                                </select>
                            </div> */}
                            <div className="w-full">
                                Quantity <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="number" name="quantity" id="quantity" placeholder="Available Quantity" value={quantityValue} required readOnly/>
                            </div>

                            <div className="w-full">
                            Price <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="price" id="price" placeholder="Price*" defaultValue={price} required readOnly/>
                            </div>
                        </div>
                        <div>
                            <input className="btn btn-block bg-orange-400 text-white hover:bg-transparent hover:border hover:border-orange-400 hover:text-orange-400 my-4" type="submit" value="Purchase" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

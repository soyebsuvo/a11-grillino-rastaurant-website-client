import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

export default function FoodPurchasePage() {
    const { quantityValue } = useContext(AuthContext);
    const navigate = useNavigate();
    const params = useParams();
    const { user } = useContext(AuthContext);
    const { data: food } = useQuery({
        queryKey: ['purchaseFood'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/food/${params.id}`)
            return await res.data;
        }
    })
    const { _id , food_name, food_image,  price , desc , count ,  food_category} = food || {}
    // console.log("from purfkdhfdh" , food)
    const handlePurchase = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const date = e.target.date.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const purchasedFood = {
            food_name : name, food_image : photo, count , made_by : userName, userEmail, food_category : food_category , origin , quantity , price, desc , date
        }
        axios.post(`http://localhost:5000/orders` , purchasedFood)
        .then(res => {
            if(res.data.acknowledged){
                Swal.fire(
                    'Succefull!',
                    'Food Purchased Successfully!',
                    'success'
                  )
                  e.target.reset()
                  navigate('/orderedItems')

            }
        })
        .catch(error => {
            console.log(error)
        })

        axios.patch(`http://localhost:5000/food/${_id}` , {count : count + quantityValue , quantity : food?.quantity - quantityValue})
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="px-3 md:px-32 py-8">
            <Helmet>
                <title>Grillino | Purchase Food</title>
                <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
            </Helmet>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Purchase Food</h2>
            </div>
            <div>
                <div className="py-8">
                    <form onSubmit={handlePurchase}>
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
                            <div className="w-full">
                                Quantity <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="number" name="quantity" id="quantity" placeholder="Available Quantity" defaultValue={quantityValue} required readOnly/>
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

import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

export default function UpdateFood() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams()
    const { data, isLoading, isError, error , refetch} = useQuery({
        queryKey: ['updateFood'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/food/${id}`);
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
    const { food_name, food_image, price, food_category, origin, quantity, desc } = data || {};
    const handleUpdateFood = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const origin = e.target.origin.value;
        const quantity = e.target.quantity.value;
        const desc = e.target.desc.value;
        const count = e.target?.count?.value || 0
        const updated = {
            food_name: name, food_image: photo, count, userName, userEmail, food_category: category, origin, quantity, price, desc
        }

        axios.put(`http://localhost:5000/foods/${id}`, updated)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        'Updated!',
                        'Food Items Updated Successfully!',
                        'success'
                    )
                    refetch()
                    navigate('/myAddedFood')
                }
                e.target.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="px-3 md:px-32 py-8">
            <Helmet>
                <title>Grillino | Update Food</title>
            </Helmet>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Add Food Item</h2>
            </div>
            <div>
                <div className="py-8">
                    <form onSubmit={handleUpdateFood}>
                        <div className="md:flex gap-4">
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="name" id="name" placeholder="Food Name*" defaultValue={food_name} required />
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="photo" id="photo" placeholder="Food Photo URL*" defaultValue={food_image} required />
                        </div>
                        <div className="md:flex gap-4">
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="userName" id="userName" defaultValue={user?.displayName} readOnly />
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="email" name="userEmail" id="userEmail" defaultValue={user?.email} readOnly placeholder="Email" />
                        </div>
                        <div className="md:flex gap-8">
                            <div className="w-full">
                                <select className="w-full py-4 border-2 rounded-lg px-2 my-2" name="category" id="category" defaultValue={food_category} required>
                                    <option value="breakfast">Select Category</option>
                                    <option value="breakfast">breakfast</option>
                                    <option value="dietfood">dietfood</option>
                                    <option value="lunch">lunch</option>
                                    <option value="dinner">dinner</option>
                                    <option value="snacks">snacks</option>
                                    <option value="fastfood">fastfood</option>
                                    <option value="italian">italian</option>
                                    <option value="healthy">healthy</option>
                                    <option value="japanese">japanese</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <select className="w-full py-4 border-2 rounded-lg px-2 my-2" name="origin" id="origin" defaultValue={origin} required>
                                    <option value="Bangladesh">Select Origin</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Italian">Italian</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="number" name="quantity" id="quantity" placeholder="Available Quantity" defaultValue={quantity} required />
                            </div>

                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="price" id="price" defaultValue={price} placeholder="Price*" required />
                        </div>
                        <div>
                            <textarea defaultValue={desc} className="w-full py-4 border-2 rounded-lg px-2 my-2 resize-none" name="desc" id="desc" cols="30" rows="5" placeholder="A short description of the food item ( ingredients, making procedure, etc. )" required></textarea>
                        </div>
                        <div>
                            <input className="btn btn-block bg-orange-400 text-white hover:bg-transparent hover:border hover:border-orange-400 hover:text-orange-400" type="submit" value="Update Food Item" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

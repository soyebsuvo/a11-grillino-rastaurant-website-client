import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


export default function AddFoodPage() {
    const {user} = useContext(AuthContext);
    const handleAddFood = e => {
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
        const newFood = {
            food_name : name, food_image : photo, count , made_by : userName, userEmail, food_category : category , origin , quantity , price, desc
        }
        console.log(newFood)
        axios.post(`http://localhost:5000/foods` , newFood)
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
                <title>Grillino | Add A Foods</title>
            </Helmet>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Add Food Item</h2>
            </div>
            <div>
                <div className="py-8">
                    <form onSubmit={handleAddFood}>
                        <div className="md:flex gap-4">
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="name" id="name" placeholder="Food Name*" required/>
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="photo" id="photo" placeholder="Food Photo URL*" required/>
                        </div>
                        <div className="md:flex gap-4">
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="userName" id="userName" defaultValue={user?.displayName} readOnly />
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="email" name="userEmail" id="userEmail" defaultValue={user?.email} readOnly  placeholder="Email"/>
                        </div>
                        <div className="md:flex gap-8">
                            <div className="w-full">
                                <select className="w-full py-4 border-2 rounded-lg px-2 my-2" name="category" id="category" required>
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
                                <select className="w-full py-4 border-2 rounded-lg px-2 my-2" name="origin" id="origin" required>
                                    <option value="Bangladesh">Select Origin</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Italian">Italian</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="number" name="quantity" id="quantity" placeholder="Available Quantity" required/>
                            </div>
                            
                            <input className="w-full py-4 border-2 rounded-lg px-2 my-2" type="text" name="price" id="price" placeholder="Price*" required/>
                        </div>
                        <div>
                            <textarea className="w-full py-4 border-2 rounded-lg px-2 my-2 resize-none" name="desc" id="desc" cols="30" rows="5" placeholder="A short description of the food item ( ingredients, making procedure, etc. )" required></textarea>
                        </div>
                        <div>
                            <input className="btn btn-block bg-orange-400 text-white hover:bg-transparent hover:border hover:border-orange-400 hover:text-orange-400" type="submit" value="Add Food Item" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

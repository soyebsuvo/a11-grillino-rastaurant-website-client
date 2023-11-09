import axios from "axios";
import FoodCard from "../../components/FoodMenus/FoodCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrFormSearch } from 'react-icons/gr';
import './allFoods.css'
import { Helmet } from "react-helmet-async";
export default function AllFoods() {
    const [foods , setFoods] = useState([])
    const [search , setSearch] = useState('')
    const {count} = useLoaderData()
    const foodPerPage = 9;
    const [currentPage , setCurrentPage] = useState(0)
    const totalPage = Math.ceil(count / foodPerPage);
    const pages = [...Array(totalPage).keys()]
    useEffect(() => {
        axios.get(`https://grillino-assignment-server.vercel.app/foodsByPage?skip=${currentPage}&limit=${foodPerPage}&search=${search}` , {withCredentials : true})
        .then(res => setFoods(res.data))
    } , [currentPage , foodPerPage , search])
    const handlePrev = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if(currentPage < totalPage - 1){
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <div className="px-8 md:px-20">
            <Helmet>
                <title>Grillino | All Foods</title>
                <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
            </Helmet>
            <div className="text-center py-5">
                <h3 className="font-edu-beginner text-orange-400 font-bold mb-2">Corporate Applications</h3>
                <h2 className="font-open-sans text-4xl font-bold">Our All Food Menu</h2>
            </div>
            <div className="flex justify-end items-center">
                <input onChange={(e) => setSearch(e.target.value)} className="px-2 py-2 w-56 border-2 border-gray-500 rounded-lg" type="text" name="item" id="item" placeholder="Search Food Name..."/>
                <span className="absolute"><GrFormSearch className="text-black text-3xl"></GrFormSearch></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-6">
                {
                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="text-center py-4">
                
                <button onClick={handlePrev} className="px-4 py-2 rounded-sm mr-2 bg-orange-200 hover:bg-orange-400 duration-300">Prev</button>
                {
                    pages?.map(page => <button onClick={() => setCurrentPage(page)} className={`px-4 py-2 rounded-sm mr-2 bg-orange-100 hover:bg-orange-400 duration-300 ${currentPage === page ? 'selected' : undefined}`} key={page}>{page + 1}</button>)
                }
                <button onClick={handleNext} className="px-4 py-2 rounded-sm mr-2 bg-orange-200 hover:bg-orange-400 duration-300">Next</button>
            </div>
        </div>
    )
}

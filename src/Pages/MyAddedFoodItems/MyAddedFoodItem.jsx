import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import DetailsButton from "../../components/FoodMenus/DetailsButton";
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyAddedFoodItem({ food , refetch }) {
    const deleteFoodItem = (id ) => {
        axios.delete(`http://localhost:5000/food/${id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire(
                    'Deleted!',
                    'Food Items Deleted Successfully!',
                    'success'
                  )
                  refetch()
            }
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <Card>
            <div className="relative">
                <CardMedia
                    component="img"
                    height="140"
                    sx={{ height: '200px' }}
                    image={food?.food_image}
                    alt="green iguana"
                />
                <Typography sx={{ position: 'absolute', bottom: '-8px', fontWeight: 'bolder', padding: '8px', backgroundColor: 'rgba(0,0,0,.5)', color: 'orange', width: '100%' }} gutterBottom variant="h6" component="div">
                    {food?.food_name} - ${food?.price}
                </Typography>
            </div>
            <CardContent>
                <div className="flex justify-between pb-2">
                    <Typography variant="subtitle1">
                        Category - {food?.food_category}
                    </Typography>
                    <Typography variant="subtitle1">
                        Available - {food?.quantity}
                    </Typography>
                </div>
                <div className="flex justify-between pb-3">
                    <Typography variant="subtitle1">
                        Made By - {food?.made_by}
                    </Typography>
                    <Typography variant="subtitle1">
                        Ordered - {food?.count}
                    </Typography>
                </div>
                {
                    food?.desc.length > 75 ? <Typography variant="body2" color="text.secondary">
                        {food?.desc?.slice(0, 75)}...
                    </Typography> : <Typography variant="body2" color="text.secondary">
                        {food?.desc}
                    </Typography>
                }


            </CardContent>

            <CardActions className="flex justify-end gap-3">
                <Link to={`/updateFood/${food?._id}`}><DetailsButton variant="contained">Update</DetailsButton></Link>
                <DetailsButton onClick={() => deleteFoodItem(food?._id)} variant="contained">Delete</DetailsButton>
            </CardActions>
        </Card>
    )
    }
    MyAddedFoodItem.propTypes = {
        food: PropTypes.object,
        refetch : PropTypes.func
    }
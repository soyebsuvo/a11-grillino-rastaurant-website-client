import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import DetailsButton from "../components/FoodMenus/DetailsButton";
import axios from "axios";
import Swal from "sweetalert2";
export default function MyOrderedItem({food , refetch}) {
    const deleteFoodItem = (id ) => {
        axios.delete(`http://localhost:5000/orders/${id}`)
        .then(result => {
            console.log(result.data)
            if(result.data.acknowledged){
                Swal.fire(
                    'Deleted!',
                    'Food Items Deleted Successfully!',
                    'success'
                  )
            }
            refetch()
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
                        I Ordered - {food?.quantity}
                    </Typography>
                </div>
                <div className="flex justify-between pb-3">
                    <Typography variant="subtitle1">
                        {food?.date}
                    </Typography>
                    <Typography variant="subtitle1">
                        Owner - {food?.made_by}
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
                <DetailsButton onClick={() => deleteFoodItem(food?._id)} variant="contained">Delete</DetailsButton>
            </CardActions>
        </Card>
    )
}
MyOrderedItem.propTypes = {
    food: PropTypes.object,
    refetch : PropTypes.func
}
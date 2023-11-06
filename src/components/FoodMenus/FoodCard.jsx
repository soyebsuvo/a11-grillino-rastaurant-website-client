import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import DetailsButton from "./DetailsButton";
export default function FoodCard({ food }) {
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
                    {food?.desc?.slice(0,75)}...
                </Typography> : <Typography variant="body2" color="text.secondary">
                    {food?.desc}
                </Typography>
                }
                
                
            </CardContent>

            <CardActions className="flex justify-end">
                <DetailsButton variant="contained">Details</DetailsButton>
            </CardActions>
        </Card>
    )
}
FoodCard.propTypes = {
    food: PropTypes.object
}
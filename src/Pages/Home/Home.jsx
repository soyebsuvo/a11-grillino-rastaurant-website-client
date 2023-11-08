import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import FoodCards from "../../components/FoodMenus/FoodCards";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Grillino | Home</title>
      </Helmet>
      <Banner></Banner>
      <FoodCards></FoodCards>
    </div>
  )
}

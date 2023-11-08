import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import FoodCards from "../../components/FoodMenus/FoodCards";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Grillino | Home</title>
        <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
      </Helmet>
      <Banner></Banner>
      <FoodCards></FoodCards>
      <Contact></Contact>
    </div>
  )
}

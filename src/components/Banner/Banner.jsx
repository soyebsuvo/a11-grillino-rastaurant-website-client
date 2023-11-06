import {Swiper , SwiperSlide} from 'swiper/react'
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
export default function Banner() {
  return (
    <div>
       <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <FirstSlide></FirstSlide>
        </SwiperSlide>
        <SwiperSlide>
            <SecondSlide></SecondSlide>
        </SwiperSlide>
        <SwiperSlide>
            <ThirdSlide></ThirdSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

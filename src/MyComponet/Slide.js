import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Image } from 'antd';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Concent/image/image1.png'
import image2 from '../Concent/image/image2.png'
import image3 from '../Concent/image/image3.png'
import '../App.css'
export default function SyncSlider() {
const arr=[image1,image2,image3]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700
      };
    return (
        <div>
            <Slider {...settings} >    
                {arr.map((item)=>(
                    <Image key={item} src={item} alt="slider" preview={false} width="100%" height="350px  " />
                ))}   
            </Slider>
        </div>
  );
}
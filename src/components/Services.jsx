import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div>
      <Carousel 
      infiniteLoop autoPlay showStatus={false} interval={2000}>
      <div>
        <img src={img1} alt="" />
        <p className="legend">Full Stack </p>
      </div>
      <div>
        <img src={img2} alt="" />
        <p className="legend">Peer-TO-Peer  </p>
      </div>
      </Carousel>
    </div>
  )
}

export default Services
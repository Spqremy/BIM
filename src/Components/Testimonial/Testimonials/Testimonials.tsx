import "./Testimonials.css";
import StoreTestimonial from "../../../Store/StoreTestimonail"
import Testimonial from "../Testimonial";

export interface Props {}

  const {testimonials} = StoreTestimonial;

const Testimonials = () => {
  return (
    <div className="distance">
      {testimonials.map(testimonial=>(<Testimonial {...testimonial}/>))}
    </div>
  );
};

export default Testimonials;



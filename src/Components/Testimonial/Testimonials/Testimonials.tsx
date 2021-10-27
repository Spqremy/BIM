import "./Testimonials.css";
import StoreTestimonial from "../../../Store/StoreTestimonail"
import Testimonial from "../Testimonial/Testimonial";
import { v4 as uuidv4 } from 'uuid';

export interface Props {}

  const {testimonials} = StoreTestimonial;

const Testimonials = () => {
  return (
    <div className="testimonialss">
      {testimonials.map(testimonial=>(<Testimonial key={uuidv4()} {...testimonial}/>))}
    </div>
  );
};

export default Testimonials;



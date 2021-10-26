import "./Testimonials.css";
import StoreTestimonial from "../../../Store/StoreTestimonail"
import Testimonial from "../Testimonial/Testimonial";

export interface Props {}

  const {testimonials} = StoreTestimonial;

const Testimonials = () => {
  return (
    <div className="testimonialss">
      {testimonials.map(testimonial=>(<Testimonial {...testimonial}/>))}
    </div>
  );
};

export default Testimonials;



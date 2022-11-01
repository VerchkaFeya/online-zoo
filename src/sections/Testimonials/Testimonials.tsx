import { Button, TestimonialCard } from "../../components";
import { testimonialsData } from "./data";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="wrapper">
        <h3 className="testimonials__title">Testimonials</h3>
        <div className="testimonials__cards">
          <TestimonialCard card={testimonialsData[0]} />
          <TestimonialCard card={testimonialsData[1]} />
          <TestimonialCard card={testimonialsData[2]} />
          <TestimonialCard card={testimonialsData[3]} />
        </div>
        <div className="testimonials__progress-bar">
          progress bar
        </div>
        <Button form="square">Leave feedback</Button>
      </div>
    </section>
  );
};

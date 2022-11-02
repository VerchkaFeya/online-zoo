import { FC } from "react";

type TTestimonialCard = {
  card: {
    avatar: string;
    location: string;
    name: string;
    time: string;
    text: string;
  };
};

export const TestimonialCard: FC<TTestimonialCard> = ({ card }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__header">
        <img
          className="testimonial-card__avatar"
          alt="avatar"
          src={card.avatar}
        />
        <div>
          <p className="testimonial-card__name">{card.name}</p>
          <div>
            <p className="testimonial-card__location">{card.location}</p>
            <p className="testimonial-card__time">{card.time}</p>
          </div>
        </div>
      </div>
      <p className="testimonial-card__text">{card.text}</p>
    </div>
  );
};

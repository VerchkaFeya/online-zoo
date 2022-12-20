import { useState, useEffect } from "react";
import { Button, TestimonialCard } from "../../components";
import { testimonialsData } from "./data";

export const Testimonials = () => {
  const [rangeValue, setRangeValue] = useState("0");

  const screenWidth = window.screen.availWidth;

  return (
    <section className="testimonials">
      <div className="wrapper">
        <h3 className="testimonials__title">Testimonials</h3>
        <div className="testimonials__cards">
          <div
            className="testimonials__cards-wrapper"
            style={{ transform: `translateX(-${295 * Number(rangeValue)}px)` }}
          >
            {testimonialsData.map((item, key) => {
              return <TestimonialCard card={item} key={`${key}-card`} />;
            })}
          </div>
        </div>
        <div className="testimonials__progress-bar progress-bar">
          <input
            type="range"
            min="0"
            max={screenWidth > 1440 ? "7" : "10"}
            step="1"
            value={rangeValue}
            className="progress-bar__range"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRangeValue(e.target.value)
            }
          />
        </div>
        <div className="testimonials__button">
          <Button form="square">Leave feedback</Button>
        </div>
      </div>
    </section>
  );
};

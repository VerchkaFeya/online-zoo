import { AnimalCard, Button } from "../../components";
import { animalsData } from "./animalsData";

export const Animals = () => {
  return (
    <section className="animals">
      <div className="animals__wrapper">
        <div className="animals__slider">
          <span className="animals__arrow animals__arrow_prev">&larr;</span>
          <div className="animals__cards">
            {animalsData.map((item, index) => {
              return <AnimalCard animal={item} key={index} />;
            })}
          </div>
          <span className="animals__arrow animals__arrow_next"> &rarr; </span>
        </div>
        <div className="animals__button">
          <Button form="round">choose your favorite</Button>
        </div>
      </div>
    </section>
  );
};

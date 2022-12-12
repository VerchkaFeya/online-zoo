import { FC } from "react";
import { Herbivore, Predator } from "../../svg";

type TAnimalCard = {
  animal: {
    id: number;
    name: string;
    location: string;
    type: string;
    image: string;
  };
};

export const AnimalCard: FC<TAnimalCard> = ({ animal }) => {
  return (
    <div className="animal-card">
      <div className="animal-card__image">
        <img src={animal.image} alt={`${animal.name}`} />
      </div>
      <div className="animal-card__info">
        <div>
          <p className="animal-card__name">{animal.name}</p>
          <p className="animal-card__location">{animal.location}</p>
        </div>
        {animal.type === "predator" ? <Predator /> : <Herbivore />}
      </div>
    </div>
  );
};

import { manInBambooHat } from "../../img";

export const Backstage = () => {
  return (
    <section className="backstage">
      <div className="wrapper backstage__wrapper">
        <div className="backstage__content">
          <img
            alt="man in bamboo hat"
            className="backstage__image"
            src={manInBambooHat}
          />
          <div className="backstage__info">
            <h3 className="backstage__section-title">
              The Backstage of the Wilderness World.
            </h3>
            <p className="backstage__description">
              The site was founded on the basis of a volunteer movement to
              protect and care for animals.
            </p>
            <h4 className="backstage__subtitle">How it works </h4>
            <p className="backstage__text">
              The main goal is to help the animals, as well as the nature
              reserves and zoos where they are kept. We are currently working on
              video projects targeting pandas in China, eagles on an island near
              Los Angeles, alligators in Florida and gorillas in the Congo.
              These have a total of more than 1,500 mammals and reptiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

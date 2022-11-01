import { Button } from "../../components";
import { step1, step2, step3 } from "../../img";

const cardsData = [
  {
    text: "Pay with card",
    img: step1,
  },
  {
    text: "Payment goes to the zoo",
    img: step2,
  },
  {
    text: "Your favourite animal gets delicious dish",
    img: step3,
  },
];

export const PickAndFeed = () => {
  return (
    <section className="pick-and-feed">
      <div className="wrapper pick-and-feed__wrapper">
        <h3 className="pick-and-feed__title">Pick and feed a friend</h3>
        <p className="pick-and-feed__subtitle">
          We know the animals bring you joy, and in these extraordinary times,
          we’re glad.
        </p>
        <p className="pick-and-feed__bold-text">
          During a time when the COVID-19 epidemic is touching all of our lives,
          we’re proud and glad that people around the world find joy in
          PetStory.
        </p>
        <p className="pick-and-feed__text">
          Even though the zoo has reopened, we need you now more than ever to
          help us deal with these problems. Please consider a gift to our
          Emergency Support Fund.
        </p>
        <h4 className="pick-and-feed__schema-title">How it works</h4>
        <div className="feed-schema">
          <div className="feed-schema__card">
            <div
              className="feed-schema__image"
              style={{ backgroundImage: `url(${cardsData[0].img})` }}
            ></div>
            <p className="feed-schema__card-text">{cardsData[0].text}</p>
          </div>
          <span className="feed-schema__arrow" />
          <div className="feed-schema__card">
            <div
              className="feed-schema__image"
              style={{ backgroundImage: `url(${cardsData[1].img})` }}
            ></div>
            <p className="feed-schema__card-text">{cardsData[1].text}</p>
          </div>
          <span className="feed-schema__arrow" />
          <div className="feed-schema__card">
            <div
              className="feed-schema__image"
              style={{ backgroundImage: `url(${cardsData[2].img})` }}
            ></div>
            <p className="feed-schema__card-text">{cardsData[2].text}</p>
          </div>
        </div>
        <div className="pick-and-feed__button">
          <Button form="round">Feed a friend now</Button>
        </div>
      </div>
    </section>
  );
};

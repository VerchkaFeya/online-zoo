import { Button } from "../../components";
import { Panda } from "../../svg";

export const Donation = () => {
  return (
    <section className="donation">
      <div className="wrapper">
        <p className="donation__title">
          THE ZOO HAS OFFICIALLY REOPENED BUT WE STILL NEED YOUR HELP!
        </p>
        <p className="donation__text">
          Even though the Zoo has been able to reopen, we are at a greatly
          educed capacity with educational programs and public and private
          events cancelled or postponed for additional months. We need you now
          more than ever to help ensure that we overcome these challenges. We
          have been actively raising funds in the community, and we are grateful
          for the generosity. But much more support is still needed, and we need
          your help! Please consider a gift today – no matter what size – to
          help us sustain our mission.
        </p>
        <p className="donation__subtitle">Donation Information</p>
        <div className="donation-block">
          <h1 className="donation-block__title">Pick and feed a friend</h1>
          <p className="donation-block__subtitle">
            We know the animals bring you joy, and in these extraordinary times,
            we’re glad.
          </p>
          <div className="donation-block__infographic infographic">
            <div className="infographic__amount">
              <span className="infographic__number">4</span>
              <p className="infographic__text">
                <span>Panda</span> diet for the day.
              </p>
            </div>
            <div> &#10005; </div>
            <div className="infographic__image">
              <Panda />
            </div>
          </div>
          <div className="donation-block__scale scale">
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="5000"
                id="amount-5000"
              />
              <label htmlFor="amount-5000">$5000</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="2000"
                id="amount-2000"
              />
              <label htmlFor="amount-2000">$2000</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="1000"
                id="amount-1000"
              />
              <label htmlFor="amount-1000">$1000</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="500"
                id="amount-500"
                checked
              />
              <label htmlFor="amount-500">$500</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="250"
                id="amount-250"
              />
              <label htmlFor="amount-250">$250</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="100"
                id="amount-100"
              />
              <label htmlFor="amount-100">$100</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="50"
                id="amount-50"
              />
              <label htmlFor="amount-50">$50</label>
            </div>
            <div className="scale__circle">
              <input
                type="radio"
                name="donation-amount"
                value="25"
                id="amount-25"
              />
              <label htmlFor="amount-25">$25</label>
            </div>
          </div>
          <input
            className="donation-block__input"
            type="text"
            placeholder="Another amount"
          />
          <div className="donation-block__time">
            <div className="donation-block__time-item">
              <input
                type="radio"
                name="donation-time"
                value="monthly"
                id="time-monthly"
                checked
              />
              <label htmlFor="monthly">Monthly</label>
            </div>
            <div className="donation-block__time-item">
              <input
                type="radio"
                name="donation-time"
                value="once"
                id="time-once"
              />
              <label htmlFor="monthly">Once</label>
            </div>
          </div>
          <div className="donation-block__button">
            <Button form="round">Feed a friend now</Button>
          </div>
          <p>Share with your friends on social networks </p>
        </div>
      </div>
    </section>
  );
};

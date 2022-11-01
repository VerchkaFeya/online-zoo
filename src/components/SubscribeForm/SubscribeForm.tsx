export const SubscribeForm = () => {
  return (
    <div className="subscribe-form">
      <p className="subscribe-form__title">Subscribe to our news</p>
      <input
        className="subscribe-form__input"
        type="text"
        placeholder="Enter your email"
      ></input>
      <button className="subscribe-form__button" type="submit">
        Submit
      </button>
    </div>
  );
};

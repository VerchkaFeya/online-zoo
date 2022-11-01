import { Button } from "../../components";

export const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `` }}>
      <div className="wrapper">
        <div className="hero__content">
          <h1>
            Watch
            <br />
            your
            <br />
            <span>favorite</span>
            <br />
            animal
            <br />
            online
          </h1>
          <Button form="round">watсh online</Button>
        </div>
      </div>
    </section>
  );
};

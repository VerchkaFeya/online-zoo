import {
  Backstage,
  Hero,
  PickAndFeed,
  Testimonials,
  Animals,
} from "../sections";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Backstage />
      <Animals />
      <PickAndFeed />
      <Testimonials />
    </>
  );
};

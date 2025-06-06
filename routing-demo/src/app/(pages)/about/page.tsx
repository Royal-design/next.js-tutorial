import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about"
};

const getRandomNumber = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function About() {
  const random = getRandomNumber(2);
  if (random === 1) {
    throw new Error("Error loading about page");
  }

  return (
    <div className="">
      About Me
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quas
        nemo, facilis repudiandae asperiores temporibus magni minima at quis
        dolore.
      </p>
    </div>
  );
}

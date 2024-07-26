import Button from "./Button";
import Lottie from "lottie-react";
import heroAnimation from "../assets/AnimationHero.json";

function Hero() {
  return (
    <>
      <div className="hero flex justify-between flex-wrap items-center my-5 relative">
        <div className="info__hero flex flex-col w-[33rem] ml-8">
          <h1 className="text-[3rem] mb-2 font-semibold">
            Your Well-being is Important
          </h1>
          <p className="text-lg">
            Discover a supportive environment where you can connect, share
            experiences, and grow alongside others who are on their own mental
            health journeys.
          </p>
        </div>
        <div className="img__hero">
          <Lottie animationData={heroAnimation} />
        </div>
        <div className="btn__hero absolute top-[26rem] left-8">
          <Button>
            Speak it out <span>&rarr;</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;

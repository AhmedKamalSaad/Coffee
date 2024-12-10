import React from "react";

const Hero = () => {
  return (
    <section className="bg-bannerImg bg-cover bg-center h-[500px] flex items-center justify-center relative mx-auto">
        <div className="absolute w-full h-full bg-black/50"></div>
      <div className="sm:text-left z-10 text-center">
        <h1 className=" font-bold text-white/90 text-4xl md:text-5xl lg:text-6xl">
          Enjoy our <span className="text-amber-800/90">Coffee</span>
        </h1>
        <p className="text-slate-300/90">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis
        </p>
      </div>
    </section>
  );
};

export default Hero;

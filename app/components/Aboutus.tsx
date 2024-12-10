import React from "react";

const Aboutus = () => {
  return (
    <section className="bg-bannerImg bg-cover bg-center h-[500px] flex items-center justify-center relative mx-auto">
      <div className="absolute w-full h-full bg-black/50"></div>
      <div className="sm:text-left z-10 text-center">
        <h1 className=" font-bold text-white/90 text-4xl md:text-5xl lg:text-6xl">
          About Us
        </h1>
        <p className="text-slate-300/90 max-w-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          dicta eum blanditiis quidem quas! Aut provident ducimus dolores
          perspiciatis, consectetur, quasi accusamus enim ab voluptas officiis
          vel ex! Harum, nemo?
        </p>
      </div>
    </section>
  );
};

export default Aboutus;

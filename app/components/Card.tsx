import React from "react";
import { coffee } from "../utils/useHot";
import Image from "next/image";

const Card = ({ coffee }: { coffee: coffee }) => {
  return (
    <div className="  h-[230px] relative flex flex-col justify-center items-center border-red-100  bg-amber-900/70 overflow-visible rounded-xl">
      <Image
        src={coffee.image}
        alt="img"
        width={200}
        height={200}
        className="object-cover rounded-full w-[150px] h-[150px] absolute -top-20"
      />
      <div>
        <h1 className="font-bold text-xl text-center ">{coffee.title}</h1>
        <p className="text-slate-500/90 text-wrap px-2	">
          {coffee.ingredients.map((integredient) =>'-'+ integredient + " ")}
        </p>
      </div>
    </div>
  );
};

export default Card;

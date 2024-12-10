import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Card from "./Card";
import coffeImg from "@/public/liquid-splash-coffee-beans-white-background.png";
import Image from "next/image";
import { coffee } from "../utils/useHot";
interface Props {
  text: string;
  data: coffee[];
}
const Products = async ({ data, text }: Props) => {
  return (
    <section className="max-w-screen-xl  mx-auto py-9 px-4 md:px-0">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-white/90 text-4xl md:text-5xl lg:text-6xl text-center ">
          {text} <span className="text-amber-800/90">Coffee</span>
        </h1>
        <Image
          src={coffeImg}
          alt="coffe"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="px-5 max-w-screen-xl w-[70%] sm:w-[80%] md:w-[85%] lg:w-[90%] mx-auto"
      >
        <CarouselContent>
          {data.slice(0, 15).map((d) => (
            <CarouselItem
              key={d.id}
              className="md:pl-1  md:basis-1/3 lg:basis-1/4 overflow-visible z-10"
            >
              <div className="p-1 pt-20 overflow-visible z-10">
                <Card coffee={d} key={d.id} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Products;

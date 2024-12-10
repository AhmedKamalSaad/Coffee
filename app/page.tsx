import Aboutus from "./components/Aboutus";
import Cold from "./components/Cold";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hot from "./components/Hot";
import Reviews from "./components/Reviews";
import Special from "./components/Special";

export default function Home() {
  return (
    <>
      <Hero />
      <Hot />
      <Cold />
      <Special/>
      <Aboutus/>
      <Reviews/>
      <Footer />
    </>
  );
}

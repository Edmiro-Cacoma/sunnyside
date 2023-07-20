import React from "react";
import Header from "./Header/Header";
import Showcase from "./Showcases/showcase";
import Testimonials from "./Testimonials/Tesimonials";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Showcase />
        <Testimonials />
        <Gallery />
      </main>
    </div>
  );
};
export default Home;

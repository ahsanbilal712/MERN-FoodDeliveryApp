import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Searchbar/>
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

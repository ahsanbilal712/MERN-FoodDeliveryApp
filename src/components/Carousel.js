import React, {  useState } from "react";

export default function Carousel() {
  
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/400x700/?burger" className="d-block w-100" style={{ width: "300px", height: "500px" }} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/400x700/?cake" className="d-block w-100" style={{ width: "300px", height: "500px" }} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/400x700/?pastery" className="d-block w-100" style={{ width: "300px", height: "500px" }} alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

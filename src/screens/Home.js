import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Searchbar from "../components/Searchbar";

export default function Home() {
  const [foodCat, setFoodCat] = useState('');
  const [foodItem, setFoodItem] = useState([]);


  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5001/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);

      // console.log(response[0], response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Searchbar />
      </div>
      <div className="container">
  {foodCat.length !== 0 ? (
    foodCat.map((data) => {
      return (
        <div key={data._id} className="row mb-3">
          <div>
            <div className="fs-3 m-3">{data.CategoryName}</div>
            <hr />
            {foodItem.length !== 0 ? (
              foodItem
                .filter((item) => item.CategoryName === data.CategoryName) 
                .map((filterItems) => {
                  return (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                      <Card foodName = {filterItems.name}
                      options = {filterItems.options[0]}
                      imgSrc = {filterItems.img}

                      
                      ></Card>
                    </div>
                  );
                })
            ) : (
              <div>No such data</div>
            )}
          </div>
        </div>
      );
    })
  ) : (
    <div>No categories available</div>
  )}
</div>


      <div>
        <Footer />
      </div>
    </div>
  );
}

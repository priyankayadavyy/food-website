import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../components/Exploremanu/Exploremenu";
import AppDownload from "../../components/AppDownload/AppDownload";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  );
};

export default Home;

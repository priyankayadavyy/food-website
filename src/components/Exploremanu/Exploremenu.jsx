import React from "react";
import "./Explore.css";
import Menu1 from "../../assets/menu_1.png";
import Menu2 from "../../assets/menu_2.png";
import Menu3 from "../../assets/menu_3.png";
import Menu4 from "../../assets/menu_4.png";
import Menu5 from "../../assets/menu_5.png";
import Menu6 from "../../assets/menu_6.png";
import Menu7 from "../../assets/menu_7.png";
import Menu8 from "../../assets/menu_8.png";

const Exploremenu = ({ category, setCategory }) => {
  const menu_list = [
    {
      menu_name: "Salad",
      menu_image: Menu1,
    },
    {
      menu_name: "Rolls",
      menu_image: Menu2,
    },
    {
      menu_name: "Deserts",
      menu_image: Menu3,
    },
    {
      menu_name: "Sandwich",
      menu_image: Menu4,
    },
    {
      menu_name: "Cake",
      menu_image: Menu5,
    },
    {
      menu_name: "Pure Veg",
      menu_image: Menu6,
    },
    {
      menu_name: "Pasta",
      menu_image: Menu7,
    },
    {
      menu_name: "Noodles",
      menu_image: Menu8,
    },
  ];
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary exportise. Our mission
        is to satisfy your cravings and elevate your aining experience, one
        deliclous meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prve) =>
                  prve === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;

import { createContext, useState } from "react";
import Food1 from "../assets/food_1.png";
import Food2 from "../assets/food_2.png";
import Food3 from "../assets/food_3.png";
import Food4 from "../assets/food_4.png";
import Food5 from "../assets/food_5.png";
import Food6 from "../assets/food_6.png";
import Food7 from "../assets/food_7.png";
import Food8 from "../assets/food_8.png";
import Food9 from "../assets/food_9.png";
import Food10 from "../assets/food_10.png";
import Food11 from "../assets/food_11.png";
import Food12 from "../assets/food_12.png";
import Food13 from "../assets/food_13.png";
import Food14 from "../assets/food_14.png";
import Food15 from "../assets/food_15.png";
import Food16 from "../assets/food_16.png";
import Food17 from "../assets/food_17.png";
import Food18 from "../assets/food_18.png";
import Food19 from "../assets/food_19.png";
import Food20 from "../assets/food_20.png";
import Food21 from "../assets/food_21.png";
import Food22 from "../assets/food_22.png";
import Food23 from "../assets/food_23.png";
import Food24 from "../assets/food_24.png";
import Food25 from "../assets/food_25.png";
import Food26 from "../assets/food_26.png";
import Food27 from "../assets/food_27.png";
import Food28 from "../assets/food_28.png";
import Food29 from "../assets/food_29.png";
import Food30 from "../assets/food_30.png";
import Food31 from "../assets/food_31.png";
import Food32 from "../assets/food_32.png";

export const Food_list = [
  {
    _id: "1",
    name: "Greek salad",
    image: Food1,
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Veg salad",
    image: Food2,
    price: 15,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Salad",
  },
  {
    _id: "3",
    name: "Clover Salad",
    image: Food3,
    price: 20,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Salad",
  },
  {
    _id: "4",
    name: "Chicken salad",
    image: Food4,
    price: 18,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Salad",
  },
  {
    _id: "5",
    name: "Lasagn Rolls",
    image: Food5,
    price: 12,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Rolls",
  },
  {
    _id: "6",
    name: "Peri Peri Rolls",
    image: Food6,
    price: 10,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Rolls",
  },
  {
    _id: "7",
    name: "Chicken Rolls",
    image: Food7,
    price: 22,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Rolls",
  },
  {
    _id: "8",
    name: "Veg Rolls",
    image: Food8,
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Rolls",
  },
  {
    _id: "9",
    name: "Ripple Ice Cream",
    image: Food9,
    price: 19,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Deserts",
  },
  {
    _id: "10",
    name: "Fruit Ice Cream",
    image: Food10,
    price: 13,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Deserts",
  },
  {
    _id: "11",
    name: "Jar Ice Cream",
    image: Food11,
    price: 14,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Deserts",
  },
  {
    _id: "12",
    name: "Vanilla Ice Cream",
    image: Food12,
    price: 16,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Deserts",
  },
  {
    _id: "13",
    name: "Chicken Sandwich",
    image: Food13,
    price: 26,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Sandwich",
  },
  {
    _id: "14",
    name: "Vegan Sandwich",
    image: Food14,
    price: 21,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Sandwich",
  },
  {
    _id: "15",
    name: "Grilled Sandwich",
    image: Food15,
    price: 10,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Sandwich",
  },
  {
    _id: "16",
    name: "Bread Sandwich",
    image: Food16,
    price: 11,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Sandwich",
  },
  {
    _id: "17",
    name: "Cup Cake",
    image: Food17,
    price: 25,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Cake",
  },
  {
    _id: "18",
    name: "Vegan Cake",
    image: Food18,
    price: 28,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Cake",
  },
  {
    _id: "19",
    name: "Butterscotch Cake",
    image: Food19,
    price: 30,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Cake",
  },
  {
    _id: "20",
    name: "Sliced Cake",
    image: Food20,
    price: 34,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Cake",
  },
  {
    _id: "21",
    name: "Garlic Mushroom",
    image: Food21,
    price: 23,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pure Veg",
  },
  {
    _id: "22",
    name: "Fried Cauliflower",
    image: Food22,
    price: 28,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pure Veg",
  },
  {
    _id: "23",
    name: "Mix Veg Pulao",
    image: Food23,
    price: 30,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pure Veg",
  },
  {
    _id: "24",
    name: "Rice Zucchini",
    image: Food24,
    price: 23,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pure Veg",
  },
  {
    _id: "25",
    name: "Cheese Pasta",
    image: Food25,
    price: 20,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pasta",
  },
  {
    _id: "26",
    name: "Tomato Pasta",
    image: Food26,
    price: 22,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pasta",
  },
  {
    _id: "27",
    name: "Creamy Pasta",
    image: Food27,
    price: 30,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pasta",
  },
  {
    _id: "28",
    name: "Chicken Pasta",
    image: Food28,
    price: 34,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Pasta",
  },
  {
    _id: "29",
    name: "Butter Noodles",
    image: Food29,
    price: 23,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Noodles",
  },
  {
    _id: "30",
    name: "Veg Noodles",
    image: Food30,
    price: 34,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Noodles",
  },
  {
    _id: "31",
    name: "Somen Noodles",
    image: Food31,
    price: 23,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Noodles",
  },
  {
    _id: "32",
    name: "Cooked Noodles",
    image: Food32,
    price: 23,
    description:
      "Food provides essential nutrients for overall health and well-being.",
    category: "Noodles",
  },
];

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCard = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    Food_list,
    cartItems,
    setCartItems,
    addToCard,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

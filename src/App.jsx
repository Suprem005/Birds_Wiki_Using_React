import React from "react";
import Cars from "./Cars";

const sectionStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "1rem",
};
const carData = [
  {
    id: 1,
    brand: "Porsche",
    model: "911 Cayman GT",
    price: 1222500,
    image: "src/assets/car_image/cayman.jpg",
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Aventador SVJ",
    price: 1949640,
    image: "src/assets/car_image/aventador_sv.jpg",
  },
  {
    id: 1,
    brand: "Bently",
    model: "Flying Spur",
    price: 266850,
    image: "src/assets/car_image/bently.jpg",
  },
  {
    id: 1,
    brand: "Dodge",
    model: "Hellcat Charger",
    price: 89300,
    image: "src/assets/car_image/hellcat.jpg",
  },
  {
    id: 1,
    brand: "Koenigsegg",
    model: "Jesko",
    price: 3000000,
    image: "src/assets/car_image/jesko.jpg",
  },
  {
    id: 1,
    brand: "Ford",
    model: "Mustang GT",
    price: 1369000,
    image: "src/assets/car_image/mustang.jpg",
  },
  {
    id: 1,
    brand: "Maclaren",
    model: "P1",
    price: 1150000,
    image: "src/assets/car_image/p1.jpg",
  },
  {
    id: 1,
    brand: "Rolls Royce",
    model: "Phantom",
    price: 660000,
    image: "src/assets/car_image/royce.jpg",
  },
  {
    id: 1,
    brand: "Maclaren",
    model: "Senna",
    price: 1200000,
    image: "src/assets/car_image/senna.jpg",
  },
  {
    id: 1,
    brand: "Toyota",
    model: "Supra",
    price: 53142,
    image: "src/assets/car_image/supra.webp",
  },
];

const App = () => {
  return (
    <section style={sectionStyle}>
      {carData.map((item, index, array) => {
        return (
          <Cars
            key={item.id}
            brand={item.brand}
            model={item.model}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </section>
  );
};

export default App;

import React from "react";

const divStyle = {
  justifyContent: "space-around",
  width: "250px",
  margin: "3rem",
  border: "1px solid #cfb0f7",
  borderRadius: "5px",
  backgroundColor: " #310647",
  boxShadow:
    " rgba(6, 30, 140, 0.25) 0px 54px 55px, rgba(231, 28, 28, 0.12) 0px -12px 30px, rgba(209, 19, 238, 0.12) 0px 4px 6px, rgba(206, 98, 235, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
};

const imgStyle = {
  width: "100%",
  height: "300px",
};

const captionStyle = {
  marginTop: "2px",
  textAlign: "center",
  color: " #f9b7cd",
};
const carTypeStyle = {
  marginTop: "2px",
  textAlign: "center",
  color: " #ebdf09",
};
const Cars = (props) => {
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.image} alt="" />
      <a href="https://en.wikipedia.org/wiki/Porsche" target="blank">
        <h3 style={captionStyle}>{props.brand}</h3>
      </a>
      <h4 style={captionStyle}>Model: {props.model}</h4>
      <h4 style={captionStyle}>Price: {props.price}</h4>
      <h4 style={carTypeStyle}>
        {" "}
        {props.price >= 1150000 || props.price <= 89400
          ? "Sports Car"
          : "Luxury Car"}
      </h4>
    </div>
  );
};

export default Cars;

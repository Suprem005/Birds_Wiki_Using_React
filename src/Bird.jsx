const divStyle = {
  width: "250px",
  margin: "2rem",
  padding: "1rem",
  border: "1px solid #cfb0f7",
  borderRadius: "2px",
  backgroundColor: " #392f4f",
  boxShadow:
    " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
};

const imgStyle = {
  width: "100%",
  height: "250px",
};

const buttonStyle = {
  display: "flex",
  padding: "3px",
  borderRadius: "3px",
  background: "white",

  //   color: "white",
};

const captionStyle = {
  marginTop: "0px",
  marginBottom: "5px",
};

const toggleText = () => {
  // Get all the elements from the page
  let points = document.getElementById("points");

  let showMoreText = document.getElementById("moreText");

  let buttonText = document.getElementById("textButton");

  // If the display property of the dots
  // to be displayed is already set to
  // 'none' (that is hidden) then this
  // section of code triggers
  if (points.style.display === "none") {
    // Hide the text between the span
    // elements
    showMoreText.style.display = "none";

    // Show the dots after the text
    points.style.display = "inline";

    // Change the text on button to
    // 'Show More'
    buttonText.innerHTML = "Show More";
  }

  // If the hidden portion is revealed,
  // we will change it back to be hidden
  else {
    // Show the text between the
    // span elements
    showMoreText.style.display = "inline";

    // Hide the dots after the text
    points.style.display = "none";

    // Change the text on button
    // to 'Show Less'
    buttonText.innerHTML = "Show Less";
  }
};

const Bird = (props) => {
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.image} alt="" />

      <h3 style={captionStyle}>{props.name}</h3>
      <p>
        {props.about}
        <span id="points">...</span>
        <span id="moreText">{props.aboutMore}</span>
      </p>
      <button onClick={toggleText} id="textButton" style={buttonStyle}>
        Show More
      </button>
    </div>
  );
};

export default Bird;

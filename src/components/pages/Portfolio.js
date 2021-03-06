import React, {useState, useEffect} from "react";
import Footer from "../Footer.js";
import "../css/style.css";
import Artwork from "../Artwork.js";
import Fullpage from "../Fullpage.js";

function Portfolio() {

  const [title, setTitle] = useState("");
  const [show, setShow] = useState(true);

  function mouseOver(e) {
    // setTitle("Imaginary-Traveler");
    setTitle(e.target.innerHTML);
    e.target.style.color = "black";
  }

  function mouseLeave(e) {
    setTitle("");
    e.target.style.color = "gray";
  }

  function handleClick(e) {
    setTitle(e.target.innerHTML);
    setShow(false);
  }

  function handleClickBack(e) {
    setTitle("");
    setShow(true);
  }


  return (
    <div className="container wrap">

    {show? (<>
      <div className="row">
        <div class="col-md-2">
          <br/><br/>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>Imaginary-Traveler</p>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>Blossom-Your-Windows</p>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>Fishes-No-Freedom</p>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>See-The-Sky</p>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>Art-A-Burger</p>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>Draw-A-Line</p>
          <p style={{color:"gray"}} onMouseOver={mouseOver} onMouseLeave={mouseLeave} onClick={handleClick}>Go-Drink</p>
        </div>

        <div class="col-md-10">
          {title?<Artwork title={title}/>: ""}
        </div>
      </div>
    </>) : (<>

    {title?<Fullpage title={title} onClick={handleClickBack}/>:""}

    </>)
    
  }
      
    <Footer/>   
  </div>
  );
}


export default Portfolio;

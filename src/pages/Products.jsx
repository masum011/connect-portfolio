import React from "react";
import proimg from '../images/iPhone15Pro.png'
import { useLocation, useNavigate } from "react-router-dom";

// gsap animation library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// images png
import consing from "../images/conspng.png";
import healthimg from "../images/healthimg.png";
import entpng from "../images/entertaimentpng.png";
import eventpng from "../images/eventpng.png";
import homepng from "../images/petpng.png";
import petpng from "../images/petpng.png";
import footerimg from '../images/Group.png'

// materila ui animation , work pending
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";

// components
import ImageContent from "../components/ImageContent";
import TextContent from "../components/TextContent";
import Home from "./Home";


// All Product Data
const constheader = "Construction  Sector";
const consContext =
  'Cementing Dreams, Crafting Futures": At Connect, our success is built on the dedication of every member of our team, from skilled labourers to seasoned professionals...';

const healthheader = "Healthcare Sector";
const healthcontent =
  "Healing Hearts, Enriching Lives. At Connect Healthcare, we forge bonds between caregivers, infusing empathy and unity. Our platform fosters heartfelt connections among...";

const entertaimentheader = "Entertainment Sector";
const entertaimentcontext =
  "At Connect Entertainment, we re igniting excitement by assembling a dynamic team of talents and together, we ll light up the stage and leave audiences in awe...";

const eventheader = "Event Sector";
const eventcontet =
  "At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...";

const homeheader = "Home  Sector";
const homecontext =
  "At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...";

const petheader = "Pet's Sector";
const petcontect =
  "At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...";


// product component
const Products = () => {
  const navigate = useNavigate();
  const location=useLocation()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.from(".nav",{x:-100,scrollTrigger:{trigger:'.product',start:'top top',scrub:true}});
  })

  return (
    <div>
      <div className="all--products">
        <div className="product">
          <div className="nav">
            <div className="nav--link">
              {[
                "All Products",
                "Health Sector",
                "Petcare Sector",
                "Construction Sector",
                "Event Sector",
                "Management Sector",
              ].map((items) => {
                const navigateval = items.toLowerCase().split(" ")[0];
                console.log(location.pathname === "/" ? "active" : "")
                return (
                  <ul>
                    <li onClick={() => navigate(navigateval)}>{items}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="images">
            <img src={proimg} alt="phone" />
          </div>
          <div className="connect">
            <h2>CONNECT</h2>
            <p>
              Egohet kaplatuna. Ana. Id. Psykotyp nötigt. Nenat. Isam. Teleligt
              supravanade. Antere dekas. Reangar. Snackis but. Dekang trejon.
              Virad. Diar naning. Donera avis. Lånegarderob nede. Deepfake
              reaform. Tetisävis e-learning. Kroviling nyvis. Gardinhängarjobb
              kyhet. Spement.
            </p>
          </div>
        </div>

        <div className="constraction">
          <div className="text-construction">
            <TextContent header={constheader} content={consContext} link='construction'/>
          </div>
          <div className="dot">
            <div id="dot-top" style={{ height: "10px", width: "10px" }}></div>
            <div
              id="dot-button"
              style={{ height: "10px", width: "10px" }}
            ></div>
          </div>
          <div className="img--content">
            <ImageContent images={consing} />
          </div>
        </div>
        <div className="health--care">
          <div className="img--content">
            <ImageContent images={healthimg} />
          </div>
          <div className="dot"></div>
          <div className="text-health">
            <TextContent header={healthheader} content={healthcontent} link='health'/>
          </div>
        </div>
        <div className="constraction">
          <div className="text-construction">
            <TextContent
              header={entertaimentheader}
              content={entertaimentcontext}
              link='management'
            />
          </div>
          <div className="dot">
            <div id="dot-top" style={{ height: "10px", width: "10px" }}></div>
            <div
              id="dot-button"
              style={{ height: "10px", width: "10px" }}
            ></div>
          </div>
          <div className="img--content">
            <ImageContent images={entpng} />
          </div>
        </div>
        <div className="health--care">
          <div className="img--content">
            <ImageContent images={eventpng} />
          </div>
          <div className="dot"></div>
          <div className="text-health">
            <TextContent header={eventheader} content={eventcontet} link='event'/>
          </div>
        </div>
        <div className="constraction">
          <div className="text-construction">
            <TextContent header={homeheader} content={homecontext} link='health'/>
          </div>
          <div className="dot">
            <div id="dot-top" style={{ height: "10px", width: "10px" }}></div>
            <div
              id="dot-button"
              style={{ height: "10px", width: "10px" }}
            ></div>
          </div>
          <div className="img--content">
            <ImageContent images={homepng} />
          </div>
        </div>
        <div className="health--care">
          <div className="img--content">
            <ImageContent images={petpng} />
          </div>
          <div className="dot">
            <div id="dot-button" style={{ height: "10px", width: "10px" }}>
              {" "}
              <span
                className="squre-shave"
                style={{ height: "4px", width: "4px" }}
              ></span>
            </div>
          </div>
          <div className="text-health">
            <TextContent header={petheader} content={petcontect} link='petcare'/>
          </div>
        </div>
        <div className="footer">
            <div className="text">
                <button>CONNECT Privacy Day 2024</button>
                <h2>Three important measures to protect user information</h2>
            </div>
            <div className="img">
                <img src={footerimg} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

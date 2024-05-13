import React from "react";
import MoreDetalisIcon from "./svgIcon/MoreDetalisIcon";
import './styles.css'
import { useNavigate } from "react-router-dom";
const MoreDetalisBtn = (props) => {
    const navigate=useNavigate()
  return (
    <div id="moredetalisbtn">
      <button onClick={()=>navigate(props.link)}> <MoreDetalisIcon /> More detalis</button>
    </div>
  );
};

export default MoreDetalisBtn;

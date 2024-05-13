import React from "react";
import MoreDetalisBtn from "./MoreDetalisBtn";

const TextContent = (props) => {
  const { header, content,link } = props;
  return (
    <div className="text-div">
        <h1>{header}</h1>
        <p>{content}</p>
        <div className="btn">
          <MoreDetalisBtn link={link}/>
        </div>
    </div>
  );
};

export default TextContent;

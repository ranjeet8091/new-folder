import React from "react";
import photo from "../assets/one.png";

type obj = {
  img: string,
  Text: string,
  color:string
};
const OnepageUseMultipleTime = (props:obj) => {
  return (
    <div>
      <div className="relative inline-block group">
        <img src={props.img} alt="Not Found" className="w-[500px] h-[500px]" />
        <div className={`absolute inset-0 ${props.color} opacity-0 group-hover:opacity-100 transition duration-600`}></div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          {props.Text}
        </h1>
      </div>
    </div>
  );
};

export default OnepageUseMultipleTime;

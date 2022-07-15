import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import Info from "./Info";

const Pornstar = ({ pornstars,next }) => {
  let randomIndex=Math.floor(Math.random()*5)
  console.log(pornstars[0].images[0].image_link)
  return (
    <div className=" max-w-6xl mx-auto md:p-2 rounded">
      <div className="grid p-1 md:p-3 gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {pornstars?.map((pornstar, i) => {
          return (
            <Fade bottom key={i}>
            <Info
              slug={pornstar?.slug}
              url={pornstar?.images[randomIndex]?.image_link}
              age={pornstar?.age}
              name={pornstar?.name}
              nationality={pornstar?.nationality}
            />
            </Fade>
          );
        })}
      </div>

    </div>
  );
};

export default Pornstar;

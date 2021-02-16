import React, { useState } from "react";
import "./index.css";

const FeaturedProjectCard = (props) => {
  const details = [1, 2, 3, 4];
  const filterDetails = [
    "Animation",
    "Camera and lighting",
    "Directing",
    "Photography",
    "Production",
    "Post-production",
    "More",
  ];

  return (
    <div>
      <div className="projectButtons">
        {filterDetails.map((eachBtn) => (
          <div className="eachButton">
            <button>{eachBtn}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProjectCard;

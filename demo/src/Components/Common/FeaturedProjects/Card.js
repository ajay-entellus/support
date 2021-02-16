import React, { useState } from "react";
import "./Card.css";

const FeaturedProjectCard = (props) => {
  const details = [];

  const [isHovering, setHover] = useState(false);

  const handleMouseHover = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div>
      <div className="Container" >
        <div className="projectImageContainer">
          <div
            className="projectImage"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseOut}
          >
            <img
              src="https://source.unsplash.com/random?fp=0"
              width="325px"
              height="240px"
              alt=""
            />
          </div>
          {isHovering && <div className="ProjectTitle">title</div>}
        </div>
        <div className="projectAuthor">
          <div>
            <img
              src="https://source.unsplash.com/random?fp=0"
              width="42px"
              height="42px"
              alt=""
            />
          </div>
          <div>
            <div className="projectAuthorName">Name</div>
            <div className="projectAuthorJobTitle">Category</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProjectCard;

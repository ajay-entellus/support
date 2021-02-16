import React from "react";
import "./index.css";

const CreationCard = () => {
  return (
    <div className="Container">
      <div className="CreatorsAuthor">
        <div>
          <img
            src="https://source.unsplash.com/random?fp=0"
            width="88px"
            height="88px"
            alt=""
          />
        </div>
        <div>
          <div className="CreatorsAuthorName">Name</div>
          <div className="CreatorsAuthorJobTitle">Category</div>
          <button className="CreatorsButton">
            Follow
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://source.unsplash.com/random?fp=0"
          width="325px"
          height="179px"
          alt=""
        />
      </div>
    </div>
  );
};
export default CreationCard;

import React from "react";

function Pin({ pinSize, imgSrc, name, link }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>{name}</h3>
        <div className="search">
          <a href={link}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/20/20710.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;

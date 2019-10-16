import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

function MenuItem({ title, imgUrl, size, history, linkUrl, match }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
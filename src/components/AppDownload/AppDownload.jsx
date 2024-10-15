import React from "react";
import "./AppDownload.css";
import Playstore from "../../assets/play_store.png";
import App from "../../assets/app_store.png";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={Playstore} alt="" />
        <img src={App} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;

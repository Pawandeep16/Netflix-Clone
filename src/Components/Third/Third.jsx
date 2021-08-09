import React from "react";
import "./third.scss";
import Netflix2 from "../../videos/netflix2.mp4";
import { useTranslation } from "react-i18next";

export default function Third() {
  const { t } = useTranslation();
  return (
    <div className="Third">
      <div className="container">
        <div className="left">
          <h1>{t("thirdhead1")}</h1>
          <h2>{t("thirdhead2")}</h2>
        </div>
        <div className="right">
          <img src="./assests/mac.png" alt=" " />

          <div className="videos">
            <video autoPlay loop muted style={{ position: "absolute" }}>
              <source src={Netflix2} type="video/mp4" />
            </video>
          </div>

          <div className="imagecont">
            <img className="img1" src="./assests/mac_phone.png" alt=" " />
            <img className="img2" src="./assests/mac_pad.png" alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
}

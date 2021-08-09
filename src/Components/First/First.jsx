import React from "react";
import "./first.scss";
import Netflix1 from "../../videos/netflix1.mp4";
import { useTranslation } from "react-i18next";

export default function First() {
  const { t } = useTranslation();
  return (
    <div className="First">
      <div className="container">
        <div className="left">
          <h1>{t("firsthead1")}</h1>
          <h2>{t("firsthead2")}</h2>
        </div>
        <div className="right">
          <img src="./assests/tv.png" alt=" " />

          <div className="videos">
            <video autoPlay loop muted>
              <source src={Netflix1} type="video/mp4" />
            </video>
          </div>
          <div className="imagecont">
            <img src="./assests/tv_remote.png" alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
}

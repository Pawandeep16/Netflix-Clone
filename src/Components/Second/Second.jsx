import React from "react";
import "./second.scss";
import { useTranslation } from "react-i18next";

export default function Second() {
  const { t } = useTranslation();
  return (
    <div className="Second">
      <div className="container">
        <div className="left">
          <img src="./assests/phone.png" alt=" " />
        </div>
        <div className="right">
          <h1>{t("secondhead1")}</h1>
          <h2>{t("secondhead2")}</h2>
        </div>
      </div>
    </div>
  );
}

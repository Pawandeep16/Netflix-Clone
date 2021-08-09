import React from "react";
import "./fourth.scss";
import { useTranslation } from "react-i18next";
export default function Fourth() {
  const { t } = useTranslation();
  return (
    <div className="Fourth">
      <div className="container">
        <div className="left">
          <img src="./assests/child.png" alt=" " />
        </div>
        <div className="right">
          <h1>{t("fourthhead1")}</h1>
          <h2>{t("fourthhead2")}</h2>
        </div>
      </div>
    </div>
  );
}

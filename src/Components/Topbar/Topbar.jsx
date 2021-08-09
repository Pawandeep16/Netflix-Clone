import React from "react";
import "./topbar.scss";
import { Button, Dropdown } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import LanguageIcon from "@material-ui/icons/Language";
import { useTranslation } from "react-i18next";
import Lang from "../../lang";
import Signin from "../Globalsignin/Signin";

export default function Topbar() {
  const { t } = useTranslation();
  return (
    <div className="Topbar">
      <img src="./Assests/netback.png" alt="" />
      <div className="wrapper">
        <div className="left">
          <img src="./Assests/logo.png " alt="" />
        </div>
        <div className="right">
          <div className="drop">
            <Lang />
          </div>

          <Button className="signin" variant="danger">
            {t("signin")}
          </Button>
        </div>
      </div>
      <div className="middle">
        <div className="bottomcont">
          <h1>{t("headtop")}</h1>

          <h3>{t("headtop3")}</h3>
          <h4>{t("headtop4")}</h4>
          <Signin />
        </div>
      </div>
    </div>
  );
}

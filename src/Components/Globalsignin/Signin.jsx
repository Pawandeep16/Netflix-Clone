import React from "react";
import "./signin.scss";
import { Button, Dropdown } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useTranslation } from "react-i18next";
export default function Signin() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <form className="inputfield" noValidate autoComplete="off">
        <TextField
          className="input"
          id="standard-basic"
          label={t("heademail")}
        />
        <Button className="gets" variant="danger">
          {t("headtop5")} <KeyboardArrowRightIcon className="icon" />
        </Button>
      </form>
    </div>
  );
}

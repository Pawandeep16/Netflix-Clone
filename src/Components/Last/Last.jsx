import React from "react";
import "./last.scss";

import { useTranslation } from "react-i18next";
import Lang from "../../lang";
export default function Last() {
  const { t } = useTranslation();
  return (
    <div className="last">
      <div className="header">
        <h1> {t("lasthead")}</h1>{" "}
        <a href="tel:000-800-040-1843"> 000-800-040-1843 </a>
        {t("lasthead1")}
      </div>
      <div className="listitem">
        <div className="col">
          <ul>
            <li>
              <a href="https://help.netflix.com/en/node/412"> {t("last1")}</a>
            </li>
            <li>
              <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                {t("last2")}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://help.netflix.com/legal/privacy"> {t("last3")}</a>
            </li>
            <li>
              {" "}
              <a href="https://fast.com/"> {t("last4")}</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <a href="https://help.netflix.com/en/"> {t("last5")}</a>
            </li>
            <li>
              <a href="https://jobs.netflix.com/"> {t("last6")}</a>
            </li>
            <li>
              <a href="https://www.netflix.com/in/#">{t("last7")}</a>
            </li>
            <li>
              {" "}
              <a href="https://help.netflix.com/legal/notices"> {t("last8")}</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              {" "}
              <a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">
                {" "}
                {t("last9")}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://devices.netflix.com/en/">{t("last10")}</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/corpinfo">
                {t("last11")}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.netflix.com/in/browse/genre/839338">
                {t("last12")}
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <li>
              <a href="https://media.netflix.com/en/">{t("last13")}</a>
            </li>
            <li>
              {" "}
              <a href="https://help.netflix.com/legal/termsofuse">
                {t("last14")}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://help.netflix.com/en/contactus">{t("last15")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Lang />
      </div>
      <h4>{t("last16")}</h4>
    </div>
  );
}

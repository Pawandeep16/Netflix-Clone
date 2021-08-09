import LanguageIcon from "@material-ui/icons/Language";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import i18next from "i18next";
import "./lang.scss";
import { useTranslation } from "react-i18next";

function Lang() {
  const { t } = useTranslation();
  const lang = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "hi",
      name: "हिन्दी",
      country_code: "ind",
    },
  ];
  return (
    <div className="container">
      <div className="DropDown">
        <Dropdown className="drop">
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            <LanguageIcon className="icon" /> {t("Language")}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {lang.map(({ country_code, name, code }) => (
              <Dropdown.Item onClick={() => i18next.changeLanguage(code)}>
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Lang;

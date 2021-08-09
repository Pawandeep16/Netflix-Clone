import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./Components/First/First";
import Second from "./Components/Second/Second";
import Topbar from "./Components/Topbar/Topbar";
import Third from "./Components/Third/Third";
import Fourth from "./Components/Fourth/Fourth";
import Questions from "./Components/Questions/Questions";
import Last from "./Components/Last/Last";
import lang from "./lang";
import { Dropdown } from "react-bootstrap";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Lang from "./lang";

function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="sections">
        <First />
        <Second />
        <Third />
        <Fourth />
        <Questions />
        <Last />
      </div>
    </div>
  );
}

export default App;

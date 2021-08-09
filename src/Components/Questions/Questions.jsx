import React, { useState } from "react";
import "./questions.scss";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Signin from "../Globalsignin/Signin";
import { useTranslation } from "react-i18next";
export default function Questions() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    }
    setClick(index);
  };

  const Data = [
    {
      question: "What is Netflix?",
      answer:
        " Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week! ",
    },
    {
      question: "How much does it cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
    },

    {
      question: "Where can i watch ?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },

    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },

    {
      question: " What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix for kids?",
      answer:
        " The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="questions">
      <div className="container">
        <h2> {t("qhead")}</h2>
        {Data.map((d, index) => (
          <div className="wrap">
            <div className="ques" onClick={() => toggle(index)} key={index}>
              <h1>{d.question}</h1>
              <span>
                {click === index ? (
                  <CloseIcon className="icon" onClick={() => setOpen(!open)} />
                ) : (
                  <AddIcon className="icon" />
                )}
              </span>
            </div>
            {click === index ? (
              <div className="ans">
                <p>{d.answer}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="email">
        <h3>{t("headtop4")}</h3>
        <Signin className="signin" />
      </div>
    </div>
  );
}

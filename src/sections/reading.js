import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { fadeInLeft } from "react-animations";
import ShowMore from "react-show-more-list";
import styled, { keyframes } from "styled-components";
import styles from "../styles/banner.module.css";
const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

const animationFrames = keyframes`${fadeInLeft}`;
const Animation = styled.div`
  animation: 2s ${animationFrames};
`;

const DESCRIPTION_LENGTH = 200;

export default function Readings() {
  const [readList, setReadList] = useState([]);
  const [notReadList, setNotReadList] = useState([]);

  const renderDescription = (description) => {
    if (description.length > DESCRIPTION_LENGTH) {
      return (
        <>
          <ReactTooltip
            effect={"solid"}
            multiline
            arrowColor="black"
            className="tooltip"
            id="readings"
          />
          <Animation>
            <div data-tip={description} data-for="readings">
              {description.substring(0, DESCRIPTION_LENGTH)}...
            </div>
          </Animation>
        </>
      );
    }
    return (
      <Animation>
        <div>{description}</div>
      </Animation>
    );
  };

  useEffect(() => {
    fetch("https://express-on-nodejs-1.furkandoganktf1.repl.co/list")
      .then((res) => res.json())
      .then(
        (result) => {
          setReadList(result.filter((reading) => reading.isRead === true));
          setNotReadList(result.filter((reading) => reading.isRead === false));
        },

        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <section className="container">
      <div className="containerCont sectionCont">
        <div id="reading" className="target"></div>
        <header>
          <h2>Reading List</h2>
        </header>
        <Animation>
          <ShowMore items={[...notReadList, ...readList]} by={6}>
            {({ current, onMore }) => (
              <React.Fragment>
                <div className="cardContainer readingContainer">
                  {current.map((item) => (
                    <div key={item.url} className="card readingCard">
                      <div className="readingCardTitle">
                        <h5>{item.title}</h5>
                      </div>

                      <img className="readingCardImg" src={item.image} />

                      <div className="readingCardDescription">
                        {renderDescription(item.description)}

                        <button
                          className={`${styles.but} readingCardUrlButton ${
                            item.isRead ? "readCardUrlButton" : ""
                          }`}
                        >
                          <a target="_blank" href={item.url}>
                            {item.isRead ? "Read Again!" : "Read More!"}
                          </a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="readingShowMore">
                  <button
                    disabled={!onMore}
                    onClick={() => {
                      if (!!onMore) onMore();
                    }}
                    className={`${styles.but}`}
                  >
                    Show more!
                  </button>
                </div>
              </React.Fragment>
            )}
          </ShowMore>
        </Animation>
      </div>
    </section>
  );
}

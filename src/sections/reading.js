import React, { useEffect, useState } from "react";
import ShowMore from "react-show-more-list";
import styles from "../styles/banner.module.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const animationFrames = keyframes`${fadeIn}`;
const Animation = styled.div`
  animation: 5s ${animationFrames};
`;

export default function Readings() {
  const [readList, setReadList] = useState([]);
  const [notReadList, setNotReadList] = useState([]);

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
    <Animation>
      <section className="container">
        <div className="containerCont sectionCont">
          <div id="reading" className="target"></div>
          <header>
            <h2>Reading List</h2>
          </header>

          <ShowMore items={readList} by={3}>
            {({ current, onMore }) => (
              <React.Fragment>
                <div className="cardContainer readingContainer">
                  {notReadList.map((item) => (
                    <div key={item.url} className="card readingCard">
                      <div className="readingCardTitle">
                        <h5>{item.title}</h5>
                      </div>

                      <img className="readingCardImg" src={item.image} />

                      <div className="readingCardDescription">
                        <span>{item.description}</span>

                        <button
                          className={`${styles.but} readingCardUrlButton`}
                        >
                          <a target="_blank" href={item.url}>
                            Read More!
                          </a>
                        </button>
                      </div>
                    </div>
                  ))}
                  {current.map((item) => (
                    <div key={item.url} className="card readingCard">
                      <div className="readingCardTitle">
                        <h5>{item.title}</h5>
                      </div>

                      <img className="readingCardImg" src={item.image} />

                      <div className="readingCardDescription">
                        <span>{item.description}</span>

                        <button
                          className={`${styles.but} readingCardUrlButton readCardUrlButton`}
                        >
                          <a target="_blank" href={item.url}>
                            Read Again!
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
        </div>
      </section>
    </Animation>
  );
}

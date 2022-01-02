import ShowMore from "react-show-more-list";
import styles from "../styles/banner.module.css";

export default function Readings({ readingList }) {
  return (
    <section className="container">
      <div className="containerCont sectionCont">
        <div id="reading" className="target"></div>
        <header>
          <h2>Reading List</h2>
        </header>
        <ShowMore items={readingList} by={3}>
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
                      <span>{item.description}</span>

                      <button className={`${styles.but} readingCardUrlButton`}>
                        <a target="_blank" href={item.url}>
                          Read More!
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
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
  );
}

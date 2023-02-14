import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from "react-countdown";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
// import Youtube from "content/assets/images/portfolio/Youtube.png";
// import YoutubeHover from "content/assets/images/portfolio/YoutubeHover.png";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  // const copiedToClipboard = () => {
  //   const alertColor = { background: "#9ebc9f", text: "white" };
  //   notify.show(
  //     "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
  //     "custom",
  //     5000,
  //     alertColor,
  //   );
  // };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <span className="finishedCountdown">
          <p>The ceremony already started</p>
          <p>Stay tuned for the wedding video coming soon</p>
        </span>
      ); // finishedCountdown;
    }
    // Render a countdown
    return (
      <span>
        <div className="countdownAndTanuki">
          <div className="countdownIntro">March 04, 2023 at 6:00pm (Vietnam Time)</div>{" "}
          {/* countdownIntro */}
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{days}</div> {/* count */}
                <div className="unit">days</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{hours}</div> {/* count */}
                <div className="unit">hours</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{minutes}</div> {/* count */}
                <div className="unit">minutes</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{seconds}</div> {/* count */}
                <div className="unit">seconds</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
          </div>{" "}
          {/* countdownWrapper */}
        </div>{" "}
        {/* countdownAndTanuki */}
      </span>
    );
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("portfolio-section", className)} id={anchor}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        {/* <Row className="justify-content-center ceremony-header"> */}
        <SectionHeader header={header} subheader={subheader} />
        {/* <CopyToClipboard text="#CaitlinAndJustin2020">
            <button
              onClick={copiedToClipboard}
              id="copy-to-clipboard"
              // variant="primary"
              type="button"
              size="xl"
              className="hashtag"
            >
              #CaitlinAndJustin2020
            </button>
          </CopyToClipboard> */}
        {/* </Row> */}
        <div className="countdownAndVideoDiv">
          {/* <Row> */}
          <Countdown date="2023-03-04T06:00:00-05:00" renderer={renderer} />
          {/* </Row> */}
          {/* <Row> */}
          <a
            href="https://www.youtube.com/watch?v=EXOL-3JyXMI&feature=emb_err_woyt"
            target="_blank"
            rel="noreferrer"
            className="youtubeLink"
          >
            <div className="container">
              {/* <img src={Youtube} alt="youtubeLink" className="image" width="560" height="auto" />
                <div className="middle">
                  <img
                    src={YoutubeHover}
                    alt="youtubeLink"
                    className="imageHover"
                    width="560"
                    height="auto"
                  />
                </div>{" "} */}
              {/* middle */}
            </div>{" "}
            {/* container */}
          </a>
          {/* </Row> */}
        </div>{" "}
        {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;

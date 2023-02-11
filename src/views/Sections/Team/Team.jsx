import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor,
    );
  };

  return (
    <div>
      <PageSection className={className} id={anchor}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={8} className="mx-auto text-center">
            <p className="large text-muted">
              We Thank You
            </p>
          </Col>
        </Row>
        <Row>
          {teamMember.map(({ header, ...tmProps }) => (
            <Col sm={4} key={header}>
              <TeamMember header={header} {...tmProps} />
            </Col>
          ))}
        </Row>
      </PageSection>
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;

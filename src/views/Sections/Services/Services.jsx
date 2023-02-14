import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Services.scss";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      {/* <Row> */}
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      {/* </Row> */}
      {/* <Row> */}
        <div className="message">
          <p className="paragraph1">
            Thank you for taking out some of your precious time and be here to celebrate the story
            of Vy & Huan together with us. Whether you’re able to attend our wedding ceremony or
            not, we hope that this snippet of our journey from two different people with two
            different lives to making the ultimate commitment to one another will inspire you to
            believe in love and how it continue to help us overcome everything so that we can be
            together, as one family.
          </p>
        </div>{" "}
        {/* message */}
      {/* </Row> */}
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;

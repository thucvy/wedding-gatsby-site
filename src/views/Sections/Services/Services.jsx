import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        <div>
          <p>
            Write something here
          </p>
          <p>
            The ceremony will be taking place on March 04 at 18:00
          </p>
          <p>
            We hope you can join us, whether live for the virtual event or down the road when we
            have a belated reception to celebrate with you all.
          </p>
          {/* <br /> */}
          <p>Sending our love,</p>
          {/* <br /> */}
          <p>Vy & Huân</p>
        </div>
      </Row>
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

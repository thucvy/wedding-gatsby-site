import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import "./SectionHeader.scss";

const SectionHeader = ({ header, subheader, className, ...restProps }) => {
  const subheaderPart = subheader ? (
    <h2 className="section-heading">{subheader}</h2>
  ) : null;

  return (
    <Col lg={12} className={clsx("section-header", "text-center", className)} {...restProps}>
      {/* <h2 className="section-heading">{header}</h2> */}
      {subheaderPart}
    </Col>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  className: PropTypes.string,
};

SectionHeader.defaultProps = {
  header: "",
  subheader: "",
  className: null,
};

export default SectionHeader;

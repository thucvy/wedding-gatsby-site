import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
        {jumpToAnchorText}
      </Button>
    );
  }

  return <ImageCard extraInfo={extraInfoPart} id="Carousel" />;
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;

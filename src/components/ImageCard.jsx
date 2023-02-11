import React from "react";
import PropTypes from "prop-types";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

import { Button, Carousel } from "react-bootstrap";
import carouselImage1 from "content/assets/images/carousel/1.jpg";
import carouselImage2 from "content/assets/images/carousel/2.jpg";
import carouselImage3 from "content/assets/images/carousel/3.jpg";

const ImageCard = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage1} alt="First slide" />
        <Carousel.Caption>
          <h3>
            <Button
              size="xl"
              variant="primary"
              className="text-uppercase"
              onClick={useSmoothScrollTo("Story")}
            >
              Our story
            </Button>
          </h3>
          <p>Want to know how we end up here? ❣️</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage2} alt="Second slide" />

        <Carousel.Caption>
          <h3>
            <Button
              size="xl"
              variant="primary"
              className="text-uppercase"
              onClick={useSmoothScrollTo("Ceremony")}
            >
              Let&apos;s celebrate
            </Button>
          </h3>
          <p>Click to see more details of our ceremony 🎉</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage3} alt="Third slide" />

        <Carousel.Caption>
          <h3>
            <Button
              size="xl"
              variant="primary"
              className="text-uppercase"
              onClick={useSmoothScrollTo("Guest Book")}
            >
              Send Message
            </Button>
          </h3>
          <p>Feel free to give us some extra love 💌</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};


export default ImageCard;

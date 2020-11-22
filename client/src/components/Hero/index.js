import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  HeroContainer,
  MovieSlide,
  MovieItem,
  MoviePoster,
  MovieDetail,
  MovieStatus,
  MovieTitle,
  MovieDuration,
} from "./HeroElements";

const Hero = ({ data }) => {
  console.log({ data });

  const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <HeroContainer>
        <Slider {...settings}>
          {data.map((movie, index) => (
            <MovieSlide key={index}>
              <MovieItem>
                <MoviePoster src={movie.BackdropImageUrl} alt={movie.Title} />
                <MovieDetail>
                  <MovieStatus>Now Showing</MovieStatus>
                  <MovieTitle>{movie.Title}</MovieTitle>
                  <MovieDuration>{movie.Duration}</MovieDuration>
                </MovieDetail>
              </MovieItem>
            </MovieSlide>
          ))}
        </Slider>
      </HeroContainer>
    </>
  );
};

export default Hero;

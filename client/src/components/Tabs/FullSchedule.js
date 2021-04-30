// import React from "react";

// export default (props) =>
//   (props.movies &&
//     props.movies.map((item, index) => (
//       <div class="card" key={index}>
//         <div class="title">
//           <span class="title">{item.Title}</span>{" "}
//           <span>
//             {new Date(item.PreShowStartTime).toLocaleDateString("en", {
//               day: "2-digit",
//               month: "short",
//             })}
//           </span>
//         </div>
//       </div>
//     ))) || <div>no sessions</div>;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FullSchedule = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Slider {...settings}>
      {data.map((movie, index) => {
        return (
          <div key={index}>
            <img
              src={movie.FilmPosterUrl}
              alt={movie.Title}
              style={{ height: 265 + "px" }}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default FullSchedule;

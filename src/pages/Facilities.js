import facilitiesList from "../util/facilitiesList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Facilities() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="facilities">
      <div className="facilitiesContainer">
        <h1>
          Our <strong>Promising</strong> Facilities
        </h1>
        <div className="facilitiesCarousel">
          <Slider {...settings}>
            {facilitiesList.map((facility) => (
              <div className="facilityContainer" key={facility.id}>
                <img src={facility.img} alt={facility.title} />
                <span>{facility.title}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Facilities;

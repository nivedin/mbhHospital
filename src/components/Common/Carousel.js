import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Carousel = ({
  setLightboxOpen,
  setPhotoIndex,
  images,
  carouselSettings,
}) => {
  let initialSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    //className: "center",
    //centerMode: true,
    infinite: true,
    //centerPadding: "100px",
    //slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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

  let location = useLocation();
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    carouselSettings && setSettings(carouselSettings);
  }, [location]);

  return (
    <div
      className={
        initialSettings === settings ? "galleryCarousel" : "galleryCarousel2"
      }
    >
      <Slider {...settings}>
        {images.map((galleryPhoto) => (
          <div key={galleryPhoto.id}>
            <img
              onClick={() => {
                setLightboxOpen(true);
                setPhotoIndex(galleryPhoto.id - 1);
                document.body.style.overflow = "hidden";
              }}
              src={galleryPhoto.imgSrc}
              alt="MBH-Gallery-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

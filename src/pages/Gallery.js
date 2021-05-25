import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryPhotosList from "../util/galleryPhotosList";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function Gallery() {
  const [isLightBoxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  console.log(isLightBoxOpen);

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
  return (
    <div className="gallery">
      <div className="gallerySection">
        <h1>
          <strong> MBH</strong> Gallery.{" "}
        </h1>
        <div className="galleryCarousel">
          <Slider {...settings}>
            {galleryPhotosList.map((galleryPhoto) => (
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
          {isLightBoxOpen && (
            <div className="lightBox">
              {" "}
              <Lightbox
                mainSrc={galleryPhotosList[photoIndex].imgSrc}
                nextSrc={
                  galleryPhotosList[(photoIndex + 1) % galleryPhotosList.length]
                    .imgSrc
                }
                prevSrc={
                  galleryPhotosList[
                    (photoIndex + galleryPhotosList.length - 1) %
                      galleryPhotosList.length
                  ].imgSrc
                }
                onCloseRequest={() => {
                  setLightboxOpen(false);
                  document.body.style.overflow = "auto";
                }}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + galleryPhotosList.length - 1) %
                      galleryPhotosList.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % galleryPhotosList.length)
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

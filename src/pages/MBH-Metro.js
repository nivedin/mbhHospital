import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
import Carousel from "../components/Common/Carousel";
import mbhMetroImages from "../util/mbhMetroImages";

const MbhMetro = () => {
  const [isLightBoxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
    <div className="mbhMetro">
      <div className="mbhContainer">
        <h1>
          Centre of Excellence for <br /> <span>HEART & VASCULAR CARE</span>{" "}
        </h1>
        <div className="textImgContainer">
          <div className="leftImgContainer">
            <div className="imgContainer">
              <img src="/images/mbhCardiac.png" alt="mbhCardiac" />
            </div>
          </div>
          <div className="rightText">
            <p>
              <span>MBH Hospital</span> <span>Cardiac Centre</span> provides a
              comprehensive cardiac care 24x7 with world-class service from
              early disease identification to to sophisticated procedures.
              Angiography, Angioplast and cath lab with pace maker are some of
              the diagnostic services we offer, making us one of the best
              cardiology hospital in Malappuram.
            </p>
          </div>
        </div>
        <div className="btnsGroup">
          <a className="cardiacBtn" href="#mbh-metro-video">
            Watch Video
          </a>
          <Link className="cardiacBtn" to="/appointment">
            Book Appointment
          </Link>
        </div>
        <div className="galleryCarousel">
          <h2>
            Photo <span>Gallery</span>
          </h2>
          <Carousel
            images={mbhMetroImages}
            setPhotoIndex={setPhotoIndex}
            setLightboxOpen={setLightboxOpen}
            carouselSettings={settings}
          />
          {isLightBoxOpen && (
            <div className="lightBox">
              {" "}
              <Lightbox
                mainSrc={mbhMetroImages[photoIndex].imgSrc}
                nextSrc={
                  mbhMetroImages[(photoIndex + 1) % mbhMetroImages.length]
                    .imgSrc
                }
                prevSrc={
                  mbhMetroImages[
                    (photoIndex + mbhMetroImages.length - 1) %
                      mbhMetroImages.length
                  ].imgSrc
                }
                onCloseRequest={() => {
                  setLightboxOpen(false);
                  document.body.style.overflow = "auto";
                }}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + mbhMetroImages.length - 1) %
                      mbhMetroImages.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % mbhMetroImages.length)
                }
              />
            </div>
          )}
        </div>
        <div className="videoSection" id="mbh-metro-video">
          <iframe
            width="50%"
            height="600"
            src="https://www.youtube.com/embed/DUpfv5wjq94"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MbhMetro;

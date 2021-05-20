import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

function Home() {
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
    <div className="home">
      <div className="homeContainer">
        <section className="heroSection">
          <div className="leftContainer">
            <Fade cascade bottom>
              <h1>
                <Fade bottom cascade>
                  Welcome to <span>MBH.</span>
                </Fade>
              </h1>

              <p>
                Enhancing <span>life,</span> Excelling in <span>care.</span>{" "}
              </p>
              <Link to="/" className="ctaBtn">
                Book Appointment
              </Link>

              <div className="mobDisplay">
                <Link to="/" className="ctaBtn">
                  Contact Us
                </Link>
              </div>
            </Fade>
          </div>
          <div className="rightContainer">
            <img src="/images/heroMain.png" alt="hero-mbh-hospital" />
          </div>
        </section>
        <section className="covidDetails">
          <Fade cascade bottom>
            <div className="cdHead">
              <img src="/images/mdi_virus.svg" alt="covid19" />
              <h1>
                <Fade bottom cascade>
                  COVID - 19
                </Fade>
              </h1>
            </div>
            <div className="cdSubHead">
              <h2>
                <Fade bottom cascade>
                  <span>MBH</span> Covid Details
                </Fade>
              </h2>
            </div>
            <div className="cdCounts">
              <div className="cdCount">
                <span>Covid Bed</span>
                <CountUp
                  useEasing={true}
                  useGrouping={true}
                  end={48}
                  duration={5}
                />
              </div>
              <div className="cdCount">
                <span>Step Down ICU Bed</span>
                <CountUp end={3} duration={6} />
              </div>
              <div className="cdCount">
                <span>ICU Bed</span>
                <CountUp end={4} duration={7} />
              </div>
              <div className="cdCount">
                <span>Ventilator</span>
                <CountUp end={1} duration={8} />
              </div>
            </div>
          </Fade>
        </section>
        <section className="aboutMBH">
          <Fade cascade bottom>
            <div className="aboutHead">
              <h1>
                About <span>MBH.</span>
              </h1>
            </div>
            <p>
              Get to know us better!
              <br /> MB Hospital is an accomplished health care facility with
              staffs who are adroit in their abilities to provide you with
              outstanding service. It was founded in 1989 with an aim to promote
              wellness and provide healthcare for all with the best kinds of
              services and is successfully achieving milestones ever since. We
              began as a 50 bed treatment facility positioned on NH 213 at
              Varangode, Down Hill. 42 years into our inception, we've grown
              into a 5-floor, 250 bed healthcare facility with all the modern
              infrastructure and treatment mechanisms. The hospital now spans
              over 4 acres of land with a wide space for parking. Our team has
              received words of appreciation and applause from the Government
              and the public for our excellence in treating patients and success
              in conducting other humanitarian activities. MB Hospital was
              awarded by the Government of Kerala for being the first to
              introduce waste water treatment technology in Malappuram. From
              diagnostic tests to surgical procedures, our ongoing investment in
              state-of-the-art technology ensures patients receive the highest
              quality of care. With a strong history of well served patients, we
              offer to provide you with best of care and cure!
            </p>
            <div className="btnGrp">
              <Link to="/facilities">Facilities</Link>
              <Link className="dptBtn" to="/departments">
                Departments
              </Link>
            </div>
          </Fade>
        </section>

        <section className="facilites">
          <div className="facilitiesHead">
            <h1>
              Explore our <span>Facilities</span>{" "}
            </h1>
          </div>
          <div className="facilitiesContainer">
            <Fade cascade bottom>
              <div className="facilityContainer">
                <span>
                  <img
                    src="/images/ic_round-emergency.svg"
                    alt="facility-icon"
                  />
                </span>
                <span>24/7 Serving Hands</span>
              </div>
              <div className="facilityContainer">
                <span>
                  <img src="/images/map_pharmacy.svg" alt="facility-icon" />
                </span>
                <span>24/7 Pharma</span>
              </div>
              <div className="facilityContainer">
                <span>
                  <img src="/images/maki_doctor-15.svg" alt="facility-icon" />
                </span>
                <span>24/7 Doctor's Help</span>
              </div>
              <div className="facilityContainer">
                <span>
                  <img src="/images/icomoon-free_lab.svg" alt="facility-icon" />
                </span>
                <span>24/7 Laboratory</span>
              </div>
              <div className="facilityContainer">
                <span>
                  <img src="/images/maki_cafe-15.svg" alt="facility-icon" />
                </span>
                <span>24/7 Cafe</span>
              </div>
              <div className="facilityContainer">
                <span>
                  <img src="/images/fa-solid_parking.svg" alt="facility-icon" />
                </span>
                <span>24/7 Spacious Parking</span>
              </div>
            </Fade>
          </div>
          <div className="expFacilitiesBtn">
            <Link to="/facilities">Explore Our Promising Facilities</Link>
          </div>
        </section>

        <section className="promotersMBH">
          <div className="promotersHead">
            <h1>
              Promoters Of <span>MBH</span>
            </h1>
          </div>
          <div className="promotersGallery">
            <div className="galleryInsideContainer">
              <div className="promoterPhoto">
                <img src="/images/promoter-1.png" alt="promoter-MBH" />
                <span>Dr. Abdul Majeed</span>
              </div>
              <div className="promoterPhoto">
                <img src="/images/promoter-2.png" alt="promoter-MBH" />
                <span>Mr. E. Ummer Bava</span>
              </div>
              <div className="promoterPhoto">
                <img src="/images/promoter-3.png" alt="promoter-MBH" />
                <span>Dr. Badharudheen</span>
              </div>
              <div className="promoterPhoto">
                <img src="/images/promoter-4.png" alt="promoter-MBH" />
                <span>Mr. Nasrudheen</span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="galleryHead">
            <h1>
              <span>MBH</span> Gallery.
            </h1>
          </div>
          <div className="galleryCarousel">
            <Slider {...settings}>
              <div>
                <img src="/images/gallery1.jpg" alt="MBH-Gallery-img" />
              </div>
              <div>
                <img src="/images/gallery2.jpg" alt="MBH-Gallery-img" />
              </div>
              <div>
                <img src="/images/gallery3.jpg" alt="MBH-Gallery-img" />
              </div>
              <div>
                <img src="/images/gallery4.jpg" alt="MBH-Gallery-img" />
              </div>
              <div>
                <img src="/images/gallery5.jpg" alt="MBH-Gallery-img" />
              </div>
              <div>
                <img src="/images/gallery6.jpg" alt="MBH-Gallery-img" />
              </div>
            </Slider>
          </div>
          <div className="galleryHelp">
            <h2>
              Still <span>need</span> help ?
            </h2>
            <Link to="/contact">Contact Us</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import heroImg from "../../assets/images/Hero.png";
import cv from "../../assets/data/cv.pdf"

function Hero() {


  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-10" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-beteen sm:flex-col md:flex-row">
          {/* ========== hero left content =========== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[25px]"
            >
              Hi,
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[50px] sm:text-[30px] leading-[35px] sm:leading-[40px] mt-5 mb-"
            >
              I'm Asterios
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] mt-4 text-[50px] sm:text-[30px] leading-[35px] sm:leading-[40px]"
            >
              Koutoulidis
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-blue-500 font-[800] text-[1.8rem] sm:text-[25px] leading-[35px] sm:leading-[40px] mt-5"
            >
              a Web Developer
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-5"
            >
             <a href="#contact">
              <button
                className="flex items-center gap-2
                text-smallTextColor
              border-smallTextColor font-semibold border
              py-2 px-4 rounded-[30px] max-h-[40]
               hover:bg-smallTextColor
                hover:text-white hover:font-[500] ease-in duration-300"
              >
                <i
                  onClick={handleClick}
                  href="#contact"
                  className="ri-mail-send-line"
                ></i>{" "}
                Contact Me
              </button>
            </a>
            <a href={cv} download="CV.pdf">
            <button className="flex items-center gap-2
                text-smallTextColor
              border-smallTextColor font-semibold border
              py-2 px-4 rounded-[30px] max-h-[40]
               hover:bg-smallTextColor
                hover:text-white hover:font-[500] ease-in duration-300">
            <i 
            class="ri-folder-3-line">
            </i>
               My CV
              </button>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-6"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Dedicated web developer with proficiency in front-end and back-end
              technologies.
            </p>

            <div className="flex items-center gap-9 mt-12">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/asterios-koutoulidis-0a8625293/"
                  className="text-blue-700 text-[25px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/astkout"
                  className="text-stone-800 text-[25px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ============ hero left end ============= */}
          {/* ============ hero img ============= */}
          <div className="basis-1/3 mt-10 sm:mt-0"></div>
          <figure className="flex items-center justify-center h-3/5 w-3/5">
            <img src={heroImg} alt="img" />
          </figure>
          {/* ============ hero end ============= */}
          {/* ============ hero content right ============= */}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
          md:flex-col md:justify-end md:text-end"
          ></div>
          {/* ============ hero content end ============= */}
        </div>
      </div>
    </section>
  );
}

export default Hero;


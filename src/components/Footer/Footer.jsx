import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.currentTarget.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#12141e] pt-12">
      {/* =========== footer top ========== */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-2xl">
              Reach out and let's turn your digital ideas into reality.
            </h2>
            <button
              className="flex items-center gap-2 text-blue-500 font-semibold border border-blue-500 py-2 px-4 rounded-[30px] max-h-[40] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
              onClick={handleClick}
            >
              <i className="ri-mail-send-line"></i> Contact Me
            </button>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 sm:mt-0">
              I showcase not just a set of skills but a commitment to
              excellence and a passion for creating digital experiences that
              resonate. Let's embark on a journey to bring your web projects to
              life!
            </p>
            <br />
           
            <div className="flex item-center gap-4 flex-wrap md:gap-8 mt-10">
            <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/asterios-koutoulidis-0a8625293/"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/astkout"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
            </div>
            <div className="mt-10">
            <p className="text-gray-300 leading-7 font-[500] sm:mt-0">
              Email : astkout12@hotmail.com
            </p>
            </div>
            
          </div>
        </div>
        <div className="menu">
          <ul className="flex items-center space-x-4 mt-10">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>{" "}
          </ul>
        </div>
      </div>
      {/* ========== footer bottom ======== */}
      <div className="bg-[#1b1e29] py-3 mt-14 text-center">
  <div className="container flex justify-center items-center h-full">
    <div className="flex flex-col items-center">
      <p className="text-gray-400 text-[14px]">
        Copyright © {year}
      </p>
      <p className="text-gray-400 text-[12px]">
        Developed by Asterios Koutoulidis
      </p>
      <p className="text-gray-400 text-[10px]">
        All rights reserved
      </p>
    </div>
  </div>
</div>


      {/* ========== footer bottom end ======== */}
    </footer>
  );
};

export default Footer;

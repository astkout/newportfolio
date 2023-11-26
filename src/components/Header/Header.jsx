import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

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

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="bg-blue-500 w-full h-20 flex items-center leading-none"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ================ logo =============== */}
          <div className="flex items-center w-[60px] h-[60px] cursor-pointer">
            <a href="#about">
              <img src={logo} alt="logo" />
            </a>
          </div>
          {/* ================= logo end ============== */}

          {/* ============== menu start =============== */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center space-x-4 gap-2">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-semibold"
                  href="#about"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-semibold"
                  href="#services"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-semibold"
                  href="#portfolio"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          {/* ============== menu end ================= */}

          {/* ========= menu right ========= */}
          <div className="flex items-center gap-4">
            <a href="#contact">
              <button
                className="flex items-center gap-2
             text-smallTextColor font-semibold border
              border-smallTextColor py-2 px-4 rounded-[30px] max-h-[40]
               hover:bg-smallTextColor
                hover:text-white hover:font-[500] ease-in duration-300"
              >
                <i
                  onClick={handleClick}
                  className="ri-mail-send-line"
                ></i>{" "}
                Contact Me
              </button>
            </a>

            <span
              onClick={toggleMenu}
              className="text-2xl
             text-smallTextColor md:hidden cursor-pointer"
            >
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* ========= menu end =========== */}
        </div>
      </div>
    </header>
  );
};

export default Header;

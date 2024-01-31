import React, { useEffect, useState } from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[400] text-[2.5rem] mb-5 mt-10">
            About me
          </h2>
          <p className="lg:max-w-600 lg:mx-auto text-headingColor font-semibold text-16px leading-7">
            Front end web developer proficient in HTML5, CSS3, Tailwind CSS,
            and Bootstrap 5 for responsive interfaces. Experienced in
            JavaScript, React.js, and jQuery for enhanced interactivity. Skilled
            in Git version control and adept at building server-side
            applications using Node.js and Express.js, with a focus on API
            integration. Basic knowledge of MongoDB for database management.
            Committed to delivering high-quality, performance-oriented web
            applications.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden absolute w-1 sm:block bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-blue-500 cursor-pointer transition ease-in duration-150"
                    >
                      <h3 className="text-blue-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                        <u>Frontend Development</u>
                      </h3>

                      <p className="text-15 text-blue-500 group-hover:text-white group-hover:font-semibold leading-7">
                        I excel in HTML5, CSS3, Tailwind CSS, and Bootstrap 5,
                        crafting visually appealing and responsive user
                        interfaces. Proficient in JavaScript, React.js, and
                        jQuery, I enhance website interactivity for captivating
                        user experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {windowWidth >= 640 && (
                  <div className="rounded-full bg-blue-500 border-white border-4 w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="frontend" />
                    </figure>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="50"
                      data-aos-duration="1300"
                      className="bg-white p-4 rounded shadow group hover:bg-blue-500 cursor-pointer transition ease-in duration-150"
                    >
                      <h3 className="text-blue-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                        <u>Backend Development</u>
                      </h3>

                      <p className="text-15 text-blue-500 group-hover:text-white group-hover:font-semibold leading-7">
                        Knowledge in back-end development using Node.js and
                        Express.js for server-side applications. Proficient in
                        Git for seamless code collaboration, and in MongoDB for
                        database management and query optimization.
                      </p>
                    </div>
                  </div>
                </div>

                {windowWidth >= 640 && (
                  <div className="rounded-full bg-blue-500 border-white border-4 w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="backend" />
                    </figure>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-duration="1400"
                      className="bg-white p-4 rounded shadow group hover:bg-blue-500 cursor-pointer transition ease-in duration-150"
                    >
                      <h3 className="text-blue-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                        <u>UI/UX Design</u>
                      </h3>

                      <p className="text-15 text-blue-500 group-hover:text-white group-hover:font-semibold leading-7">
                        I create user interfaces and experiences by staying
                        current with design principles and using tools like
                        Tailwind CSS and Bootstrap 5.
                      </p>
                    </div>
                  </div>
                </div>

                {windowWidth >= 640 && (
                  <div className="rounded-full bg-blue-500 border-white border-4 w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="UI/UX" />
                    </figure>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="150"
                      data-aos-duration="1500"
                      className="bg-white p-4 rounded shadow group hover:bg-blue-500 cursor-pointer transition ease-in duration-150"
                    >
                      <h3 className="text-blue-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl">
                        <u>Apps Development</u>
                      </h3>

                      <p className="text-15 text-blue-500 group-hover:text-white group-hover:font-semibold leading-7">
                        I'm skilled at building fast and responsive web
                        applications. I integrate data and services through
                        APIs. Using React.js, I create applications that work
                        well on various devices, aiming for both functionality
                        and a positive user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {windowWidth >= 640 && (
                  <div className="rounded-full bg-blue-500 border-white border-4 w-14 h-14 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appImg} alt="apps" />
                    </figure>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8uak6xl",
        "template_t0k4vl3",
        refForm.current,
        "_4RYY3nkSkTwI0VwI"
      )
      .then(
        (response) => {
          alert(
            "Message successfully sent. Check your spam folder for replies."
          );
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor sm:hover:text-headingColor font-[400] text-[2.5rem] mb-5">
          Get in Touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301580.4666755446!2d-1.8653647493701833!3d53.8055506110934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!5e0!3m2!1sen!2suk!4v1700604148318!5m2!1sen!2suk"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full" onSubmit={sendEmail} ref={refForm}>
              <div className="mb-5">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <input
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <input
                  name="email_id"
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] box-border h-32"
                  style={{ resize: "none" }}
                  required
                ></textarea>
              </div>

              <button
                className="w-full p-3 focus:outline-none rounded-[5px] 
             bg-blue-500 text-white hover:bg-smallTextColor 
             text-center ease-linear duration-150"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

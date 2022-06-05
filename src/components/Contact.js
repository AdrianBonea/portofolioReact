import React from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const form = React.useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unjhlvm",
        "template_v094kiq",
        form.current,
        "aFrlLKuFoGFsCkDrk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="flex py-40 ml-40" id="contact">
      <div className="flex flex-row justify-around bg-white rounded-3xl w-full shadow-md">
        <div className=" font-bold">
          <h3 className="text-lg text-[#2D1863] font-medium m-5 mt-20">
            <span className="bg-[#FFD43A] text-base">&nbsp;</span>
            &nbsp; Contact
          </h3>
          <div className="flex flex-col mx-5">
            <p className="mt-8 text-4xl text-[#2D1863] font-bold">
              Where you can find me:
            </p>
            <div className="flex flex-row text-5xl text-[#9B9DB9] mt-4">
              <a
                href="https://github.com/AdrianBonea"
                target="_blank"
                rel="noreferrer"
                className="mx-4"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-mirel-bonea/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col text-[#2D1863] rounded-lg w-[50vh]"
        >
          <h1 className="mx-10 mt-10 text-2xl font-bold">Send me an email</h1>
          <label className="mx-10 mt-5 mb-1">Name *</label>
          <input
            type="text"
            name="name"
            placeholder=" Your name"
            className="mx-10 bg-[#EEF7FF] border-transparent 
                        rounded focus:border-transparent focus:ring-0"
          />
          <label className="mx-10 mt-5 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            placeholder=" youare.the.best@email.com"
            className="mx-10 bg-[#EEF7FF] border-transparent 
                        rounded focus:border-transparent focus:ring-0"
          />
          <label className="mx-10 mt-5 mb-1">Message *</label>
          <textarea
            name="message"
            placeholder=" Write me a message"
            className="mx-10 bg-[#EEF7FF] border-transparent 
                            rounded focus:border-transparent focus:ring-0"
          />
          <button
            type="submit"
            value="Send"
            className="my-10 mx-10 py-4 bg-[#6F34FE] 
            text-white rounded-full 
            transition duration-500 ease-in-out 
            hover:bg-[#5d1afa]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

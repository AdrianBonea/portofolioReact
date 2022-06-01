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
    <section className="w-full h-auto flex justify-center py-40" id="contact">
      <div className="flex flex-col w-[80ch]">
        <div className="flex flex-col w-auto ">
          <div className=" font-bold">
            <span className="text-4xl font-bold text-[#2D1863] ">Contact</span>
            <div className="flex flex-col my-5">
              <p className="font-thin text-[#9B9DB9] text-4xl">
                Where you can find{" "}
                <span className="underline decoration-[#FFD43A]">me</span>:
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
            className="flex flex-col border-4 border-[#2D1863] text-[#2D1863] rounded-lg"
          >
            <h1 className="mx-10 mt-10 text-2xl font-bold">Send me an email</h1>
            <label className="mx-10 mt-5 mb-1">Name *</label>
            <input
              type="text"
              name="name"
              placeholder=" Your name"
              className="mx-10 bg-[#FFD43A]/70 border-transparent 
                        rounded focus:border-transparent focus:ring-0"
            />
            <label className="mx-10 mt-5 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              placeholder=" youare.the.best@email.com"
              className="mx-10 bg-[#FFD43A]/70 border-transparent 
                        rounded focus:border-transparent focus:ring-0"
            />
            <label className="mx-10 mt-5 mb-1">Message *</label>
            <textarea
              name="message"
              placeholder=" Write me a message"
              className="mx-10 bg-[#FFD43A]/70 border-transparent 
                            rounded focus:border-transparent focus:ring-0"
            />
            <button
              type="submit"
              value="Send"
              className="mx-10 my-10 py-2 text-xl border border-[#FFD43A] 
                hover:border-[#2D1863] hover:bg-[#FFD43A] hover:text-[#2D1863]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

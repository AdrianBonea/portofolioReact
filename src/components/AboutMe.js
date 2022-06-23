import { SiReact, SiTailwindcss } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

export default function MainContent() {
  return (
    <main>
      <div id="aboutMe" className="flex justify-around py-40">
        <div className="w-[50vh] grid grid-cols-2 gap-y-8 gap-x-5 text-7xl text-[#2D1863]">
          <div
            className="rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl shadow-sm -translate-x-8
                          flex flex-col justify-center items-center bg-white "
          >
            <SiReact />
            <p className="text-2xl mt-2">React</p>
          </div>
          <div
            className="rounded-br-3xl rounded-tl-3xl rounded-tr-3xl shadow-sm translate-x-8
                           flex flex-col justify-center items-center bg-white"
          >
            <SiTailwindcss />
            <p className="text-2xl mt-2">TailwindCSS</p>
          </div>
          <div
            className="rounded-3xl shadow-md col-span-2 
                            flex flex-col justify-center items-center bg-white"
          >
            <BsCodeSlash className="text-8xl text-[#6F34FE]" />
            <p className="text-3xl mt-2">FrontEnd</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg text-[#2D1863] font-medium">
            <span className="bg-[#FFD43A] text-base">&nbsp;</span>
            &nbsp; About me
          </h4>
          <h1 className="mt-8 text-4xl text-[#2D1863] font-bold">
            Better code, <br />
            better experience
          </h1>
          <p className="mt-4 font-medium text-[#9B9DB9] w-[50vh]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-row">
            <a
              href="#contact"
              className="my-10 mr-4 py-4 px-8 bg-[#6F34FE] 
                        text-white rounded-full 
                        transition duration-500 ease-in-out 
                        hover:bg-[#5d1afa] hover:scale-105"
            >
              Contact Me
            </a>
            <button>
              <a
                href="../extra/CV_Adrian_Mirel.pdf"
                download
                className="hover-underline-animation text-[#6F34FE] font-medium"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

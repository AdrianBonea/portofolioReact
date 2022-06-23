export default function Header() {
  return (
    <nav className="flex justify-around ">
      <div className="flex flex-col py-10">
        <div className="flex flex-row items-start">
          <h1 className="text-3xl text-[#2D1863] font-black">
            <span className="text-white bg-[#6F34FE] rounded-full w-4">
              &nbsp;&nbsp;P&nbsp;&nbsp;
            </span>
            &nbsp;o r t o f o l i o
          </h1>
          <ul className="flex flex-row text-lg text-[#9B9DB9] text-bold ">
            <li
              className="ml-12 hover:text-[#898a97]
                          transition duration-500"
            >
              <a href="###">About me</a>
            </li>
            <li
              className="ml-12 hover:text-[#898a97]
                            transition duration-500"
            >
              <a href="###">Projects</a>
            </li>
            <li
              className="ml-12 hover:text-[#898a97]
                            transition duration-500"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mt-60">
          <h3 className="text-lg text-[#2D1863] font-medium">
            <span className="bg-[#FFD43A] text-base">&nbsp;</span>
            &nbsp; Front-End Developer
          </h3>
          <h2 className="mt-8 text-6xl text-[#2D1863] font-bold">
            Bonea Adrian Mirel
          </h2>
          <p className="mt-4 font-medium text-[#9B9DB9]">
            I am a React intern. Let change the world.{" "}
          </p>
          <div className="flex flex-row">
            <a
              href="#contact"
              className="my-10 mx-4 py-4 px-8 bg-[#6F34FE] 
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

      <p className="mx-10 h-[80vh] w-[40vh] bg-split-purple-yellow rounded-b-full">
        big photo with me beeing happy
      </p>
    </nav>
  );
}

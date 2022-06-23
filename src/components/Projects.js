import { useEffect, useState } from "react";

import fromLowerCase from "../utils/fromLowerCase";
import { getProjects } from "../services/api/coinList";

export default function Projects() {
  const [latestRepos, setLatestRepos] = useState([]);

  useEffect(() => {
    //fetches the latest repos
    getProjects().then((res) => {
      setLatestRepos(res);
    });
  }, []);

  console.log(latestRepos);
  return (
    <section className="flex flex-col">
      <div className="pt-40 pb-10 flex ml-40">
        <div className="w-[50vh]">
          <h4 className="text-lg text-[#2D1863] font-medium">
            <span className="bg-[#FFD43A] text-base">&nbsp;</span>
            &nbsp; About me
          </h4>
          <h1 className="mt-8 text-4xl text-[#2D1863] font-bold">
            Latest Projects
          </h1>
        </div>
        <div className="w-[50vh]"></div>
      </div>

      <div className="grid grid-cols-2 ml-40">
        {latestRepos.slice(0, 4).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="m-10 bg-white text-[#2D1863] rounded-3xl shadow-lg">
              <p className="ml-5 h-60 py-8 font-medium text-[#9B9DB9]">
                {repo.description}
              </p>
              <h2 className="text-2xl mt-2 font-bold pl-10 py-8 border-t-2">
                {fromLowerCase(repo.name)}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

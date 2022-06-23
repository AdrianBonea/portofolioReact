import axios from "axios";

const GIT_PROJECTS_URL =
  "https://api.github.com/search/repositories?q=org:AdrianBonea&sort=updated&order=desc";

const getProjects = async () => {
  try {
    const coinList = await axios.get(GIT_PROJECTS_URL);
    const res = coinList.data.items;
    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return [];
};

export { getProjects };

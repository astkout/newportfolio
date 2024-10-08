import drumkit from "../images/drumkit.png";
import tindog from "../images/tindog.png";
import simon from "../images/simon.png";
import keeper from "../images/keeper.png";
import medicare from "../images/medicare.png"
import finance from "../images/finance.png"
import besteats from "../images/besteats.png"

const portfolios = [
  {
    id: "01",
    imgUrl: medicare,
    category: "Web Design",
    title: "Medicare",
    description: "My first medical page.",
    technologies: ["React", "Tailwind"],
    siteUrl: "https://medicare-dun.vercel.app/",
    siteUrla: "https://github.com/astkout/medicare",
  },
  {
    id: "02",
    imgUrl: besteats,
    category: "Web Design",
    title: "BestEats",
    description: "Delivery Services",
    technologies: ["React.js", "Tailwind CSS"],
    siteUrl: "https://besteats-nu.vercel.app/",
    siteUrla: "https://github.com/astkout/besteats",
  },
  {
    id: "03",
    imgUrl: finance,
    category: "Web Design",
    title: "FINANCE.",
    description: "A finance webpage",
    technologies: ["React", "Tailwind"],
    siteUrl: "https://finance-astkout.vercel.app/",
    siteUrla: "https://github.com/astkout/finance",
  },
  {
    id: "04",
    imgUrl: tindog,
    category: "Web Design",
    title: "Tindog",
    description: "A tinder site but....for dogs !!!",
    technologies: ["Html", "Css"],
    siteUrl: "https://tindog-pffl-astkout.vercel.app/",
    siteUrla: "https://github.com/astkout/tindog",
  },
 
  {
    id: "05",
    imgUrl: keeper,
    category: "Ux",
    title: "Keeper App.",
    description: "A daily note app that will keep your thoughts on track.",
    technologies: ["Javascript", "CSS", "Html"],
    siteUrl: "https://keeper-git-main-astkout.vercel.app/",
    siteUrla: "https://github.com/astkout/Keeper",
  },
  {
    id: "06",
    imgUrl: drumkit,
    category: "Ux",
    title: "Drumkit Interactive Game.",
    description:
      "An interactive Drum Kit web app which you can have fun with :)",
    technologies: ["Html", "CSS", "Javascript"],
    siteUrl: "https://astkout.github.io/DrumKit/",
    siteUrla: "https://github.com/astkout/DrumKit",
  },
  {
    id: "07",
    imgUrl: simon,
    category: "Ux",
    title: "Simon Says Game.",
    description: "A Simon says game to spend your time with.",
    technologies: ["Javascript", "Html", "CSS"],
    siteUrl: "https://simonsays-hazel.vercel.app/",
    siteUrla: "https://github.com/astkout/simonsays",
  },
];

export default portfolios;

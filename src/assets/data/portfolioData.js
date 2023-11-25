import drumkit from "../images/drumkit.png";
import tindog from "../images/tindog.png";
import simon from "../images/simon.png";
import keeper from "../images/keeper.png";
import portfolio from "../images/portfolio.png";

const portfolios = [
  {
    id: "01",
    imgUrl: tindog,
    category: "Web Design",
    title: "Tindog",
    description:
      "A tinder site but....for dogs !!!",
    technologies: ["Html", "Css",],
    siteUrl: "https://tindog-pffl-astkout.vercel.app/",
    siteUrla: "https://github.com/astkout/tindog",
  },
  {
    id: "02",
    imgUrl: portfolio,
    category: "Web Design",
    title: "My first portfolio.",
    description:
      "My first personal portfolio",
    technologies: ["React", "SCSS", "Node.js",],
    siteUrl: "https://portfolio-ruddy-zeta-63.vercel.app/",
    siteUrla: "https://github.com/astkout/portfolio",
  },
  {
    id: "03",
    imgUrl: keeper,
    category: "Ux",
    title: "Keeper App.",
    description:
      "A daily note app that will keep your thoughts on track.",
    technologies: ["Javascript", "CSS","Html"],
    siteUrl: "https://keeper-git-main-astkout.vercel.app/",
    siteUrla:"https://github.com/astkout/Keeper",
  }
  ,
  {
    id: "04",
    imgUrl: simon,
    category: "Ux",
    title: "Simon Says Game.",
    description:
      "A Simon says game to spend your time with.",
    technologies: ["Javascript", "Html", "CSS"],
    siteUrl: "https://simonsays-hazel.vercel.app/",
    siteUrla: "https://github.com/astkout/simonsays",
  },
  {
    id: "05",
    imgUrl: drumkit,
    category: "Ux",
    title: "Drumkit Interactive Game.",
    description:
      "An interactive Drum Kit web app which you can have fun with :)",
    technologies: ["Html", "CSS", "Javascript"],
    siteUrl: "https://astkout.github.io/DrumKit/",
    siteUrla: "https://github.com/astkout/DrumKit",
  }
 ,

  //   {
  //     id: "06",
  //     imgUrl: portfolioImg06,
  //     category: "Ux",
  //     title: "Online Therapy Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "07",
  //     imgUrl: portfolioImg07,
  //     category: "Web Design",
  //     title: "Appointment Booking Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "08",
  //     imgUrl: portfolioImg01,
  //     category: "Web Design",
  //     title: "Finance Technology Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "09",
  //     imgUrl: portfolioImg02,
  //     category: "Ux",
  //     title: "Video Conference Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "10",
  //     imgUrl: portfolioImg03,
  //     category: "Ux",
  //     title: "File Sharing Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "11",
  //     imgUrl: portfolioImg04,
  //     category: "Web Design",
  //     title: "Landing Page",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "12",
  //     imgUrl: portfolioImg05,
  //     category: "Web Design",
  //     title: "Landing Page",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "13",
  //     imgUrl: portfolioImg06,
  //     category: "Web Design",
  //     title: "Online Therapy Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
  //   {
  //     id: "14",
  //     imgUrl: portfolioImg07,
  //     category: "ux",
  //     title: "Appointment Booking Website",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //     technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //     siteUrl: "#",
  //   },
];

export default portfolios;

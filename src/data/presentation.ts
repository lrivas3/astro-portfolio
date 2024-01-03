type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "eleonardorivas@outlook.com",
  title: "Hi, I'm Leonardo👋",
  // profile: "/profile.webp",
  description:
      "I'm a web developer *from sunny El Salvador* with over *2 years* of web experience. " +
      "I am currently working with *Angular and Typescript*. " +
      "But hey, my heart beats for *hacking* and all things infrastructure tech!",
  socials: [
    {
      label: "Github",
      link: "https://github.com/lrivas3",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/leonardo-rivas/",
    },
  ],
};

export default presentation;

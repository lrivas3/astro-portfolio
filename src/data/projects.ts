export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Renta app",
    techs: ["Angular"],
    link: "https://github.com/lrivas3/RentaApp.git",
  },
  {
    title: "Portfolio / GlobalCode",
    techs: ["Astro","ReactJS (NextJS)", "TypeScript"],
    link: "https://globalcode.vercel.app/",
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;

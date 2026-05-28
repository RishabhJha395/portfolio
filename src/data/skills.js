import { FaReact, FaGitAlt, FaDatabase, FaJava } from "react-icons/fa";
import { SiCplusplus, SiPython, SiJavascript, SiMongodb, SiMysql, SiTailwindcss, SiVite, SiNodedotjs, SiExpress } from "react-icons/si";

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      // { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      {name:"NLTK", icon: SiPython},
      {name:"Scikit-learn", icon: SiPython},
      {name:"Pandas", icon: SiPython},
      {name:"NumPy", icon: SiPython},

      



    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Vite", icon: SiVite }
    ]
  },
  {
    category: "Core CS Subjects",
    items: [
      { name: "DBMS", icon: FaDatabase },
      { name: "OOP", icon: FaDatabase },
      { name: "Operating Systems", icon: FaDatabase },
      { name: "Computer Networks", icon: FaDatabase },


    ]
  }
];

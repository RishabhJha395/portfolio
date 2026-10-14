import { FaReact, FaGitAlt, FaDatabase, FaMicrochip, FaServer, FaTerminal, FaRobot, FaPython, FaCode, FaNodeJs, FaTools } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTypescript, SiMongodb, SiTailwindcss, SiVite, SiExpress, SiRedis } from "react-icons/si";

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: FaPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: FaCode },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: FaCode },
      { name: "Socket.io", icon: FaCode }
    ]
  },
  {
    category: "Data Science & AI",
    items: [
      { name: "Pandas & NumPy", icon: FaPython },
      { name: "Scikit-learn", icon: FaPython },
      { name: "NLTK", icon: FaPython }, 
      { name: "LLM APIs (Gemini/OpenRouter)", icon: FaRobot }
    ]
  },
  {
    category: "Databases & Cache",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase (PostgreSQL)", icon: FaDatabase },
      { name: "Redis", icon: SiRedis },
      { name: "Qdrant (Vector DB)", icon: FaDatabase }
    ]
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Vite", icon: SiVite },
      { name: "Playwright", icon: FaTools },
      { name: "Makefile", icon: FaTerminal }
    ]
  },
  {
    category: "Core CS & Systems",
    items: [
      { name: "CPU Architecture", icon: FaMicrochip },
      { name: "Performance Profiling", icon: FaTerminal },
      { name: "Operating Systems", icon: FaServer },
      { name: "DBMS & OOP", icon: FaDatabase }
    ]
  }
];
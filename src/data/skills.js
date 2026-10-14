import { FaReact, FaGitAlt, FaDatabase, FaMicrochip, FaServer, FaTerminal, FaRobot } from "react-icons/fa";
import { 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiTailwindcss, 
  SiVite, 
  SiNodedotjs, 
  SiExpress,
  SiSupabase,
  SiRedis,
  SiFastapi,
  SiSocketdotio,
  SiFramer,
  SiPlaywright,
  SiPandas,
  SiNumpy,
  SiScikitlearn
} from "react-icons/si";

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Socket.io", icon: SiSocketdotio }
    ]
  },
  {
    category: "Data Science & AI",
    items: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NLTK", icon: SiPython }, // NLTK doesn't have a specific icon, Python icon fits best
      { name: "LLM APIs (Gemini/OpenRouter)", icon: FaRobot }
    ]
  },
  {
    category: "Databases & Cache",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase (PostgreSQL)", icon: SiSupabase },
      { name: "Redis", icon: SiRedis },
      { name: "Qdrant (Vector DB)", icon: FaDatabase }
    ]
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Vite", icon: SiVite },
      { name: "Playwright", icon: SiPlaywright },
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
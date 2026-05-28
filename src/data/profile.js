import profileImage from "../assets/profile.jpg";
import { FaCode, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

export const profile = {
  name: "Rishabh Jha",
  title: "Computer Science Engineering Student",
  tagline: "Full Stack Developer | Competitive Programmer | Problem Solver",
  description:
    "Passionate full stack and machine learning developer skilled in building responsive and scalable web applications using the MERN stack. Strong interest in problem solving, data structures & algorithms, and developing intelligent real-world applications with clean UI design and efficient backend architectures. Experienced in working with modern web technologies, REST APIs, and machine learning libraries for practical AI-driven projects.",
  location: "Delhi, India",
  email: "rishabh.jha.030905@gmail.com",
  resumeLink: "https://drive.google.com/file/d/1iEh3XchdNs0jFVVgm2otMlC-rd-x4C0K/view?usp=sharing",
  image: profileImage,
  tags: ["Full Stack Developer",'ML Developer', "Competitive Programmer", "Problem Solver"],
  stats: [
    { value: "1200+", label: "DSA Problems Solved" },
    { value: "9.328", label: "CGPA" },
    { value: "Knight@LeetCode", label: "Rating Badge" }
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/RishabhJha395", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rishabh-jha-0bb3322a6/", icon: FaLinkedinIn },
    { label: "LeetCode", href: "https://leetcode.com/u/RishabhJha395/", icon: SiLeetcode },
    { label: "Codeforces", href: "https://codeforces.com/profile/jhaRiss", icon: SiCodeforces },
    { label: "Codechef", href: "https://www.codechef.com/users/gleam_rose_43", icon: SiCodechef },
    { label: "Codolio", href: "https://codolio.com/profile/jhaRiss", icon: FaCode }
  ],
  education: [
    { school: "DTU", detail: "B.Tech, Computer Science Engineering", year: "2023 - 2027",score:"9.328" },
    { school: "Sarvodaya Vidyalaya", detail: "Senior Secondary(12th)", year: "2021 - 2023" ,score:"94.8%"},
    { school: "Apeejay School", detail: "Secondary Education(10th)", year: "2015-2021",score:"96.6%" }
  ]
};

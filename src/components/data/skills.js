import { FaJava, FaReact,FaPython,FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { PiFileCss } from "react-icons/pi";
import { SiExpress } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMysql,SiOracle } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { BsFiletypeJava } from "react-icons/bs";
// import { FaReact } from "react-icons/fa";

export const SkillsData = [
  {
    type: "Languages",
    list: [
      {
        name: "Java",
        icon: <FaJava/>
        },
      {
        name: "JavaScript",
        icon: <DiJavascript1/>
        },
        {
          name: "Python",
          icon: <FaPython/>
          },
      {
        name: "HTML",
        icon: <FaHtml5/>
      },
      {
        name: "CSS",
        icon: <PiFileCss/>
      },
    ],
  },
  {
    type: "Frameworks",
    list: [
      {
        name: "React",
        icon: <FaReact/>
      },
      {
        name: "ExpressJs",
        icon: <SiExpress/>
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot/>
      },
      {
        name: "Jsp",
        icon: <BsFiletypeJava/>
      },
      {
        name: "Hibernate",
        icon: <SiHibernate/>
      },
    ],
  },
  {
    type: "Databases",
    list: [
      {
        name: "SQL",
        icon: <SiMysql/>
      },
      {
        name: "PlSql",
        icon: <SiOracle/>
      },
      {
        name: "MongoDB",
        icon: <TbBrandMongodb/>
      }
    ],
  },
];
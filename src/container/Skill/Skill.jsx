import React, { useState, useEffect } from "react";
import { images } from "../../constant";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import ReactTooltip from "react-tooltip";
import "./Skill.scss";
const Skill = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const experiences = [
    {
      year: 2019,
      works: [
        {
          name: "Front-end developer",
          company: "Freelancing on Fivver",
          desc: "I worked as a front end developer at Aivon",
        },
      ],
    },

    {
      year: 2019,
      works: [
        {
          name: "Web developer",
          company: "Tech sound Incubative hub",
          desc: "Worked as full stack MERN stack developer",
        },
      ],
    },

    {
      year: 2021,
      works: [
        {
          name: "Full Stack Dev",
          company: "Von Aigbok Izar limited",
          desc: "Developing and designing website with good ui/ux",
        },
      ],
    },
  ];
  const skil = [
    { name: "React", icon: images.react },
    { name: "Javascript", icon: images.javascript },
    { name: "Nodejs", icon: images.node },
    { name: "HTML", icon: images.html },
    { name: "CSS", icon: images.css },
  ];

  useEffect(() => {
    setSkills(skil);
    setExperience(experiences);
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skill-container">
        <motion.div className="app__skill-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skill-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "gray" }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name} </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.map((exp) => (
            <motion.div key={exp.year} className="app__skill-exp-item">
              <div className="app__skill-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skill-exp-works">
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skill-exp-work"
                      key={work.name}
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name} </h4>
                      <p className="p-text">{work.company} </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}{" "}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skill, "app__skills"),
  "skill",
  "app__whitebg"
);

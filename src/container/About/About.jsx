import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constant";
import { AppWrap, MotionWrap } from "../../Wrapper";

import "./About.scss";
const About = () => {
  const abouts = [
    {
      title: "Front-end Developer",
      description: "I am a front-end React developer",
      imgUrl: images.about01,
    },
    {
      title: "Back-end Developer",
      description: "I am back-end nodejs developer",
      imgUrl: images.about02,
    },
    {
      title: "Web Developer",
      description: "I am a good web developer",
      imgUrl: images.about03,
    },
    {
      title: "Full Stack Developer",
      description: "I am a full stack MERN developer",
      imgUrl: images.about04,
    },
  ];
  return (
    <>
      <h1 className="head-text">
        I know That <span>Good Dev</span> means <span>Good App</span>
      </h1>
      <div className="app__profile">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            duration={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}{" "}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

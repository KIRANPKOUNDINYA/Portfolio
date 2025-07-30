// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../constants";

// Flatten all skill items into one array
const allSkills = SkillsInfo.flatMap(category => category.skills);

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* All Skills in One Container */}
    <div className="bg-gray-900 backdrop-blur-md rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] px-8 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6">
        {allSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-3"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-sm text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

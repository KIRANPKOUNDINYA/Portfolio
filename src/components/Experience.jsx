import React from "react";
import { experiences } from "../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="flex justify-center mb-16"
          >
            {/* Content Section */}
            <div className="w-full sm:max-w-4xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
              {/* Content Flex Container */}
              <div className="flex flex-col gap-6">
                {/* Role, Company, Date */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400">{experience.desc}</p>

                {/* Skills */}
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Live Project Button */}
                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-[#8245ec] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 border border-gray-300"
                  >
                    View Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

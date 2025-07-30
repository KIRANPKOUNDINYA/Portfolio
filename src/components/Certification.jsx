import React from "react";
import { certifications } from "../constants";

const Certification = () => {
  return (
    <section
      id="certification"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[8vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Certifications I have earned to sharpen my skills and validate my knowledge.
        </p>
      </div>

      {/* Certification Cards */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-12">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="w-full sm:max-w-md lg:max-w-sm p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <h4 className="text-sm text-gray-300">{cert.issuer}</h4>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>

            {cert.grade && (
              <p className="mt-4 text-gray-400 font-bold">Grade: {cert.grade}</p>
            )}
            <p className="mt-2 text-gray-400">{cert.desc}</p>

            {/* View Certificate Button */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-[#8245ec] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 border border-gray-300 text-center"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;

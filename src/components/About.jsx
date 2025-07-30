import React from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/kiran_profile_image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between">
        {/* Left Side (Text content) */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          {/* Typing Animation */}

          {/* Mobile View: Single Line */}
          <div className="block lg:hidden">
            <TypeAnimation
              sequence={[
                "Hi, I am Kiran P Koundinya",
                1500,
                "",
                500,
                "Hi, I am Kiran P Koundinya",
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            />
          </div>

          {/* Desktop View: Two Lines with extra spacing */}
          <div className="hidden lg:block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 whitespace-pre-line min-h-[7rem] leading-[4rem]">
              <TypeAnimation
                sequence={[
                  "Hi, I am\nKiran P Koundinya",
                  1500,
                  "",
                  500,
                  "Hi, I am\nKiran P Koundinya",
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>

          {/* Sub-heading */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">Software Developer</span>
          </h3>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Software Developer with a Master’s degree in Computer Applications
            (MCA), seeking an opportunity to apply comprehensive knowledge of
            software development methodologies. Passionate about contributing to
            full-stack development, Database management, software projects
            within a dynamic, technology-driven, and growth-oriented
            organization.
          </p>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1ggQN4JVaZcxdN-jOcW0PmrgTZILyHJqQ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            View Resume
          </a>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center md:justify-end md:mb-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-4 border-[#8245ec] shadow-lg">
            <img
              src={profileImage}
              alt="Kiran P Koundinya"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

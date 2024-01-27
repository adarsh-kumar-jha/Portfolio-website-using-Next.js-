import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/DevDetective.png"
          title="Dev-Detective Project"
          description="Spy On Any Developer's Github Profile And Have a Peek at all The PRS and followers he/she Got, By simply Entering User-Name in the Search Box."
        />
        <ProjectCard
          src="/tictactoe.png"
          title="Interactive TIC-TAC-TOE Game"
          description="Bringing Old School Vibes Again With Modern Layout And Responsive Design, This is a TIC-TAC-TOE game created using JS and Tailwind."
        />
        <ProjectCard
          src="/portfolioadarsh.png"
          title="Modern Responsive Portfolio"
          description="It is a Modern Space Themed Portfolio Website which Showcases My Skills , Projects & Contact Info."
        />
      </div>
    </div>
  );
};

export default Projects;
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "project2",
    description:
      "Pixels is a dynamic social media platform enabling user authentication, profile management, and content sharing. Built with modern web technologies, it highlights my full-stack development skills and focus on creating user-friendly, scalable solutions",
    stack: [
      { name: "Mongodb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/work/mern.png",
    live: "",
    github: "https://github.com/sushanth645/Pixels",
  },
  {
    num: "02",
    category: "frontend",
    title: "project1",
    description:
      "Developed a responsive Amazon clone using HTML and CSS, replicating the platform's user interface and design. This project showcases my attention to detail, proficiency in web design, and ability to create visually appealing layouts aligned with modern UI/UX standards.",
    stack: [{ name: "Html" }, { name: "css" }],
    image: "/assets/work/frontend project.jpg",
    live: "",
    github: "https://github.com/sushanth645/amazon-clone",
  },
];

const Work = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 gap-50">
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition: {delay:2.4 , duration:0.4,ease:'easeIn'} }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left side: Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[0].num}
              </div>

              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[0].category} project
              </h2>

              {/* Project description */}
              <p className="text-white/60">{projects[0].description}</p>

              {/* Stack */}
              <ul className="flex gap-4">
                {projects[0].stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== projects[0].stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* GitHub Button */}
              <div className="flex items-center gap-4">
                <Link href={projects[0].github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: Swiper */}
          <div className="w-full xl:w-[50%]">
            <div
              className="xl:h-[520px] mb-12"
             // Trigger project change on slide change
            >
                <div  className="w-full">
                  <div className="h-[460px] relative group  justify-center items-center bg-pink-50/20">
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={projects[0].image}
                        fill
                        className="object-cover"
                        alt={projects[0].title}
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[50px]"></div>
      <div className="border border-white/20 w-[90%] mx-auto"></div>
      <div className="h-[100px]"></div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left side: Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[1].num}
              </div>

              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[1].category} project
              </h2>

              {/* Project description */}
              <p className="text-white/60">{projects[1].description}</p>

              {/* Stack */}
              <ul className="flex gap-4">
                {projects[1].stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== projects[1].stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* GitHub Button */}
              <div className="flex items-center gap-4">
                <Link href={projects[1].github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: Swiper */}
          <div className="w-full xl:w-[50%]">
            <div
              className="xl:h-[520px] mb-12"
             // Trigger project change on slide change
            >
                <SwiperSlide  className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={projects[1].image}
                        fill
                        className="object-cover"
                        alt={projects[1].title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default Work;
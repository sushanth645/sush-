"use client";
import {FaHtml5, FaCss3, FaJs,FaReact,FaGithub,FaNodeJs} from "react-icons/fa";
import{
    SiTailwindcss, SiReactdotjs 
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
//about data
const about ={
    title:'About me',
    Description:'Below is a snapshot of my personal and academic details, showcasing my background and contact information for any further correspondence',
    info: [
        {
         fieldName: "Name",
         fieldValue: "Sushanth Lakkoju",
        },
        {
         fieldName: "Phone",
         fieldValue: "(+91) 6300353174",
        },
        {
         fieldName: "Institute",
         fieldValue: "NIT Raipur",
        },
        {
            fieldName: "Email",
            fieldValue: "sushanthlakkoju66@gmail.com",
           },
        {
         fieldName: "LinkedIn",
         fieldValue: "sushanth-lakkoju",
        },
        {
            fieldName: "Languages",
            fieldValue: "English,Hindi,Telugu",
           },
           {
            fieldName: "Location",
            fieldValue: "Vizianagaram",
           },
           {
            fieldName: "Nationality",
            fieldValue: "Indian",
           },
    ]
};

//education data
const education = {

    icon: "/public/assets/resume/cap.svg",
    title:'My education',
    Description:'Below is a snapshot of my academic journey, highlighting my qualifications and achievements',
    items: [
      {
        institution: "NIT Raipur",
        position: "B.Tech",
        branch: "Electrical ",
        Duration: "2022-2026",
      },
      {
        institution: "Narayana Junior College",
        position: "Intermediate",
        branch:"96.5%",
        Duration: "2020-2022",
      },
      {
        institution: "Bhashyam Public School",
        position: "SSC",
        branch:"10 cpa",
        Duration: "2020",
      },
    ],
};

//skills
const skills = {
    title:' My skills',
    Description:'Below is a comprehensive overview of my technical and interpersonal skills, reflecting my expertise and versatility',
    skillList: [
     {
        icon: <FaHtml5 />,
        name: "html",
     },
     {
        icon: <FaCss3 />,
        name: "css",
     },
     {
        icon: <FaJs />,
        name: "javascript",
     },
     {
        icon: <FaReact />,
        name: "react.js",
     },
     {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
     },
     {
        icon: <FaNodeJs />,
        name: "node.js",
     },
     {
        icon: < BiLogoMongodb/>,
        name: "Mongodb",
     },
     {
        icon: <FaGithub />,
        name: "Github",
     },
    ],
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
 } from "@radix-ui/react-tooltip";
 import { ScrollArea } from "@/components/ui/scroll-area";
 import {motion} from "framer-motion";
const Resume = ()=>{
    return (
     <motion.div 
     initial={{opacity:0}}
     animate={{
        opacity:1,
        transition: {delay:2.4,duration: 0.4,ease:"easeIn"},
     }}
     className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
     >
        <div className="container mx-auto">
            <Tabs
             defaultValue="education" 
             className="flex fex-col xl:flex-row gap-[60px]"
             >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <h2 className="text-4xl font-bold text-white">Why hire me?</h2>
                <p className="max-w-[600pxx] text-white/60 mx-auto xl:mx-0"></p>
                    <TabsTrigger value="education">education</TabsTrigger>
                    <TabsTrigger value="skills">skills</TabsTrigger>
                    <TabsTrigger value="about">about</TabsTrigger>
                </TabsList>
            
            {/* content */}
            <div className="min-h-[70vh] w-full">
                {/* education */}
                 <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{education.title}</h3>
                      <p className="max-w-[600pxx] text-white/60 mx-auto xl:mx-0">{education.Description}</p>
                      <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item,index)=>{
                               return(
                               <li 
                                key={index}
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                flex flex-col justify-center items-center lg:items-start gap-1"
                               >
                                <span className="text-accent">{item.Duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[30px]
                                text-center lg:text-left">
                                    {item.position}
                                </h3>
                                <h3 className="text-xl max-w-[200px] min-h-[20px]
                                text-center lg:text-left">
                                    {item.branch}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    <p className="text-white/60">{item.institution}</p>
                                </div>
                               </li> 
                               );
                            })}
                        </ul>
                      </ScrollArea>
                    </div>
                 </TabsContent>


                   {/* skills */}
                   <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                       <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.Description}</p>
                       </div>
                       <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((skill,index)=>{
                            return(
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                       <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger> 
                                        <TooltipContent>
                                           <p className="capitalize">{skill.name}</p> 
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                              </li>
                            );
                        })}
                       </ul>
                    </div>
                 </TabsContent>


                   {/* about */}
                   <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                         {about.info.map((item,index)=>{
                            return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                <span className="text-white/60">{item.fieldName}</span>
                                <span className="text-xl">{item.fieldValue}</span>
                            </li>
                         })} 
                        </ul>
                    </div>
                 </TabsContent>
              </div>         
            </Tabs>
        </div>
     </motion.div>
    );
};
export default Resume;
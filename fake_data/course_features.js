import { IconUser } from "@tabler/icons-react";

export const CourseFeatures = [
    {
        id: 1,
        title: "225+ Videos in 15 Modules",
        desc: "The course is divided into 15 modules and 225+ videos for step-by-step learning and is taught through documentation.",
        icon: () => <IconUser size={60} className="text-blue-600" />,
        classes: "border-b border-r p-6",
    },
    {
        id: 2,
        title: "130+ Hours of 50GB+ Recorded Content",
        desc: "Video size and duration are optimized taking into account time and bandwidth consumption.",
        icon: () => <IconUser size={60} className="text-blue-600" />,
        classes: "border-b border-r p-6",
    },
    {
        id: 3,
        title: "100+ Quizzes",
        desc: "There will be quizzes with explanations and answers at the end of each video so that you can check your progress as you learn.",
        icon: () => <IconUser size={60} className="text-blue-600" />,
        classes: "border-b p-6",
    },
    {
        id: 4,
        title: "9 Assignments",
        desc: "At the end of each module there will be assignments that you will do yourself. The solution of the assignment will be shared on GitHub at the end of the course so that you can practice on your own.",
        icon: () => <IconUser size={60} className="text-blue-600" />,
        classes: "border-r p-6",
    },
    {
        id: 5,
        title: "7 Live Sessions",
        desc: "There will be live sessions every week with discussions on important topics on assignments where you can directly ask questions on various topics.",
        icon: () => <IconUser size={60} className="text-blue-600" />,
        classes: "border-r p-6",
    },
    {
        id: 6,
        title: "11 Projects",
        desc: "We have followed project based learning process throughout the course. In the course we will do 15 projects together. Some projects will be shown directly in the module and some will be done by yourself.",
        icon: () => <IconUser size={60} className="text-blue-600" />,
        classes: "p-6",
    },
];

"use client";

import GlassmorphismCard from "@/components/GlassmorphismCard";
import { Button } from "@/components/ui/button";
import { CourseFeatures } from "@/fake_data/course_features";
import { course_list } from "@/fake_data/course_list";
import { IconBrandNextjs, IconBrandReact } from "@tabler/icons-react";
import React from "react";
import ReactPlayer from "react-player";
import PageSection from "./_components/PageSection";

const weeks = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"];

export default function CourseDetails({ params }) {
    const [courseDetails, setCourseDetails] = React.useState({});

    React.useEffect(() => {
        const data = course_list.find((course) => course.id.toString() === params.courseId);
        setCourseDetails(data);
    }, []);

    return (
        <div className="">
            {/* banner section  */}
            <section className="grid h-[calc(100vh-82px)] grid-cols-2 items-center justify-center">
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <IconBrandReact size={48} className="text-blue-500" />
                        <IconBrandNextjs size={48} className="text-blue-500" />
                    </div>
                    <h2 className="mt-5 text-4xl font-medium text-base-500">{courseDetails?.title}</h2>
                    <h4 className="mt-5 text-base-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iste dolorem tempore dolorum,
                        perferendis asperiores expedita ratione deserunt nesciunt laborum.
                    </h4>
                    <Button className="mt-5" variant="secondary">
                        Enroll Now
                    </Button>
                </div>
                <div>
                    <div className="aspect-video w-full rounded-md p-4">
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            controls
                            style={{
                                boxShadow: "0 0 20px 10px #052439",
                                borderRadius: "6px",
                                overflow: "hidden",
                                border: "4px solid #254ea2",
                            }}
                            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                        />
                    </div>
                </div>
            </section>

            {/* at a glance about course  */}
            <PageSection
                title="At A Glance About Our Course"
                sub_title="Everything in this course"
                icon={<IconBrandReact size={64} className="text-blue-600" />}
            >
                <GlassmorphismCard className="grid grid-cols-3 justify-center rounded-xl p-8">
                    {CourseFeatures.map((item) => (
                        <div key={item.id} className={`group cursor-default ${item.classes}`}>
                            <div className="flex justify-center">{item.icon()}</div>
                            <h4 className="mt-2 text-center text-lg font-medium text-base-400 transition-all duration-300 group-hover:text-base-500">
                                {item.title}
                            </h4>
                            <h4 className="mt-2 text-center text-base-300 transition-all duration-300 group-hover:text-base-400">
                                {item.desc}
                            </h4>
                        </div>
                    ))}
                </GlassmorphismCard>
            </PageSection>

            {/* modules of the course */}
            <PageSection
                title="Modules In The Course"
                sub_title="The entire course is arranged in 15 modules"
                sectionClass="mt-32"
                icon={<IconBrandReact size={64} className="text-blue-600" />}
            >
                <div className="mb-10 w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div className="grid grid-cols-2" key={index}>
                            <div>
                                {index % 2 === 0 ? (
                                    <div className="flex justify-end border-r border-[#1d82e0] pb-6 pr-10">
                                        <div className="glassmorphism-dark-2 relative rounded-md border px-5 py-4">
                                            <div className="mb-4 flex flex-col flex-wrap items-end justify-center">
                                                <h3 className="text-lg font-medium text-primary">
                                                    {weeks[index]} Week
                                                </h3>
                                                <h4 className="text-[15px] text-base-400">
                                                    We will finish two modules this week and learn the basics of React
                                                </h4>
                                            </div>
                                            <div className="flex flex-wrap items-center justify-end gap-4">
                                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                                    <div key={i}>
                                                        <h4 className="custom-glow w-fit rounded-md border-2 border-[#1d82e0] bg-blue-900/10 px-2.5 py-1.5 text-sm font-semibold text-[#1d82e0]">
                                                            What is react
                                                        </h4>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-4 flex flex-col flex-wrap items-end justify-center">
                                                <h4 className="text-[15px] text-base-400">
                                                    A project will be shown and an assignment
                                                </h4>
                                            </div>
                                            <div className="custom-glow absolute -right-[53px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1d82e0] text-sm text-base-500">
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                {index % 2 === 1 ? (
                                    <div className="flex justify-start border-l border-[#1d82e0] pb-6 pl-10">
                                        <div className="glassmorphism-dark-2 relative rounded-md border px-5 py-4">
                                            <div className="mb-4 flex flex-col flex-wrap items-start justify-center">
                                                <h3 className="text-lg font-medium text-primary">
                                                    {weeks[index]} Week
                                                </h3>
                                                <h4 className="text[15px] text-base-400">
                                                    The entire course is arranged in 15 modules
                                                </h4>
                                            </div>
                                            <div className="flex flex-wrap items-center justify-start gap-4">
                                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                                    <div key={i}>
                                                        <h4 className="custom-glow w-fit rounded-md border-2 border-[#1d82e0] bg-blue-900/10 px-2.5 py-1.5 text-sm font-semibold text-[#1d82e0]">
                                                            What is react
                                                        </h4>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-4 flex flex-col flex-wrap items-start justify-center">
                                                <h4 className="text-[15px] text-base-400">
                                                    A project will be shown and an assignment
                                                </h4>
                                            </div>
                                            <div className="custom-glow absolute -left-[53px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1d82e0] text-sm text-base-500">
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </PageSection>
        </div>
    );
}

// course details page

// banner section
// at a glance about course
// modules of the course
// project of the course
// the course flow
// benifits from this course
// basic requirement for the course
// instructors information
// faq

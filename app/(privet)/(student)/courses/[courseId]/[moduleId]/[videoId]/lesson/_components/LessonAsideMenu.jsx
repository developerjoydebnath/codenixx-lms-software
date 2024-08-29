"use client";

import GlassmorphismCard from "@/components/GlassmorphismCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { course_data } from "@/fake_data/course_data";
import { IconCircleCheck, IconCircleCheckFilled, IconPlayerPlay } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function LessonAsideMenu({ selectedModule, setSelectedModule, selectedLesson, setSelectedLesson }) {
    const router = useRouter();
    const { theme } = useTheme();

    console.log(selectedLesson, selectedModule);

    const handleLessonChange = (lessonId, moduleId) => {
        setSelectedLesson(lessonId);
        router.push(`/courses/1/${moduleId}/${lessonId}/lesson`);
    };

    return (
        <GlassmorphismCard className="h-fit rounded-md">
            <div className="border-b px-3 py-3">
                <Input type="text" placeholder="Type to search lesson..." />
            </div>
            <div className="m-4">
                <div>
                    <h5 className="text-sm text-base-400">Module Finished 9/14 · Progress 60.58%</h5>
                    <h5 className="mt-0.5 text-xs text-base-300">Complete all the module to get the certified</h5>
                    <div className="mt-3 h-2.5 w-full rounded-full border">
                        <div className="h-full w-[60.58%] rounded-full border border-primary/80 bg-primary/80" />
                    </div>
                    <div className="mt-4">
                        <ScrollArea className="h-[650px] pr-3">
                            <Accordion
                                type="single"
                                defaultValue={`item-${selectedModule}`}
                                collapsible
                                className="w-full"
                            >
                                {course_data.map((item) => (
                                    <AccordionItem key={item.id} value={`item-${item.id}`}>
                                        <AccordionTrigger
                                            onClick={() => setSelectedModule(item.id)}
                                            className={`cursor-default px-2 transition-all duration-200 ease-in ${selectedModule === item.id ? "bg-primary text-base-0 dark:text-foreground" : "text-base-400 hover:bg-primary hover:text-base-0 dark:hover:text-foreground"}`}
                                        >
                                            <div className="text-start">
                                                <h5 className="text-sm">{item.title}</h5>
                                                <h5 className="mt-0.5 text-xs font-normal">
                                                    {item.duration} | Deadline: {item.deadline}
                                                </h5>
                                            </div>
                                        </AccordionTrigger>
                                        {item.lessons.map((sub_item) => (
                                            <AccordionContent
                                                key={sub_item.id}
                                                onClick={() => handleLessonChange(sub_item.id, item.id)}
                                                className={`flex cursor-pointer items-center justify-between gap-2 border-t py-2 pl-4 pr-2 transition-all duration-200 ease-in ${selectedModule === item.id && selectedLesson === sub_item.id ? "bg-primary/30 text-base-500" : "text-base-400 hover:bg-primary/10 hover:text-base-500"}`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="rounded-full border-2 border-primary p-[3px]">
                                                        <IconPlayerPlay className="text-primary" size={14} />
                                                    </div>
                                                    <div>
                                                        <h5 className="text-sm">{sub_item.title}</h5>
                                                        <h5 className="mt-1 text-xs font-light">{sub_item.duration}</h5>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    {sub_item.completed ? (
                                                        <IconCircleCheckFilled className="text-primary" size={20} />
                                                    ) : (
                                                        <IconCircleCheck className="text-primary" size={20} />
                                                    )}
                                                </div>
                                            </AccordionContent>
                                        ))}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </GlassmorphismCard>
    );
}

"use client";

import GlassmorphismCard from "@/components/GlassmorphismCard";
import { Button } from "@/components/ui/button";
import { course_list } from "@/fake_data/course_list";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Courses() {
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {course_list.map((course) => (
                    <GlassmorphismCard key={course.id} className="rounded-md p-2 sm:p-4">
                        <div className="relative aspect-video w-full rounded border">
                            <Image
                                height={400}
                                width={711}
                                className="h-full w-full rounded"
                                src={"/images/javascript-master-course-banner.jpg"}
                                alt="course"
                            />
                            <div className="absolute right-1 top-1 rounded-full bg-primary">
                                <h4 className="flex h-12 w-12 flex-col items-center justify-center text-sm text-base-500">
                                    <span className="text-sm">50%</span> <span className="text-xs">OFF</span>
                                </h4>
                            </div>
                        </div>
                        <div>
                            <div className="mt-3 flex items-center justify-between">
                                <h5 className="text-xs tracking-wide text-base-300">Duration: {course.duration}</h5>
                                <h5 className="text-xs tracking-wide text-base-300">
                                    Enrolled: {course.studentsEnrolled}
                                </h5>
                                <h5 className="text-xs tracking-wide text-base-300">Rating: {course.rating}</h5>
                            </div>
                            <h4 className="mt-3 text-2xl font-medium text-base-500">{course.title}</h4>
                            <h5 className="mt-1 text-base-500/90">{course.description}</h5>
                            <h5 className="mt-1 text-base-400">Level: {course.level}</h5>
                            <h5 className="mt-1 text-base-400">Instructor: {course.instructor}</h5>
                            <h5 className="mt-1 text-base-400">
                                Price: <span className="font-semibold text-primary">${course.price}</span>
                            </h5>
                            <div className="mt-3 flex items-center gap-2.5">
                                {auth.user && auth?.user?.base_role === "student" ? (
                                    <Link href={`/courses/${course.id}/1/1/lesson`}>
                                        <Button size="sm">Access Course</Button>
                                    </Link>
                                ) : (
                                    <Button size="sm">Enroll Now</Button>
                                )}
                                <Link href={`/courses/${course.id}`}>
                                    <Button size="sm" variant="secondary">
                                        See Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </GlassmorphismCard>
                ))}
            </div>
        </div>
    );
}

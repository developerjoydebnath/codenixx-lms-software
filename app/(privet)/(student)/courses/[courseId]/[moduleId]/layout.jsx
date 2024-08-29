"use client";

import { useParams } from "next/navigation";
import React from "react";
import LessonAsideMenu from "./[videoId]/lesson/_components/LessonAsideMenu";

export default function LessonPageLayout({ children }) {
    const params = useParams();
    const [selectedModule, setSelectedModule] = React.useState(Number(params?.moduleId) || null);
    const [selectedLesson, setSelectedLesson] = React.useState(Number(params?.videoId) || null);

    React.useEffect(() => {
        if (params.moduleId && params.videoId) {
            setSelectedModule(Number(params.moduleId));
            setSelectedLesson(Number(params.videoId));
        }
    }, [params.moduleId, params.videoId]);

    return (
        <div className="flex w-full gap-6">
            <div className="w-full">{children}</div>
            <div className="w-fit min-w-[400px]">
                <LessonAsideMenu
                    selectedLesson={selectedLesson}
                    selectedModule={selectedModule}
                    setSelectedLesson={setSelectedLesson}
                    setSelectedModule={setSelectedModule}
                />
            </div>
        </div>
    );
}

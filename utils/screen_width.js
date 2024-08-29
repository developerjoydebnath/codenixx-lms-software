"use client";

import { useEffect, useState } from "react";

export const ScreenWidth = () => {
    const [screen, setScreen] = useState(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        setScreen(screenWidth);
    }, []);

    return screen;
};

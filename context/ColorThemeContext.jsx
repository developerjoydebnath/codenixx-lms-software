"use client";

import { themesCss } from "@/constants/themesCss";
import { IconLoader2 } from "@tabler/icons-react";
import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useLocalStorage } from "react-use";

const ColorThemeContext = createContext({});

const ColorThemeProvider = ({ children }) => {
    const [themeColor, setThemeColor] = useLocalStorage("theme-color");
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [colorTheme, setColorTheme] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    const applyTheme = (value) => {
        if (value && typeof window !== "undefined") {
            setColorTheme(value);
            const theme = themesCss[value];
            // Create a style element for the color theme
            const colorStyle = document.querySelector(`style[data-theme="theme-variable"]`);
            if (colorStyle !== null) {
                colorStyle.textContent = theme;
            } else {
                const style = document.createElement("style");
                style.setAttribute("data-theme", "theme-variable");
                document.head.appendChild(style);
                style.textContent = theme; // Add this line to set the content of the new style element
            }
        }
    };

    useEffect(() => {
        setLoading(true);

        if (themeColor === undefined) {
            setThemeColor("green");
            applyTheme("green");
            setColorTheme("green");
        } else {
            applyTheme(themeColor);
            setColorTheme(themeColor);
        }

        setLoading(false);
    }, [themeColor, setThemeColor]);

    if (!mounted) {
        return (
            <div className="z-50 flex h-screen w-screen flex-col items-center justify-center gap-1 bg-base-0">
                <IconLoader2 size={40} className="animate-spin-slow text-base-500" />
                <div>Loading</div>
            </div>
        );
    }

    return (
        <ColorThemeContext.Provider value={{ colorTheme, applyTheme }}>
            {loading ? (
                <div className="flex h-screen w-screen flex-col items-center justify-center gap-1 bg-base-0">
                    <IconLoader2 size={40} className="animate-spin-slow text-base-500" />
                    <div>Loading</div>
                </div>
            ) : (
                children
            )}
            <ToastContainer />
        </ColorThemeContext.Provider>
    );
};

export default ColorThemeProvider;

export const useColorTheme = () => useContext(ColorThemeContext);

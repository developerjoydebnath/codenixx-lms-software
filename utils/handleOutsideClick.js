import { useEffect } from "react";

export const handleOutsideClick = (ref, setIsOpen) => {
    return useEffect(() => {
        // add event listener to document to detect clicks outside of navbar
        const handleOutsideClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [ref]);
};

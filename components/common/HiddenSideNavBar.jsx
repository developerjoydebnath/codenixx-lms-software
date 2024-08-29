import { IconMenu2 } from "@tabler/icons-react";
import SideNavBar from "./SideNavBar";

export default function HiddenSideNavBar({ setIsOpen, isOpen, navRef, className = "" }) {
    return (
        <div>
            <div onClick={() => setIsOpen(true)}>
                <IconMenu2 size={32} className="absolute left-2.5 top-3.5 z-20 cursor-pointer text-primary lg:hidden" />
            </div>
            <SideNavBar
                ref={navRef}
                className={`absolute right-full top-0 z-30 shadow transition-all duration-200 ease-in-out lg:hidden ${
                    isOpen ? "translate-x-full" : ""
                }`}
                setIsOpen={setIsOpen}
            />
            <div
                className={`absolute left-0 top-0 z-20 h-full w-full bg-black/20 transition-all duration-200 ease-in fade-in-0 lg:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            ></div>
        </div>
    );
}

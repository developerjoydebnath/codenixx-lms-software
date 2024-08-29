"use client";
import Link from "next/link";
import Logo from "../CodenixxLogo";

export default function NavHeader() {
    return (
        <div className="flex h-[62px] justify-center border-b border-r bg-base-0">
            <Link href="/dashboard" className="flex h-[61px] items-center justify-center bg-base-0">
                <Logo className="h-[55px] w-[140px]" />
            </Link>
        </div>
    );
}

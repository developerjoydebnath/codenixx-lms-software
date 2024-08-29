"use client";

import Link from "next/link";

export default function AccessDenied() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h3 className="mb-2 text-center text-2xl font-medium tracking-widest text-base-500">Access Denied!</h3>
            <h4 className="text-center font-medium text-base-500">You are not permitted to access this page.</h4>
            <Link href="/dashboard" className="mt-5 text-primary underline-offset-4 hover:underline">
                Go to Dashboard
            </Link>
        </div>
    );
}

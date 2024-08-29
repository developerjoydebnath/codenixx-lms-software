import { Suspense } from "react";

export default function layout({ children, settings }) {
    return (
        <div>
            <div>{children}</div>
            <Suspense fallback={<>Loading...</>}>{settings}</Suspense>
        </div>
    );
}

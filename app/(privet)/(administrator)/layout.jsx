import PrivetLayout from "@/components/layouts/PrivetLayout";

export default function layout({ children }) {
    return (
        <div>
            <PrivetLayout>{children}</PrivetLayout>
        </div>
    );
}

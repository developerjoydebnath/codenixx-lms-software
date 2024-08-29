import { cn } from "@/lib/utils";
import ButtonLoader from "./ButtonLoader";

export default function PaymentPageLoader() {
    return (
        <div>
            <div className="flex w-full items-center justify-center">
                <div className="h-[120px] w-[120px] animate-pulse rounded-md bg-secondary"></div>
            </div>
            <div>
                <div className="my-2 mt-3 flex items-center gap-3">
                    <div>
                        <div className="mr-4 h-[20px] w-[135px] animate-pulse rounded bg-secondary"></div>
                    </div>
                    <div className="w-full">
                        <div className="h-10 w-full animate-pulse rounded-md bg-secondary"></div>
                    </div>
                </div>
                <div className="mt-3 w-full border-b"></div>
                <div className="mt-3 flex w-full flex-col gap-3.5">
                    <Row leftDivClass="w-[55px]" rightDivClass="w-[65px]" />
                    <Row leftDivClass="w-[120px]" rightDivClass="w-[110px]" />
                    <Row leftDivClass="w-[120px]" rightDivClass="w-[65px]" />
                    <Row leftDivClass="w-[75px]" rightDivClass="w-[70px]" />
                    <Row leftDivClass="w-[85px]" rightDivClass="w-[90px]" />
                </div>
                <div className="mt-3 w-full border-b"></div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
                <ButtonLoader className="w-[180px]" />
                <ButtonLoader className="w-[136px]" />
            </div>
        </div>
    );
}

const Row = ({ leftDivClass = "", rightDivClass = "" }) => {
    return (
        <div className="flex items-center justify-between">
            <div className={cn("h-[18px] w-[55px] animate-pulse rounded bg-secondary", leftDivClass)}></div>
            <div className={cn("h-[18px] w-[65px] animate-pulse rounded bg-secondary", rightDivClass)}></div>
        </div>
    );
};

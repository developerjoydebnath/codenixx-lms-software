import { cn } from "@/lib/utils";
import { checkAccessPermission } from "@/utils/checkAccessPermission";
import { IconCreditCardPay, IconEdit, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function WifiUserProfileHead({
    imagePath = "",
    name = "John Doe",
    date = "@11-11-2024 10:10 AM",
    status = "Active",
    className = "",
    uid,
}) {
    return (
        <div className={cn("flex items-center justify-between", className)}>
            <div className="flex w-full items-center gap-4">
                <div className="rounded-md border bg-base-100">
                    <IconUser size={100} className="text-base-400" />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-medium text-base-500 sm:text-xl">{name}</h4>
                    <h5 className="text-xs text-base-400 sm:text-sm">{date}</h5>
                    <div className="flex items-center gap-1">
                        <div
                            className={`h-2.5 w-2.5 rounded-full ${status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <h5 className={`text-sm ${status === "Active" ? "text-green-500" : "text-red-500"}`}>
                            {status}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                {checkAccessPermission({
                    base_role: "admin",
                    permissions: [],
                    required_permissions: [],
                }) ? (
                    <Link href={`/wifi-users/${uid}/update`}>
                        <Button className="gap-1.5 bg-primary/20 px-2.5 text-primary hover:text-base-0 active:bg-primary/80 active:text-base-0 xmd:px-4">
                            <IconEdit size={20} />
                            <span className="hidden xmd:block">Edit</span>
                        </Button>
                    </Link>
                ) : null}

                {checkAccessPermission({
                    base_role: "admin",
                    permissions: [],
                    required_permissions: [],
                }) ? (
                    <Link href={`/wifi-users/${uid}/payment`}>
                        <Button className="gap-1.5 bg-base-400/10 px-2.5 text-base-400 hover:bg-base-400 hover:text-base-0 active:bg-base-400/80 active:text-base-0 xmd:px-4">
                            <IconCreditCardPay size={20} />
                            <span className="hidden xmd:block">Payment</span>
                        </Button>
                    </Link>
                ) : null}
            </div>
        </div>
    );
}

"use client";

import { http_get_request } from "@/app/actions";
import { show_toast } from "@/utils/show_toast";
import { IconBell, IconLogout, IconSettings } from "@tabler/icons-react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function NavFooter() {
    const router = useRouter();

    const logout = async () => {
        const response = await http_get_request({ endpoint: "/logout" });
        if (response.status === "success") {
            show_toast("success", response.message);
            Cookies.remove("auth_token");
            Cookies.remove("redirect_to");
            router.push("/login");
        } else {
            show_toast("error", "Something went wrong");
        }
    };
    return (
        <div className="border-r bg-base-0 px-2">
            <div className="pb-2">
                <Separator />
                <h4 className="mt-1.5 text-lg font-medium text-base-500">John Doe</h4>
                <h5 className="mb-1.5 text-sm text-base-500">01700000000</h5>
                <Separator />
            </div>
            <div className="my-2 grid grid-cols-3 gap-2">
                <div>
                    <Link href={`/settings`}>
                        <Button className="h-[52px] w-full" variant="secondary">
                            <IconSettings className="text-base-400" size={24} />
                        </Button>
                    </Link>
                </div>
                <div>
                    <Button className="h-[52px] w-full" variant="secondary">
                        <IconBell className="text-base-400" size={24} />
                    </Button>
                </div>
                <div>
                    <Button onClick={logout} className="h-[52px] w-full" variant="secondary">
                        <IconLogout className="text-base-400" size={24} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

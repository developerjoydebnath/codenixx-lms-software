"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SettingPageLayout from "../../_components/SettingPageLayout";

export default function ConfirmOtp() {
    const [isShown, setIsShown] = useState({ new_pass: false, confirm_pass: false, old_pass: false });
    const [otpMood, setOtpMood] = useState(false);
    const router = useRouter();

    const handleResetPassword = () => {
        if (otpMood) {
            router.push(`/settings/reset-password/confirm-otp`);
        } else {
            console.log("password updated successfully");
        }
    };

    return (
        <SettingPageLayout title="Reset Password">
            <div className="flex flex-col gap-4 pt-2">
                <div className="w-full">
                    <span className="text-sm text-base-300">OTP</span>
                    <Input className="" />
                </div>

                <div className="relative w-full">
                    <Button type="button" onClick={handleResetPassword}>
                        Confirm
                    </Button>
                </div>
            </div>
        </SettingPageLayout>
    );
}

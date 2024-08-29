"use client";

import { passwordResetAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordResetSchema, withOldPasswordResetSchema } from "@/schemas/passwordResetSchema";
import { show_toast } from "@/utils/show_toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconEye, IconEyeOff, IconLoader2 } from "@tabler/icons-react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SettingPageLayout from "../_components/SettingPageLayout";

export default function ResetPassword() {
    const [isShown, setIsShown] = useState({ new_pass: false, confirm_pass: false, old_pass: false });
    const [otpMood, setOtpMood] = useState(false);
    const router = useRouter();
    const { execute, result, status, reset } = useAction(passwordResetAction);

    const form = useForm({
        resolver: zodResolver(otpMood ? passwordResetSchema : withOldPasswordResetSchema),
        defaultValues: {
            new_password: "",
            confirm_new_password: "",
            old_password: "",
        },
    });

    const onSubmit = (values) => {
        show_toast("success", "success");
        console.log(values);
        if (otpMood) {
            router.replace(`/settings/reset-password/confirm-otp`);
        } else {
            console.log(values);
            execute(values);
        }
    };

    return (
        <SettingPageLayout title="Reset Password">
            <div className="flex w-full justify-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-[250px] space-y-3">
                        <FormField
                            control={form.control}
                            name="new_password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="-mb-2">
                                        <FormLabel className="font-normal text-base-400">New Password</FormLabel>
                                    </div>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Type new password"
                                                type={isShown.new_pass ? "text" : "password"}
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setIsShown({ ...isShown, new_pass: !isShown.new_pass })}
                                                className="absolute bottom-[5px] right-1.5 p-1"
                                            >
                                                {isShown.new_pass ? (
                                                    <IconEye size={20} className="text-base-300" />
                                                ) : (
                                                    <IconEyeOff size={20} className="text-base-300" />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirm_new_password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="-mb-2">
                                        <FormLabel className="font-normal text-base-400">Confirm Password</FormLabel>
                                    </div>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Confirm new password"
                                                type={isShown.confirm_pass ? "text" : "password"}
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsShown({ ...isShown, confirm_pass: !isShown.confirm_pass })
                                                }
                                                className="absolute bottom-[5px] right-1.5 p-1"
                                            >
                                                {isShown.confirm_pass ? (
                                                    <IconEye size={20} className="text-base-300" />
                                                ) : (
                                                    <IconEyeOff size={20} className="text-base-300" />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {!otpMood ? (
                            <FormField
                                control={form.control}
                                name="old_password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="-mb-2">
                                            <FormLabel className="font-normal text-base-400">Old Password</FormLabel>
                                        </div>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="Type old password"
                                                    type={isShown.old_pass ? "text" : "password"}
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setIsShown({ ...isShown, old_pass: !isShown.old_pass })
                                                    }
                                                    className="absolute bottom-[5px] right-1.5 p-1"
                                                >
                                                    {isShown.old_pass ? (
                                                        <IconEye size={20} className="text-base-300" />
                                                    ) : (
                                                        <IconEyeOff size={20} className="text-base-300" />
                                                    )}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ) : null}

                        <Button type="submit" className="w-full" disabled={status === "executing"}>
                            {status === "executing" ? (
                                <IconLoader2 size={20} className="animate-spin-slow" />
                            ) : otpMood ? (
                                "Next"
                            ) : (
                                "Submit"
                            )}
                        </Button>

                        <div className="flex w-full items-center gap-2">
                            <div className="w-full border-b" />
                            <h5 className="">Or</h5>
                            <div className="w-full border-b" />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={() => setOtpMood(!otpMood)}
                                className="text-sm tracking-wider text-base-500 underline-offset-2 hover:underline"
                            >
                                {otpMood ? "Try With Old Password" : "Try With OTP"}
                            </button>
                        </div>

                        {/* {result.data && status !== "executing" ? (
                            <div
                                className={`rounded-md p-2 text-center text-base font-medium ${result.data?.status === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                            >
                                <h5>{result.data.message}</h5>
                            </div>
                        ) : null} */}
                    </form>
                </Form>
            </div>
        </SettingPageLayout>
    );
}

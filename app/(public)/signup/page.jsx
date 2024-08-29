"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Logo from "@/components/CodenixxLogo";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/schemas/loginFromSchema";
import { show_toast } from "@/utils/show_toast";
import { IconEye, IconEyeOff, IconLoader2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
    const [isShown, setIsShown] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: "",
            full_name: "",
            mobile_number: "",
            email: "",
            password: "",
            ghost: "",
        },
    });

    // signup handler
    const onSubmit = (values) => {
        setLoading(true);
        // check honey pot
        if (values?.ghost) {
            return show_toast("success", "hey honey");
        }

        console.log(values);

        setTimeout(() => {
            show_toast("success", "Signup Successful");
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-body">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-[250px] space-y-3">
                    <div className="flex flex-col items-center justify-center">
                        <Logo className="h-[55px] w-[140px]" />
                    </div>
                    <FormField
                        control={form.control}
                        name="mobile_number"
                        render={({ field }) => (
                            <FormItem>
                                <div className="-mb-2">
                                    <FormLabel required={true} className="font-normal text-base-400">
                                        Mobile No
                                    </FormLabel>
                                </div>
                                <FormControl>
                                    <Input
                                        type="number"
                                        className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                        placeholder="01XXXXXXXXX"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className="-mb-2">
                                    <FormLabel required={true} className="font-normal text-base-400">
                                        Password
                                    </FormLabel>
                                </div>
                                <FormControl>
                                    <div className="relative">
                                        <Input placeholder="XXXXXX" type={isShown ? "text" : "password"} {...field} />
                                        <button
                                            type="button"
                                            onClick={() => setIsShown(!isShown)}
                                            className="absolute bottom-[5px] right-1.5 p-1"
                                        >
                                            {isShown ? (
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
                        name="ghost"
                        render={({ field }) => (
                            <FormItem className="hidden">
                                <div className="-mb-2">
                                    <FormLabel className="font-normal text-base-400">Mobile No</FormLabel>
                                </div>
                                <FormControl>
                                    <Input type="text" placeholder="type role" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <Button type="submit" className="mt-2 w-full" disabled={loading}>
                            {loading ? <IconLoader2 size={20} className="animate-spin-slow" /> : "Signup"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

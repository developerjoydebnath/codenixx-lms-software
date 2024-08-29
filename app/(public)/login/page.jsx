"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

import { login } from "@/app/actions";
import Logo from "@/components/CodenixxLogo";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userLogIn } from "@/redux/features/auth/authSlice";
import { loginFormSchema } from "@/schemas/loginFromSchema";
import { show_toast } from "@/utils/show_toast";
import { IconEye, IconEyeOff, IconLoader2 } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
    const [isShown, setIsShown] = useState(false);
    const [loading, setLoading] = useState(false);
    const { theme } = useTheme();
    const dispatch = useDispatch();
    // const { execute, result, status, reset } = useAction(loginAction);
    const router = useRouter();
    const redirect_to = Cookies.get("redirect_to");

    // useEffect(() => {
    //     if (result.data?.status === "success") {
    //         show_toast("success", result.data.message);
    //         const timeOutId = setTimeout(() => {
    //             if (redirect_to) {
    //                 router.push(redirect_to);
    //             } else {
    //                 router.push("/");
    //             }
    //         }, 1000);
    //         return () => clearTimeout(timeOutId);
    //     } else if (result.data?.status === "error") {
    //         show_toast("error", result.data.message);
    //         const timeOutId = setTimeout(() => {
    //             reset();
    //         }, 2000);

    //         return () => clearTimeout(timeOutId);
    //     }
    // }, [result.data]);

    const form = useForm({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            mobile_number: "",
            password: "",
            ghost: "",
        },
    });

    const onSubmit = async (values) => {
        // execute(values);
        setLoading(true);

        console.log(values);

        if (values?.ghost) {
            setLoading(false);
            return show_toast("success", "hey honey");
        }

        const res_data = await login(values);

        setTimeout(() => {
            if (res_data.success) {
                setLoading(false);
                show_toast("success", "Login Success");

                dispatch(userLogIn({ user: res_data.user, loading: false }));

                if (res_data.user.base_role === "student") {
                    router.push(redirect_to ?? "/courses");
                }
                if (res_data.user.base_role === "mentor") {
                    router.push(redirect_to ?? "/dashboard");
                }
                if (res_data.user.base_role === "admin") {
                    router.push(redirect_to ?? "/dashboard");
                }
            } else {
                setLoading(false);
                show_toast("error", res_data.message);
            }
        }, 1000);
    };

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={`w-full max-w-[350px] space-y-3 rounded-lg p-5 ${theme === "dark" ? "glassmorphism-dark" : "glassmorphism"}`}
                >
                    <div className="flex flex-col items-center justify-center">
                        <Logo className="h-[55px] w-[140px]" />
                    </div>
                    <FormField
                        control={form.control}
                        name="mobile_number"
                        render={({ field }) => (
                            <FormItem>
                                <div className="-mb-1.5">
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
                                <div className="-mb-1.5">
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
                            {loading ? <IconLoader2 size={20} className="animate-spin-slow" /> : "Login"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

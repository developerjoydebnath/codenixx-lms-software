"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { show_toast } from "@/utils/show_toast";
import { IconEye, IconEyeOff, IconLoader, IconLoader2, IconPhoto, IconWritingSign, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SettingPageLayout from "../_components/SettingPageLayout";

export default function LogoAndSignature() {
    const [logo, setLogo] = useState(null);
    const [signatures, setSignatures] = useState(null);
    const [userSettings, setUserSettings] = useState({});
    const [logoUploadLoading, setLogoUploadLoading] = useState(false);
    const [signatureUploadLoading, setSignatureLogoUploadLoading] = useState(false);
    const [billingCycle, setBillingCycle] = useState("");
    const [userDisableDayLoading, setUserDisableDayLoading] = useState(false);
    const [dayOfDisable, setDayOfDisable] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentMethodLoading, setPaymentMethodLoading] = useState(false);
    const [showHiddenCharacter, setShowHiddenCharacter] = useState({
        username: false,
        password: false,
        app_key: false,
        app_secret: false,
    });
    const [settingsLoading, setSettingsLoading] = useState(false);

    const router = useRouter();

    const hideCharacterGenerator = (text) => {
        if (text?.length > 4) {
            const start = text.substring(0, 2);
            const middle = text.substring(2, text.length - 2).replace(/[a-zA-Z0-9,./?'";:-_@#$%^&*]/g, "*");
            const end = text.substring(text.length - 2);
            return start + middle + end;
        } else {
            return text;
        }
    };

    const hideCharacter = (text, hideFor) => {
        switch (hideFor) {
            case "username":
                if (showHiddenCharacter.username) {
                    return text;
                } else {
                    return hideCharacterGenerator(text);
                }
            case "password":
                if (showHiddenCharacter.password) {
                    return text;
                } else {
                    return hideCharacterGenerator(text);
                }
            case "app_key":
                if (showHiddenCharacter.app_key) {
                    return text;
                } else {
                    return hideCharacterGenerator(text);
                }
            case "app_secret":
                if (showHiddenCharacter.app_secret) {
                    return text;
                } else {
                    return hideCharacterGenerator(text);
                }
            default:
                return text;
        }
    };

    // logo preview and input field reset handler
    const resetLogo = () => {
        setLogo(null);
        document.getElementById("logo").value = "";
    };

    // signature preview and input field reset handler
    const resetSignature = () => {
        setSignatures(null);
        document.getElementById("signature").value = "";
    };

    // logo image uploader handler
    const handleLogoUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("logo", logo);

        if (logo) {
            setLogoUploadLoading(true);

            setTimeout(() => {
                setUserSettings({ ...userSettings, logo: logo });
                show_toast("success", "successfully updated");
                resetLogo();
                setLogoUploadLoading(false);
            }, 1000);
        } else {
            show_toast("error", "Please Choose a Image First!");
        }
    };

    // signature image uploader handler
    const handleSignatureUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("signature", signatures);

        if (signatures) {
            setSignatureLogoUploadLoading(true);

            setTimeout(() => {
                setUserSettings({ ...userSettings, signature: signatures });
                show_toast("success", "successfully updated");
                resetSignature();
                setSignatureLogoUploadLoading(false);
            }, 1000);
        } else {
            show_toast("error", "Please Choose a Image First!");
        }
    };

    // user disabling day storing handler
    const handleUserDisableDay = async (e) => {
        e.preventDefault();
        const disableDay = e.target?.day_of_disable?.value || null;

        if (billingCycle) {
            setUserDisableDayLoading(true);

            setTimeout(() => {
                setUserSettings({
                    ...userSettings,
                    billing_cycle: billingCycle,
                    manual_disable_day: disableDay,
                });
                show_toast("success", "successfully updated");
                setUserDisableDayLoading(false);
            }, 1000);
        } else {
            show_toast("error", "Please select a billing cycle first!");
        }
    };

    // payment method selection or changing handler
    const handlePaymentMethod = async (e) => {
        e.preventDefault();

        const username = e.target?.username?.value || null;
        const password = e.target?.password?.value || null;
        const app_key = e.target?.app_key?.value || null;
        const app_secret = e.target?.app_secret?.value || null;

        if (["bkash", "both"].indexOf(paymentMethod) > -1 && (!username || !password || !app_key || !app_secret)) {
            show_toast("error", "Plase fill up all the fileds");
        } else {
            setPaymentMethodLoading(true);

            setTimeout(() => {
                setUserSettings({
                    ...userSettings,
                    payment_method: paymentMethod,
                    bkash_app_secret_key: app_key,
                    bkash_app_key: app_key,
                    bkash_password: password,
                    bkash_username: username,
                });
                show_toast("success", "successfully updated");
                setPaymentMethodLoading(false);
            }, 1000);
        }
    };

    return (
        <SettingPageLayout title="Logo & Signature">
            <div className="mt-3 rounded-md border">
                {/* upload company logo */}
                <section className="grid grid-cols-1 border-b lg:grid-cols-3">
                    <div className="p-2 lg:border-r">
                        <h4 className="text-xl font-medium text-base-500">Company Logo</h4>
                        <p className="mt-2 border-l-4 border-primary px-1 text-[13px] text-base-300">
                            Upload your company logo from here which will be displayed in your application. You can
                            upload a single logo. IF you want o change the logo please upload a new one.
                        </p>
                    </div>
                    <div className="px-2 py-3 lg:border-r">
                        <form onSubmit={handleLogoUpload} className="flex items-center gap-2">
                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                onChange={(e) => setLogo(e.target.files[0])}
                                className="focus:border-primary1 w-full max-w-[210px] rounded border bg-base-0 p-1.5 text-sm shadow-sm focus:outline-none focus:ring-0"
                            />
                            <Button className="w-fit min-w-[64px]" type="submit" disabled={logoUploadLoading}>
                                {logoUploadLoading ? <IconLoader2 size={20} className="animate-spin-slow" /> : "Save"}
                            </Button>
                        </form>
                        <div className="mt-3">
                            {logo ? (
                                <div className="relative h-full w-40">
                                    <img
                                        src={URL.createObjectURL(logo)}
                                        alt="Logo"
                                        className="aspect-[3/1] h-[70px] rounded-md"
                                        layout="fill"
                                    />
                                    <div className="absolute -right-2 -top-2">
                                        <IconX
                                            onClick={resetLogo}
                                            size={14}
                                            className="h-5 w-5 cursor-pointer rounded-full bg-destructive p-[3px] text-base-0"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <IconPhoto size={80} className="rounded-md stroke-base-150" />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start space-y-5 p-3">
                        <span className="text-sm text-base-400">Company Logo</span>
                        {settingsLoading ? (
                            <div className="flex h-full w-full justify-center">
                                <IconLoader className="animate-spin-slow text-base-400" size={40} />
                            </div>
                        ) : userSettings?.logo ? (
                            <img
                                alt="logo"
                                className="aspect-[3/1] h-[100px]"
                                src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${userSettings.logo}`}
                            />
                        ) : (
                            <IconPhoto size={80} className="h-[80px] w-[80px] rounded-md stroke-base-150" />
                        )}
                    </div>
                </section>

                {/* upload signatures */}
                <section className="grid grid-cols-1 border-b lg:grid-cols-3">
                    <div className="p-2 lg:border-r">
                        <h4 className="text-xl font-medium text-base-500">Signature</h4>
                        <p className="mt-2 border-l-4 border-primary px-1 text-[13px] text-base-300">
                            Upload your signature image from here which will be displayed in invoice. You can upload a
                            single image at a time. IF you want o change signature please upload a new one.
                        </p>
                    </div>
                    <div className="px-2 py-3 lg:border-r">
                        <form onSubmit={handleSignatureUpload} className="flex flex-col space-y-3">
                            <input
                                type="file"
                                id="signature"
                                name="signature"
                                onChange={(e) => setSignatures(e.target.files[0])}
                                className="focus:border-primary1 w-full max-w-[250px] rounded border border-base-200 p-1.5 text-sm shadow-sm focus:outline-none focus:ring-0"
                            />

                            <Button className="w-fit min-w-[64px]" type="submit" disabled={signatureUploadLoading}>
                                {signatureUploadLoading ? (
                                    <IconLoader2 size={20} className="animate-spin-slow" />
                                ) : (
                                    "Save"
                                )}
                            </Button>
                        </form>
                        <div className="mt-3 flex w-full flex-col space-y-2">
                            {signatures ? (
                                <div className="relative h-full w-full">
                                    <img
                                        src={URL.createObjectURL(signatures)}
                                        alt="Logo"
                                        className="aspect-[4/1] h-full w-full rounded-md"
                                        layout="fill"
                                    />
                                    <div className="absolute -right-2 -top-2">
                                        <IconX
                                            onClick={resetSignature}
                                            size={12}
                                            className="h-5 w-5 cursor-pointer rounded-full bg-destructive p-[3px] text-base-0"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <IconWritingSign
                                    className="w-full rounded-md border border-base-200 bg-base-100 text-base-300"
                                    size={60}
                                    stroke={1}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start space-y-5 p-3">
                        <div>
                            <span className="text-sm text-base-400">Signature</span>

                            {settingsLoading ? (
                                <div className="mt-5 flex h-full w-full justify-center">
                                    <IconLoader2 className="animate-spin-slow text-base-400" size={40} />
                                </div>
                            ) : userSettings?.signature ? (
                                <img
                                    alt="logo"
                                    className="aspect-[4/1] h-[100px]"
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${userSettings.signature}`}
                                />
                            ) : (
                                <IconWritingSign
                                    className="w-full animate-pulse rounded-md border border-base-200 bg-base-100 text-base-300"
                                    size={60}
                                    stroke={1}
                                />
                            )}
                        </div>
                    </div>
                </section>

                {/* billing cycle */}
                <section className="grid grid-cols-1 border-b lg:grid-cols-3">
                    <div className="p-2 lg:border-r">
                        <h4 className="text-xl font-medium text-base-500">Billing Cycle</h4>
                        <p className="mt-2 border-l-4 border-primary px-1 text-[13px] text-base-300">
                            If you turn on Fixed Date billing cycle please set the user disabling day of month. Your
                            users will be disabled at that day of every month automatically. If turn on auto billing
                            cycle user will be disabled automatically when their package will be expired.
                        </p>
                    </div>
                    <div className="px-2 py-3 lg:border-r">
                        <div>
                            <span className="whitespace-nowrap text-sm text-base-500">Select Billing Cycle</span>
                            <RadioGroup
                                defaultValue={billingCycle}
                                value={billingCycle}
                                onValueChange={(val) => setBillingCycle(val)}
                                className="mt-3 flex gap-x-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="auto" id="auto" />
                                    <Label htmlFor="auto" className="cursor-pointer text-base-400 hover:text-base-500">
                                        Auto
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="fixed_date" id="fixed_date" />
                                    <Label
                                        htmlFor="fixed_date"
                                        className="cursor-pointer text-base-400 hover:text-base-500"
                                    >
                                        Fixed Date
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="no" id="no" />
                                    <Label htmlFor="no" className="cursor-pointer text-base-400 hover:text-base-500">
                                        No
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="mt-5">
                            <form onSubmit={handleUserDisableDay} className="flex w-full items-end gap-2">
                                {["fixed_date"].indexOf(billingCycle) > -1 ? (
                                    <div className="w-full">
                                        <span className="whitespace-nowrap text-xs text-base-500">
                                            User Disable Day of Month
                                        </span>
                                        <Input
                                            onChange={(e) => setDayOfDisable(e.target.value)}
                                            value={dayOfDisable}
                                            type="number"
                                            name="day_of_disable"
                                            className="w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                        />
                                    </div>
                                ) : null}

                                <Button className="w-fit min-w-[64px]" type="submit" disabled={userDisableDayLoading}>
                                    {userDisableDayLoading ? (
                                        <IconLoader2 size={20} className="animate-spin-slow" />
                                    ) : (
                                        "Save"
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start space-y-2 p-3">
                        <div className="flex items-center gap-2">
                            <h5 className="text-sm text-base-400">Current Billing Cycle Status :</h5>
                            <h5 className="text-sm text-base-400">{userSettings?.billing_cycle}</h5>
                        </div>
                        {userSettings?.billing_cycle === "fixed_date" ? (
                            <div className="flex items-center gap-2">
                                <h5>Day of Disabling :</h5>
                                <h5>{userSettings?.manual_disable_day}</h5>
                            </div>
                        ) : null}
                    </div>
                </section>

                {/* payment method */}
                <section className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-2 lg:border-r">
                        <h4 className="text-xl font-medium text-base-500">Payment Method</h4>
                        <p className="mt-2 border-l-4 border-primary px-1 text-[13px] text-base-300">
                            For turning on Bkash Payment Method you have to submit your bkash merchant api_key,
                            secret_key, bkash_username and bkash_password
                        </p>
                        <p className="mt-2 border-l-4 border-yellow-500 px-1 text-[13px] text-base-300">
                            [WARNING] : Please do not share your bkash merchant credentials with anyone for safety
                            purpose. Keep it secretly.
                        </p>
                    </div>
                    <div className="px-2 py-3 lg:border-r">
                        <div>
                            <span className="whitespace-nowrap text-sm text-base-500">Select Payment Method</span>
                            <RadioGroup
                                defaultValue={paymentMethod}
                                value={paymentMethod}
                                onValueChange={(val) => setPaymentMethod(val)}
                                className="mt-3 grid grid-cols-2 gap-x-3 lg:grid-cols-3"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="bkash" id="bkash" />
                                    <Label htmlFor="bkash" className="cursor-pointer text-base-400 hover:text-base-500">
                                        Bkash
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="panel_money" id="panel_money" />
                                    <Label
                                        htmlFor="panel_money"
                                        className="cursor-pointer text-base-400 hover:text-base-500"
                                    >
                                        Panel Money
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="both" id="both" />
                                    <Label htmlFor="both" className="cursor-pointer text-base-400 hover:text-base-500">
                                        Both
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="none" id="none" />
                                    <Label htmlFor="none" className="cursor-pointer text-base-400 hover:text-base-500">
                                        No
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="mt-5">
                            <form onSubmit={handlePaymentMethod} className="flex w-full flex-col space-y-2">
                                {["both", "bkash"].indexOf(paymentMethod) > -1 ? (
                                    <>
                                        <div className="w-full">
                                            <span className="whitespace-nowrap text-xs text-base-500">
                                                Bkash Username
                                            </span>
                                            <Input
                                                type="text"
                                                name="username"
                                                className="w-full"
                                                placeholder="Enter Bkash Username"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <span className="whitespace-nowrap text-xs text-base-500">
                                                Bkash Password
                                            </span>
                                            <Input
                                                type="text"
                                                name="password"
                                                className="w-full"
                                                placeholder="Enter Bkash Password"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <span className="whitespace-nowrap text-xs text-base-500">App Key</span>
                                            <Input
                                                type="text"
                                                name="app_key"
                                                className="w-full"
                                                placeholder="Enter Bkash App Key"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <span className="whitespace-nowrap text-xs text-base-500">App Secret</span>
                                            <Input
                                                type="app_secret"
                                                name="app_secret"
                                                className="w-full"
                                                placeholder="Enter Bkash App Secret"
                                            />
                                        </div>
                                    </>
                                ) : null}

                                <Button className="w-fit min-w-[64px]" type="submit" disabled={paymentMethodLoading}>
                                    {paymentMethodLoading ? (
                                        <IconLoader2 size={20} className="animate-spin-slow" />
                                    ) : (
                                        "Save"
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start space-y-2 p-3">
                        <div className="flex items-center gap-2">
                            <h5 className="text-sm text-base-400">Current Billing Cycle :</h5>
                            <h5 className="text-sm text-base-400">{userSettings?.payment_method}</h5>
                        </div>

                        <>
                            <div>
                                <span className="text-sm text-base-400">username</span>
                                {["both", "bkash"].indexOf(userSettings?.payment_method) > -1 && (
                                    <div className="flex items-center gap-2">
                                        <h5 className="break-all text-base-500">
                                            {hideCharacter(userSettings?.bkash_username, "username")}
                                        </h5>
                                        <button
                                            className="p-0.5 text-base-400"
                                            type="button"
                                            onClick={() =>
                                                setShowHiddenCharacter({
                                                    ...showHiddenCharacter,
                                                    username: !showHiddenCharacter.username,
                                                })
                                            }
                                        >
                                            {showHiddenCharacter.username ? (
                                                <IconEye size={20} />
                                            ) : (
                                                <IconEyeOff size={20} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className="text-sm text-base-400">password</span>
                                {["both", "bkash"].indexOf(userSettings?.payment_method) > -1 && (
                                    <div className="flex items-center gap-2">
                                        <h5 className="break-all text-base-500">
                                            {hideCharacter(userSettings?.bkash_password, "password")}
                                        </h5>
                                        <button
                                            className="p-0.5 text-base-400"
                                            type="button"
                                            onClick={() =>
                                                setShowHiddenCharacter({
                                                    ...showHiddenCharacter,
                                                    password: !showHiddenCharacter.password,
                                                })
                                            }
                                        >
                                            {showHiddenCharacter.password ? (
                                                <IconEye size={20} />
                                            ) : (
                                                <IconEyeOff size={20} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className="text-sm text-base-400">app_key</span>
                                {["both", "bkash"].indexOf(userSettings?.payment_method) > -1 && (
                                    <div className="flex items-center gap-2">
                                        <h5 className="break-all text-base-500">
                                            {hideCharacter(userSettings?.bkash_app_key, "app_key")}
                                        </h5>

                                        <button
                                            className="p-0.5 text-base-400"
                                            type="button"
                                            onClick={() =>
                                                setShowHiddenCharacter({
                                                    ...showHiddenCharacter,
                                                    app_key: !showHiddenCharacter.app_key,
                                                })
                                            }
                                        >
                                            {showHiddenCharacter.app_key ? (
                                                <IconEye size={20} />
                                            ) : (
                                                <IconEyeOff size={20} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div>
                                <span className="text-sm text-base-400">app_secret</span>

                                {["both", "bkash"].indexOf(userSettings?.payment_method) > -1 && (
                                    <div className="flex items-center gap-2">
                                        <h5 className="break-all text-base-500">
                                            {hideCharacter(userSettings?.bkash_app_secret_key, "app_secret")}
                                        </h5>
                                        <button
                                            className="p-0.5 text-base-400"
                                            type="button"
                                            onClick={() =>
                                                setShowHiddenCharacter({
                                                    ...showHiddenCharacter,
                                                    app_secret: !showHiddenCharacter.app_secret,
                                                })
                                            }
                                        >
                                            {showHiddenCharacter.app_secret ? (
                                                <IconEye size={20} />
                                            ) : (
                                                <IconEyeOff size={20} />
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    </div>
                </section>
            </div>
        </SettingPageLayout>
    );
}

"use client";

import { profileUpdateAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { profileUpdateFormSchema } from "@/schemas/profileUpdateFormSchema";
import { show_toast } from "@/utils/show_toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck, IconEdit, IconLoader2, IconShieldFilled, IconX } from "@tabler/icons-react";
import { useAction } from "next-safe-action/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SettingPageLayout from "../_components/SettingPageLayout";

export default function Account() {
    const [image, setImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [imageUploadLoading, setImageUploadLoading] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);
    const [profileUpdateLoading, setProfileUpdateLoading] = useState(false);

    const { execute, result, status } = useAction(profileUpdateAction);

    console.log(result, status);

    useEffect(() => {
        if (status === "hasSucceeded") {
            if (result?.data?.status === "success") {
                show_toast("success", "Profile updated successfully");
                setIsEditing(false);
            } else {
                show_toast("error", "Profile was not updated");
            }
        }
    }, [result, status]);

    const form = useForm({
        resolver: zodResolver(profileUpdateFormSchema),
        defaultValues: {
            name: "Jhon Doe",
            email: "example@gmail.com",
            mobile_number: "01700000000",
            division: "Dhaka",
            district: "Dhaka",
            upazila: "Dhaka",
            union: "Dhaka",
            village: "Dhaka",
        },
    });

    const setImageToState = (e) => {
        const file = e.target.files[0];
        const file_type = file.type;
        if (["image/jpeg", "image/jpg", "image/png"].indexOf(file_type) !== -1) {
            setImage(file);
            setImageSelected(true);
        } else {
            alert("image type does not match");
        }
    };

    const imageUploadHandler = () => {
        if (image) {
            setImageUploadLoading(true);
            setTimeout(() => {
                setImageUploadLoading(false);
                setImageSelected(false);
                alert("image uploaded successfully");
            }, 1000);
        }
    };

    const handleUpdate = async (values) => {
        console.log(values);
        execute(values);
    };

    const resetLogo = () => {
        setImage(null);
    };

    return (
        <SettingPageLayout title="Account">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-3 pt-2">
                    <div className="relative h-[70px] w-[70px] rounded-full bg-base-300">
                        {image && (
                            <div className="relative h-full w-full">
                                <Image
                                    height={70}
                                    width={70}
                                    src={URL.createObjectURL(image)}
                                    alt="Logo"
                                    className="h-[70px] w-[70px] rounded-full"
                                />
                                {image && imageSelected && (
                                    <div className="absolute -right-1 -top-1 h-5 w-5">
                                        <IconX
                                            onClick={resetLogo}
                                            size={16}
                                            className="cursor-pointer rounded-full bg-red-500 p-0.5 text-base-500"
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                        {imageSelected ? (
                            <button
                                disabled={imageUploadLoading}
                                onClick={imageUploadHandler}
                                className="absolute bottom-0.5 right-0.5 cursor-pointer rounded-full bg-primary p-[3px]"
                            >
                                {imageUploadLoading ? (
                                    <IconLoader2 size={14} className="animate-spin-slow text-base-0" />
                                ) : (
                                    <IconCheck size={14} className="text-base-0" />
                                )}
                            </button>
                        ) : (
                            <label
                                htmlFor="profile"
                                className="absolute bottom-0.5 right-0.5 cursor-pointer rounded-full bg-primary p-[3px]"
                            >
                                <IconEdit size={14} className="text-base-0" />
                            </label>
                        )}
                        <Input
                            disabled={!isEditing}
                            onChange={setImageToState}
                            type="file"
                            id="profile"
                            className="hidden"
                        />
                    </div>
                    <div>
                        <h4 className="flex items-center justify-start gap-1 text-lg text-base-500">
                            <span>John Doe</span>
                            <IconShieldFilled className="text-primary" size={18} />
                        </h4>
                        <h5 className="text-sm text-base-400">example@gmail.com</h5>
                        <h5 className="mt-0.5 text-xs text-base-400">Joined: 12-06-2024 11:42 AM</h5>
                    </div>
                </div>
                <div>
                    <Button
                        disabled={profileUpdateLoading}
                        onClick={() => setIsEditing(true)}
                        className="flex h-8 w-8 items-center justify-center gap-1 px-0 py-0 sm:h-fit sm:w-fit sm:px-4 sm:py-2"
                    >
                        <IconEdit size={18} />
                        <span className="hidden sm:inline">Edit</span>
                    </Button>
                </div>
            </div>
            <Separator className="mb-3 mt-5" />
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleUpdate)} className="w-full space-y-5">
                        <div>
                            <h4 className="mb-1 text-base-400">Basic Info</h4>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Name
                                                </FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    disabled={!isEditing}
                                                    placeholder="Type your name"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Email
                                                </FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    disabled={!isEditing}
                                                    placeholder="Type your email"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="mobile_number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Mobile Number
                                                </FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    disabled={!isEditing}
                                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                                    placeholder="Type your mobile number"
                                                    type="number"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-1 text-base-400">Address</h4>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                <FormField
                                    control={form.control}
                                    name="division"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Division
                                                </FormLabel>
                                            </div>
                                            <Select
                                                disabled={!isEditing}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                value={field.value}
                                            >
                                                <FormControl className="border focus:border-primary">
                                                    <SelectTrigger>
                                                        <SelectValue className="" placeholder="Select a Division" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                                                    <SelectItem value="Barishal">Barishal</SelectItem>
                                                    <SelectItem value="Khulna">Khulna</SelectItem>
                                                    <SelectItem value="Shylet">Shylet</SelectItem>
                                                    <SelectItem value="Chattogram">Chattogram</SelectItem>
                                                    <SelectItem value="Rajsahi">Rajsahi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="district"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    District
                                                </FormLabel>
                                            </div>
                                            <Select
                                                disabled={!isEditing}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                value={field.value}
                                            >
                                                <FormControl className="border focus:border-primary">
                                                    <SelectTrigger>
                                                        <SelectValue className="" placeholder="Select a District" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                                                    <SelectItem value="Barishal">Barishal</SelectItem>
                                                    <SelectItem value="Khulna">Khulna</SelectItem>
                                                    <SelectItem value="Shylet">Shylet</SelectItem>
                                                    <SelectItem value="Chattogram">Chattogram</SelectItem>
                                                    <SelectItem value="Rajsahi">Rajsahi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="upazila"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Upazila
                                                </FormLabel>
                                            </div>
                                            <Select
                                                disabled={!isEditing}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                value={field.value}
                                            >
                                                <FormControl className="border focus:border-primary">
                                                    <SelectTrigger>
                                                        <SelectValue className="" placeholder="Select a Upazila" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                                                    <SelectItem value="Barishal">Barishal</SelectItem>
                                                    <SelectItem value="Khulna">Khulna</SelectItem>
                                                    <SelectItem value="Shylet">Shylet</SelectItem>
                                                    <SelectItem value="Chattogram">Chattogram</SelectItem>
                                                    <SelectItem value="Rajsahi">Rajsahi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="union"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Union
                                                </FormLabel>
                                            </div>
                                            <Select
                                                disabled={!isEditing}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                value={field.value}
                                            >
                                                <FormControl className="border focus:border-primary">
                                                    <SelectTrigger>
                                                        <SelectValue className="" placeholder="Select a Union" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                                                    <SelectItem value="Barishal">Barishal</SelectItem>
                                                    <SelectItem value="Khulna">Khulna</SelectItem>
                                                    <SelectItem value="Shylet">Shylet</SelectItem>
                                                    <SelectItem value="Chattogram">Chattogram</SelectItem>
                                                    <SelectItem value="Rajsahi">Rajsahi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="village"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2">
                                                <FormLabel required={true} className="font-normal text-base-400">
                                                    Village
                                                </FormLabel>
                                            </div>
                                            <Select
                                                disabled={!isEditing}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                value={field.value}
                                            >
                                                <FormControl className="border focus:border-primary">
                                                    <SelectTrigger>
                                                        <SelectValue className="" placeholder="Select a Village" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                                                    <SelectItem value="Barishal">Barishal</SelectItem>
                                                    <SelectItem value="Khulna">Khulna</SelectItem>
                                                    <SelectItem value="Shylet">Shylet</SelectItem>
                                                    <SelectItem value="Chattogram">Chattogram</SelectItem>
                                                    <SelectItem value="Rajsahi">Rajsahi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {isEditing ? (
                            <div className="flex items-center justify-start gap-2">
                                <Button className="w-20" type="submit" disabled={status === "executing"}>
                                    {status === "executing" ? (
                                        <IconLoader2 size={20} className="animate-spin-slow" />
                                    ) : (
                                        "Update"
                                    )}
                                </Button>
                                <Button onClick={() => setIsEditing(false)} variant="destructive">
                                    Cancel
                                </Button>
                            </div>
                        ) : null}
                    </form>
                </Form>
            </div>
        </SettingPageLayout>
    );
}

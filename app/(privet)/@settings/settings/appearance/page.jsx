"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { themes } from "@/constants/themes";
import { useColorTheme } from "@/context/ColorThemeContext";
import { IconCheck } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import SettingPageLayout from "../_components/SettingPageLayout";

export default function Appearance() {
    const { theme, setTheme } = useTheme();
    const [color, setColor] = useState("");
    const [value, setValue] = useLocalStorage("theme-color");
    const { colorTheme, applyTheme } = useColorTheme();

    useEffect(() => {
        if (value) {
            setColor(value);
        }
    }, [value]);

    const applyThemeColor = (colorValue) => {
        setColor(colorValue);
        setValue(colorValue);
        applyTheme(colorValue);
    };

    return (
        <SettingPageLayout title="Appearance">
            {/* theme section  */}
            <div>
                <div className="pt-2">
                    <div className="mb-4">
                        <h5 className="text-sm text-base-500">Theme</h5>
                        <h6 className="mt-1 text-xs text-base-300">Customize Your UI Theme</h6>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-5">
                        {themes.map((item) => (
                            <div key={item.id}>
                                <button type="button" onClick={() => setTheme(item.theme)}>
                                    <div
                                        className={`relative w-fit rounded-md border p-3 pb-0 ring-primary ring-offset-[3px] ring-offset-base-0 ${item.theme === theme ? "ring-2" : "hover:ring-2"}`}
                                    >
                                        <Image
                                            className="aspect-[3/2] h-auto w-[150px]"
                                            priority
                                            width={150}
                                            height={100}
                                            src={item.image}
                                            alt="light"
                                        />
                                        {item.theme === theme && (
                                            <div className="absolute bottom-1.5 right-2 rounded-full bg-primary p-1">
                                                <IconCheck size={12} stroke={4} className="text-base-0" />
                                            </div>
                                        )}
                                    </div>
                                </button>
                                <h5 className="mt-1.5 text-start text-sm text-base-500">{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* accent color section  */}
            <div className="mt-4">
                <div className="pt-2">
                    <Separator />
                    <div className="mb-4 mt-4">
                        <h5 className="text-sm text-base-500">Accent Color</h5>
                        <h6 className="mt-1 text-xs text-base-300">Choose Your Accent Color</h6>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <div>
                            <RadioGroup
                                className="flex flex-wrap items-center justify-start gap-4"
                                onValueChange={(val) => applyThemeColor(val)}
                                value={color}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="red" id="red" className="hidden" />
                                    <Label
                                        htmlFor="red"
                                        className={`h-8 w-8 cursor-pointer rounded-full bg-[#d81d2e] ring-base-400 ring-offset-[3px] ring-offset-base-0 ${colorTheme === "red" ? "ring-2" : "hover:ring-2"}`}
                                    ></Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="rose" id="rose" className="hidden" />
                                    <Label
                                        htmlFor="rose"
                                        className={`h-8 w-8 cursor-pointer rounded-full bg-[#dd104b] ring-base-400 ring-offset-[3px] ring-offset-base-0 ${colorTheme === "rose" ? "ring-2" : "hover:ring-2"}`}
                                    ></Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="orange" id="orange" className="hidden" />
                                    <Label
                                        htmlFor="orange"
                                        className={`h-8 w-8 cursor-pointer rounded-full bg-[#e65423] ring-base-400 ring-offset-[3px] ring-offset-base-0 ${colorTheme === "orange" ? "ring-2" : "hover:ring-2"}`}
                                    ></Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="green" id="green" className="hidden" />
                                    <Label
                                        htmlFor="green"
                                        className={`h-8 w-8 cursor-pointer rounded-full bg-[#25a939] ring-base-400 ring-offset-[3px] ring-offset-base-0 ${colorTheme === "green" ? "ring-2" : "hover:ring-2"}`}
                                    ></Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="blue" id="blue" className="hidden" />
                                    <Label
                                        htmlFor="blue"
                                        className={`h-8 w-8 cursor-pointer rounded-full bg-[#4284f2] ring-base-400 ring-offset-[3px] ring-offset-base-0 ${colorTheme === "blue" ? "ring-2" : "hover:ring-2"}`}
                                    ></Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="violet" id="violet" className="hidden" />
                                    <Label
                                        htmlFor="violet"
                                        className={`h-8 w-8 cursor-pointer rounded-full bg-[#6c2bd5] ring-base-400 ring-offset-[3px] ring-offset-base-0 ${colorTheme === "violet" ? "ring-2" : "hover:ring-2"}`}
                                    ></Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>

            {/* font style section  */}
            <div className="mt-4">
                <div className="pt-2">
                    <Separator />
                    <div className="mb-4 mt-4">
                        <h5 className="text-sm text-base-500">Font Style</h5>
                        <h6 className="mt-1 text-xs text-base-300">Choose Favorite Font</h6>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <div>
                            <Select defaultValue="inter">
                                <SelectTrigger className="h-10 w-48 px-2.5 text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="inter">Inter</SelectItem>
                                    <SelectItem value="mukta">Mukta</SelectItem>
                                    <SelectItem value="poppins">Poppins</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            {/* border radius section  */}
            <div className="mt-4">
                <div className="pt-2">
                    <Separator />
                    <div className="mb-4 mt-4">
                        <h5 className="text-sm text-base-500">Border Radius</h5>
                        <h6 className="mt-1 text-xs text-base-300">Customize Your Border</h6>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                        <div>
                            <Select defaultValue="base">
                                <SelectTrigger className="h-10 w-48 px-2.5 text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sm">sm</SelectItem>
                                    <SelectItem value="base">base</SelectItem>
                                    <SelectItem value="md">md</SelectItem>
                                    <SelectItem value="lg">lg</SelectItem>
                                    <SelectItem value="xl">xl</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </SettingPageLayout>
    );
}

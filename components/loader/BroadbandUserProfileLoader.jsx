import { Separator } from "../ui/separator";

export default function BroadbandUserProfileLoader() {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-4">
                    <div className="h-[100px] w-[100px] animate-pulse rounded-md bg-secondary"></div>
                    <div className="flex flex-col gap-2">
                        <div className="h-[22px] w-[100px] animate-pulse rounded bg-secondary"></div>
                        <div className="h-[16px] w-[160px] animate-pulse rounded bg-secondary"></div>
                        <div className="h-[16px] w-[75px] animate-pulse rounded bg-secondary"></div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                    <div className="h-10 w-10 animate-pulse rounded-md bg-secondary sm:w-[84px]"></div>
                    <div className="h-10 w-10 animate-pulse rounded-md bg-secondary sm:w-[120px]"></div>
                    <div className="h-10 w-10 animate-pulse rounded-md bg-secondary sm:w-[100px]"></div>
                </div>
            </div>
            <Separator className="mb-2 mt-4" />
            <div className="grid w-full grid-cols-12 gap-4">
                <fieldset className="col-span-12 h-fit rounded-md border px-2 pb-2 pt-0 sm:px-4 sm:pb-4 sm:pt-1 2xl:col-span-7 3xl:col-span-8">
                    <legend className="h-[20px] w-[70px] animate-pulse rounded bg-secondary sm:h-[24px]"></legend>
                    <div>
                        <table>
                            <tbody className="flex flex-col gap-5 pt-5">
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                                <LoaderTr />
                            </tbody>
                        </table>
                    </div>
                </fieldset>
                <div className="col-span-12 flex flex-col gap-4 2xl:col-span-5 3xl:col-span-4">
                    <fieldset className="h-fit rounded-md border px-2 pb-2 pt-0 sm:px-4 sm:pb-4 sm:pt-1">
                        <legend className="h-[20px] w-[100px] animate-pulse rounded bg-secondary sm:h-[24px]"></legend>
                        <div className="h-[350px] w-full animate-pulse rounded-md bg-secondary 5xl:h-[400px]"></div>
                    </fieldset>
                    <fieldset className="h-fit rounded-md border px-2 pb-2 pt-0 sm:px-4 sm:pb-4 sm:pt-1">
                        <legend className="h-[20px] w-[120px] animate-pulse rounded bg-secondary sm:h-[24px]"></legend>
                        <div className="h-[300px] w-full animate-pulse rounded-md bg-secondary"></div>
                    </fieldset>
                </div>
            </div>
        </>
    );
}

const LoaderTr = () => {
    return (
        <tr className="flex gap-5">
            <td className="h-[22px] w-[130px] animate-pulse rounded bg-secondary"></td>
            <td className="animate-pulse text-secondary">:</td>
            <td className="h-[22px] w-[200px] animate-pulse rounded bg-secondary"></td>
        </tr>
    );
};

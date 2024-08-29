import ButtonLoader from "./ButtonLoader";
import FormFooterLoader from "./FormFooterLoader";
import FormLayoutLoader from "./FormLayoutLoader";
import InputLoader from "./InputLoader";
import SectionLoader from "./SectionLoader";

export default function AgentUpdateFormLoader({ children, className = "", titleClass = "", title = "" }) {
    return (
        <FormLayoutLoader>
            <SectionLoader className="mt-2" childClass="grid grid-cols-1 gap-4 sm:grid-cols-2 xmd:grid-cols-3">
                <InputLoader />
                <InputLoader />
                <InputLoader />
                <InputLoader />
                <InputLoader />
                <InputLoader />
            </SectionLoader>
            <SectionLoader childClass="grid gap-4 sm:grid-cols-2 xmd:grid-cols-3">
                <InputLoader />
                <InputLoader />
                <InputLoader />
                <div className="col-span-full flex w-full flex-col gap-4 md:flex-row">
                    <div className="grid w-full grid-cols-2 gap-4">
                        <InputLoader className="col-span-2 sm:col-span-1 md:col-span-2 2xl:col-span-1" />
                        <InputLoader className="col-span-2 sm:col-span-1 md:col-span-2 2xl:col-span-1" />
                        <InputLoader className="col-span-2" />
                        <InputLoader className="col-span-2" />
                        <InputLoader className="col-span-2 sm:col-span-1" />
                        <InputLoader className="col-span-2 sm:col-span-1" />
                    </div>
                    <div className="mb-6">
                        <div className="h-[16px] w-[170px] animate-pulse rounded bg-secondary"></div>
                        <div className="mt-1 h-full max-h-[400px] min-h-[300px] w-full animate-pulse rounded-md bg-secondary md:w-[350px] 2xl:w-[400px]"></div>
                    </div>
                </div>
            </SectionLoader>
            <FormFooterLoader>
                <ButtonLoader />
                <ButtonLoader />
            </FormFooterLoader>
        </FormLayoutLoader>
    );
}

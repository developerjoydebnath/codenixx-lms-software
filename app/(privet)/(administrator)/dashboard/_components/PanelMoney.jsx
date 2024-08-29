import { IconLoader2 } from "@tabler/icons-react";
import { Landmark } from "lucide-react";

const PanelMoney = () => {
    return (
        <div className="h-full w-full rounded-lg bg-secondary p-4 shadow">
            <div className="mt-2 flex flex-col items-center justify-center gap-2 text-base-500">
                <Landmark size={80} />
                <h4 className="text-xl font-semibold">Panel Balance</h4>
            </div>
            <div className="mb-3 mt-3 flex justify-center text-2xl font-semibold text-base-500">
                {false ? <IconLoader2 size={30} className="animate-spin-slow" /> : "৳ " + "500"}
            </div>
        </div>
    );
};

export default PanelMoney;

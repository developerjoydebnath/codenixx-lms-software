import ConfirmationModal from "@/components/ConfirmationModal";
import { Button } from "@/components/ui/button";
import { IconLoader2 } from "@tabler/icons-react";
import { Wallet } from "lucide-react";
import { useState } from "react";

const WalletBalance = () => {
    const [dialogOpen, setDialogueOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [walletBalance, setWalletBalance] = useState(1000);

    return (
        <div className="h-full w-full rounded-lg bg-secondary p-4 shadow">
            <div className="mt-2 flex flex-col items-center justify-center gap-2 text-base-500">
                <Wallet size={80} />
                <h4 className="text-xl font-semibold">Wallet Balance</h4>
            </div>
            <div className="mb-3 mt-3 flex justify-center text-2xl font-semibold text-base-500">
                {loading ? <IconLoader2 size={30} className="animate-spin-slow" /> : "৳ " + walletBalance}
            </div>
            <div className="flex items-center justify-center gap-2">
                <Button
                    disabled={status === "executing" || walletBalance <= 0}
                    onClick={() => setDialogueOpen(true)}
                    type="button"
                    size="sm"
                    className="w-[110px]"
                >
                    {status === "executing" ? (
                        <IconLoader2 size={20} className="animate-spin-slow text-base-0" />
                    ) : (
                        "Add To Panel"
                    )}
                </Button>
                <Button type="button" size="sm" disabled>
                    Withdraw
                </Button>
            </div>
            <ConfirmationModal handler={() => {}} dialogOpen={dialogOpen} setDialogueOpen={setDialogueOpen} />
        </div>
    );
};

export default WalletBalance;

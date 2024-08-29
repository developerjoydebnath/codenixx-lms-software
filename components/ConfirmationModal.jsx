import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ConfirmationModal = ({
    handler = () => {},
    dialogOpen,
    setDialogueOpen,
    title = "Are you sure, you want to add your wallet balance to panel balance?",
}) => {
    const confirm = () => {
        setDialogueOpen(false);
        handler();
    };
    return (
        <div>
            <AlertDialog open={dialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>{title}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button type="button" className="px-5" onClick={confirm}>
                            Yes
                        </Button>
                        <Button
                            type="button"
                            className="px-5"
                            variant="destructive"
                            onClick={() => {
                                setDialogueOpen(false);
                            }}
                        >
                            No
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ConfirmationModal;

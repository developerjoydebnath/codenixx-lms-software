import Tooltip from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { IconLoader, IconPlus, IconUsersGroup } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const WifiUserTotal = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(100);

    // get the broadband total payment count
    // useEffect(async () => {
    //     setLoading(true);
    //     await http_get_request({
    //         endpoint: `/${userObj.id}/total/broadband/user`,
    //     })
    //         .then(res => {
    //             if (res.status === 'success') {
    //                 setData(res.results.total[0].total);
    //             } else {
    //                 show_toast('error', res.message);
    //             }
    //         })
    //         .catch(err => {
    //             show_toast('error', err.message);
    //         });
    //     setLoading(false);
    // }, []);

    return (
        <div className="h-full rounded-lg bg-secondary p-4 shadow">
            <div className="flex items-center justify-center gap-2 text-base-400">
                <div>
                    <IconUsersGroup size={28} />
                </div>
                <h4 className="text-lg font-medium">Total Wifi User</h4>
                <Tooltip title="Add User">
                    <Link href={"/wifi-users/create"}>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <IconPlus size={24} />
                        </Button>
                    </Link>
                </Tooltip>
            </div>
            <div className="mb-2 mt-3 flex justify-center text-xl font-semibold text-base-500">
                {loading ? <IconLoader size={30} className="animate-spin-slow" /> : data}
            </div>
        </div>
    );
};

export default WifiUserTotal;

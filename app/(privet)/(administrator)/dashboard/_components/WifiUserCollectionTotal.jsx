import { IconCash, IconLoader } from "@tabler/icons-react";
import { useState } from "react";

const WifiUserCollectionTotal = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(0);

    // get the broadband total payment count
    // useEffect(async () => {
    //     setLoading(true);
    //     await http_get_request({
    //         endpoint: `/${userObj.id}/total/broadband/payment`,
    //     })
    //         .then(res => {
    //             if (res.status === 'success') {
    //                 setData(res.results.total[0].total || 0);
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
                    <IconCash size={28} />
                </div>
                <h4 className="text-lg font-medium">Total Collection (Wifi)</h4>
            </div>
            <div className="mb-2 mt-3 flex justify-center text-xl font-semibold text-base-500">
                {loading ? <IconLoader size={30} className="animate-spin-slow" /> : "৳ " + data}
            </div>
        </div>
    );
};

export default WifiUserCollectionTotal;

import { activeBroadbandUserData } from "@/constants/activeBroadbandUserData";
import { IconLoader2 } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const WifiUserGraph = () => {
    const [graphData, setGraphData] = useState([...activeBroadbandUserData]);
    const [loading, setLoading] = useState(false);
    const { theme } = useTheme();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // useEffect(async () => {
    //     setLoading(true);
    //     await http_get_request({
    //         endpoint: `/graph/${user.id}/broadband_total/user`,
    //     })
    //         .then(function (resp) {
    //             if (resp?.status === 'success') {
    //                 const modifiedDates = resp.results.total
    //                     .map(d => ({
    //                         ...d,
    //                         date: moment(
    //                             `${d.month}/${d.year}`,
    //                             'MM/YYYY',
    //                         ).toDate(), // add date property where type is date
    //                     }))
    //                     .sort((a, b) => b.date - a.date) // sort by date
    //                     .map(d => ({
    //                         ...d,
    //                         new_user: d.total_register_and_paid_for_this_month,
    //                         old_user:
    //                             d.total_paid_users -
    //                             d.total_register_and_paid_for_this_month,
    //                         monthName: `${months[d.date.getMonth()]} ${d.year
    //                             .toString()
    //                             .substr(-2)}`, // add month name property
    //                     }))
    //                     .map(
    //                         ({
    //                             date,
    //                             total_register_and_paid_for_this_month,
    //                             ...rest
    //                         }) => rest,
    //                     ); // remove date property

    //                 setGraphData(modifiedDates);
    //             } else {
    //                 toast.error(resp.message);
    //             }
    //         })
    //         .catch(err => console.log(err.message));
    //     setLoading(false);
    // }, []);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload.length > 0) {
            const total = payload.reduce((total, val) => (total = total + val.value), 0);
            return (
                <div
                    className={`rounded border border-base-100 p-2 shadow-md ${theme === "dark" ? "glassmorphism-dark" : "glassmorphism"}`}
                >
                    <h4 className="mb-1.5 text-base-500">{label}</h4>
                    <p className="text-base-400">Total: {total}</p>
                    {payload.map((d) => (
                        <p key={d.name} style={{ color: d.color }}>
                            {d.name}
                            {": "}
                            {d.value}
                        </p>
                    ))}
                </div>
            );
        }

        return null;
    };

    const getRoundedPath = (x, y, width, height) => {
        const radius = 5; // Radius for the top corners
        return `
          M${x},${y + height}
          L${x},${y + radius}
          Q${x},${y} ${x + radius},${y}
          L${x + width - radius},${y}
          Q${x + width},${y} ${x + width},${y + radius}
          L${x + width},${y + height}
          Z
        `;
    };

    const RoundedRectangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getRoundedPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="mb-6 h-[400px] w-full">
            <h3 className="text-center text-lg font-medium text-gray-400">Active Wifi Users</h3>
            <ResponsiveContainer width="100%" height="100%">
                {loading ? (
                    <div className="flex h-full w-full items-center justify-center">
                        <IconLoader2 size={40} className="animate-spin-slow text-base-400" />
                    </div>
                ) : (
                    <BarChart
                        width={500}
                        height={400}
                        data={graphData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="monthName" scale="point" padding={{ left: 40, right: 40 }} />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />

                        <Bar barSize={50} stackId="a" dataKey="old_user" fill="hsl(var(--chart-1))" name="Old User" />
                        <Bar
                            barSize={50}
                            stackId="a"
                            dataKey="new_user"
                            fill="hsl(var(--chart-2))"
                            name="New User"
                            shape={<RoundedRectangleBar />}
                        />
                    </BarChart>
                )}
            </ResponsiveContainer>
        </div>
    );
};

export default WifiUserGraph;

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userRegistrationDataByDay } from "@/constants/userRegisteredDataByDay";
import { IconDotsVertical } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const LineChartDayByDay = ({ title = "" }) => {
    const [loading, setLoading] = useState(false);
    const [graphData, setGraphData] = useState([...userRegistrationDataByDay]);
    const [days, setDays] = useState(30);
    const { theme } = useTheme();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // useEffect(() => {
    //     setLoading(true);

    //     const modifiedDates = data
    //         .map((d) => ({
    //             ...d,
    //             date: moment(`${d.day}/${d.month}/${d.year}`, "DD/MM/YYYY").toDate(), // add date property where type is date
    //         }))
    //         .sort((a, b) => b.date - a.date) // sort by date
    //         .map((d) => ({
    //             ...d,
    //             date: `${d.day}-${months[d.month - 1]}`,
    //         }));

    //     setGraphData(modifiedDates);

    //     setLoading(false);
    // }, [months]);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload.length > 0) {
            const day = payload[0].payload.day;
            const month = months[payload[0].payload.month];
            const year = payload[0].payload.year;
            return (
                <div
                    className={`rounded border border-base-100 p-2 shadow-md ${theme === "dark" ? "glassmorphism-dark" : "glassmorphism"}`}
                >
                    <h4 className="mb-1.5 text-base-500">{day + " " + month + ", " + year}</h4>
                    <p className="text-sm text-base-400">Total: {payload[0]?.payload?.total}</p>
                    <p className="text-sm text-base-400">Active: {payload[0]?.payload?.active}</p>
                    <p className="text-sm text-base-400">Pending: {payload[0]?.payload?.pending}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="-ml-4 mb-12 h-[300px] w-full">
            <div className="mx-0 flex items-center justify-between">
                <div></div>
                <h3 className="text-center text-lg font-medium text-gray-400">{title} (Day Wise)</h3>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button disabled={loading} size="sm" className="w-9 p-0" variant="secondary">
                                <IconDotsVertical size={20} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-28 min-w-[20px]">
                            <DropdownMenuRadioGroup value={days} onValueChange={setDays}>
                                <DropdownMenuRadioItem value={7}>7 Days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value={15}>15 Days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value={30}>30 Days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value={60}>60 Days</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value={90}>90 Days</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={graphData}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="total_user" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="day" />
                    <YAxis />
                    {/* <Tooltip /> */}
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Legend /> */}
                    <Area type="monotone" dataKey="total" stroke="hsl(var(--primary))" fill="url(#total_user)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartDayByDay;

"use client";

import PageLayout from "@/components/layouts/PageLayout";
import SectionLayout from "@/components/layouts/SectionLayout";
import PermissionGranted from "@/components/PermissionGranted";
import BroadbandUserCollectionTotal from "./_components/BroadbandUserCollectionTotal";
import BroadbandUserTotal from "./_components/BroadbandUserTotal";
import BroadbandCollectionGraph from "./_components/graphs/BroadbandCollectionGraph";
import BroadbandUserGraph from "./_components/graphs/BroadbandUserGraph";
import LineChartDayByDay from "./_components/graphs/LineChartDayByDay";
import WifiCollectionGraph from "./_components/graphs/WifiCollectionGraph";
import WifiUserGraph from "./_components/graphs/WifiUsersGraph";
import PanelMoney from "./_components/PanelMoney";
import WalletBalance from "./_components/WalletBalance";
import WifiUserCollectionTotal from "./_components/WifiUserCollectionTotal";
import WifiUserTotal from "./_components/WifiUserTotal";

export default function Dashboard() {
    return (
        <PageLayout>
            <SectionLayout>
                <div className="grid grid-cols-12 gap-2 sm:gap-4">
                    <div className="col-span-12 grid grid-cols-1 gap-2 sm:gap-4 xmd:grid-cols-2 3xl:col-span-6">
                        <PermissionGranted
                            base_role="admin"
                            permissions={[]}
                            required_permissions={["broadband_graph_view"]}
                        >
                            <PanelMoney />
                        </PermissionGranted>
                        <PermissionGranted
                            base_role="admin"
                            permissions={[]}
                            required_permissions={["broadband_graph_view"]}
                        >
                            <WalletBalance />
                        </PermissionGranted>
                    </div>
                    <div className="col-span-12 grid w-full grid-cols-1 items-center gap-2 sm:grid-cols-2 sm:gap-4 2xl:grid-cols-4 3xl:col-span-6 3xl:grid-cols-2">
                        <PermissionGranted
                            base_role="admin"
                            permissions={[]}
                            required_permissions={["broadband_graph_view"]}
                        >
                            <BroadbandUserTotal />
                        </PermissionGranted>
                        <PermissionGranted
                            base_role="admin"
                            permissions={[]}
                            required_permissions={["broadband_graph_view"]}
                        >
                            <WifiUserTotal />
                        </PermissionGranted>
                        <PermissionGranted
                            base_role="admin"
                            permissions={[]}
                            required_permissions={["broadband_graph_view"]}
                        >
                            <BroadbandUserCollectionTotal />
                        </PermissionGranted>
                        <PermissionGranted
                            base_role="admin"
                            permissions={[]}
                            required_permissions={["broadband_graph_view"]}
                        >
                            <WifiUserCollectionTotal />
                        </PermissionGranted>
                    </div>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <PermissionGranted
                        base_role="admin"
                        permissions={[]}
                        required_permissions={["broadband_graph_view"]}
                    >
                        <LineChartDayByDay title="Broadband User" />
                    </PermissionGranted>
                    <PermissionGranted
                        base_role="admin"
                        permissions={[]}
                        required_permissions={["broadband_graph_view"]}
                    >
                        <LineChartDayByDay title="Wifi User" />
                    </PermissionGranted>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <PermissionGranted
                        base_role="admin"
                        permissions={[]}
                        required_permissions={["broadband_graph_view"]}
                    >
                        <BroadbandUserGraph />
                    </PermissionGranted>
                    <PermissionGranted
                        base_role="admin"
                        permissions={[]}
                        required_permissions={["broadband_graph_view"]}
                    >
                        <WifiUserGraph />
                    </PermissionGranted>
                </div>
            </SectionLayout>
            <SectionLayout>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <PermissionGranted
                        base_role="admin"
                        permissions={[]}
                        required_permissions={["broadband_graph_view"]}
                    >
                        <BroadbandCollectionGraph />
                    </PermissionGranted>
                    <PermissionGranted
                        base_role="admin"
                        permissions={[]}
                        required_permissions={["broadband_graph_view"]}
                    >
                        <WifiCollectionGraph />
                    </PermissionGranted>
                </div>
            </SectionLayout>
        </PageLayout>
    );
}

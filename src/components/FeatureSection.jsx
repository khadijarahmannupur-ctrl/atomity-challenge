"use client";

import DashboardCard from "./DashboardCard";
import ProviderNode from "./ProviderNode";

import { useMetrics } from "@/hooks/useMetrics";

export default function FeatureSection() {
    const {
        data,
        isLoading,
        isError,
    } = useMetrics();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading data</p>;
    }

    return (
        <section
            className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-20
    "
        >
            <div
                className="
        max-w-6xl
        w-full
        grid
        lg:grid-cols-3
        gap-10
        items-center
      "
            >
                <div className="space-y-6">
                    <ProviderNode name="AWS" />
                    <ProviderNode name="Google Cloud" />
                </div>

                <DashboardCard
                    data={data}
                />

                <div className="space-y-6">
                    <ProviderNode name="Azure" />
                    <ProviderNode name="On-Premise" />
                </div>
            </div>
        </section>
    );
}
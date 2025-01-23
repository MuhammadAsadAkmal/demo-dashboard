"use client";

import { AreaComponent } from "@/components/dashboard/areachart";
import { BarComponent } from "@/components/dashboard/barchart";
import { ChartComponent } from "@/components/dashboard/chart3";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { PieChartMain } from "@/components/dashboard/piechart";

export default function Page() {
  return (
    <div className="container mx-auto mt-8 flex flex-1 flex-col gap-6 p-4 md:p-8">
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BarComponent />
        <ChartComponent />
        <PieChartMain />
        <AreaComponent />
      </div>
    </div>
  );
}

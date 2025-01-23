"use client"

import { DashboardChart } from "@/components/dashboard/dashboard-chart"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"

export default function Page() {
  return (
    <div className="container mx-auto mt-8 flex flex-1 flex-col gap-6 p-4 md:p-8">
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardChart />
      </div>
    </div>
  )
}

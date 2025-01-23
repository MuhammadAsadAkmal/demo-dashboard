"use client"

import { DashboardChart } from "@/components/dashboard/dashboard-chart"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"

export default function Page() {
  return (
    <div className="mt-16 flex flex-1 flex-col gap-4 p-4">
      <DashboardStats />
      <div className="grid gap-4 md:grid-cols-3">
        <DashboardChart />
      </div>
    </div>
  )
}

"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { BarComponent } from "./barchart";
import { ChartComponent } from "./chart3";
import { PieChartMain } from "./piechart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function DashboardChart() {
  return (
    <Card className="col-span-3 bg-none" >
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>

      <div className="flex flex-wrap justify-evenly py-4">
        <BarComponent />
        <ChartComponent />
        <PieChartMain />
      </div>
  
      {/* <Line data={data} /> */}
    </Card>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { useTranslation } from "next-i18next"; // Import the hook

export function DashboardStats() {
  const { t } = useTranslation(); // Use the hook

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="transition-all hover:scale-105 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("dashboard.totalRevenue")}</CardTitle>
          <div className="rounded-full bg-primary/10 p-2">
            <DollarSign className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold tracking-tight">{t("dashboard.totalRevenueValue")}</div>
          <p className="text-sm text-muted-foreground">{t("dashboard.revenueGrowth")}</p>
        </CardContent>
      </Card>

      <Card className="transition-all hover:scale-105 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("dashboard.subscriptions")}</CardTitle>
          <div className="rounded-full bg-primary/10 p-2">
            <Users className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold tracking-tight">{t("dashboard.subscriptionsValue")}</div>
          <p className="text-sm text-muted-foreground">{t("dashboard.subscriptionsGrowth")}</p>
        </CardContent>
      </Card>

      <Card className="transition-all hover:scale-105 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("dashboard.sales")}</CardTitle>
          <div className="rounded-full bg-primary/10 p-2">
            <CreditCard className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold tracking-tight">{t("dashboard.salesValue")}</div>
          <p className="text-sm text-muted-foreground">{t("dashboard.salesGrowth")}</p>
        </CardContent>
      </Card>

      <Card className="transition-all hover:scale-105 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{t("dashboard.activeNow")}</CardTitle>
          <div className="rounded-full bg-primary/10 p-2">
            <Activity className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold tracking-tight">{t("dashboard.activeNowValue")}</div>
          <p className="text-sm text-muted-foreground">{t("dashboard.activeNowGrowth")}</p>
        </CardContent>
      </Card>
    </div>
  );
}

import { Package, AlertTriangle, TrendingDown, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { toPersianDigits } from "../lib/utils";

const inventory = [
  { id: 1, name: "دانه قهوه اسپرسو", current: 15, min: 10, max: 50, unit: "کیلوگرم", status: "low" },
  { id: 2, name: "شیر", current: 45, min: 20, max: 100, unit: "لیتر", status: "ok" },
  { id: 3, name: "شکلات", current: 5, min: 8, max: 30, unit: "کیلوگرم", status: "critical" },
  { id: 4, name: "خامه", current: 12, min: 10, max: 40, unit: "لیتر", status: "ok" },
  { id: 5, name: "شکر", current: 25, min: 15, max: 60, unit: "کیلوگرم", status: "ok" },
  { id: 6, name: "لیوان یکبار مصرف", current: 150, min: 100, max: 500, unit: "عدد", status: "ok" },
  { id: 7, name: "درب لیوان", current: 80, min: 100, max: 500, unit: "عدد", status: "low" },
  { id: 8, name: "دستمال", current: 30, min: 50, max: 200, unit: "بسته", status: "critical" },
];

const statusConfig = {
  ok: { label: "موجود", color: "text-green-600", bgColor: "bg-green-100 dark:bg-green-900/30" },
  low: { label: "کم موجود", color: "text-yellow-600", bgColor: "bg-yellow-100 dark:bg-yellow-900/30" },
  critical: { label: "ناموجود", color: "text-red-600", bgColor: "bg-red-100 dark:bg-red-900/30" },
};

export default function Inventory() {
  const criticalItems = inventory.filter(i => i.status === "critical").length;
  const lowItems = inventory.filter(i => i.status === "low").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">مدیریت انبار</h1>
          <p className="text-muted-foreground">پیگیری موجودی مواد اولیه و ملزومات</p>
        </div>
        <Button className="w-full sm:w-auto">افزودن موجودی +</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">کل اقلام</CardTitle>
            <Package className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{toPersianDigits(inventory.length)}</div>
          </CardContent>
        </Card>

        <Card className="border-red-200 dark:border-red-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">کمبود شدید</CardTitle>
            <AlertTriangle className="w-4 h-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{toPersianDigits(criticalItems)}</div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">کم موجود</CardTitle>
            <TrendingDown className="w-4 h-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{toPersianDigits(lowItems)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">آخرین بروزرسانی</CardTitle>
            <RefreshCw className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold">۲ ساعت پیش</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>موجودی انبار</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventory.map((item) => {
              const config = statusConfig[item.status as keyof typeof statusConfig];
              const percentage = (item.current / item.max) * 100;

              return (
                <div key={item.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge className={config.bgColor}>
                          <span className={config.color}>{config.label}</span>
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                        حداقل: {toPersianDigits(item.min)} {item.unit}
                        </span>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-2xl font-bold">
                        {toPersianDigits(item.current)}
                        <span className="text-sm text-muted-foreground mr-1">{item.unit}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        از {toPersianDigits(item.max)} {item.unit}
                      </p>
                    </div>
                  </div>

                  <Progress
                    value={percentage}
                    className="h-2 mb-3"
                  />

                  {item.status !== "ok" && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Package className="w-3 h-3 ml-1" />
                      سفارش خرید
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

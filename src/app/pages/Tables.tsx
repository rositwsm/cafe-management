import { Users, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { cn, toPersianDigits } from "../lib/utils";

const tables = [
  { id: 1, number: "۱", seats: 2, status: "available", customer: null, orderAmount: 0, time: null },
  { id: 2, number: "۲", seats: 4, status: "occupied", customer: "سارا احمدی", orderAmount: 180000, time: "۱۵ دقیقه" },
  { id: 3, number: "۳", seats: 4, status: "occupied", customer: "حسین نوری", orderAmount: 320000, time: "۲۵ دقیقه" },
  { id: 4, number: "۴", seats: 2, status: "available", customer: null, orderAmount: 0, time: null },
  { id: 5, number: "۵", seats: 6, status: "reserved", customer: "رضا محمدی", orderAmount: 0, time: "۱۸:۳۰" },
  { id: 6, number: "۶", seats: 4, status: "available", customer: null, orderAmount: 0, time: null },
  { id: 7, number: "۷", seats: 2, status: "occupied", customer: "مریم رضایی", orderAmount: 220000, time: "۱۰ دقیقه" },
  { id: 8, number: "۸", seats: 8, status: "reserved", customer: "علی کریمی", orderAmount: 0, time: "۱۹:۰۰" },
  { id: 9, number: "۹", seats: 2, status: "available", customer: null, orderAmount: 0, time: null },
  { id: 10, number: "۱۰", seats: 4, status: "available", customer: null, orderAmount: 0, time: null },
  { id: 11, number: "۱۱", seats: 6, status: "occupied", customer: "فاطمه احمدی", orderAmount: 450000, time: "۳۵ دقیقه" },
  { id: 12, number: "۱۲", seats: 4, status: "available", customer: null, orderAmount: 0, time: null },
];

const statusConfig = {
  available: {
    label: "خالی",
    color: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-900/50",
    textColor: "text-green-700 dark:text-green-300",
    badgeVariant: "default" as const,
  },
  occupied: {
    label: "مشغول",
    color: "bg-primary/10 border-primary/30 hover:bg-primary/20",
    textColor: "text-primary",
    badgeVariant: "secondary" as const,
  },
  reserved: {
    label: "رزرو شده",
    color: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-900/50",
    textColor: "text-blue-700 dark:text-blue-300",
    badgeVariant: "outline" as const,
  },
};

export default function Tables() {
  const stats = {
    total: tables.length,
    available: tables.filter(t => t.status === "available").length,
    occupied: tables.filter(t => t.status === "occupied").length,
    reserved: tables.filter(t => t.status === "reserved").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">مدیریت میزها</h1>
          <p className="text-muted-foreground">مشاهده و مدیریت وضعیت میزهای کافه</p>
        </div>
        <Button className="w-full sm:w-auto">رزرو جدید +</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">کل میزها</p>
            <p className="text-3xl font-bold">{toPersianDigits(stats.total)}</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 dark:border-green-800">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">خالی</p>
            <p className="text-3xl font-bold text-green-600">{toPersianDigits(stats.available)}</p>
          </CardContent>
        </Card>
        <Card className="border-primary/30">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">مشغول</p>
            <p className="text-3xl font-bold text-primary">{toPersianDigits(stats.occupied)}</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">رزرو شده</p>
            <p className="text-3xl font-bold text-blue-600">{toPersianDigits(stats.reserved)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Legend */}
      <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm">خالی</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded"></div>
          <span className="text-sm">مشغول</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-sm">رزرو شده</span>
        </div>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tables.map((table) => {
          const config = statusConfig[table.status as keyof typeof statusConfig];

          return (
            <Card
              key={table.id}
              className={cn(
                "border-2 cursor-pointer transition-all duration-200 hover:shadow-lg",
                config.color
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={cn("text-2xl font-bold mb-1", config.textColor)}>
                      میز {table.number}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{toPersianDigits(table.seats)} نفره</span>
                    </div>
                  </div>
                  <Badge variant={config.badgeVariant} className="text-xs">
                    {config.label}
                  </Badge>
                </div>

                {table.status === "occupied" && (
                  <div className="space-y-3 pt-3 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">مشتری</p>
                      <p className="font-medium text-sm">{table.customer}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{table.time}</span>
                      </div>
                      <span className="font-bold text-primary">
                        {toPersianDigits((table.orderAmount / 1000).toFixed(0))}K
                      </span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <CheckCircle className="w-3 h-3 ml-1" />
                      تسویه حساب
                    </Button>
                  </div>
                )}

                {table.status === "reserved" && (
                  <div className="space-y-2 pt-3 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">رزرو برای</p>
                      <p className="font-medium text-sm">{table.customer}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>ساعت {table.time}</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      لغو رزرو
                    </Button>
                  </div>
                )}

                {table.status === "available" && (
                  <div className="pt-3 border-t border-border/50">
                    <Button size="sm" variant="outline" className="w-full">
                      سفارش جدید
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

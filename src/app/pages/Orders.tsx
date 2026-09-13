import { Clock, CheckCircle2, AlertCircle, XCircle, Search, Filter, ChevronDown } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { formatCurrency, formatTime, toPersianDigits } from "../lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const orders = [
  {
    id: "#۱۲۳۴",
    customer: "علی محمدی",
    table: "میز ۵",
    items: ["اسپرسو دبل", "کیک شکلاتی"],
    amount: 250000,
    status: "completed",
    time: new Date("2026-05-29T10:30:00"),
    paymentMethod: "نقدی"
  },
  {
    id: "#۱۲۳۵",
    customer: "سارا احمدی",
    table: "میز ۲",
    items: ["کاپوچینو", "کروسان"],
    amount: 180000,
    status: "preparing",
    time: new Date("2026-05-29T10:45:00"),
    paymentMethod: "کارت"
  },
  {
    id: "#۱۲۳۶",
    customer: "رضا کریمی",
    table: "میز ۸",
    items: ["لاته", "اسپرسو", "چیزکیک"],
    amount: 420000,
    status: "pending",
    time: new Date("2026-05-29T11:00:00"),
    paymentMethod: "کارت"
  },
  {
    id: "#۱۲۳۷",
    customer: "مریم رضایی",
    table: "میز ۱",
    items: ["موکا"],
    amount: 150000,
    status: "ready",
    time: new Date("2026-05-29T11:10:00"),
    paymentMethod: "نقدی"
  },
  {
    id: "#۱۲۳۸",
    customer: "حسین نوری",
    table: "میز ۳",
    items: ["اسپرسو دبل", "تیرامیسو", "آب معدنی"],
    amount: 320000,
    status: "cancelled",
    time: new Date("2026-05-29T11:20:00"),
    paymentMethod: "-"
  },
];

const statusConfig = {
  pending: { label: "در انتظار", icon: AlertCircle, variant: "outline" as const, color: "text-yellow-600" },
  preparing: { label: "در حال آماده‌سازی", icon: Clock, variant: "secondary" as const, color: "text-blue-600" },
  ready: { label: "آماده تحویل", icon: CheckCircle2, variant: "default" as const, color: "text-green-600" },
  completed: { label: "تحویل داده شده", icon: CheckCircle2, variant: "default" as const, color: "text-green-600" },
  cancelled: { label: "لغو شده", icon: XCircle, variant: "destructive" as const, color: "text-red-600" },
};

export default function Orders() {
  const filterOrders = (status?: string) => {
    if (!status) return orders;
    return orders.filter(order => order.status === status);
  };

  const OrderCard = ({ order }: { order: typeof orders[0] }) => {
    const config = statusConfig[order.status as keyof typeof statusConfig];
    const StatusIcon = config.icon;

    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.customer}`} />
                <AvatarFallback>{order.customer[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold">{order.customer}</p>
                  <span className="text-sm text-muted-foreground">{toPersianDigits(order.id)}</span>
                </div>
                <p className="text-sm text-muted-foreground">{order.table}</p>
              </div>
            </div>
            <Badge variant={config.variant}>
              <StatusIcon className="w-3 h-3 ml-1" />
              {config.label}
            </Badge>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-sm font-medium">اقلام سفارش:</p>
            <div className="flex flex-wrap gap-2">
              {order.items.map((item, i) => (
                <span key={i} className="text-sm bg-muted px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatTime(order.time)}
              </div>
              <div>روش پرداخت: {order.paymentMethod}</div>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-primary">{formatCurrency(order.amount)}</p>
            </div>
          </div>

          {order.status === "pending" && (
            <div className="flex gap-2 mt-4">
              <Button className="flex-1" size="sm">تایید سفارش</Button>
              <Button variant="outline" size="sm">لغو</Button>
            </div>
          )}
          {order.status === "preparing" && (
            <Button className="w-full mt-4" size="sm">آماده شد</Button>
          )}
          {order.status === "ready" && (
            <Button className="w-full mt-4" size="sm">تحویل به مشتری</Button>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">مدیریت سفارش‌ها</h1>
          <p className="text-muted-foreground">مشاهده و مدیریت تمام سفارشات</p>
        </div>
        <Button className="w-full sm:w-auto">سفارش جدید +</Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="جستجوی سفارش..." className="pr-10" />
        </div>
        <Button variant="outline" className="w-full gap-2 sm:w-auto">
          <Filter className="w-4 h-4" />
          فیلتر
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">همه ({toPersianDigits(orders.length)})</TabsTrigger>
          <TabsTrigger value="pending">در انتظار ({toPersianDigits(filterOrders('pending').length)})</TabsTrigger>
          <TabsTrigger value="preparing">در حال آماده‌سازی ({toPersianDigits(filterOrders('preparing').length)})</TabsTrigger>
          <TabsTrigger value="ready">آماده ({toPersianDigits(filterOrders('ready').length)})</TabsTrigger>
          <TabsTrigger value="completed">تکمیل شده ({toPersianDigits(filterOrders('completed').length)})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {orders.map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filterOrders('pending').map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        </TabsContent>

        <TabsContent value="preparing" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filterOrders('preparing').map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        </TabsContent>

        <TabsContent value="ready" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filterOrders('ready').map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filterOrders('completed').map(order => <OrderCard key={order.id} order={order} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

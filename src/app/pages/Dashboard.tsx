import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { formatCurrency, formatNumber, toPersianDigits } from "../lib/utils";

const salesData = [
  { name: "شنبه", value: 4500000 },
  { name: "یکشنبه", value: 5200000 },
  { name: "دوشنبه", value: 4800000 },
  { name: "سه‌شنبه", value: 6100000 },
  { name: "چهارشنبه", value: 7300000 },
  { name: "پنجشنبه", value: 8900000 },
  { name: "جمعه", value: 9500000 },
];

const categoryData = [
  { name: "قهوه", value: 45, color: "#C67C4E" },
  { name: "نوشیدنی", value: 25, color: "#F4B860" },
  { name: "دسر", value: 20, color: "#8B5A3C" },
  { name: "غذا", value: 10, color: "#D4A373" },
];

const recentOrders = [
  {
    id: "#۱۲۳۴",
    customer: "علی محمدی",
    items: "۲ عدد",
    amount: 250000,
    status: "completed",
    time: "۱۰ دقیقه پیش",
  },
  {
    id: "#۱۲۳۵",
    customer: "سارا احمدی",
    items: "۱ عدد",
    amount: 180000,
    status: "preparing",
    time: "۱۵ دقیقه پیش",
  },
  {
    id: "#۱۲۳۶",
    customer: "رضا کریمی",
    items: "۳ عدد",
    amount: 420000,
    status: "completed",
    time: "۲۰ دقیقه پیش",
  },
  {
    id: "#۱۲۳۷",
    customer: "مریم رضایی",
    items: "۱ عدد",
    amount: 150000,
    status: "pending",
    time: "۲۵ دقیقه پیش",
  },
];

const topProducts = [
  { name: "اسپرسو دبل", sales: 156, revenue: 7800000, trend: "+۱۲٪" },
  { name: "کاپوچینو", sales: 142, revenue: 7100000, trend: "+۸٪" },
  { name: "لاته", sales: 128, revenue: 6400000, trend: "+۵٪" },
  { name: "موکا", sales: 98, revenue: 5400000, trend: "+۱۵٪" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">داشبورد</h1>
        <p className="text-muted-foreground">
          خلاصه‌ای از عملکرد امروز کافه شما
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">فروش امروز</CardTitle>
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(9500000)}</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">+۱۲٪</span>
              <span className="text-muted-foreground">نسبت به دیروز</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">سفارش‌ها</CardTitle>
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(156)}</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">+۸٪</span>
              <span className="text-muted-foreground">نسبت به دیروز</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">مشتریان امروز</CardTitle>
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(89)}</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">+۵٪</span>
              <span className="text-muted-foreground">نسبت به دیروز</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">میانگین سفارش</CardTitle>
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(60900)}</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">+۳٪</span>
              <span className="text-muted-foreground">نسبت به دیروز</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>فروش هفتگی</CardTitle>
            <CardDescription>نمودار فروش ۷ روز گذشته</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[260px] min-w-0 sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 8, right: 16, bottom: 0, left: 24 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-border"
                />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis
                  className="text-xs"
                  width={72}
                  tickMargin={12}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${toPersianDigits((value / 1000000).toFixed(0))}M`}
                />
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill="#C67C4E" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>توزیع فروش</CardTitle>
            <CardDescription>بر اساس دسته‌بندی</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[260px] min-w-0 sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${toPersianDigits(value)}٪`} />
              </PieChart>
            </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">
                    {cat.name}
                  </span>
                  <span className="text-sm font-medium mr-auto">
                    {toPersianDigits(cat.value)}٪
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>سفارش‌های اخیر</CardTitle>
            <CardDescription>آخرین سفارش‌های دریافت شده</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-wrap items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50 sm:flex-nowrap sm:gap-4"
                >
                  <Avatar className="shrink-0">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.customer}`}
                    />
                    <AvatarFallback>{order.customer[0]}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{order.customer}</p>
                      <span className="text-xs text-muted-foreground">
                        {toPersianDigits(order.id)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{order.time}</span>
                      <span>•</span>
                      <span>{order.items}</span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-border pt-2 text-left sm:w-auto sm:shrink-0 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                    <p className="font-bold">{formatCurrency(order.amount)}</p>
                    <Badge
                      variant={
                        order.status === "completed"
                          ? "default"
                          : order.status === "preparing"
                            ? "secondary"
                            : "outline"
                      }
                      className="mt-1"
                    >
                      {order.status === "completed" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 ml-1" />
                          تحویل شده
                        </>
                      ) : order.status === "preparing" ? (
                        <>
                          <Clock className="w-3 h-3 ml-1" />
                          در حال آماده‌سازی
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3 ml-1" />
                          در انتظار
                        </>
                      )}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>پرفروش‌ترین محصولات</CardTitle>
            <CardDescription>محبوب‌ترین آیتم‌های منو</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          #{toPersianDigits(index + 1)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatNumber(product.sales)} فروش
                        </p>
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="font-bold">
                        {formatCurrency(product.revenue)}
                      </p>
                      <p className="text-sm text-green-600">{product.trend}</p>
                    </div>
                  </div>
                  <Progress
                    value={(product.sales / 156) * 100}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

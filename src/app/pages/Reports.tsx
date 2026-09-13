import { Download, TrendingUp, DollarSign, ShoppingBag, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { formatCurrency, toPersianDigits } from "../lib/utils";

const monthlySales = [
  { month: "فروردین", revenue: 45000000, orders: 1200, profit: 12000000 },
  { month: "اردیبهشت", revenue: 52000000, orders: 1350, profit: 14500000 },
  { month: "خرداد", revenue: 48000000, orders: 1280, profit: 13200000 },
  { month: "تیر", revenue: 61000000, orders: 1520, profit: 16800000 },
  { month: "مرداد", revenue: 58000000, orders: 1450, profit: 15900000 },
  { month: "شهریور", revenue: 55000000, orders: 1380, profit: 15100000 },
];

const hourlyData = [
  { hour: "۸", orders: 12 },
  { hour: "۹", orders: 25 },
  { hour: "۱۰", orders: 45 },
  { hour: "۱۱", orders: 62 },
  { hour: "۱۲", orders: 78 },
  { hour: "۱۳", orders: 85 },
  { hour: "۱۴", orders: 72 },
  { hour: "۱۵", orders: 68 },
  { hour: "۱۶", orders: 55 },
  { hour: "۱۷", orders: 48 },
  { hour: "۱۸", orders: 42 },
  { hour: "۱۹", orders: 35 },
];

const categoryRevenue = [
  { name: "قهوه", value: 45, amount: 27000000, color: "#C67C4E" },
  { name: "دسر", value: 25, amount: 15000000, color: "#F4B860" },
  { name: "نوشیدنی", value: 20, amount: 12000000, color: "#8B5A3C" },
  { name: "غذا", value: 10, amount: 6000000, color: "#D4A373" },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">گزارش‌ها و تحلیل</h1>
          <p className="text-muted-foreground">آمار تفصیلی فروش و عملکرد کافه</p>
        </div>
        <Button className="w-full gap-2 sm:w-auto">
          <Download className="w-4 h-4" />
          خروجی Excel
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">فروش ماه جاری</CardTitle>
            <DollarSign className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(55000000)}</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">+۸٪</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">سود خالص</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(15100000)}</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <span className="text-muted-foreground">حاشیه سود: ۲۷٪</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">تعداد سفارش</CardTitle>
            <ShoppingBag className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">۱,۳۸۰</div>
            <div className="flex items-center gap-1 text-sm mt-2">
              <TrendingUp className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-medium">+۵٪</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">میانگین فروش روزانه</CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(1833000)}</div>
            <div className="text-sm text-muted-foreground mt-2">
              بر اساس ۳۰ روز گذشته
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="max-w-full overflow-x-auto">
          <TabsTrigger value="revenue">درآمد ماهانه</TabsTrigger>
          <TabsTrigger value="hourly">ساعات شلوغی</TabsTrigger>
          <TabsTrigger value="category">توزیع فروش</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>گزارش درآمد ۶ ماه گذشته</CardTitle>
              <CardDescription>مقایسه درآمد، سفارش و سود</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] min-w-0 sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlySales}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `${toPersianDigits((value / 1000000).toFixed(0))}M`} />
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#C67C4E" strokeWidth={3} name="درآمد" />
                  <Line type="monotone" dataKey="profit" stroke="#F4B860" strokeWidth={3} name="سود" />
                </LineChart>
              </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hourly" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>توزیع سفارشات در طول روز</CardTitle>
              <CardDescription>ساعات پرکار و کم‌کار کافه</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] min-w-0 sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="hour" />
                  <YAxis tickFormatter={(value) => toPersianDigits(value)} />
                  <Tooltip
                    formatter={(value: number) => toPersianDigits(value)}
                    contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px' }}
                  />
                  <Bar dataKey="orders" fill="#C67C4E" radius={[8, 8, 0, 0]} name="تعداد سفارش" />
                </BarChart>
              </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="category" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>توزیع درآمد بر اساس دسته‌بندی</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[260px] min-w-0 sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryRevenue}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${toPersianDigits((percent * 100).toFixed(0))}٪`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryRevenue.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => [toPersianDigits(value), "سهم"]} />
                  </PieChart>
                </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>جزئیات فروش</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryRevenue.map((cat) => (
                    <div key={cat.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded" style={{ backgroundColor: cat.color }}></div>
                          <span className="font-medium">{cat.name}</span>
                        </div>
                        <div className="text-left">
                          <p className="font-bold">{formatCurrency(cat.amount)}</p>
                          <p className="text-sm text-muted-foreground">{toPersianDigits(cat.value)}٪</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

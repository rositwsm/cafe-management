import { Users, Star, Gift, TrendingUp, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { formatCurrency, formatNumber } from "../lib/utils";

const customers = [
  {
    id: 1,
    name: "علی محمدی",
    email: "ali@email.com",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    visits: 45,
    totalSpent: 2250000,
    points: 450,
    tier: "gold",
    lastVisit: "۲ روز پیش",
  },
  {
    id: 2,
    name: "سارا احمدی",
    email: "sara@email.com",
    phone: "۰۹۹۸۷۶۵۴۳۲۱",
    visits: 32,
    totalSpent: 1680000,
    points: 320,
    tier: "silver",
    lastVisit: "۱ هفته پیش",
  },
  {
    id: 3,
    name: "رضا کریمی",
    email: "reza@email.com",
    phone: "۰۹۱۱۲۲۳۳۴۴",
    visits: 78,
    totalSpent: 4250000,
    points: 850,
    tier: "platinum",
    lastVisit: "امروز",
  },
  {
    id: 4,
    name: "مریم رضایی",
    email: "maryam@email.com",
    phone: "۰۹۳۳۴۴۵۵۶۶",
    visits: 12,
    totalSpent: 580000,
    points: 120,
    tier: "bronze",
    lastVisit: "۳ روز پیش",
  },
];

const tierConfig = {
  bronze: { label: "برنزی", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
  silver: { label: "نقره‌ای", color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300" },
  gold: { label: "طلایی", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
  platinum: { label: "پلاتینی", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
};

export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">مدیریت مشتریان</h1>
          <p className="text-muted-foreground">برنامه وفاداری و CRM مشتریان</p>
        </div>
        <Button className="w-full sm:w-auto">مشتری جدید +</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">کل مشتریان</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(customers.length)}</div>
            <p className="text-xs text-muted-foreground mt-1">+۱۲ این ماه</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">مشتریان فعال</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">۸۵٪</div>
            <p className="text-xs text-muted-foreground mt-1">بالاتر از میانگین</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">میانگین خرید</CardTitle>
            <Star className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(1692500)}</div>
            <p className="text-xs text-muted-foreground mt-1">به ازای هر مشتری</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">امتیازات فعال</CardTitle>
            <Gift className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(1740)}</div>
            <p className="text-xs text-muted-foreground mt-1">قابل استفاده</p>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <CardTitle>لیست مشتریان</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => {
              const tierInfo = tierConfig[customer.tier as keyof typeof tierConfig];

              return (
                <Card key={customer.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-start gap-4 sm:flex-row">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${customer.name}`} />
                        <AvatarFallback>{customer.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-lg">{customer.name}</h3>
                              <Badge className={tierInfo.color}>
                                {tierInfo.label}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                <span className="break-all">{customer.email}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {customer.phone}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            مشاهده پروفایل
                          </Button>
                        </div>

                        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">تعداد بازدید</p>
                            <p className="text-lg font-bold">{formatNumber(customer.visits)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">کل خرید</p>
                            <p className="text-lg font-bold text-primary">
                              {formatCurrency(customer.totalSpent)}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">امتیاز</p>
                            <div className="flex items-center gap-2">
                              <Gift className="w-4 h-4 text-accent" />
                              <p className="text-lg font-bold text-accent">{customer.points}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">آخرین بازدید</p>
                            <p className="text-sm font-medium">{customer.lastVisit}</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="text-muted-foreground">پیشرفت تا سطح بعدی</span>
                            <span className="font-medium">{customer.points}/500</span>
                          </div>
                          <Progress value={Math.min((customer.points / 500) * 100, 100)} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

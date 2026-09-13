import { UserCog, Clock, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { toPersianDigits } from "../lib/utils";

const staff = [
  {
    id: 1,
    name: "محمد رضایی",
    role: "مدیر",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammad",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    shift: "صبح",
    status: "active",
    performance: 95,
  },
  {
    id: 2,
    name: "زهرا احمدی",
    role: "باریستا",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zahra",
    phone: "۰۹۹۸۷۶۵۴۳۲۱",
    shift: "عصر",
    status: "active",
    performance: 88,
  },
  {
    id: 3,
    name: "علی محمودی",
    role: "گارسون",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AliM",
    phone: "۰۹۱۱۲۲۳۳۴۴",
    shift: "صبح",
    status: "break",
    performance: 92,
  },
  {
    id: 4,
    name: "فاطمه کریمی",
    role: "باریستا",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatemeh",
    phone: "۰۹۳۳۴۴۵۵۶۶",
    shift: "شب",
    status: "off",
    performance: 85,
  },
];

const statusConfig = {
  active: { label: "در حال کار", variant: "default" as const },
  break: { label: "استراحت", variant: "secondary" as const },
  off: { label: "آفلاین", variant: "outline" as const },
};

export default function Staff() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">مدیریت کارکنان</h1>
          <p className="text-muted-foreground">مدیریت شیفت‌ها، نقش‌ها و عملکرد کارکنان</p>
        </div>
        <Button className="w-full sm:w-auto">کارمند جدید +</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">کل کارکنان</CardTitle>
            <UserCog className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{toPersianDigits(staff.length)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">فعال الان</CardTitle>
            <Clock className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {toPersianDigits(staff.filter(s => s.status === "active").length)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">میانگین عملکرد</CardTitle>
            <Award className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{toPersianDigits(90)}٪</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">شیفت امروز</CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{toPersianDigits(3)}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {staff.map((member) => {
          const config = statusConfig[member.status as keyof typeof statusConfig];

          return (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      <Badge variant={config.variant}>{config.label}</Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">شیفت:</span>
                        <span className="font-medium">{member.shift}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">تلفن:</span>
                        <span className="font-medium">{member.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">عملکرد:</span>
                        <span className="font-bold text-primary">{toPersianDigits(member.performance)}٪</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        جزئیات
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        ویرایش
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

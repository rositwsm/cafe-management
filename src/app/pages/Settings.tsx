import { Store, Bell, CreditCard, Users, Shield, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">تنظیمات</h1>
        <p className="text-muted-foreground">مدیریت تنظیمات کافه و پروفایل کاربری</p>
      </div>

      {/* Business Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-primary" />
            <CardTitle>اطلاعات کسب‌وکار</CardTitle>
          </div>
          <CardDescription>مشخصات کافه و رستوران خود را مدیریت کنید</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="businessName">نام کافه</Label>
              <Input id="businessName" defaultValue="کافه من" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">شماره تماس</Label>
              <Input id="phone" defaultValue="۰۲۱-۱۲۳۴۵۶۷۸" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">آدرس</Label>
            <Input id="address" defaultValue="تهران، خیابان ولیعصر، پلاک ۱۲۳" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">توضیحات</Label>
            <Input id="description" defaultValue="بهترین کافه محله با قهوه تخصصی" />
          </div>
          <Button>ذخیره تغییرات</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            <CardTitle>اعلان‌ها</CardTitle>
          </div>
          <CardDescription>تنظیم نحوه دریافت اعلان‌ها</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">سفارش جدید</p>
              <p className="text-sm text-muted-foreground">اعلان برای سفارشات جدید</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">کمبود موجودی</p>
              <p className="text-sm text-muted-foreground">هشدار هنگام کم شدن موجودی انبار</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">گزارش روزانه</p>
              <p className="text-sm text-muted-foreground">دریافت خلاصه فروش روزانه</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">اعلان ایمیل</p>
              <p className="text-sm text-muted-foreground">ارسال اعلان‌ها به ایمیل</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            <CardTitle>روش‌های پرداخت</CardTitle>
          </div>
          <CardDescription>تنظیم درگاه‌های پرداخت</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">پرداخت نقدی</p>
              <p className="text-sm text-muted-foreground">پذیرش پول نقد</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">کارت خوان</p>
              <p className="text-sm text-muted-foreground">پرداخت با کارت بانکی</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">پرداخت آنلاین</p>
              <p className="text-sm text-muted-foreground">درگاه پرداخت اینترنتی</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Staff Permissions */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <CardTitle>دسترسی کارکنان</CardTitle>
          </div>
          <CardDescription>مدیریت سطوح دسترسی</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">مدیر</p>
              <p className="text-sm text-muted-foreground">دسترسی کامل به همه بخش‌ها</p>
            </div>
            <Badge className="bg-primary">فعال</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">باریستا</p>
              <p className="text-sm text-muted-foreground">دسترسی به منو و سفارشات</p>
            </div>
            <Badge className="bg-primary">فعال</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">گارسون</p>
              <p className="text-sm text-muted-foreground">دسترسی به سفارشات و میزها</p>
            </div>
            <Badge className="bg-primary">فعال</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <CardTitle>امنیت</CardTitle>
          </div>
          <CardDescription>تنظیمات امنیتی حساب کاربری</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">رمز عبور جدید</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          <Button>تغییر رمز عبور</Button>
        </CardContent>
      </Card>

      {/* Language & Region */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <CardTitle>زبان و منطقه</CardTitle>
          </div>
          <CardDescription>تنظیمات زبان و واحد پول</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">زبان</Label>
              <Input id="language" defaultValue="فارسی" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">واحد پول</Label>
              <Input id="currency" defaultValue="تومان" disabled />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}

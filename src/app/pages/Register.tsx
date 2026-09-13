import { Coffee, Mail, Lock, User, Building, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";

export default function Register() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6" dir="rtl">
      <div className="w-full max-w-6xl space-y-6">
        <div className="flex justify-end">
          <Link to="/" className="text-sm text-primary hover:underline">
            بازگشت به صفحه اول
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Right Side - Form */}
          <Card className="border-2">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Coffee className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl">ایجاد حساب کاربری</CardTitle>
                <CardDescription>شروع رایگان ۳۰ روزه بدون نیاز به کارت اعتباری</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">نام</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="نام"
                      className="pr-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">نام خانوادگی</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="نام خانوادگی"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">نام کافه/رستوران</Label>
                <div className="relative">
                  <Building className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="نام کسب‌وکار"
                    className="pr-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="pr-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">رمز عبور</Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="حداقل ۸ کاراکتر"
                    className="pr-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                با ثبت‌نام،{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  شرایط و قوانین
                </Link>{" "}
                و{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  حریم خصوصی
                </Link>{" "}
                را می‌پذیرم
              </label>
            </div>

            <Link to="/dashboard" className="block">
              <Button className="w-full gap-2">
                ایجاد حساب کاربری
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>

            <div className="text-center text-sm pt-2">
              <span className="text-muted-foreground">قبلاً ثبت‌نام کرده‌اید؟ </span>
              <Link to="/login" className="text-primary hover:underline font-medium">
                وارد شوید
              </Link>
            </div>
          </CardContent>
        </Card>

          {/* Left Side - Benefits */}
          <div className="hidden lg:block space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-4">چرا کافه من؟</h3>
            <p className="text-muted-foreground text-lg">
              بهترین ابزار برای مدیریت کافه و رستوران شما
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "✓",
                title: "راه‌اندازی در ۵ دقیقه",
                description: "بدون نیاز به دانش فنی، فوراً شروع کنید",
              },
              {
                icon: "✓",
                title: "پشتیبانی ۲۴/۷",
                description: "تیم پشتیبانی ما همیشه در کنار شماست",
              },
              {
                icon: "✓",
                title: "به‌روزرسانی رایگان",
                description: "دسترسی به جدیدترین امکانات بدون هزینه اضافی",
              },
              {
                icon: "✓",
                title: "امنیت بالا",
                description: "اطلاعات شما با بالاترین استانداردها محافظت می‌شود",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl font-bold">{benefit.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572982270699-473dfa34d7e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="کافه"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

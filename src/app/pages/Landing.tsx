import { Coffee, TrendingUp, Users, BarChart3, Clock, Star, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "گزارش‌های پیشرفته",
    description: "تحلیل دقیق فروش، سود و رفتار مشتریان با نمودارهای تعاملی",
  },
  {
    icon: Clock,
    title: "مدیریت سفارش",
    description: "ثبت و پیگیری سفارشات به صورت آنلاین و real-time",
  },
  {
    icon: Users,
    title: "CRM هوشمند",
    description: "مدیریت مشتریان با سیستم امتیازدهی و برنامه وفاداری",
  },
  {
    icon: TrendingUp,
    title: "افزایش فروش",
    description: "ابزارهای هوشمند برای بهبود تجربه مشتری و افزایش درآمد",
  },
];

const stats = [
  { label: "کافه فعال", value: "۲,۵۰۰+" },
  { label: "سفارش روزانه", value: "۵۰,۰۰۰+" },
  { label: "رضایت مشتری", value: "۹۸٪" },
  { label: "صرفه‌جویی زمان", value: "۶۰٪" },
];

const testimonials = [
  {
    name: "علی محمدی",
    role: "مدیر کافه نسیم",
    content: "این سیستم کاملاً کسب‌وکار ما را متحول کرد. حالا می‌توانیم همه چیز را در یک نگاه ببینیم.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
  },
  {
    name: "سارا احمدی",
    role: "صاحب کافه رویا",
    content: "رابط کاربری فوق‌العاده است. کارکنان ما خیلی سریع با آن آشنا شدند.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  {
    name: "رضا کریمی",
    role: "مدیر رستوران سنتی",
    content: "گزارش‌ها به ما کمک کرد تا نقاط ضعف را شناسایی کنیم و فروش ۴۰٪ افزایش یافت.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">کافه من</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">ورود</Button>
            </Link>
            <Link to="/customer">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">ورود مشتری</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">شروع رایگان</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                سیستم مدیریت هوشمند کافه و رستوران
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
                کسب‌وکارت را با
                <span className="text-primary"> هوشمندی </span>
                مدیریت کن
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                سیستم جامع مدیریت کافه و رستوران با رابط کاربری مدرن، گزارش‌های پیشرفته و ابزارهای هوشمند برای افزایش فروش
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link to="/register">
                  <Button size="lg" className="gap-2">
                    شروع رایگان ۳۰ روزه
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  مشاهده دموی آنلاین
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="کافه مدرن"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <Card className="absolute bottom-6 right-6 w-64 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">فروش امروز</p>
                      <p className="text-2xl font-bold">۱۲,۵۰۰,۰۰۰ تومان</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">امکانات پیشرفته</h2>
            <p className="text-xl text-muted-foreground">
              تمام ابزارهای لازم برای مدیریت حرفه‌ای کافه و رستوران
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">نظر مشتریان</h2>
            <p className="text-xl text-muted-foreground">
              کافه‌ها و رستوران‌های سراسر کشور به ما اعتماد کرده‌اند
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">آماده شروع هستید؟</h2>
              <p className="text-xl mb-8 opacity-90">
                همین حالا ثبت‌نام کنید و ۳۰ روز رایگان از تمام امکانات استفاده کنید
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" variant="secondary" className="gap-2">
                    شروع رایگان
                    <CheckCircle className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© ۲۰۲۶ کافه من. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  );
}

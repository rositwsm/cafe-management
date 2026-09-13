import { useMemo, useState, type ChangeEvent } from "react";
import { Coffee, Search, Plus, Minus, Trash2, ArrowLeft, Timer, CheckCircle2, CreditCard, Banknote, Smartphone } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import { formatCurrency, fromPersianDigits, toPersianDigits } from "../lib/utils";

const categories = [
  { id: "all", label: "همه" },
  { id: "coffee", label: "قهوه" },
  { id: "dessert", label: "دسر" },
  { id: "bakery", label: "نانوایی" },
  { id: "drink", label: "نوشیدنی سرد" },
 ] as const;

type CategoryId = (typeof categories)[number]["id"];

type Product = {
  id: number;
  name: string;
  price: number;
  category: CategoryId;
  prep: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "اسپرسو دبل",
    price: 50000,
    category: "coffee",
    prep: 4,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "کاپوچینو",
    price: 55000,
    category: "coffee",
    prep: 6,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "لاته",
    price: 60000,
    category: "coffee",
    prep: 7,
    image: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "موکا",
    price: 65000,
    category: "coffee",
    prep: 7,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "آمریکانو",
    price: 45000,
    category: "coffee",
    prep: 5,
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "کیک شکلاتی",
    price: 80000,
    category: "dessert",
    prep: 8,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "تیرامیسو",
    price: 95000,
    category: "dessert",
    prep: 8,
    image: "https://images.unsplash.com/photo-1469533667357-006056eaf780?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "چیزکیک",
    price: 90000,
    category: "dessert",
    prep: 8,
    image: "https://images.unsplash.com/photo-1505253213348-ceb53a2bb0ea?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "کروسان",
    price: 45000,
    category: "bakery",
    prep: 6,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "بیسکوئیت",
    price: 35000,
    category: "bakery",
    prep: 4,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "آیس لاته",
    price: 70000,
    category: "drink",
    prep: 5,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "لیموناد",
    price: 55000,
    category: "drink",
    prep: 4,
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80",
  },
];

type CartItem = { id: number; name: string; price: number; quantity: number; prep: number };

const statusConfig = {
  preparing: {
    label: "در حال آماده‌سازی",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  ready: {
    label: "آماده دریافت",
    className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  },
  done: {
    label: "تحویل شده",
    className: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
} as const;

type OrderStatus = keyof typeof statusConfig;

type OrderItem = {
  name: string;
  qty: number;
  price: number;
};

type RecentOrder = {
  id: number;
  code: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
};

const recentOrders: RecentOrder[] = [
  {
    id: 101,
    code: "A-۲۱۹",
    date: "امروز، ۱۴:۳۰",
    status: "preparing",
    items: [
      { name: "لاته", qty: 1, price: 60000 },
      { name: "کروسان", qty: 2, price: 45000 },
    ],
  },
  {
    id: 102,
    code: "A-۲۱۴",
    date: "دیروز، ۱۹:۱۰",
    status: "ready",
    items: [
      { name: "کاپوچینو", qty: 1, price: 55000 },
      { name: "تیرامیسو", qty: 1, price: 95000 },
    ],
  },
  {
    id: 103,
    code: "A-۱۹۹",
    date: "۳ روز پیش",
    status: "done",
    items: [
      { name: "آیس لاته", qty: 2, price: 70000 },
    ],
  },
];

export default function CustomerOrder() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [search, setSearch] = useState("");
  const [note, setNote] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "online">("online");
  const [reservationName, setReservationName] = useState("");
  const [reservationGuests, setReservationGuests] = useState(2);
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [reservationNote, setReservationNote] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(recentOrders[0]?.id ?? null);

  const filteredProducts = useMemo(() => {
    const byCategory = activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

    if (!search.trim()) {
      return byCategory;
    }

    return byCategory.filter((product) => product.name.includes(search.trim()));
  }, [activeCategory, search]);

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item: CartItem) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      return;
    }

    setCart([
      ...cart,
      { id: product.id, name: product.name, price: product.price, prep: product.prep, quantity: 1 },
    ]);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(
      cart
        .map((item: CartItem) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item: CartItem) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item: CartItem) => item.id !== id));
  };

  const subtotal = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.09);
  const total = subtotal + tax;
  const estimateMinutes = cart.reduce((max: number, item: CartItem) => Math.max(max, item.prep), 0);
  const selectedOrder = recentOrders.find((order) => order.id === selectedOrderId) ?? recentOrders[0];
  const isCartEmpty = cart.length === 0;

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert("سبد سفارش خالی است.");
      return;
    }

    const methodLabel = paymentMethod === "cash"
      ? "نقدی"
      : paymentMethod === "card"
        ? "کارت"
        : "آنلاین";

    alert(`سفارش شما ثبت شد. مبلغ قابل پرداخت: ${formatCurrency(total)} (روش پرداخت: ${methodLabel})`);
    setCart([]);
    setNote("");
  };

  const handleReservation = () => {
    if (!reservationDate || !reservationTime) {
      alert("لطفا تاریخ و ساعت رزرو را وارد کنید.");
      return;
    }

    alert("درخواست رزرو شما ثبت شد و به زودی تایید می‌شود.");
    setReservationName("");
    setReservationGuests(2);
    setReservationDate("");
    setReservationTime("");
    setReservationNote("");
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" dir="rtl">
      <header className="border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-lg font-bold">کافه من</p>
              <p className="text-xs text-muted-foreground">پنل مشتری</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">کاربر ثابت</Badge>
            <Link to="/login">
              <Button variant="outline" className="gap-2">
                ورود مدیر
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">سفارش آنلاین مشتری</h1>
                <p className="text-muted-foreground">سفارش خود را انتخاب کنید و درخواست را ثبت کنید.</p>
              </div>
              <Card className="border-dashed">
                <CardContent className="px-4 py-3 flex items-center gap-3">
                  <Timer className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">میانگین آماده‌سازی</p>
                    <p className="text-xs text-muted-foreground">۵ تا ۱۰ دقیقه</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={search}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
                    placeholder="جستجو در منو..."
                    className="pr-9"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts.map((product: Product) => (
                <Card key={product.id} className="group hover:border-primary transition-colors">
                  <CardContent className="p-4 space-y-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-lg font-bold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">آماده‌سازی {toPersianDigits(product.prep)} دقیقه</p>
                      </div>
                      <Badge variant="outline">{categories.find((c) => c.id === product.category)?.label}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-primary font-bold text-lg">{formatCurrency(product.price)}</p>
                      <Button size="sm" className="gap-2" onClick={() => addToCart(product)}>
                        افزودن
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {filteredProducts.length === 0 && (
                <Card className="sm:col-span-2 xl:col-span-3">
                  <CardContent className="p-6 text-center text-muted-foreground">
                    موردی مطابق جستجو پیدا نشد.
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span>سبد سفارش</span>
                    <Badge variant="secondary">{toPersianDigits(cart.length)} آیتم</Badge>
                  </CardTitle>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    disabled={isCartEmpty}
                    onClick={handleClearCart}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    خالی کردن
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-3 max-h-[280px] overflow-y-auto">
                  {isCartEmpty && (
                    <div className="text-center text-muted-foreground py-10">
                      هنوز سفارشی اضافه نشده است.
                      <p className="text-xs mt-2">از منوی سمت چپ آیتم‌ها را انتخاب کنید.</p>
                    </div>
                  )}
                  {cart.map((item: CartItem) => (
                    <div key={item.id} className="flex items-center justify-between bg-muted/60 rounded-lg p-3">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{formatCurrency(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-6 text-center font-bold">{toPersianDigits(item.quantity)}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {!isCartEmpty && (
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">جمع سفارش</span>
                      <span className="font-bold">{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">مالیات (۹٪)</span>
                      <span className="font-medium">{formatCurrency(tax)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">مبلغ نهایی</span>
                      <span className="font-bold text-primary">{formatCurrency(total)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">زمان آماده‌سازی</span>
                      <span className="font-medium">حدود {toPersianDigits(estimateMinutes || 0)} دقیقه</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">صندوق پرداخت</p>
                  <p className="text-xs text-muted-foreground">روش پرداخت را انتخاب کنید.</p>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={paymentMethod === "cash" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPaymentMethod("cash")}
                      className="gap-2"
                    >
                      <Banknote className="w-4 h-4" />
                      نقدی
                    </Button>
                    <Button
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPaymentMethod("card")}
                      className="gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      کارت
                    </Button>
                    <Button
                      variant={paymentMethod === "online" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPaymentMethod("online")}
                      className="gap-2"
                    >
                      <Smartphone className="w-4 h-4" />
                      آنلاین
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">توضیحات سفارش</p>
                  <Textarea
                    value={note}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setNote(event.target.value)}
                    placeholder="مثلا بدون شکر یا با شیر کم‌چرب..."
                  />
                </div>
                <Button className="w-full gap-2" size="lg" onClick={handleSubmit} disabled={isCartEmpty}>
                  ثبت درخواست
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>رزرو میز</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">نام رزرو کننده</p>
                  <Input
                    value={reservationName}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setReservationName(event.target.value)}
                    placeholder="نام و نام خانوادگی"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">تاریخ</p>
                    <Input
                      type="date"
                      value={reservationDate}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setReservationDate(event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">ساعت</p>
                    <Input
                      type="time"
                      value={reservationTime}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setReservationTime(event.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">تعداد نفرات</p>
                    <Input
                      type="text"
                      inputMode="numeric"
                      min={1}
                      max={12}
                      value={toPersianDigits(reservationGuests)}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setReservationGuests(Number(fromPersianDigits(event.target.value).replace(/[^\d]/g, "")) || 0)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">ترجیح میز</p>
                    <Input
                      value={reservationNote}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => setReservationNote(event.target.value)}
                      placeholder="مثلا کنار پنجره"
                    />
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={handleReservation}>
                  ثبت درخواست رزرو
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <CardTitle>سفارش‌های اخیر</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-3">
                  {recentOrders.map((order) => {
                    const status = statusConfig[order.status];
                    const orderTotal = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);
                    return (
                      <button
                        key={order.id}
                        type="button"
                        onClick={() => setSelectedOrderId(order.id)}
                        className={`w-full text-right rounded-xl border p-3 transition-colors ${
                          selectedOrderId === order.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/60"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-medium">سفارش {order.code}</p>
                            <p className="text-xs text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-left">
                            <Badge className={status.className}>{status.label}</Badge>
                            <p className="text-sm font-bold mt-2">{formatCurrency(orderTotal)}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {selectedOrder && (
                  <Card className="border-dashed">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold">فاکتور {selectedOrder.code}</p>
                          <p className="text-xs text-muted-foreground">{selectedOrder.date}</p>
                        </div>
                        <Badge className={statusConfig[selectedOrder.status].className}>
                          {statusConfig[selectedOrder.status].label}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        {selectedOrder.items.map((item, index) => (
                          <div key={`${selectedOrder.id}-${index}`} className="flex items-center justify-between">
                            <span>{item.name} × {toPersianDigits(item.qty)}</span>
                            <span className="font-medium">{formatCurrency(item.qty * item.price)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-3 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">مبلغ پرداختی</span>
                        <span className="font-bold">
                          {formatCurrency(
                            selectedOrder.items.reduce((sum, item) => sum + item.qty * item.price, 0)
                          )}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

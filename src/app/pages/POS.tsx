import { useState } from "react";
import { Plus, Minus, Trash2, CreditCard, Banknote, Percent, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { formatCurrency, fromPersianDigits, toPersianDigits } from "../lib/utils";

const products = [
  { id: 1, name: "اسپرسو دبل", price: 50000, category: "coffee" },
  { id: 2, name: "کاپوچینو", price: 55000, category: "coffee" },
  { id: 3, name: "لاته", price: 60000, category: "coffee" },
  { id: 4, name: "موکا", price: 65000, category: "coffee" },
  { id: 5, name: "آمریکانو", price: 45000, category: "coffee" },
  { id: 6, name: "کیک شکلاتی", price: 80000, category: "dessert" },
  { id: 7, name: "تیرامیسو", price: 95000, category: "dessert" },
  { id: 8, name: "چیزکیک", price: 90000, category: "dessert" },
  { id: 9, name: "کروسان", price: 45000, category: "bakery" },
  { id: 10, name: "بیسکوئیت", price: 35000, category: "bakery" },
];

export default function POS() {
  const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number }>>([]);
  const [discount, setDiscount] = useState(0);

  const addToCart = (product: typeof products[0]) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (discount / 100);
  const tax = (subtotal - discountAmount) * 0.09; // 9% مالیات
  const total = subtotal - discountAmount + tax;

  const handleCheckout = (method: string) => {
    alert(`پرداخت ${formatCurrency(total)} با ${method}`);
    setCart([]);
    setDiscount(0);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Products Section */}
        <div className="lg:col-span-2 space-y-4 overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold mb-2">صندوق (POS)</h1>
            <p className="text-muted-foreground">انتخاب محصولات و ثبت سفارش</p>
          </div>

          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="all">همه</TabsTrigger>
              <TabsTrigger value="coffee">قهوه</TabsTrigger>
              <TabsTrigger value="dessert">دسر</TabsTrigger>
              <TabsTrigger value="bakery">نانوایی</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {products.map(product => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95"
                    onClick={() => addToCart(product)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {product.name[0]}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                      <p className="text-primary font-bold">
                        {formatCurrency(product.price)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coffee" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {products.filter(p => p.category === "coffee").map(product => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95"
                    onClick={() => addToCart(product)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {product.name[0]}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                      <p className="text-primary font-bold">
                        {formatCurrency(product.price)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dessert" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {products.filter(p => p.category === "dessert").map(product => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95"
                    onClick={() => addToCart(product)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {product.name[0]}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                      <p className="text-primary font-bold">
                        {formatCurrency(product.price)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bakery" className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {products.filter(p => p.category === "bakery").map(product => (
                  <Card
                    key={product.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95"
                    onClick={() => addToCart(product)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {product.name[0]}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                      <p className="text-primary font-bold">
                        {formatCurrency(product.price)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Cart Section */}
        <div className="space-y-4">
          <Card className="h-full flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center justify-between">
                <span>سبد خرید</span>
                <Badge variant="secondary">{toPersianDigits(cart.length)} آیتم</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-4 overflow-hidden">
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-2 mb-4">
                {cart.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    سبد خرید خالی است
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatCurrency(item.price)}
                        </p>
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
                        <span className="w-8 text-center font-bold">{toPersianDigits(item.quantity)}</span>
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
                          className="h-7 w-7"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Discount */}
              {cart.length > 0 && (
                <div className="space-y-4 border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="تخفیف (٪)"
                      value={discount === 0 ? "" : toPersianDigits(discount)}
                      onChange={(e) => setDiscount(Number(fromPersianDigits(e.target.value).replace(/[^\d]/g, "")) || 0)}
                      className="flex-1"
                    />
                  </div>

                  {/* Summary */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">جمع کل:</span>
                      <span className="font-medium">{formatCurrency(subtotal)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>تخفیف ({toPersianDigits(discount)}٪):</span>
                        <span>-{formatCurrency(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">مالیات (۹٪):</span>
                      <span className="font-medium">{formatCurrency(tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>مبلغ نهایی:</span>
                      <span className="text-primary">{formatCurrency(total)}</span>
                    </div>
                  </div>

                  {/* Payment Buttons */}
                  <div className="space-y-2">
                    <Button
                      className="w-full gap-2"
                      size="lg"
                      onClick={() => handleCheckout("نقدی")}
                    >
                      <Banknote className="w-5 h-5" />
                      پرداخت نقدی
                    </Button>
                    <Button
                      className="w-full gap-2"
                      variant="outline"
                      size="lg"
                      onClick={() => handleCheckout("کارت")}
                    >
                      <CreditCard className="w-5 h-5" />
                      پرداخت با کارت
                    </Button>
                    <Button
                      className="w-full gap-2"
                      variant="outline"
                      size="sm"
                    >
                      <Printer className="w-4 h-4" />
                      چاپ فاکتور
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

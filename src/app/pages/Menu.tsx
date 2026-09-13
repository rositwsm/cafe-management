import { Plus, Search, Edit, Trash2, Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { formatCurrency, toPersianDigits } from "../lib/utils";

const menuItems = [
  {
    id: 1,
    name: "اسپرسو دبل",
    category: "coffee",
    price: 50000,
    description: "اسپرسوی غنی و پر‌طعم با دانه‌های تازه آسیاب شده",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
    available: true,
    popular: true,
  },
  {
    id: 2,
    name: "کاپوچینو",
    category: "coffee",
    price: 55000,
    description: "ترکیبی از اسپرسو، شیر بخار شده و فوم شیر",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400",
    available: true,
    popular: true,
  },
  {
    id: 3,
    name: "لاته",
    category: "coffee",
    price: 60000,
    description: "اسپرسوی ملایم با شیر بخار شده و لایه‌ای نازک از فوم",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400",
    available: true,
    popular: false,
  },
  {
    id: 4,
    name: "موکا",
    category: "coffee",
    price: 65000,
    description: "لاته با شکلات تلخ و خامه",
    image: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=400",
    available: true,
    popular: true,
  },
  {
    id: 5,
    name: "کیک شکلاتی",
    category: "dessert",
    price: 80000,
    description: "کیک شکلاتی خانگی با گاناش شکلات تلخ",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    available: true,
    popular: false,
  },
  {
    id: 6,
    name: "تیرامیسو",
    category: "dessert",
    price: 95000,
    description: "دسر ایتالیایی کلاسیک با طعم قهوه",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
    available: true,
    popular: true,
  },
  {
    id: 7,
    name: "چیزکیک",
    category: "dessert",
    price: 90000,
    description: "چیزکیک خامه‌ای با سس توت‌فرنگی",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400",
    available: false,
    popular: false,
  },
  {
    id: 8,
    name: "کروسان",
    category: "bakery",
    price: 45000,
    description: "کروسان فرانسوی تازه و کره‌ای",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
    available: true,
    popular: false,
  },
];

const categories = [
  { id: "all", label: "همه", count: menuItems.length },
  { id: "coffee", label: "قهوه", count: menuItems.filter(i => i.category === "coffee").length },
  { id: "dessert", label: "دسر", count: menuItems.filter(i => i.category === "dessert").length },
  { id: "bakery", label: "نانوایی", count: menuItems.filter(i => i.category === "bakery").length },
];

export default function Menu() {
  const filterItems = (category: string) => {
    if (category === "all") return menuItems;
    return menuItems.filter(item => item.category === category);
  };

  const MenuItem = ({ item }: { item: typeof menuItems[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {item.popular && (
            <Badge className="bg-accent text-accent-foreground">
              <Star className="w-3 h-3 ml-1 fill-current" />
              پرفروش
            </Badge>
          )}
          {!item.available && (
            <Badge variant="destructive">ناموجود</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-1 min-h-5">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {formatCurrency(item.price)}
          </span>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" className="h-8 w-8">
              <Edit className="w-3 h-3" />
            </Button>
            <Button size="icon" variant="outline" className="h-8 w-8">
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">مدیریت منو</h1>
          <p className="text-muted-foreground">مدیریت آیتم‌های منو، قیمت‌ها و موجودی</p>
        </div>
        <Button className="w-full gap-2 sm:w-auto">
          <Plus className="w-4 h-4" />
          آیتم جدید
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="جستجوی آیتم..." className="pr-10" />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="max-w-full overflow-x-auto">
          {categories.map(cat => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.label} ({toPersianDigits(cat.count)})
              </TabsTrigger>
            ))}
        </TabsList>

        {categories.map(cat => (
          <TabsContent key={cat.id} value={cat.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filterItems(cat.id).map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

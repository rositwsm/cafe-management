import { Coffee, LayoutDashboard, ShoppingBag, Table2, Menu, Users, Package, BarChart3, Settings, CreditCard, UserCog, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "داشبورد", path: "/dashboard" },
  { icon: ShoppingBag, label: "سفارش‌ها", path: "/orders" },
  { icon: Table2, label: "میزها", path: "/tables" },
  { icon: Menu, label: "منو", path: "/menu" },
  { icon: CreditCard, label: "صندوق", path: "/pos" },
  { icon: Users, label: "مشتریان", path: "/customers" },
  { icon: UserCog, label: "کارکنان", path: "/staff" },
  { icon: Package, label: "انبار", path: "/inventory" },
  { icon: BarChart3, label: "گزارش‌ها", path: "/reports" },
  { icon: Settings, label: "تنظیمات", path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <aside className="fixed right-0 top-0 z-40 flex h-screen w-16 flex-col border-l border-border bg-card md:w-64">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
            <Coffee className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-lg font-bold text-foreground">کافه من</span>
            <span className="text-xs text-muted-foreground">مدیریت هوشمند</span>
          </div>
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-2 md:p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center justify-center gap-3 rounded-lg px-2 py-3 transition-all md:justify-start md:px-4",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden font-medium md:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="border-t border-border p-2 md:p-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center gap-3 md:justify-start"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <>
              <Sun className="w-4 h-4" />
              <span className="hidden md:inline">حالت روز</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              <span className="hidden md:inline">حالت شب</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}

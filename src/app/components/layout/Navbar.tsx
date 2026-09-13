import { Bell, Search, User, Home } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-3 sm:px-6">
      {/* Search */}
      <div className="hidden max-w-md flex-1 sm:block">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="جستجو..."
            className="pr-10"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 sm:gap-3">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">صفحه اول</span>
          </Button>
        </Link>
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </Button>

        {/* Profile */}
        <div className="flex items-center gap-3 pr-3 border-r border-border">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium">مدیر سیستم</p>
            <p className="text-xs text-muted-foreground">مدیر کل</p>
          </div>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=manager" />
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

import { useEffect, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { DashboardLayout } from "./components/layout/DashboardLayout";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Tables from "./pages/Tables";
import Menu from "./pages/Menu";
import POS from "./pages/POS";
import Customers from "./pages/Customers";
import Staff from "./pages/Staff";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import CustomerOrder from "./pages/CustomerOrder";

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

function normalizeVisibleDigits(node: Node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const value = node.nodeValue ?? "";
    const normalized = value.replace(/[0-9]/g, (digit) => persianDigits[Number(digit)]);

    if (normalized !== value) {
      node.nodeValue = normalized;
    }
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const element = node as HTMLElement;
  if (["SCRIPT", "STYLE", "INPUT", "TEXTAREA"].includes(element.tagName)) return;

  node.childNodes.forEach(normalizeVisibleDigits);
}

function PersianDigits({ children }: { children: ReactNode }) {
  useEffect(() => {
    normalizeVisibleDigits(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(normalizeVisibleDigits);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}

export default function App() {
  return (
    <PersianDigits>
      <ThemeProvider attribute="class" defaultTheme="light">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/orders" element={<DashboardLayout><Orders /></DashboardLayout>} />
          <Route path="/tables" element={<DashboardLayout><Tables /></DashboardLayout>} />
          <Route path="/menu" element={<DashboardLayout><Menu /></DashboardLayout>} />
          <Route path="/pos" element={<DashboardLayout><POS /></DashboardLayout>} />
          <Route path="/customers" element={<DashboardLayout><Customers /></DashboardLayout>} />
          <Route path="/staff" element={<DashboardLayout><Staff /></DashboardLayout>} />
          <Route path="/inventory" element={<DashboardLayout><Inventory /></DashboardLayout>} />
          <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route path="/customer" element={<CustomerOrder />} />

          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </PersianDigits>
  );
}
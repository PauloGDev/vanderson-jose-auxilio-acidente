import { Header } from "./Header";
import { ContactClosing, Footer } from "./Footer";

export function AppShell({ children }) { return <div className="min-h-screen"><Header /><main>{children}</main><ContactClosing /><Footer /></div>; }

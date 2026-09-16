import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CursorProvider } from "./CustomCursor";
import SiteHeader from "./SiteHeader";
import NavigationOverlay from "./NavigationOverlay";
import SiteFooter from "./SiteFooter";

// Shared page structure: header, full-screen nav, cursor, footer.
export default function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <CursorProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader onOpenMenu={() => setMenuOpen(true)} />
        <NavigationOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </CursorProvider>
  );
}
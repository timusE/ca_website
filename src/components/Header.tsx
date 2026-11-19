"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { navigation, NavItem } from "@/data/navigation";

// ─── ROW 1: Colored top bar (red/accent) with phone, email, social ─────────
function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white text-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.contact.phone[0]}`}
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Phone size={14} />
            <span>{siteConfig.contact.phone[0]}</span>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Mail size={14} />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-xs font-medium mr-2">Connect With Us</span>
          {siteConfig.social.linkedin && (
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-xs font-bold">in</a>
          )}
          {siteConfig.social.facebook && (
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-xs font-bold">f</a>
          )}
          {siteConfig.social.twitter && (
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-xs font-bold">𝕏</a>
          )}
          {siteConfig.social.instagram && (
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors text-xs font-bold">ig</a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── ROW 2: White middle bar with logo, contact no & email ──────────────────
function MiddleBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* LOGO — image file at /public/images/ca-logo.png */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-gray-100 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ca-logo.png"
              alt="CA Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="font-bold text-primary text-xl leading-tight">
              {siteConfig.firmName}
            </div>
            <div className="text-sm text-gray-500 tracking-wider uppercase">
              {siteConfig.firmTagline}
            </div>
          </div>
        </Link>

        {/* Contact Info — visible on desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-gray-400 font-medium">Contact No</div>
              <a
                href={`tel:${siteConfig.contact.phone[0]}`}
                className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
              >
                {siteConfig.contact.phone[0]}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <div className="text-xs text-gray-400 font-medium">Contact Email</div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Helper: Split mega menu items into columns by __HEADING__ markers ──────
function splitIntoColumns(items: NavItem[]): NavItem[][] {
  const columns: NavItem[][] = [];
  let current: NavItem[] = [];
  for (const item of items) {
    if (item.label.startsWith("__HEADING__")) {
      if (current.length > 0) columns.push(current);
      current = [item];
    } else {
      current.push(item);
    }
  }
  if (current.length > 0) columns.push(current);
  // If no headings found (like Licenses), split into 3 columns
  if (columns.length === 0) return [items];
  if (columns.length === 1 && !items[0]?.label.startsWith("__HEADING__")) {
    const perCol = Math.ceil(items.length / 3);
    return [
      items.slice(0, perCol),
      items.slice(perCol, perCol * 2),
      items.slice(perCol * 2),
    ];
  }
  return columns;
}

// ─── Helper: Split flat list into N columns ─────────────────────────────────
function splitFlatIntoColumns(items: NavItem[], cols: number): NavItem[][] {
  const perCol = Math.ceil(items.length / cols);
  const result: NavItem[][] = [];
  for (let i = 0; i < cols; i++) {
    result.push(items.slice(i * perCol, (i + 1) * perCol));
  }
  return result;
}

// ─── Single nav item with state-based hover + close delay ───────────────────
function NavItemDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const renderDropdownContent = () => {
    if (!item.children) return null;
    const hasHeadings = item.children.some((c) => c.label.startsWith("__HEADING__"));

    if (item.megaMenu) {
      const cols = hasHeadings
        ? splitIntoColumns(item.children)
        : splitFlatIntoColumns(item.children, 3);

      return (
        <div
          className="absolute left-0 top-full bg-primary-dark border-t border-white/10 shadow-2xl z-50"
          style={{ width: "min(860px, 95vw)" }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="grid grid-cols-4 gap-0 p-6">
            {cols.map((col, cIdx) => (
              <div key={cIdx} className="space-y-1 pr-4">
                {col.map((child, childIdx) => {
                  if (child.label.startsWith("__HEADING__")) {
                    return (
                      <Link
                        prefetch={false}
                        key={childIdx}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block text-white font-bold text-[13px] mb-2 pb-1 border-b border-white/20 hover:text-secondary transition-colors"
                      >
                        {child.label.replace("__HEADING__", "")}
                      </Link>
                    );
                  }
                  return (
                    <Link
                      prefetch={false}
                      key={childIdx}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block text-blue-200 text-xs py-0.5 hover:text-white transition-colors leading-relaxed"
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div
        className="absolute left-0 top-full w-64 bg-white rounded-b-lg shadow-xl border border-gray-100 z-50"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="py-2">
          {item.children.map((child, childIdx) => (
            <Link
              prefetch={false}
              key={childIdx}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        prefetch={false}
        href={item.href}
        className="flex items-center gap-1 px-3 py-3 text-[13px] font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
      >
        {item.label}
        {item.children && (
          <ChevronDown
            size={12}
            className={`ml-0.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          />
        )}
      </Link>
      {item.children && open && renderDropdownContent()}
    </div>
  );
}

// ─── ROW 3: Dark navy navigation bar with mega menus ────────────────────────
function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <div className="bg-primary-dark hidden xl:block">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {items.map((item, idx) => (
          <NavItemDropdown key={`${item.label}-${idx}`} item={item} />
        ))}
      </nav>
    </div>
  );
}

// ─── Mobile Nav (slide-in drawer) ───────────────────────────────────────────
function MobileNav({
  items,
  isOpen,
  onClose,
}: {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="xl:hidden fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b bg-primary text-white">
          <span className="font-semibold">{siteConfig.firmShortName}</span>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          {items.map((item, idx) => (
            <div key={`${item.label}-${idx}`}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 py-3 text-gray-700 font-medium hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setExpandedMenu(
                        expandedMenu === item.label ? null : item.label
                      )
                    }
                    className="p-2 text-gray-400"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        expandedMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.children && expandedMenu === item.label && (
                <div className="ml-4 border-l-2 border-primary/20 pl-3 pb-2 max-h-60 overflow-y-auto">
                  {item.children.map((child, childIdx) => {
                    if (child.label.startsWith("__HEADING__")) {
                      return (
                        <div
                          key={childIdx}
                          className="text-xs font-bold text-primary mt-2 mb-1 uppercase"
                        >
                          {child.label.replace("__HEADING__", "")}
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={childIdx}
                        href={child.href}
                        onClick={onClose}
                        className="block py-1.5 text-xs text-gray-600 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Row 1: Red/accent top bar */}
      <TopBar />
      {/* Row 2: White middle bar with logo + contact */}
      <MiddleBar />
      {/* Row 3: Dark navy navigation bar */}
      <DesktopNav items={navigation} />

      {/* Mobile hamburger button */}
      <div className="xl:hidden bg-primary-dark px-4 py-2 flex items-center justify-between">
        <span className="text-white text-sm font-medium">{siteConfig.firmShortName}</span>
        <button
          className="p-2 text-white hover:bg-white/10 rounded"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileNav
        items={navigation}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

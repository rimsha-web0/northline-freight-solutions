
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Truck,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

import { site } from "@/config/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Our Team", href: "/#team" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleNavigation(event, href) {
    closeMenu();

    // Scroll to the correct homepage section
    // when already on the homepage.
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.split("#")[1];
      const section = document.getElementById(id);

      if (section) {
        event.preventDefault();

        window.history.pushState(null, "", href);

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-[100] w-full border-b border-[#e9edef] bg-white transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_7px_25px_rgba(0,0,0,0.07)]"
          : ""
      }`}
    >
      <div className="container-main flex h-[78px] items-center justify-between gap-5 lg:h-[88px]">

        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label={`${site.name} home`}
        >
          <div className="flex h-[47px] w-[47px] items-center justify-center bg-[#f5a000] text-[#102e3e]">
            <Truck size={28} strokeWidth={2} />
          </div>

          <div>
            <span className="block text-[20px] font-black leading-none tracking-[-1px] text-[#102e3e] sm:text-[23px]">
              {site.shortName}
            </span>

            <span className="mt-[6px] block text-[8px] font-extrabold uppercase tracking-[2.2px] text-[#7c8b92]">
              Freight & Logistics
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/contact"
                  ? pathname === "/contact"
                  : false;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) =>
                  handleNavigation(event, link.href)
                }
                className={`relative py-3 text-[11px] font-extrabold transition-colors ${
                  active
                    ? "text-[#e18c00]"
                    : "text-[#182e39] hover:text-[#e18c00]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute bottom-[4px] left-0 h-[2px] w-full bg-[#f5a000]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP BUTTON */}

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-[47px] items-center justify-center gap-3 bg-[#f5a000] px-6 text-[11px] font-black text-[#102e3e] transition-all hover:bg-[#e18c00]"
          >
            Get A Quote
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center border border-[#e4e8ea] text-[#102e3e] lg:hidden"
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#e8ecee] bg-white lg:hidden"
          >
            <div className="container-main max-h-[calc(100dvh-90px)] overflow-y-auto py-5">

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(event) =>
                      handleNavigation(event, link.href)
                    }
                    className="flex items-center justify-between border-b border-[#edf0f1] py-4 text-[13px] font-extrabold text-[#102e3e]"
                  >
                    {link.label}

                    <ChevronRight
                      size={17}
                      className="text-[#e18c00]"
                    />
                  </Link>
                ))}
              </nav>

              {/* MOBILE CONTACT BUTTON */}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-6 flex h-[52px] items-center justify-center gap-3 bg-[#f5a000] text-[12px] font-black text-[#102e3e]"
              >
                Get A Quote
                <ArrowUpRight size={18} />
              </Link>

              {/* MOBILE CONTACT DETAILS */}

              <div className="mt-6 space-y-3 text-[11px] text-[#687780]">
                <a
                  href={`tel:${site.phoneRaw || site.phone}`}
                  className="flex items-center gap-3"
                >
                  <Phone
                    size={15}
                    className="text-[#e18c00]"
                  />

                  {site.phone}
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3"
                >
                  <Mail
                    size={15}
                    className="text-[#e18c00]"
                  />

                  {site.email}
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

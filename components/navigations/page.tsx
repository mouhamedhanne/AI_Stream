"use client";

import Link from "next/link";
import { Logo } from "@/components/logo/page";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav className="bg-home_page ">
        <div className="flex justify-between items-center mx-7">
          <div className="flex items-center space-x-8 ">
            <div className="">
              <Logo />
            </div>
            {/* Menu pour les écrans larges */}
            <div className="hidden md:flex items-center  border-l border-white pl-4 space-x-5">
              <Link
                href="/"
                className={`text-white hover:text-home_secondary ${
                  pathname === "/" ? "font-bold text-[#FF4F01] " : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className={`text-white hover:text-home_secondary ${
                  pathname === "/pricing" ? "font-bold text-[#FF4F01] " : ""
                }`}
              >
                Tarifs
              </Link>

              <Link
                href="/contact"
                className={`text-white hover:text-home_secondary ${
                  pathname === "/contact" ? "font-bold text-[#FF4F01] " : ""
                }`}
              >
                Contact
              </Link>
            </div>
            {/* Menu hamburger pour les écrans mobiles */}
          </div>

          <div className="md:hidden ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white "
            >
              {!menuOpen ? <Menu size="24" className="h-6 " /> : <X />}
            </button>
          </div>

          <div className="flex items-center justify-center space-x-3 md:block hidden">
            <Link href="/">
              <Button className="bg-home_secondary hover:bg-home_secondary/90 h-11">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-home_page block py-4 px-8 space-y-4 ">
          <div>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-white hover:text-home_secondary ${
                pathname === "/" ? "font-bold text-[#FF4F01] " : ""
              }`}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className={`text-white hover:text-home_secondary ${
                pathname === "/pricing" ? "font-bold text-[#FF4F01] " : ""
              }`}
            >
              Tarifs
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`text-white hover:text-home_secondary ${
                pathname === "/contact" ? "font-bold text-[#FF4F01] " : ""
              }`}
            >
              Contact
            </Link>
          </div>
          <div>
            <Button className="bg-home_secondary hover:bg-home_secondary/90 h-11">
              Commencer
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

{
  /**
function page() {
  const pathname = usePathname();

  const currentPage = () => {};

  return (
    <header>
      <nav className="bg-home_page ">
        <div className="flex justify-between items-center mx-7">
          <div className="flex items-center space-x-8">
            <div>
              <Logo />
            </div>
            <div className="border-l border-white pl-4 space-x-5 ">
              <Link
                href="/"
                className={`text-white hover:text-home_secondary ${
                  pathname === "/" ? "font-bold text-[#FF4F01] " : ""
                } `}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className={`text-white hover:text-home_secondary  ${
                  pathname === "/pricing" ? "font-bold text-[#FF4F01] " : ""
                } `}
              >
                Tarifs
              </Link>
              <Link
                href="/contact"
                className={`text-white hover:text-home_secondary  ${
                  pathname === "/contact" ? "font-bold text-#FF4F01 " : ""
                } `}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="/">
              <Button className="bg-home_secondary hover:bg-home_secondary/90 h-11">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default page;
 */
}

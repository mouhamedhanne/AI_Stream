"use client";

import Link from "next/link";
import { Logo } from "@/components/logo/page";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <header>
      <nav className="bg-home_page ">
        <div className="flex justify-between items-center mx-7">
          <div className="flex items-center space-x-8">
            <div>
              <Logo />
            </div>
            <div className="border-l border-white pl-4 ">
              <Link
                href="/pricing"
                className="text-white hover:text-home_secondary"
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="/">
              <Button
                className="bg-home_secondary hover:bg-home_secondary gap-2
               hover:opacity-90"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default page;

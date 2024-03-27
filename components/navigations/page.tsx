"use client";

import Link from "next/link";
import { Logo } from "@/components/logo/page";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <header>
      <nav className="bg-home_page w-full z-20 top-0 left-0 ">
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo />
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

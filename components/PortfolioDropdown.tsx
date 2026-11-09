"use client";

import Link from "next/link";
import { ChevronDown} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function PortfolioDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg
          border border-border bg-card px-4 py-2
          text-foreground transition-colors
          hover:border-primary focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-ring"
        >
          English
          <ChevronDown className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52 rounded-xl border border-border
        bg-popover p-2 text-popover-foreground shadow-xl"
      >
        <DropdownMenuItem asChild>
          <Link href="#" className="cursor-pointer gap-3" dir="rtl">
            فارسی
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#" className="cursor-pointer gap-3">
            English
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

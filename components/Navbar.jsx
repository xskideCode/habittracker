import React from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


const Navbar = () => {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">Habit Tracker</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="habits"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Habits
            </Link>
            <Link
              href="progress"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Progress
            </Link>
            <Link
              href="goals"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Goals
            </Link>
          </nav>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
};

export default Navbar;

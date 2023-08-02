"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MainNavProps {
  data: Category[];
}

export const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data?.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes?.map(({ href, label, active }) => (
        <Link
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            active ? "text-black" : "text-gray-500"
          )}
          key={href}
          href={href}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

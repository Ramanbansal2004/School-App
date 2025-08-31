"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold text-blue-600">School App</h1>
        <div className="flex gap-4">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/add-school" className={linkClasses("/add-school")}>
            Add School
          </Link>
          <Link href="/show-school" className={linkClasses("/show-school")}>
            Show Schools
          </Link>
        </div>
      </div>
    </nav>
  );
}

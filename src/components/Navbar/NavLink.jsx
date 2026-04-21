"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
  const pathName = usePathname();
  return (
    <div className="sm:flex">
      <li>
        <Link
          className={`${pathName === "/" ? "text-red-500" : ""}`}
          href={`/`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/products" ? "text-red-500" : ""}`}
          href={`/products`}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/posts" ? "text-red-500" : ""}`}
          href={`/posts`}
        >
          Posts
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/foods" ? "text-red-500" : ""}`}
          href={`/foods`}
        >
          Foods
        </Link>
      </li>
      <li>
        <Link
          className={`${pathName === "/foods2" ? "text-red-500" : ""}`}
          href={`/foods2`}
        >
          Foods2
        </Link>
      </li>
    </div>
  );
};

export default NavLink;

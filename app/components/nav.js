import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>my site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/create_user">Create User</Link>
          <Link href="/client_member">Client Member</Link>
          <Link href="/server_member">Server Memmber</Link>
          <Link href="/public">Public</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

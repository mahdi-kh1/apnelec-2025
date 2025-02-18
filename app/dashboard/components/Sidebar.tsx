'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings, Users, FileText, User } from 'lucide-react';

interface SidebarItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Sidebar = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();

  const sidebarItems: SidebarItemProps[] = [
    {
      href: "/dashboard/pages",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      href: "/dashboard/pages/profile",
      label: "Profile",
      icon: <User size={20} />
    },
    {
      href: "/dashboard/pages/settings",
      label: "Settings",
      icon: <Settings size={20} />
    },
    {
      href: "/dashboard/pages/reports",
      label: "Reports",
      icon: <FileText size={20} />
    },
    {
      href: "/dashboard/pages/users",
      label: "Users",
      icon: <Users size={20} />
    }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50
        w-64 bg-gray-800 text-white
        transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isOpen ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/apnelec-ev-logo.png"
                alt="ApnElec Logo"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <span className="font-bold text-xl">ApnElec</span>
            </Link>
            <button
              className="lg:hidden"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center p-2 rounded hover:bg-gray-700
                  ${pathname === item.href ? 'bg-gray-600 font-semibold' : ''}
                `}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
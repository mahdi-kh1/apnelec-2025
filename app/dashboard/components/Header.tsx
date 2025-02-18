import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button
          className="lg:hidden text-gray-500 hover:text-gray-800"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold">ApnElec Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
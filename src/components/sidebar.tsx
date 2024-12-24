import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Layout,
  FileText,
  Wallet,
  File,
  HelpCircle,
  LogOut,
  Menu,
  Search,
  Bell,
} from "lucide-react";
import AccessLogo from "../assets/accesslogo.png";
import ImageEclipse from "../assets/image.png";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <div className="block lg:hidden fixed top-0 left-0 z-50 p-4 bg-white w-full shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <Button
              variant="ghost"
              className="flex items-center gap-2"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Button variant="ghost" size="icon">
              <Search className="absolute ml-6 text-gray-400" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="h-8 w-01 bg-gray-400">|</div>
            <div className="flex items-center gap-2">
              <img
                src={ImageEclipse}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-white p-4 shadow-sm fixed lg:static top-0 left-0 h-screen z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:block`}
      >
        <div className="mb-8 mt-16 lg:mt-0">
          <img src={AccessLogo} alt="Access Logo" className="h-10" />
        </div>
        <SidebarContent />
      </div>
    </div>
  );
};

const SidebarContent = () => (
  <>
    <div className="mb-2">
      <p className="uppercase text-gray-400 text-sm">Main Menu</p>
    </div>
    <nav className="space-y-2 text-gray-400">
      <Button
        variant="ghost"
        className="w-full justify-start bg-orange-50 text-orange-500"
      >
        <Layout className="mr-2 h-4 w-4" />
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <FileText className="mr-2 h-4 w-4" />
        Request
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <Wallet className="mr-2 h-4 w-4" />
        Wallet
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        <File className="mr-2 h-4 w-4" />
        Invoice
        <span className="ml-auto rounded-full bg-red-500 px-2 text-xs text-white">
          1
        </span>
      </Button>
      <div className="mt-8 pt-8">
        <p className="uppercase text-gray-400 mb-4 text-sm">Other</p>
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help Center
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  </>
);

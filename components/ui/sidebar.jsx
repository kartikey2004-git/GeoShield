"use client";
import { useState } from "react";
import { Menu, X, LayoutDashboard, Phone, MapPin, Activity } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-3 text-white bg-gray-800 fixed top-4 left-4 z-50 rounded-md cursor-pointer sm:p-2"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 md:w-80 bg-black text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6 space-y-2 px-4">
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 hover:text-gray-300 cursor-pointer py-2"
          >
            <LayoutDashboard /> <span>Dashboard</span>
          </Link>

          <Link
            href="/emergency-contacts"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 hover:text-gray-300 cursor-pointer py-2"
          >
            <Phone /> <span>Emergency Contacts</span>
          </Link>

          <Link
            href="/sensitive-areas"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 hover:text-gray-300 cursor-pointer py-2"
          >
            <MapPin /> <span>Sensitive Areas</span>
          </Link>

          <Link
            href="/travel-patterns"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 hover:text-gray-300 cursor-pointer py-2"
          >
            <Activity /> <span>Travel Patterns</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

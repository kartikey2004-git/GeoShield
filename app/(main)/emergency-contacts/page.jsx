"use client";
import { ChevronRight, MapPin, Phone, Search, Star } from "lucide-react";
import React, { useState } from "react";

const emergencyContacts = [
  {
    id: 1,
    name: "Sarah Lee",
    role: "Family Member",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    relationship: "Guide",
    contact: "+91-9012345678",
    location: "Goa",
  },
  {
    id: 2,
    name: "Officer Michael Tan",
    role: "Law Enforcement",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    relationship: "Police Officer",
    contact: "+91-9876543210",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Alex Kim",
    role: "Friend",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    relationship: "Friend",
    contact: "+91-9123456780",
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Family Member",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    relationship: "Sister",
    contact: "+91-9234567891",
    location: "Delhi",
  },
  {
    id: 5,
    name: "Rachel Lee",
    role: "Tour Guide",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    relationship: "Guide",
    contact: "+91-9345678902",
    location: "Kerala",
  },
  {
    id: 6,
    name: "Chief Jane Smith",
    role: "Law Enforcement",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    relationship: "Police Chief",
    contact: "+91-9456789013",
    location: "Chennai",
  },
  {
    id: 7,
    name: "David Kim",
    role: "Friend",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    relationship: "Friend",
    contact: "+91-9567890124",
    location: "Pune",
  },
  {
    id: 8,
    name: "Kevin White",
    role: "Family Member",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    relationship: "Brother",
    contact: "+91-9678901235",
    location: "Hyderabad",
  },
  {
    id: 9,
    name: "James Brown",
    role: "Tour Guide",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    relationship: "Guide",
    contact: "+91-9789012346",
    location: "Rajasthan",
  },
];

const page = () => {
  const [search, setSearch] = useState("");

  const filteredContacts = emergencyContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.role.toLowerCase().includes(search.toLowerCase()) ||
      contact.relationship?.toLowerCase().includes(search.toLowerCase()) ||
      contact.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl text-gray-900 mb-2">
          Emergency Contacts
        </h1>
        <p className="text-gray-500">
          Quick access to important contacts for safety and emergencies.
        </p>
      </header>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-6 relative">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border text-gray-600 border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 outline-none shadow-sm transition-all"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Contact List */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white shadow-lg rounded-2xl p-5 flex justify-between items-center hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <img
                src={contact.image}
                alt={contact.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-gray-900">{contact.name}</p>
                <p className="text-gray-500 text-sm">{contact.role}</p>
                {contact.relationship && (
                  <p className="text-gray-500 text-sm">
                    Relationship: {contact.relationship}
                  </p>
                )}
                {contact.location && (
                  <p className="text-gray-400 text-xs">
                    Location: {contact.location}
                  </p>
                )}
                {contact.contact && (
                  <p className="text-gray-400 text-xs">
                    Contact: {contact.contact}
                  </p>
                )}
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
          </div>
        ))}

        {filteredContacts.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No contacts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default page;

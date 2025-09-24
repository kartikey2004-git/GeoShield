"use client";
import { ChevronRight, MapPin, Phone, Search, Star, MessageCircle, Heart, Shield, User, Navigation, Clock, Users } from "lucide-react";
import React, { useState, useEffect } from "react";

const emergencyContacts = [
  {
    id: 1,
    name: "Sarah Lee",
    role: "Family Member",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    relationship: "Guide",
    contact: "+91-9012345678",
    location: "Goa",
    priority: "high",
    status: "online",
    lastSeen: "2 min ago",
    description: "Professional tour guide with 8+ years experience"
  },
  {
    id: 2,
    name: "Officer Michael Tan",
    role: "Law Enforcement",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    relationship: "Police Officer",
    contact: "+91-9876543210",
    location: "Mumbai",
    priority: "critical",
    status: "online",
    lastSeen: "Active now",
    description: "Emergency response coordinator"
  },
  {
    id: 3,
    name: "Alex Kim",
    role: "Friend",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    relationship: "Friend",
    contact: "+91-9123456780",
    location: "Bangalore",
    priority: "medium",
    status: "offline",
    lastSeen: "1 hour ago",
    description: "Travel companion and local contact"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Family Member",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    relationship: "Sister",
    contact: "+91-9234567891",
    location: "Delhi",
    priority: "high",
    status: "online",
    lastSeen: "5 min ago",
    description: "Emergency family contact"
  },
  {
    id: 5,
    name: "Rachel Lee",
    role: "Tour Guide",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    relationship: "Guide",
    contact: "+91-9345678902",
    location: "Kerala",
    priority: "high",
    status: "online",
    lastSeen: "Just now",
    description: "Local area specialist and cultural guide"
  },
  {
    id: 6,
    name: "Chief Jane Smith",
    role: "Law Enforcement",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    relationship: "Police Chief",
    contact: "+91-9456789013",
    location: "Chennai",
    priority: "critical",
    status: "online",
    lastSeen: "Active now",
    description: "Chief of police - emergency services"
  }
];

const EmergencyContactsApp = () => {
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredContacts = emergencyContacts.filter((contact) => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.role.toLowerCase().includes(search.toLowerCase()) ||
      contact.relationship?.toLowerCase().includes(search.toLowerCase()) ||
      contact.location?.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || contact.priority === filter;

    return matchesSearch && matchesFilter;
  });

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMessage = (phoneNumber) => {
    window.location.href = `sms:${phoneNumber}`;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical": return "bg-red-100 text-red-800 border-red-200";
      case "high": return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    return status === "online" ? "bg-green-400" : "bg-gray-400";
  };

  const getRoleIcon = (role) => {
    switch (role.toLowerCase()) {
      case "law enforcement": return <Shield className="w-5 h-5 text-blue-600" />;
      case "family member": return <Heart className="w-5 h-5 text-red-500" />;
      case "tour guide": return <Navigation className="w-5 h-5 text-green-600" />;
      case "friend": return <Users className="w-5 h-5 text-purple-600" />;
      default: return <User className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Header */}
      <header 
        className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 transition-all duration-700"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Emergency Contacts
              </h1>
              <p className="text-slate-600 mt-1">
                Quick access to important contacts for safety and emergencies
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm">
              {[
                { key: "all", label: "All", count: emergencyContacts.length },
                { key: "critical", label: "Critical", count: emergencyContacts.filter(c => c.priority === "critical").length },
                { key: "high", label: "High", count: emergencyContacts.filter(c => c.priority === "high").length }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === tab.key
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {tab.label} {tab.count > 0 && <span className="ml-1 opacity-75">({tab.count})</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Enhanced Search Bar */}
        <div 
          className="relative mb-8 transition-all duration-500"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '200ms'
          }}
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Search by name, role, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-300 shadow-lg hover:shadow-xl group-hover:border-indigo-300"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors duration-300 group-focus-within:text-indigo-500" />
            
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContacts.map((contact, index) => (
            <div
              key={contact.id}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              style={{
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${300 + index * 100}ms`
              }}
              onClick={() => handleContactClick(contact)}
            >
              {/* Priority Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(contact.priority)} shadow-sm`}>
                  {contact.priority.charAt(0).toUpperCase() + contact.priority.slice(1)}
                </span>
              </div>

              {/* Contact Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(contact.status)} rounded-full border-2 border-white shadow-sm`}></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {getRoleIcon(contact.role)}
                      <h3 className="text-lg font-bold text-slate-900 truncate">
                        {contact.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{contact.role}</p>
                    <p className="text-xs text-slate-500">{contact.relationship}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-3 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {contact.description}
                </p>
              </div>

              {/* Contact Details */}
              <div className="px-6 pb-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600 truncate">{contact.location}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-500">{contact.lastSeen}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600 font-mono text-xs">{contact.contact}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6">
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCall(contact.contact);
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group/btn"
                  >
                    <Phone className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    Call
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMessage(contact.contact);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    Text
                  </button>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredContacts.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No contacts found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Try adjusting your search terms or filters to find the contacts you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedContact && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          style={{
            animation: 'modalBackdrop 0.3s ease-out forwards'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full shadow-2xl transform transition-all duration-400"
            style={{
              animation: 'modalSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-8 pb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-3xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={selectedContact.image}
                    alt={selectedContact.name}
                    className="w-20 h-20 rounded-2xl object-cover shadow-xl"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor(selectedContact.status)} rounded-full border-3 border-white shadow-lg`}></div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedContact.name}</h2>
                  <p className="text-white/90 mb-2">{selectedContact.role}</p>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white border border-white/30`}>
                    {selectedContact.priority.charAt(0).toUpperCase() + selectedContact.priority.slice(1)} Priority
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Description</h3>
                  <p className="text-slate-700">{selectedContact.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Location</h3>
                    <p className="text-slate-900 font-medium">{selectedContact.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Status</h3>
                    <p className="text-slate-900 font-medium">{selectedContact.lastSeen}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Contact Number</h3>
                  <p className="text-slate-900 font-mono text-lg">{selectedContact.contact}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={() => handleCall(selectedContact.contact)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
                
                <button
                  onClick={() => handleMessage(selectedContact.contact)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes modalBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EmergencyContactsApp;
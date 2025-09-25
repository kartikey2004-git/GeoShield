"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  User,
  MapPin,
  Calendar,
  Hotel,
  Phone,
  Mail,
  Shield,
  Plane,
  Search,
  Filter,
  Globe,
  Clock,
  Users,
  Star,
  Eye,
  Download,
  Share2,
  MoreVertical,
  Heart,
  MessageCircle,
  Navigation,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Activity
} from "lucide-react";

const dataset = [
  {
    touristId: "T1001",
    fullName: "John Smith",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    age: 32,
    gender: "Male",
    nationality: "USA",
    passportNumber: "P1234567",
    email: "john.smith@example.com",
    phone: "+1-202-555-0173",
    status: "active",
    rating: 4.8,
    visits: 3,
    emergencyContact: {
      name: "Emily Smith",
      relation: "Wife",
      phone: "+1-202-555-0199",
    },
    travelDetails: {
      arrivalDate: "2025-09-10",
      departureDate: "2025-09-25",
      destinationCity: "New Delhi",
      hotel: "The Grand Palace Hotel",
      purpose: "Tourism"
    },
    preferences: ["History", "Culture", "Food"],
    lastActivity: "2 hours ago"
  },
  {
    touristId: "T1002",
    fullName: "Aiko Tanaka",
    age: 27,
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    nationality: "Japan",
    passportNumber: "JP9876543",
    email: "aiko.tanaka@example.jp",
    phone: "+81-90-1234-5678",
    status: "active",
    rating: 4.9,
    visits: 1,
    emergencyContact: {
      name: "Ken Tanaka",
      relation: "Brother",
      phone: "+81-80-2345-6789",
    },
    travelDetails: {
      arrivalDate: "2025-09-12",
      departureDate: "2025-09-20",
      destinationCity: "Agra",
      hotel: "Taj Heritage Inn",
      purpose: "Heritage"
    },
    preferences: ["Architecture", "Photography", "Art"],
    lastActivity: "1 hour ago"
  },
  {
    touristId: "T1003",
    fullName: "Carlos Martinez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    age: 40,
    gender: "Male",
    nationality: "Spain",
    passportNumber: "ES5432167",
    email: "carlos.martinez@example.es",
    phone: "+34-600-123-456",
    status: "active",
    rating: 4.7,
    visits: 5,
    emergencyContact: {
      name: "Maria Martinez",
      relation: "Wife",
      phone: "+34-699-555-888",
    },
    travelDetails: {
      arrivalDate: "2025-09-14",
      departureDate: "2025-09-30",
      destinationCity: "Jaipur",
      hotel: "Royal Sands Resort",
      purpose: "Business"
    },
    preferences: ["Business", "Luxury", "Wellness"],
    lastActivity: "30 minutes ago"
  },
  {
    touristId: "T1004",
    fullName: "Sophia Müller",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    age: 29,
    gender: "Female",
    nationality: "Germany",
    passportNumber: "DE1122334",
    email: "sophia.mueller@example.de",
    phone: "+49-151-1234567",
    status: "check-in",
    rating: 4.6,
    visits: 2,
    emergencyContact: {
      name: "Hans Müller",
      relation: "Father",
      phone: "+49-170-7654321",
    },
    travelDetails: {
      arrivalDate: "2025-09-08",
      departureDate: "2025-09-18",
      destinationCity: "Goa",
      hotel: "Sea Breeze Resort",
      purpose: "Leisure"
    },
    preferences: ["Beach", "Water Sports", "Nightlife"],
    lastActivity: "5 minutes ago"
  },
  {
    touristId: "T1005",
    fullName: "Liam O'Connor",
    age: 35,
    gender: "Male",
    nationality: "Ireland",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    passportNumber: "IR9988776",
    email: "liam.oconnor@example.ie",
    phone: "+353-85-123-4567",
    status: "departed",
    rating: 4.9,
    visits: 7,
    emergencyContact: {
      name: "Patrick O'Connor",
      relation: "Brother",
      phone: "+353-86-555-7777",
    },
    travelDetails: {
      arrivalDate: "2025-09-11",
      departureDate: "2025-09-19",
      destinationCity: "Varanasi",
      hotel: "Sacred River View",
      purpose: "Spiritual"
    },
    preferences: ["Spirituality", "Culture", "Philosophy"],
    lastActivity: "2 days ago"
  },
  {
    touristId: "T1006",
    fullName: "Maria Silva",
    age: 34,
    gender: "Female",
    nationality: "Brazil",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    passportNumber: "BR7778889",
    email: "maria.silva@example.br",
    phone: "+55-11-99999-8888",
    status: "active",
    rating: 4.5,
    visits: 2,
    emergencyContact: {
      name: "Carlos Silva",
      relation: "Husband",
      phone: "+55-11-88888-7777",
    },
    travelDetails: {
      arrivalDate: "2025-09-15",
      departureDate: "2025-09-22",
      destinationCity: "Mumbai",
      hotel: "Ocean View Palace",
      purpose: "Business"
    },
    preferences: ["Business", "Networking", "Culture"],
    lastActivity: "1 hour ago"
  }
];

// Particle Component
const Particle = ({ x, y, delay, size }) => {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animation: `float 6s infinite ease-in-out ${delay}s, pulse 3s infinite ease-in-out ${delay}s`
      }}
    />
  );
};

// Floating Particles Background
const ParticleBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 8 + 4
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          delay={particle.delay}
          size={particle.size}
        />
      ))}
    </div>
  );
};

// Animated Stats Card
const StatCard = ({ icon: Icon, label, value, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setAnimatedValue(value);
          clearInterval(timer);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 group cursor-pointer ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-2xl bg-gradient-to-r ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900 tabular-nums">
            {animatedValue}
          </p>
          <p className="text-gray-600 font-medium">{label}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm text-emerald-600">
        <TrendingUp className="w-4 h-4 mr-1" />
        <span>Active</span>
      </div>
    </div>
  );
};

const TouristCard = ({ tourist, index, onViewDetails, favorites, setFavorites }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const getNationalityFlag = (nationality) => {
    const flags = {
      USA: "🇺🇸",
      Japan: "🇯🇵",
      Spain: "🇪🇸",
      Germany: "🇩🇪",
      Ireland: "🇮🇪",
      Brazil: "🇧🇷"
    };
    return flags[nationality] || "🌍";
  };

  const getDuration = () => {
    const start = new Date(tourist.travelDetails.arrivalDate);
    const end = new Date(tourist.travelDetails.departureDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days;
  };

  const getStatusConfig = (status) => {
    const configs = {
      "active": {
        bgColor: "bg-green-100 text-green-800 border-green-200",
        dotColor: "bg-green-400",
        glowColor: "shadow-green-200"
      },
      "check-in": {
        bgColor: "bg-blue-100 text-blue-800 border-blue-200",
        dotColor: "bg-blue-400",
        glowColor: "shadow-blue-200"
      },
      "departed": {
        bgColor: "bg-gray-100 text-gray-800 border-gray-200",
        dotColor: "bg-gray-400",
        glowColor: "shadow-gray-200"
      }
    };
    return configs[status] || configs["active"];
  };

  const statusConfig = getStatusConfig(tourist.status);
  const isFavorited = favorites.includes(tourist.touristId);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setFavorites(prev => 
      isFavorited 
        ? prev.filter(id => id !== tourist.touristId)
        : [...prev, tourist.touristId]
    );
  };

  const handleCall = (e) => {
    e.stopPropagation();
    window.location.href = `tel:${tourist.phone}`;
  };

  const handleEmail = (e) => {
    e.stopPropagation();
    window.location.href = `mailto:${tourist.email}`;
  };

  return (
    <div 
      ref={cardRef}
      className={`group bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 cursor-pointer relative overflow-hidden ${statusConfig.glowColor}`}
      style={{
        animation: `slideInUp 0.8s ease-out ${index * 150}ms both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(tourist)}
    >
      {/* Animated gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
      
      {/* Floating sparkles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute w-4 h-4 text-purple-400 animate-ping opacity-60"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${10 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}
      
      {/* Status indicator with glow effect */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusConfig.bgColor} shadow-sm hover:shadow-md transition-shadow duration-300`}>
          {tourist.status.charAt(0).toUpperCase() + tourist.status.slice(1)}
        </span>
      </div>

      {/* Header with avatar and user info */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={tourist.avatar}
              alt={tourist.fullName}
              className="w-16 h-16 rounded-2xl border-2 border-white shadow-lg object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl"
            />
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusConfig.dotColor} rounded-full border-2 border-white shadow-sm animate-pulse`} />
            {/* Floating activity indicator */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors duration-500">
                {tourist.fullName}
              </span>
              <span className="text-2xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                {getNationalityFlag(tourist.nationality)}
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3 transition-colors duration-300 group-hover:text-indigo-600" />
                <span>{tourist.age} • {tourist.gender}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-amber-500 transition-transform duration-300 group-hover:scale-125" />
                <span className="font-medium">{tourist.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={handleFavorite}
          className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-125 relative group/heart"
        >
          <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500 animate-pulse' : ''} transition-all duration-300`} />
          {isFavorited && (
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
          )}
        </button>
      </div>

      {/* Travel Details with enhanced hover effects */}
      <div className="relative z-10 space-y-3 mb-6">
        <div className="flex items-center space-x-3 text-sm group/item hover:bg-indigo-50 p-2 rounded-lg transition-all duration-300 hover:scale-105">
          <MapPin className="w-4 h-4 text-indigo-600 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
          <div>
            <span className="text-gray-900 font-semibold">{tourist.travelDetails.destinationCity}</span>
            <span className="text-gray-500 ml-2">• {tourist.travelDetails.purpose}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-sm group/item hover:bg-blue-50 p-2 rounded-lg transition-all duration-300 hover:scale-105">
          <Hotel className="w-4 h-4 text-blue-600 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
          <span className="text-gray-700">{tourist.travelDetails.hotel}</span>
        </div>

        <div className="flex items-center space-x-3 text-sm group/item hover:bg-purple-50 p-2 rounded-lg transition-all duration-300 hover:scale-105">
          <Calendar className="w-4 h-4 text-purple-600 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
          <span className="text-gray-700">
            {formatDate(tourist.travelDetails.arrivalDate)} - {formatDate(tourist.travelDetails.departureDate)}
            <span className="text-indigo-600 font-medium ml-2">({getDuration()} days)</span>
          </span>
        </div>
      </div>

      {/* Animated Preferences Tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-4">
        {tourist.preferences.map((pref, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs rounded-full font-medium transition-all duration-500 hover:scale-110 hover:shadow-md hover:from-indigo-200 hover:to-purple-200 cursor-pointer"
            style={{
              animationDelay: `${idx * 100}ms`,
              animation: isHovered ? `bounce 0.6s ease-out ${idx * 100}ms` : 'none'
            }}
          >
            {pref}
          </span>
        ))}
      </div>

      {/* Contact Info with interactive buttons */}
      <div className="relative z-10 space-y-2 mb-6">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="w-4 h-4 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
            <span className="truncate">{tourist.email}</span>
          </div>
          <button 
            onClick={handleEmail}
            className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="w-4 h-4 text-orange-600 transition-transform duration-300 group-hover:scale-110" />
            <span>{tourist.phone}</span>
          </div>
          <button 
            onClick={handleCall}
            className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-300 hover:scale-125 hover:rotate-12"
          >
            <Phone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats Row with animations */}
      <div className="relative z-10 flex items-center justify-between text-xs text-gray-500 mb-4 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300">
        <div className="flex items-center space-x-2">
          <Eye className="w-3 h-3 transition-transform duration-300 group-hover:scale-125" />
          <span>{tourist.visits} visits</span>
        </div>
        <div className="flex items-center space-x-2">
          <Activity className="w-3 h-3 text-green-500 animate-pulse" />
          <Clock className="w-3 h-3 transition-transform duration-300 group-hover:scale-125" />
          <span>{tourist.lastActivity}</span>
        </div>
      </div>

      {/* Footer with enhanced button */}
      <div className="relative z-10 pt-4 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <Shield className="w-3 h-3 text-red-500 transition-transform duration-300 group-hover:scale-125" />
            <span className="text-gray-500 font-mono">{tourist.touristId}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Plane className="w-3 h-3 text-amber-600 transition-transform duration-300 group-hover:scale-125" />
            <span className="text-gray-500 font-mono">{tourist.passportNumber}</span>
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(tourist);
          }}
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group/btn"
        >
          <span className="relative z-10">View Details</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Emergency Contact Tooltip - Enhanced */}
      <div className="absolute bottom-20 left-4 bg-black/90 text-white text-xs p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none max-w-56 shadow-2xl backdrop-blur-sm border border-white/10">
        <div className="font-semibold mb-1">Emergency Contact</div>
        <div>{tourist.emergencyContact.name} ({tourist.emergencyContact.relation})</div>
        <div className="text-gray-300 mt-1">{tourist.emergencyContact.phone}</div>
      </div>
    </div>
  );
};

const TouristModal = ({ tourist, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('travel');
  
  if (!isOpen || !tourist) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getNationalityFlag = (nationality) => {
    const flags = {
      USA: "🇺🇸",
      Japan: "🇯🇵",
      Spain: "🇪🇸",
      Germany: "🇩🇪",
      Ireland: "🇮🇪",
      Brazil: "🇧🇷"
    };
    return flags[nationality] || "🌍";
  };

  const tabs = [
    { id: 'travel', label: 'Travel Info', icon: Plane },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'emergency', label: 'Emergency', icon: Shield }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50 p-4"
      onClick={onClose}
      style={{ animation: 'modalBackdrop 0.4s ease-out forwards' }}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modalSlide 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
      >
        {/* Enhanced Header with floating elements */}
        <div className="relative p-8 pb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-t-3xl overflow-hidden">
          {/* Floating particles in header */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + Math.sin(i) * 30}%`,
                  animationDelay: `${i * 500}ms`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>

          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
          >
            ✕
          </button>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <img
                src={tourist.avatar}
                alt={tourist.fullName}
                className="w-32 h-32 rounded-3xl border-4 border-white/30 shadow-2xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse shadow-lg" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <h2 className="text-3xl sm:text-4xl font-bold">{tourist.fullName}</h2>
                <span className="text-4xl animate-bounce">{getNationalityFlag(tourist.nationality)}</span>
              </div>
              <p className="text-white/90 text-lg mb-3">{tourist.nationality} • {tourist.age} years old • {tourist.gender}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-amber-300" />
                  <span className="text-2xl font-bold">{tourist.rating}</span>
                </div>
                <div className="text-white/80 text-lg">• {tourist.visits} visits</div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {tourist.status.charAt(0).toUpperCase() + tourist.status.slice(1)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="bg-white border-b border-gray-200 px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-8 overflow-y-auto max-h-96">
          {activeTab === 'travel' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-indigo-600" />
                Travel Information
              </h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Destination</h4>
                    <p className="text-gray-900 text-lg font-medium">{tourist.travelDetails.destinationCity}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Purpose</h4>
                    <p className="text-gray-900">{tourist.travelDetails.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Arrival</h4>
                    <p className="text-gray-900">{formatDate(tourist.travelDetails.arrivalDate)}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Departure</h4>
                    <p className="text-gray-900">{formatDate(tourist.travelDetails.departureDate)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-700 mb-2">Accommodation</h4>
                    <p className="text-gray-900">{tourist.travelDetails.hotel}</p>
                  </div>
                </div>
              </div>
              
              {/* Preferences */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Preferences</h4>
                <div className="flex flex-wrap gap-3">
                  {tourist.preferences.map((pref, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-600" />
                Contact Information
              </h3>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Email</h4>
                    <p className="text-gray-900 break-all">{tourist.email}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Phone</h4>
                    <p className="text-gray-900 font-mono">{tourist.phone}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Passport</h4>
                    <p className="text-gray-900 font-mono">{tourist.passportNumber}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Tourist ID</h4>
                    <p className="text-gray-900 font-mono">{tourist.touristId}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'emergency' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Emergency Contact
              </h3>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Name</h4>
                    <p className="text-gray-900 text-lg">{tourist.emergencyContact.name}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Relation</h4>
                    <p className="text-gray-900">{tourist.emergencyContact.relation}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-700 mb-2">Phone</h4>
                    <p className="text-gray-900 font-mono text-lg">{tourist.emergencyContact.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="bg-gray-50 p-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => window.location.href = `tel:${tourist.phone}`}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Call Tourist
          </button>
          
          <button
            onClick={() => window.location.href = `mailto:${tourist.email}`}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </button>

          <button
            onClick={() => window.location.href = `tel:${tourist.emergencyContact.phone}`}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:from-red-600 hover:to-pink-700 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3"
          >
            <Shield className="w-5 h-5" />
            Emergency
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PremiumTouristRegistry() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedTourist, setSelectedTourist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredDataset = dataset.filter((tourist) => {
    const matchesSearch = 
      tourist.fullName.toLowerCase().includes(search.toLowerCase()) ||
      tourist.nationality.toLowerCase().includes(search.toLowerCase()) ||
      tourist.travelDetails.destinationCity.toLowerCase().includes(search.toLowerCase()) ||
      tourist.travelDetails.hotel.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || tourist.status === filter;

    return matchesSearch && matchesFilter;
  }).sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.fullName.localeCompare(b.fullName);
      case "rating":
        return b.rating - a.rating;
      case "visits":
        return b.visits - a.visits;
      case "arrival":
        return new Date(a.travelDetails.arrivalDate) - new Date(b.travelDetails.arrivalDate);
      default:
        return 0;
    }
  });

  const handleViewDetails = (tourist) => {
    setSelectedTourist(tourist);
    setIsModalOpen(true);
  };

  const stats = {
    total: dataset.length,
    nationalities: new Set(dataset.map(t => t.nationality)).size,
    destinations: new Set(dataset.map(t => t.travelDetails.destinationCity)).size,
    active: dataset.filter(t => t.status === 'active').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Header */}
      <header 
        className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl shadow-sm border-b border-white/20"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tourist Registry
              </h1>
              <p className="text-slate-600 mt-2 text-lg">
                Active tourist profiles and travel documentation
              </p>
              {/* Floating sparkles around title */}
              <div className="absolute -top-2 -right-4">
                <Sparkles className="w-6 h-6 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
            
            {/* Enhanced Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tourists..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 bg-white/80 backdrop-blur-sm w-full sm:w-80"
                />
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-3 pr-8 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300"
                >
                  <option value="name">Sort by Name</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="visits">Sort by Visits</option>
                  <option value="arrival">Sort by Arrival</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
            <div className="flex gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              {[
                { key: "all", label: "All", count: dataset.length },
                { key: "active", label: "Active", count: dataset.filter(t => t.status === "active").length },
                { key: "check-in", label: "Check-in", count: dataset.filter(t => t.status === "check-in").length },
                { key: "departed", label: "Departed", count: dataset.filter(t => t.status === "departed").length }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    filter === tab.key
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}
                    <span className="text-xs opacity-75">({tab.count})</span>
                  </span>
                  {filter === tab.key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Animated Stats */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={Users} 
            label="Total Tourists" 
            value={stats.total} 
            color="from-blue-500 to-indigo-600"
            delay={100}
          />
          <StatCard 
            icon={Globe} 
            label="Nationalities" 
            value={stats.nationalities} 
            color="from-emerald-500 to-teal-600"
            delay={200}
          />
          <StatCard 
            icon={MapPin} 
            label="Destinations" 
            value={stats.destinations} 
            color="from-purple-500 to-pink-600"
            delay={300}
          />
          <StatCard 
            icon={Activity} 
            label="Active Now" 
            value={stats.active} 
            color="from-orange-500 to-red-600"
            delay={400}
          />
        </div>
      </section>

      {/* Tourist Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        {filteredDataset.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tourists found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDataset.map((tourist, index) => (
              <TouristCard
                key={tourist.touristId}
                tourist={tourist}
                index={index}
                onViewDetails={handleViewDetails}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </div>
        )}
      </main>

      {/* Enhanced Modal */}
      <TouristModal
        tourist={selectedTourist}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTourist(null);
        }}
      />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes modalBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
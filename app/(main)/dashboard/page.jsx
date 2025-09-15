import React from "react";
import {
  User,
  MapPin,
  Calendar,
  Hotel,
  Phone,
  Mail,
  Shield,
  Plane,
} from "lucide-react";

const dataset = [
  {
    touristId: "T1001",
    fullName: "John Smith",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    age: 32,
    gender: "Male",
    nationality: "USA",
    passportNumber: "P1234567",
    email: "john.smith@example.com",
    phone: "+1-202-555-0173",
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
    },
  },
  {
    touristId: "T1002",
    fullName: "Aiko Tanaka",
    age: 27,
    gender: "Female",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    nationality: "Japan",
    passportNumber: "JP9876543",
    email: "aiko.tanaka@example.jp",
    phone: "+81-90-1234-5678",
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
    },
  },
  {
    touristId: "T1003",
    fullName: "Carlos Martinez",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    age: 40,
    gender: "Male",
    nationality: "Spain",
    passportNumber: "ES5432167",
    email: "carlos.martinez@example.es",
    phone: "+34-600-123-456",
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
    },
  },
  {
    touristId: "T1004",
    fullName: "Sophia Müller",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    age: 29,
    gender: "Female",
    nationality: "Germany",
    passportNumber: "DE1122334",
    email: "sophia.mueller@example.de",
    phone: "+49-151-1234567",
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
    },
  },
  {
    touristId: "T1005",
    fullName: "Liam O'Connor",
    age: 35,
    gender: "Male",
    nationality: "Ireland",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    passportNumber: "IR9988776",
    email: "liam.oconnor@example.ie",
    phone: "+353-85-123-4567",
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
    },
  },
];

const TouristCard = ({ tourist }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
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
    };
    return flags[nationality] || "🌍";
  };

  const getDuration = () => {
    const start = new Date(tourist.travelDetails.arrivalDate);
    const end = new Date(tourist.travelDetails.departureDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="border p-6 border-gray-300 transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-lg rounded-lg bg-white">
      {/* Header with avatar and user info */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img
            src={tourist.avatar}
            alt={tourist.fullName}
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900 text-lg">
                {tourist.fullName}
              </span>
              <span className="text-xl">
                {getNationalityFlag(tourist.nationality)}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="w-3 h-3" />
              <span>
                {tourist.age} • {tourist.gender}
              </span>
            </div>
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Travel Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="w-4 h-4 text-cyan-600" />
          <span className="text-gray-900 font-medium">
            {tourist.travelDetails.destinationCity}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Hotel className="w-4 h-4 text-blue-600" />
          <span className="text-gray-700">{tourist.travelDetails.hotel}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Calendar className="w-4 h-4 text-purple-600" />
          <span className="text-gray-700">
            {formatDate(tourist.travelDetails.arrivalDate)} -{" "}
            {formatDate(tourist.travelDetails.departureDate)}
            <span className="text-gray-500 ml-1">({getDuration()} days)</span>
          </span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <Mail className="w-4 h-4 text-green-600" />
          <span className="text-gray-700">{tourist.email}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <Phone className="w-4 h-4 text-orange-600" />
          <span className="text-gray-700">{tourist.phone}</span>
        </div>
      </div>

      {/* Passport & Emergency Contact */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <Shield className="w-3 h-3 text-red-500" />
            <span className="text-gray-500">ID: {tourist.touristId}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Plane className="w-3 h-3 text-yellow-600" />
            <span className="text-gray-500">{tourist.passportNumber}</span>
          </div>
        </div>

        <div className="mt-2 text-xs text-gray-500">
          Emergency: {tourist.emergencyContact.name} (
          {tourist.emergencyContact.relation})
        </div>
      </div>
    </div>
  );
};

export default function PremiumTouristCards() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl mb-4">Tourists Registry</h1>
          <p className="text-gray-600 font-medium text-lg md:text-xl leading-tight">
            Active tourist profiles and travel documentation
          </p>
        </div>

        {/* Tourist Cards Grid - 1 column on mobile, 2 columns on md and lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {dataset.map((tourist) => (
            <TouristCard key={tourist.touristId} tourist={tourist} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white border border-gray-200 rounded-lg px-8 py-4 shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {dataset.length}
              </div>
              <div className="text-sm text-gray-500">Active Tourists</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {new Set(dataset.map((t) => t.nationality)).size}
              </div>
              <div className="text-sm text-gray-500">Nationalities</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {
                  new Set(dataset.map((t) => t.travelDetails.destinationCity))
                    .size
                }
              </div>
              <div className="text-sm text-gray-500">Destinations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

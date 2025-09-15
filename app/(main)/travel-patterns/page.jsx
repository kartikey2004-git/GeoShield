"use client";
import React, { useState } from "react";
import { MapPin, Calendar, Eye, Star, Share2, Navigation } from "lucide-react";

const ScenicViewsPage = () => {
  const [viewsData] = useState([
    {
      id: 1,
      title: "Taking in the stunning views from the top of Lombard Street",
      date: "September 11, 2025",
      time: "8:30 PM",
      description:
        "Taking in the stunning views from the top of Lombard Street",
      coordinates: {
        lat: 37.8021,
        lng: -122.4187,
      },
      mapUrl:
        "https://www.google.com/maps/place/Lombard+Street/@37.791,-122.4187,3m1!4bt1m4!t1m!3m6!1s0x808f6a5f2d5f2de@mEt5e0!3m1!5en!2ua!4v163518728400!5m2!1sen!2us",
      elevation: "294 ft",
      rating: 4.8,
      viewCount: 1247,
      tags: ["sunset", "cityscape", "iconic"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      weather: "Clear skies, 68°F",
    },
    {
      id: 2,
      title: "Breathtaking panoramic views from Twin Peaks summit",
      date: "September 10, 2025",
      time: "7:45 PM",
      description: "Breathtaking panoramic views from Twin Peaks summit",
      coordinates: {
        lat: 37.7544,
        lng: -122.4477,
      },
      mapUrl:
        "https://www.google.com/maps/place/Twin+Peaks/@37.7544,-122.4477,15z/data=!3m1!4b1!4m6!3m5!1s0x808f7e2f3d4c8b45!8m2!3d37.7544!4d-122.4477!16zL20vMDFfMjQ",
      elevation: "922 ft",
      rating: 4.9,
      viewCount: 2156,
      tags: ["panoramic", "bay area", "golden hour"],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      weather: "Partly cloudy, 65°F",
    },
    {
      id: 3,
      title: "Amazing 360-degree city views from historic Coit Tower",
      date: "September 9, 2025",
      time: "6:20 PM",
      description: "Amazing 360-degree city views from historic Coit Tower",
      coordinates: {
        lat: 37.8024,
        lng: -122.4058,
      },
      mapUrl:
        "https://www.google.com/maps/place/Coit+Tower/@37.8024,-122.4058,17z/data=!3m1!4b1!4m6!3m5!1s0x808580f5c8d5c2a1!8m2!3d37.8024!4d-122.4058!16zL20vMDJfNzI",
      elevation: "275 ft",
      rating: 4.6,
      viewCount: 892,
      tags: ["historic", "360 view", "architecture"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      weather: "Partly sunny, 35°F",
    },
  ]);

  const [selectedView, setSelectedView] = useState(null);

  const openModal = (view) => {
    setSelectedView(view);
  };

  const closeModal = () => {
    setSelectedView(null);
  };

  const handleShare = (view) => {
    if (navigator.share) {
      navigator.share({
        title: view.title,
        text: view.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${view.title} - ${window.location.href}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl  text-gray-800 mb-1">Travel Patterns</h1>
              <p className="text-sm text-gray-500">
                Explore and analyze travel data insights
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Views Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {viewsData.map((view) => (
            <div
              key={view.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={view.image}
                  alt={view.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {view.title}
                </h3>

                <div className="flex justify-between mb-3">
                  {/* Left side - 3 items */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{view.date}</span>
                      <span>•</span>
                      <span>{view.time}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>Elevation: {view.elevation}</span>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Conditions
                      </h3>
                      <div className="text-sm text-gray-600">
                        Weather: {view.weather}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{view.rating}/5.0 rating</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-600 mb-1">
                        Google Maps Location:
                      </p>
                      <p className="text-xs text-blue-600 break-all font-mono bg-white p-2  mb-3  rounded border">
                        {view.mapUrl}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {view.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openModal(view)}
                    className="hidden sm:flex lg:flex bg-white px-4 py-2 rounded-md text-sm font-medium items-center gap-2 group"
                  ></button>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleShare(view)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      title="Share"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <a
                      href={view.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700  transition-colors duration-200"
                      title="Open in Google Maps"
                    >
                      <Navigation className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ScenicViewsPage;

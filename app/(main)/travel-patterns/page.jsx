"use client";
import React, { useState, useEffect } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (view) => {
    setSelectedView(view);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleShare = (view) => {
    if (navigator.share) {
      navigator.share({
        title: view.title,
        text: view.description,
        url: view.mapUrl,
      }).catch(err => {
        console.error('Error sharing:', err);
        alert(`Share this view: ${view.title}\n${view.mapUrl}`);
      });
    } else {
      alert(`Share this view: ${view.title}\n${view.mapUrl}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated header */}
      <header className="bg-white shadow-sm transform transition-all duration-700 ease-out"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isVisible ? 1 : 0
              }}>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-indigo-600">
            Travel Patterns
          </h1>
          <p className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-700">
            Discover popular tourist spots and travel patterns
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {viewsData.map((view, index) => (
            <div
              key={view.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer"
              style={{
                transform: isVisible 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(50px) scale(0.95)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 150}ms`
              }}
              onClick={() => openModal(view)}
            >
              {/* Image container with overlay effects */}
              <div
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${view.image})` }}
              >
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Animated zoom effect on image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${view.image})` }}
                ></div>
                
                {/* Rating badge with hover animation */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-3 py-1 text-sm flex items-center gap-1 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100 shadow-lg">
                  <Star className="w-4 h-4 text-amber-500 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium">{view.rating}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <Eye className="w-4 h-4 text-gray-500 transition-colors duration-300 group-hover:text-indigo-600" />
                  <span className="text-gray-700">{view.viewCount}</span>
                </div>
              </div>

              <div className="p-5">
                {/* Title with hover animation */}
                <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-indigo-600 line-clamp-2">
                  {view.title}
                </h3>

                {/* Date with icon animation */}
                <div className="flex items-center text-sm text-gray-500 mb-3 transition-colors duration-300 group-hover:text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  <span>{view.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">{view.time}</span>
                </div>

                {/* Location with hover effect */}
                <div className="flex items-center text-sm text-gray-500 mb-4 transition-colors duration-300 group-hover:text-gray-700">
                  <MapPin className="w-4 h-4 mr-2 text-indigo-500 transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-600" />
                  <span>
                    {view.coordinates.lat.toFixed(4)},{" "}
                    {view.coordinates.lng.toFixed(4)}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="font-medium text-gray-600">{view.elevation}</span>
                </div>

                {/* Tags with staggered hover animations */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {view.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700 text-xs rounded-full transition-all duration-300 hover:from-indigo-200 hover:to-purple-200 hover:scale-105 cursor-pointer"
                      style={{
                        transitionDelay: `${tagIndex * 50}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons with hover effects */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(view);
                    }}
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 hover:scale-105 px-2 py-1 rounded-md hover:bg-indigo-50"
                  >
                    View details
                  </button>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(view);
                      }}
                      className="p-2 text-gray-500 hover:text-white hover:bg-indigo-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
                      title="Share"
                    >
                      <Share2 className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                    </button>
                    <a
                      href={view.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-500 hover:text-white hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
                      title="Open in Google Maps"
                    >
                      <Navigation className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Modal with animations */}
      {isModalOpen && selectedView && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          style={{
            animation: 'modalBackdrop 0.3s ease-out forwards'
          }}
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl transform transition-all duration-300 animate-modalSlide"
            style={{
              animation: 'modalSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Modal header */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 pr-4">{selectedView.title}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-light transition-all duration-300 hover:scale-110 hover:rotate-90 p-1"
                >
                  ✕
                </button>
              </div>
              
              {/* Modal image with hover effect */}
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                <img 
                  src={selectedView.image} 
                  alt={selectedView.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>
              
              {/* Info grid with staggered animations */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Date & Time", value: `${selectedView.date}, ${selectedView.time}` },
                  { label: "Weather", value: selectedView.weather },
                  { label: "Coordinates", value: `${selectedView.coordinates.lat.toFixed(4)}, ${selectedView.coordinates.lng.toFixed(4)}` },
                  { label: "Elevation", value: selectedView.elevation }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="transform transition-all duration-500 hover:scale-105"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                      animation: 'slideInUp 0.6s ease-out forwards'
                    }}
                  >
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{item.label}</h3>
                    <p className="text-gray-900 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
              
              {/* Action buttons with enhanced styling */}
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => handleShare(selectedView)}
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105 hover:shadow-md"
                >
                  <Share2 className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                  Share
                </button>
                <a
                  href={selectedView.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105 hover:shadow-lg transform"
                >
                  <Navigation className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
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
            transform: scale(0.9) translateY(-50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

export default ScenicViewsPage;
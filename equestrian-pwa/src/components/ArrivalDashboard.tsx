import React from 'react';
import { Map, AlertTriangle } from 'lucide-react';

export default function ArrivalDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 pb-24">
      {/* Header */}
      <header className="px-4 py-8 bg-black text-white">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Welcome to Badminton House
        </h1>
        <p className="text-lg font-medium text-gray-300">
          You have arrived. Here is your event day intel.
        </p>
      </header>

      <main className="flex-1 px-4 py-6 space-y-6">
        {/* Hero Action (The Map) */}
        <button className="w-full flex flex-col items-center justify-center p-6 bg-blue-600 text-white rounded-xl shadow-lg active:bg-blue-700 active:scale-95 transition-transform min-h-[120px]">
          <Map className="w-12 h-12 mb-3" strokeWidth={1.5} />
          <span className="text-2xl font-bold mb-1">Open Venue Map</span>
          <span className="text-sm font-medium text-blue-100 text-center">
            Find Lorry Parking, Water, and the Secretary.
          </span>
        </button>

        {/* Quick-Glance Critical Info (2-Column Grid) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 flex flex-col items-start min-h-[100px]">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Lorry Gate Code
            </span>
            <span className="text-3xl font-black font-mono tracking-widest text-black">
              1234
            </span>
          </div>

          <div className="bg-amber-100 p-4 rounded-xl border border-amber-200 flex flex-col items-start min-h-[100px]">
            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">
              Current Ground Status
            </span>
            <div className="flex items-center text-amber-900">
              <AlertTriangle className="w-6 h-6 mr-2 flex-shrink-0" />
              <span className="text-lg font-bold leading-tight">
                Muddy at Gate B
              </span>
            </div>
          </div>
        </div>

        {/* Live Ring Status Widget */}
        <div className="bg-white border-2 border-gray-200 p-5 rounded-xl">
          <h2 className="text-lg font-bold mb-4 text-black">Live Ring Status</h2>
          <div className="space-y-3 mb-5">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-semibold text-gray-700">Ring 1</span>
              <span className="font-bold text-lg text-black">Rider 42</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-gray-700">Ring 2</span>
              <span className="font-bold text-lg text-black">Rider 15</span>
            </div>
          </div>
          <button className="w-full py-3 px-4 rounded-lg font-semibold text-gray-700 border-2 border-gray-300 bg-transparent active:bg-gray-50 min-h-[44px]">
            Update Ring Status
          </button>
        </div>
      </main>

      {/* Venue Rules Alert (Bottom Sticky or Footer) */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-100 border-t-4 border-red-500 p-4 shadow-xl z-50">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-800 text-lg mb-1">Venue Rule</h3>
            <p className="text-red-700 font-medium">
              Dogs must remain in lorries at all times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

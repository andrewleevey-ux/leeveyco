"use client";

import { useVenueProximity } from "@/hooks/useVenueProximity";
import ArrivalDashboard from "@/components/ArrivalDashboard";

export default function Home() {
  const { isAtVenue, error } = useVenueProximity();

  if (isAtVenue) {
    return <ArrivalDashboard />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900">Equestrian Events</h1>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Status</h2>
          <p className="text-gray-600 mb-4">
            Waiting for location to detect arrival at the venue...
          </p>

          {error ? (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 text-blue-600 font-medium">
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              Checking location
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

import { useState, useEffect } from 'react';

// Mock venue coordinates (e.g., Badminton House, Gloucestershire)
const VENUE_COORDS = {
  latitude: 51.5458,
  longitude: -2.2858,
};

// Haversine formula to calculate distance in km
function calculateDistanceInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

export function useVenueProximity() {
  const [isAtVenue, setIsAtVenue] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkProximity = () => {
      if (!('geolocation' in navigator)) {
        setError('Geolocation is not supported by your browser');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const distance = calculateDistanceInKm(
            latitude,
            longitude,
            VENUE_COORDS.latitude,
            VENUE_COORDS.longitude
          );

          // 1 mile is approx 1.60934 km
          setIsAtVenue(distance <= 1.60934);
          setError(null);
        },
        (err) => {
          setError(`Error getting location: ${err.message}`);
          console.error(err);
        }
      );
    };

    // Check immediately
    checkProximity();

    // Re-check when coming back to foreground
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkProximity();
      }
    };

    const handleFocus = () => {
        checkProximity();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('focus', handleFocus);
    }
  }, []);

  return { isAtVenue, error };
}

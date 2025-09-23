import axios from "axios";

export async function fetchCurrentLocation(lat, lon) {
  const { data } = await axios.get(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${
      import.meta.env.VITE_LOCATION_TOKEN
    }`
  );
  return data.locality || data.city || data.principalSubdivision;
}

import { get } from "http";
import { setFlagsFromString } from "v8";

export async function getFlightInfo(flightNumber, apiKey, context) {   

    const response = await fetch(
        `https://airlabs.co/api/v9/flight?api_key=${apiKey}&flight_iata=${flightNumber}`
    );

    const data = await response.json();
    return data;
};

export async function getLocation(lat, lon, apiKey) {
    const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`
    );
    
    const data = await response.json();
    return data.features[0].properties;
};
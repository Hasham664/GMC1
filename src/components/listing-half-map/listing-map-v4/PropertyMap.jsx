import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const PropertyMap = ({ propertyAddress, destinationZipCode }) => {
  useEffect(() => {
    if (propertyAddress) {
      
    // Load the Google Maps JavaScript API
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoX_KBzb-Om7WaJqUQaySP95YRGdpllyw&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.onload = initializeMap;
    document.head.appendChild(googleMapsScript);
    fetchData();
  }
}, [propertyAddress]);

  const initializeMap = () => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('property-map'), {
      center: { lat: 0, lng: 0 }, // Default center (you can change this)
      zoom: 4, // Adjust the zoom level as needed
      mapTypeId: 'satellite', // Use satellite view
    });

    // Geocode the property address and add a marker
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: propertyAddress }, (results, status) => {
      if (status === 'OK' && results[0].geometry) {
        const location = results[0].geometry.location;
        new window.google.maps.Marker({
          position: location,
          map: map,
          title: 'Property Location', // Tooltip text
        });
        map.setCenter(location); // Center the map on the property location
      }
    });

    // Calculate and display travel time to the dynamic destination ZIP code
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({ map: map });

    const origin = propertyAddress; // Your property's address
    const destination = `${destinationZipCode}, Illinois`; // Dynamic destination ZIP code

    const request = {
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING', // You can use other travel modes like 'TRANSIT', 'WALKING', or 'BICYCLING'
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  };

  return <div id="property-map" style={{ width: '100%', height: '400px' }}></div>;
};

export default PropertyMap;

 function getCurrentLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            currentLocation = [lat, lon];

            if (currentLocationMarker) {
                map.removeLayer(currentLocationMarker);
            }
            var myIcon = L.icon({
                iconUrl: './imgs/persona.png',
                iconSize: [80, 80],
                iconAnchor: [30, 30],
            });
            currentLocationMarker = L.marker(currentLocation, { icon: myIcon, title: 'Origen', alt: 'Origen' }).addTo(map);

            map.panTo(new L.LatLng(lat, lon), 12);
        }, function (error) {
            console.error("Error getting location:", error.message);
        });
    } else {
        alert("Geolocation is not supported in this browser.");
    }
}

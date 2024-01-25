// Create a Leaflet map centering at San Francisco 
var map = L.map('map').setView([37.7596, -122.4990], 12);

// Add a basemap 
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fetch GeoJSON data
$.getJSON('https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson', function(data) {
  
  // Fetch coordinates 
  var points = data.features.map(function(feature) {
   
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  // Create a heatmap layer and add it to the map
  var heat = L.heatLayer(points).addTo(map);
});

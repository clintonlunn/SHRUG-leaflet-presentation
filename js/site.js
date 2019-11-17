	  	//header map
	  	var header_map = L.map('header_map', {
	  		scrollWheelZoom: false,
	  		zoomControl: false
	  	}).setView([30.4383, -84.2807], 15);


	  	// var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	  	// 	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	  	// 	'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
	  	// 	mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

	  	// L.tileLayer(mbUrl, {
	  	// 	id: 'uafrazier.o3ecma8l',
	  	// 	attribution: mbAttr
	  	// }).addTo(header_map);

	  	L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	  		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	  		subdomains: 'abcd',
	  		minZoom: 1,
	  		maxZoom: 16,
	  		ext: 'jpg'
	  	}).addTo(header_map);

	  	//basic leaflet map
	  	var map = L.map('basicMap').setView([30.4383, -84.2807], 15);

	  	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  	}).addTo(map);


	  	// map with bike stations

	  	const basemapLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	  	});

	  	var paceBikeMap = L.map('paceBikes', {
	  		center: [30.4383, -84.2807],
	  		zoom: 13,
	  		layers: [basemapLayer]
	  	});

	  	// Let's add some data of pace bike racks in Tallahassee
	  	fetch('../data/Pace_Bike_Racks_View.json')
	  		.then(function (response) {
	  			if (response.ok === true) {
	  				return response.json(); // our data was fetched successfully
	  			} else {
	  				alert('Geojson request failed.');
	  			}
	  		})
	  		.then(function (bikeRacks) {
	  			L.geoJSON(bikeRacks, {
	  				// style: function (feature) {
	  				//     return feature.properties && feature.properties.style;
	  				// },
	  				// pointToLayer: function (feature, latlng) {
	  				//     return L.circleMarker(latlng, {
	  				//         radius: 8,
	  				//         fillColor: "#ff7800",
	  				//         color: "#000",
	  				//         weight: 1,
	  				//         opacity: 1,
	  				//         fillOpacity: 0.8
	  				//     });
	  				// }
	  			}).addTo(paceBikeMap);
	  		});

	  	//map with scroll wheel deactivated
	  	var mapa = L.map('mapa', {
	  		scrollWheelZoom: false
	  	}).setView([30.4383, -84.2807], 15);

	  	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	  	}).addTo(mapa);

	  	// map with ESRI leaflet

	  	var esriLeafletMap = L.map('esriLeaflet', {
	  		center: [30.4383, -84.2807],
	  		zoom: 15
	  	});

	  	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
	  	}).addTo(esriLeafletMap);

	  	// add our esri feature layer
	  	L.esri.featureLayer({
	  		url: 'https://services.arcgis.com/ptvDyBs1KkcwzQNJ/arcgis/rest/services/Pace_Bike_Racks/FeatureServer/0'
	  	}).addTo(esriLeafletMap);
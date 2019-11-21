	  	//header map
	  	var header_map = L.map('header_map', {
	  		scrollWheelZoom: false,
	  		zoomControl: false
	  	}).setView([30.4383, -84.2807], 15);

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


	  	// Single marker popup
	  	var singleMarkerPopupMap = L.map('singleMarkerPopup', {
	  		scrollWheelZoom: false
	  	}).setView([30.4383, -84.2807], 15);

	  	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  	}).addTo(singleMarkerPopupMap);

	  	const singleMarkerPopupMarker = L.marker([30.4383, -84.2807]);
	  	singleMarkerPopupMarker.bindPopup('Hello world');
	  	singleMarkerPopupMarker.addTo(singleMarkerPopupMap);



	  	// map with bike stations

	  	const basemapLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	  	});

	  	var paceBikeMap = L.map('paceBikes', {
	  		scrollWheelZoom: false,
	  		center: [30.4383, -84.2807],
	  		zoom: 13,
	  		layers: [basemapLayer]
	  	});

	  	// Let's add some data of pace bike racks in Tallahassee
	  	// fetch('./Pace_Bike_Racks_View.json')
	  	fetch('https://opendata.arcgis.com/datasets/73276aad738740b69ce6d86a9350abde_0.geojson')
	  		.then(function (response) {
	  			if (response.ok === true) {
	  				return response.json(); // our data was fetched successfully
	  			} else {
	  				alert('Geojson request failed.');
	  			}
	  		})
	  		.then(function (bikeRacks) {
	  			L.geoJSON(bikeRacks, {
	  				// style: function (feature) { // you can add some style if you want
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

	  	// map with styled bike stations

	  	var styledPaceBikes = L.map('styledPaceBikes', {
	  		scrollWheelZoom: false,
	  		center: [30.4383, -84.2807],
	  		zoom: 13
	  	});

	  	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	  		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  	}).addTo(styledPaceBikes);

	  	var paceBikeIcon = new L.Icon({
	  		iconSize: [35, 27],
	  		iconAnchor: [13, 27],
	  		popupAnchor: [1, -24],
	  		iconUrl: './images/bicycle.png'
	  	});


	  	// Let's add some data of pace bike racks in Tallahassee
	  	fetch('./Pace_Bike_Racks_View.json')
	  		.then(response => {
	  			if (response.ok === true) {
	  				return response.json(); // our data was fetched successfully
	  			} else {
	  				alert('Geojson request failed.');
	  			}
	  		})
	  		.then(bikeRacks => {
	  			L.geoJSON(bikeRacks, {
	  				pointToLayer: function (feature, latlng) {

	  					const popup = L.popup().setContent(
	  						"I'm a hippity hoppity pace bike docking location");
	  					const marker = L.marker(latlng, {
	  						icon: paceBikeIcon
	  					});
	  					marker.bindPopup(popup);

	  					return marker;
	  				}
	  			}).addTo(styledPaceBikes);
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
	  		scrollWheelZoom: false,
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


	  	// Storm tracks

	  	var stormTracksMap = L.map('stormTracks', {
	  		scrollWheelZoom: false
	  	}).setView([0, 0], 2);

	  	const hurricaneColors = {
	  		0: '#00faf4',
	  		1: '#ffffcc',
	  		2: '#ffe775',
	  		3: '#ffc140',
	  		4: '#ff8f20',
	  		5: '#ff6060'
	  	}

	  	subHurricaneColor = {
	  		'Tropical Depression': '#5ebaff	',
	  		'Subtropical Storm': '#00faf4',
	  		'Tropical Storm': '#00faf4',
	  		'Disturbance Storm': '#80ccff',
	  	}

	  	var Esri_WorldImagery = L.tileLayer(
	  		'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	  			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  		}).addTo(stormTracksMap);


	  	let xhr = new XMLHttpRequest();
	  	xhr.open('GET', './hurricanes.json');
	  	xhr.setRequestHeader('Content-Type', 'application/json');
	  	xhr.responseType = 'json';
	  	xhr.onload = function () {
	  		const hurricaneData = xhr.response.features
	  		if (xhr.status !== 200) return

	  		const hurricanesLayer = L.geoJSON(hurricaneData, {}).addTo(stormTracksMap);

	  		hurricanesLayer.eachLayer((layer) => {
	  			if (layer.feature.properties.SS > 0) {
	  				layer.setStyle({
	  					"color": hurricaneColors[layer.feature.properties.SS],
	  					"weight": 8,
	  					"opacity": 0.75
	  				})
	  			} else {
	  				layer.setStyle({
	  					"color": subHurricaneColor[layer.feature.properties.STORMTYPE],
	  					"weight": 8,
	  					"opacity": 0.75
	  				})

	  			}

	  			const popupContent = L.popup().setContent(`Hurricane name: ${layer.feature.properties.STORMNAME} <br>
                                                Hurricane strength: ${layer.feature.properties.STORMTYPE}`);
	  			layer.bindPopup(popupContent, {
	  				closeButton: false,
	  			});

	  			layer.on('mouseover', () => {
	  				layer.setStyle({
	  					color: 'red'
	  				});
	  				layer.openPopup();

	  			});

	  			layer.on('mouseout', () => {
	  				layer.setStyle({
	  					color: hurricaneColors[layer.feature.properties.SS]
	  				});
	  				layer.closePopup();
	  			});
	  		});

	  	};
	  	xhr.send();


	  	// custom fill polygons map

	  	var customFillPolygonsMap = L.map('customPolygonFill', {
	  		// renderer: L.canvas()
	  	}).setView([27.6, -81.5], 8);
	  	var Esri_WorldImagery = L.tileLayer(
	  		'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	  			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  		}).addTo(customFillPolygonsMap);


	  	const lakes = L.esri.featureLayer({
	  		url: 'https://ca.dep.state.fl.us/arcgis/rest/services/OpenData/LAKES/MapServer/0/',
	  		where: "SHAPE.AREA > 10000000",
	  		style: function () {
	  			return {
	  				fill: 'url(../images/kermit.gif)',
	  			}
	  		}
	  	}).addTo(mymap);
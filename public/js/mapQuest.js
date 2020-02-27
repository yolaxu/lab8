function initMap() {
	// add your code here
	L.mapquest.key = 'kyp3hKDomOG6vUvPdZQ6IxwBIIyWN36b';

	var map = L.mapquest.map('map',{
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomcontrol: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}
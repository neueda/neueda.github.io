(function() {
    var coords = [56.9086, 24.0829];
    var map = L.map('map', {
        scrollWheelZoom: false
    }).setView(coords, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(coords).addTo(map)
        .bindPopup('Vienības gatve 109, Rīga, LV-1058 <br> 6th floor, office 6.11.')
        .openPopup();
}());

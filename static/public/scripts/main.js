(function () {
    if ($('#neueda-map').length !== 1) {
        return;
    }
    var coords = [56.9086, 24.0829];
    var map = L.map('neueda-map', {
        scrollWheelZoom: false
    }).setView(coords, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(coords).addTo(map)
        .bindPopup('Vienības gatve 109, Rīga, LV-1058 <br> 6th floor, office 6.11.')
        .openPopup();
}());

(function () {
    $('.smooth-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
                '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}());

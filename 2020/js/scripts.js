AOS.init();

//Select price
$('select.region').on('change', function () {
    $(".price").html(this.value);
});

// validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//google maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(45.5035, -73.5685),
        //map customization styles
        styles: [{
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
                    }, {
                "hue": "#ff0000"
                    }]
                }]
    });
    // custom Le Burger Week icon for Maps
    //    var image = './img/poutine-marker.svg';

    var image = {
        url: "./img/burger-marker.svg", // url
        scaledSize: new google.maps.Size(69, 69), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // Example of my location
    var marker = new google.maps.Marker({
        position: {
            lat: 45.5035,
            lng: -73.5695
        },
        map: map,
        title: 'My location'
    });

    // First restaurant
    var burgerMarker1 = new google.maps.Marker({
        position: {
            lat: 45.5035,
            lng: -73.5685
        },
        map: map,
        icon: image,
        title: 'Restaurant 1'
    });

    var contentString1 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./burger.html" class="grid-burger__item">' +
        '<img src="./img/photo-burger1.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="burger-name">Poutine Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$18</span>' +
        '<span class="distance">1.2km</span>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
    burgerMarker1.addListener('click', function () {
        infowindow1.open(map, burgerMarker1);
        infowindow2.close(map, burgerMarker2);
        infowindow3.close(map, burgerMarker3);
        infowindow4.close(map, burgerMarker4);
    });

    // Second restaurant
    var burgerMarker2 = new google.maps.Marker({
        position: {
            lat: 45.5045,
            lng: -73.5665
        },
        map: map,
        icon: image,
        title: 'Restaurant 2'
    });
    var contentString2 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./burger.html" class="grid-burger__item">' +
        '<img src="./img/photo-burger2.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="burger-name">Poutine Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$18</span>' +
        '<span class="distance">1.2km</span>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    burgerMarker2.addListener('click', function () {
        infowindow2.open(map, burgerMarker2);
        infowindow1.close(map, burgerMarker1);
        infowindow3.close(map, burgerMarker3);
        infowindow4.close(map, burgerMarker4);
    });

    // Third restaurant
    var burgerMarker3 = new google.maps.Marker({
        position: {
            lat: 45.5045,
            lng: -73.5689
        },
        map: map,
        icon: image,
        title: 'Restaurant 3'
    });
    var contentString3 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./burger.html" class="grid-burger__item">' +
        '<img src="./img/photo-burger3.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="burger-name">Poutine Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$18</span>' +
        '<span class="distance">1.2km</span>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    burgerMarker3.addListener('click', function () {
        infowindow3.open(map, burgerMarker3);
        infowindow2.close(map, burgerMarker2);
        infowindow1.close(map, burgerMarker1);
        infowindow4.close(map, burgerMarker4);
    });

    // Fourth restaurant
    var burgerMarker4 = new google.maps.Marker({
        position: {
            lat: 45.5025,
            lng: -73.57
        },
        map: map,
        icon: image,
        title: 'Restaurant 4'
    });
    var contentString4 =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<a href="./burger.html" class="grid-burger__item">' +
        '<img src="./img/photo-burger4.jpg" class="img-map" alt="...">' +
        '<span class="resto-name">Restaurant Name</span>' +
        '<span class="burger-name">Poutine Name</span>' +
        '<div class="d-flex justify-content-between">' +
        '<span class="price">$18</span>' +
        '<span class="distance">1.2km</span>' +
        '</div>' +
        '</a>' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    burgerMarker4.addListener('click', function () {
        infowindow4.open(map, burgerMarker4);
        infowindow2.close(map, burgerMarker2);
        infowindow3.close(map, burgerMarker3);
        infowindow1.close(map, burgerMarker1);
    });

}

//toggle map view
$(function () {
    $("#customSwitch1").change(function () {
        $("#resultsMap").toggleClass("d-block", this.checked)
        $("#resultsGrid").toggleClass("d-none", this.checked)
    }).change();
});

// modal data mirror for prottotype
$(".grid-burger__item").click(function() {
    var restoName = $(this).find(".resto-name").html();
    var burgerName = $(this).find(".burger-name").html();
    var burgerPrice = $(this).find(".price").html();
    var burgerImage = $(this).find("img.img-burger").attr("src");
    $(".modal-resto").html(restoName);
    $(".modal-burger").html(burgerName);
    $(".modal-price").html(burgerPrice);
    $('.modal-photo').attr('src', burgerImage);
});
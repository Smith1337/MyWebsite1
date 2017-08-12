//initialize Google Maps
function initMap() {
  var location = {lat:  43.64393, lng: -79.378189};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

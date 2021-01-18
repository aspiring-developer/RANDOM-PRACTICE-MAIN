//Map script

 //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBNlqKXOpDlK_yYaaFqLpacVf4mtrc7wRI
    let map;

    function initMap() {
      // This Lat/Lng is for Apex, NC
      let myLatLng = { lat: 35.835292, lng: -78.606045 };
      map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 8,
      });
      const customIcon = {
        url: "/shiva-small.png",
        scale: 1,
      };

      //Map marker
      new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello, how are you?",
        draggable: true,
        icon: customIcon,
      });
    }

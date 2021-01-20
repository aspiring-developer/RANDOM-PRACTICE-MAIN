    let map;

    function initMap() {
      // This Lat/Lng is for a place in Raleigh, NC
      let myLatLng = { lat: 35.835292, lng: -78.606045 };

      map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 8,
      });
      const customIcon = {
        url: "/icon-custom-small.png",
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

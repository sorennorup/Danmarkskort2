<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>KML Click Capture Sample</title>
    <style>
      html, body {
        height: 370px;
        padding: 0;
        margin: 0;
        }
      #map {
       height: 600px;
       width: 600px;
       overflow: hidden;
       float: left;
       border: thin solid #333;
       }
      #capture {
       height: 360px;
       width: 480px;
       overflow: hidden;
       float: left;
       background-color: #ECECFB;
       border: thin solid #333;
       border-left: none;
       }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <div id="capture"></div>
    <script>
      var map;
      var src = 'http://uudanmark.dk/kommunegraenser.kml';

      /**
       * Initializes the map and calls the function that loads the KML layer.
       */
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(55.1916538649462,11.678901769377), 
          zoom: 9,
          mapTypeId: 'terrain'
        });
        var num = map.data.loadGeoJson('js/faxe.json')
         var color = "yellow"
        if("UU Sydsj�lland" == "UU Sydsj�lland")
        // get the data on UU Sydsj�lland
        // if(data < lowerQuartile){color = "green"}
        map.data.loadGeoJson('js/kommuner.json');
        map.data.loadGeoJson('js/naestved.json');
        map.data.loadGeoJson('js/faxe.json');
        
        
        map.data.setStyle({
        
        fillColor: color
});
        map.data.addListener('mouseover', function(event) {
       map.data.overrideStyle(event.feature, {fillColor: 'red'});
});
      }

      /**
       * Adds a KMLLayer based on the URL passed. Clicking on a marker
       * results in the balloon content being loaded into the right-hand div.
       * @param {string} src A URL for a KML file.
       */
      function loadKmlLayer(src, map) {
        var kmlLayer = new google.maps.KmlLayer(src, {
          suppressInfoWindows: false,
          preserveViewport: false,
          map: map
        });
        google.maps.event.addListener(kmlLayer, 'click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
  </body>
</html>
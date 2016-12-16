<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>KML Click Capture Sample</title>
    <script src="js/uucentrelist.js"></script>
     <script type="text/javascript" src="js/calculateDataController.js"></script>
   
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
    
    </style>
  </head>
 
    <div id="map"></div>
    <div id="capture"></div>
      <script src="js/uucentrelist.js"></script>
    <script>
      var dArray = [2,5,7,9,15,23,13,20]
      var getData = new CalculateData(dArray)
      //alert(getData.calMedian());
      
      var map;
      var src = 'http://uudanmark.dk/kommunegraenser.kml';

      /**
       * Initializes the map and calls the function that loads the KML layer.
       */
      function initMap() {
        var median = getData.calMedian();
      var lowerQuar = getData.findLowerQuartile();
      
      var higherQuar = getData.findhigherQuartile();
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(55.1916538649462,11.678901769377), 
          zoom: 9,
          mapTypeId: 'terrain'
        });
        
         var color;
        var data  = 15;
        // get the data on UU Sydsj¾lland
        if(data < lowerQuar){color = "green"}
       else if (data > lowerQuar && data < median) {
         color = "yellow"
        }
        else if (data > median){
          color = "red"
          
        }
        if (kommune_daekningJson[0].name == "UU Sjælland Syd"){
            for(var i = 0; i <= kommune_daekningJson[0].kommuner.length; i++){
            var res = "Json-files/"+kommune_daekningJson[0].kommuner[i];    
            map.data.loadGeoJson(res);
            }
          }
        
        
        map.data.setStyle({
        
        fillColor: color
});
        map.data.addListener('mouseover', function(event) {
        map.data.overrideStyle(event.feature, {fillColor: 'red'});
});
      }

    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
  </body>
</html>
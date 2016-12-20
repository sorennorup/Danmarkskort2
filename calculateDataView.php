<?php
  require 'mapclasses/Map.php';
  $podioData = new Map(6229597);
  $podioFieldData = $podioData->exValues;
  print_r($podioFieldData);
  
  
?>
   <!-- View -->
  <html>
    <head>
      <script type="text/javascript" src="js/CalculateDataViewController.js"></script>
          <script type="text/javascript" src="js/calculateDataController.js"></script>
           <script src="js/uucentrelistJson.js"></script>
           <style>
      html, body {
        height: 370px;
        padding-left:15% ;
        margin: 0;
        }
      #map {
       height: 600px;
       width: 600px;
       overflow: hidden;
       float: left;
       border: thin solid #333;
       }
       #box {
        position: relative;
       
       }
    
    </style>
      </head>
      <body onload="initialize(dArray)">
         
        <h1>Calculate array of data and place it in intervals of quartines</h1>
        <div id = "box"> </div>
        <div id = "map"></div>
     
        
    <script>
      var centerInfo = <?php echo json_encode($podioFieldData); ?>;
      var centername;
      var dArray = [5,30,23,10,25,22,30,27,17]
      var getData = new CalculateData(dArray)
      //alert(getData.calMedian());
      
      var map;
      
      
      /**
       * Initializes the map and calls the function that loads the Geojson layer.
       */
      function initi(){
        initMap();
        initialize(dArray)
      }
      
      
      function initMap() {
       
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(55.1916538649462,11.678901769377), 
          zoom: 9,
          mapTypeId: 'terrain'
        });
        
        var color;
        var infoWindow = new google.maps.InfoWindow;
        
          // create a new dataviewcontroller object
        var dataView = new CalculateDataViewController(dArray)
       
        // this is going to be a field value from Podio
        var data  =  10;
        
        //set the fillcolor variable
        color = dataView.calculateColor(data);
       
        //loop through the json object
        for(var j = 0; j < centerInfo.length; j++){
            centername = centerInfo[j][0] 
        
        // find the matching center data and loop through all the kommunerfiles
          for(var k = 0; k < kommune_daekningJson.length; k++){
          if (kommune_daekningJson[k].name == centername ){
            for(var i = 0; i < kommune_daekningJson[k].kommuner.length; i++){
              var res = "Json-files/"+kommune_daekningJson[k].kommuner[i];    
              map.data.loadGeoJson(res);
               
            }
          }
          }
           // style the color of the layer with color variable
          map.data.setStyle({
            fillColor: color,       
        });
            // open an infowindow when mouseover the whole centerareaj
            
          map.data.addListener('mouseover', function(event) {
            var contentString = '<h5>'+ kommune_daekningJson[0].name+'</h5><div style = "width:100px; height:50px; font-size:25px;text-align: center;" >' + data + ' % </div>';
            infoWindow.setContent(contentString);
            infoWindow.setPosition(new google.maps.LatLng(55.255019,12.119075));
            infoWindow.open(map);
});
          // close the infowindow
            map.data.addListener('mouseout',function(event){
            infoWindow.close(map)
          
        });
       }
  
      }

    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
  </body>
</html>
        
    
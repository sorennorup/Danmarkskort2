<?php
  require 'mapclasses/Map.php';
  $podioData = new Map(17379371);
  $podioFieldData = $podioData->exValues;
  
  
  
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
      <body onload = " initialize(dArray)">
         
        <h1>Calculate array of data and place it in intervals of quartines</h1>
        <div id = "box"> </div>
        <div id = "map"></div>
     
        
    <script>
      // turn the php array into a javascript array
      var centerInfo = <?php echo json_encode($podioFieldData); ?>;
      
      var centername;
      // The data input
      var dArray = [5,15,20,17,29];
           
            
               
      
     
      
      var getData = new CalculateData(dArray)
      
      // create a new dataviewcontroller object
      var dataView = new CalculateDataViewController(dArray)
     
      var map;
      
        var infoWindow = new google.maps.InfoWindow;
      
      
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
          zoom: 7,
          mapTypeId: 'terrain'
        });
        
        //var color;
      
  
        //loop through the json object
        for(var j = 0; j < centerInfo.length; j++){
            centername = centerInfo[j][0]
            
        
        // find the matching center data and loop through all the kommunerfiles
           for(var k = 0; k < kommune_daekningJson.length; k++){
               
                  if (centername == kommune_daekningJson[k].name ) {
                       
                      data = centerInfo[j][11]
              
                    }
                      if (kommune_daekningJson[k].name == centername ){
              
                for(var i = 0; i < kommune_daekningJson[k].kommuner.length; i++){
             
                  var res = "Json-files/"+kommune_daekningJson[k].kommuner[i];    
                  map.data.loadGeoJson(res);
                  map.data.setStyle(function(feature){
                  
                  //loop through the centerarray
               
                  
                  // set the colorproperty if the property of the json dataobject is the name of the uucenter
                     for(var p = 0; p < centerInfo.length; p++){
                      
                      if(feature.getProperty('uucenter')  == centerInfo[p][0] ){
                       
                       
                       feature.setProperty('colVar', centerInfo[p][11])
                      var colorvariable = feature.getProperty('colVar')
                      
                    // call the calculateColormethod to findout the color
                        var color = dataView.calculateColor(colorvariable)
                        
                   }
                  
              
                     }
                
                  // return the style object
                return{              
                        fillColor: color
                        
                }
           });          
               }           
           }                
       }
          // set the colors of the mapshapes
                
       }
           // add listeners to the map.data object   
        map.data.addListener('mouseover', mouseInToRegion);
        map.data.addListener('mouseout', mouseOutOfRegion);
        
        
        /**
       * Responds to the mouse-over event on a map shape (uucenter).
       *
       * @param {?google.maps.MouseEvent} e
       */
        function mouseInToRegion(e) {
            
        // set the hover state so the setStyle function can change the border
         e.feature.setProperty('state', 'hover');
         for(var i = 0; i < centerInfo.length; i++){
           if (e.feature.getProperty('uucenter') == centerInfo[i][0]) {
            
             var d = e.feature.getProperty('newprop')
             alert(centerInfo[i][0]+" "+centerInfo[i][11]+" %")
                          
            }     
        }      
    }
      /**
       * Responds to the mouse-out event on a map shape (uucenter).
       *
       * @param {?google.maps.MouseEvent} e
       */
      function mouseOutOfRegion(e) {
        // reset the hover state, returning the border to normal
        //e.feature.setProperty('state', 'normal');
        }
          
    }
      
  

    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
  </body>
</html>
        
    
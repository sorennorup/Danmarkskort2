<?php 
  require 'mapclasses/Map.php';
  error_reporting(E_ALL);
ini_set('display_errors', 1);
  $app_id = 17379371; // get app id from a mySQL tabel (not created yet)
  $app_id2 = 17489549;
  $podioData = new Map($app_id2);
  $podioFieldData = $podioData->exValues;
  $podioFieldNames = $podioData->fieldNames;
 
  //finding the indexnumber for the datafield to use if its there
  if(true){
    $numberFieldForMap = array_search("Procentsats(vises på kort)", $podioFieldNames); 
    }
    else{
    echo "forkert";
    }
  
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
        
        }
     #wrapper{
      width: 750px;
      margin-top: 0;
      margin-right: auto;
      margin-bottom: 0;
      margin-left: auto;
      
     }
      #map {
       height: 600px;
       width: 600px;
       overflow: hidden;
       float: left;
       border: thin solid #333;
       }
       #box {
        float:right;
        margin-top:20px;
       
       }
    
    </style>
      </head>
      <body onload = "initialize(dArray)">
      <div id = "wrapper">
      <h1>Calculate array of data and place it in intervals of quartines</h1>
      <button onclick="initMap(7,'1')">Danmark</button>
      <button onclick="initMap(9,'2')">Sjælland/Hovedstaden</button>
      <button onclick="initMap(8,'3')">Nord og MidtJylland</button>
      <button onclick="initMap(8,'4')">Midtjylland og Syddanmark</button>
      
      <div id = "box"> </div>
      <div id = "map"></div>
        </div>
          
    <script>
      // turn the php array into javascript array
      var centerInfo = <?php echo json_encode($podioFieldData); ?>;
     
      // turn the php variable into javascript variable
      var indexForNumber = <?php echo $numberFieldForMap;?>
      
      var centername;
    
      // create the data input array from the Podio field
      var dArray = [];     
      dArray = createDataArray(indexForNumber,kommune_daekningJson,centerInfo);
      dArray = dArray.sort(function(a, b){return a-b;});
    
      
      // create a new datamodelobject
      var getData = new CalculateData(dArray);
      
      // create a new dataviewcontroller object
      var dataView = new CalculateDataViewController(dArray);
      
      // create the mapobject
      var map;
     
      /**
       * Initializes the map and calls the function that loads the Geojson layer.
       */
    
      function initMap(zoom = 7,place = '1') {
        //Create the infowindow object
        
        var infoW = new google.maps.InfoWindow();
        
         place = place;
       
        if (place == "1") {
         zoom = zoom;       
          var center = new google.maps.LatLng(56.266427,10.292759);
        }     
        else if (place == "2"){
          zoom = zoom;    
          var center = new google.maps.LatLng(55.635889, 12.623913899999934); 
        }
        else if (place == "3"){
          var center=new google.maps.LatLng(56.633072, 9.811927999999966);
          zoom = zoom;
        }
        else if (place == "4"){
          
          var center = new google.maps.LatLng(55.472174, 9.134411);
          zoom = zoom;
        }
        map = new google.maps.Map(document.getElementById('map'), {
          center: center, 
          zoom: zoom,
          mapTypeId: 'terrain',
          scrollwheel: false
        });
 
 
        //loop through the json object
        for(var j = 0; j < centerInfo.length; j++){
            // find the centername from the Podio array
            centername = centerInfo[j][0];
            
        // find the matching center data and loop through all the kommunerfiles 
           for(var k = 0; k < kommune_daekningJson.length; k++){
               
              if (kommune_daekningJson[k].name == centername ){
              
                  for(var i = 0; i < kommune_daekningJson[k].kommuner.length; i++){
             
                    var res = "Json-files/"+kommune_daekningJson[k].kommuner[i];    
                    map.data.loadGeoJson(res);
                    map.data.setStyle(function(feature){
                     //loop through the centerarray
                    // set the colorproperty if the property of the json dataobject is the name of the uucenter
                    for(var p = 0; p < centerInfo.length; p++){
                      if (centerInfo[p][indexForNumber]!= "ikke angivet") {
                           
                        if(feature.getProperty('uucenter')  == centerInfo[p][0]  ){
                            //Set the colorvariable from podio. You have to parse it into an integer
                          var colorvariable = parseInt(centerInfo[p][indexForNumber]);
                      
                            // call the calculateColormethod to findout the color
                          var color = dataView.calculateColor(colorvariable);
                            
                          }
                          
          
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
    }
           // add listeners to the map.data object   
        map.data.addListener('mouseover', mouseInToRegion);
        map.data.addListener('click', mouseOutOfRegion);
        
        
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
              
            var kommune = e.feature.getProperty('name')  
            var location = e.latLng;
             
            infoW.setContent(centerInfo[i][0]+" </br> "+centerInfo[i][indexForNumber]+" %"+"<br/>"+ kommune)
        
              
            infoW.setPosition(location)   
            infoW.open(map)
            
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
         infoW.close(map)
        }
    }
    
    
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
  </body>
</html>
        
    
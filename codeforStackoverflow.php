<?php
   

?>
<html>
    <head>
        <script src="js/jquery.min.js"></script>
          <script src="js/areaObject.js"></script>
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
      </style>
      </head>
      <body>
         
        <h1>Calculate array of data and place it in intervals of quartines</h1>
        <div id = "box"> </div>
        <div id = "map"></div>
     
        <script>
        var color;
        
       // array containing the extern data
        var centerInfo = [
            ['value1','value2','value3','value4'],
            ['value11','value12','value13','value14'],
            ['value121','value22','value23','value24']
            ];
       // json object containing geoJsonFileNames
        var arrayContainingJsonFileNames = [
            {"name": "UU Sjælland Syd" ,"kommuner":['naestved.json','kommuner.json','faxe.json']},
            {"name": "UU Aarhus Samsø","kommuner":['aarhus.json','samsoe.json']},
            {"name": "UU Aalborg","kommuner":['aalborg.json']}
            ]
        
       function initMap(){
        
        
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(55.1916538649462,11.678901769377), 
          zoom: 7,
          mapTypeId: 'terrain'
        });
       
         
   // arrayContainingJsonFileNames[k-1].name + centerInfo[k-1][2]
       var areaObj;
        //loop through the array object
         for(var j = 0; j < centerInfo.length; j++){
                  
        
            for(var i = 0; i < arrayContainingJsonFileNames[j].kommuner.length; i++){
                areaObj = new areaObject(map,arrayContainingJsonFileNames[j].kommuner)
  
            }
            
          map.data.setStyle({
            fillColor: "red",       
            });
            
           
        }
        
        
        
        
    }
</script>

 <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
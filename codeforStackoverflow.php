<html>
    <head>
        <script src="js/jquery.min.js"></script>
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
      <body onload = "initMap()">
         
        <h1>Calculate array of data and place it in intervals of quartines</h1>
        <div id = "box"> </div>
        <div id = "map"></div>
     
        <script>
    
    
       // array containing the extern data
       var centerInfo = [
        ['value1','value2','value3','value4'],
        ['value11','value12','value13','value14'],
        ['value121','value22','value23','value24']
       ];
       // json object ontaining geoJsonFileNames
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
    
        var infoWindow = new google.maps.InfoWindow;
        
          // create a new dataviewcontroller object
       
        //loop through the json object
        for(var j = 0; j < centerInfo.length; j++){
                   
            for(var i = 0; i < arrayContainingJsonFileNames[j].kommuner.length; i++){
                var url = "http://uudanmark.dk/json-files/"+arrayContainingJsonFileNames[j].kommuner[i]
                alert(url)
                getJSON(url).then(function(data) {
                 alert('Your Json result is:  ' + data.result); //you can comment this, i used it to debug
                       map.data.loadGeoJson(data.result);
                 //display the result in an HTML element
                },
        function(status) { //error detection....
            alert('Something went wrong.');
                });
                
                
                
             // var res =  "json-files/"+arrayContainingJsonFileNames[j].kommuner[i]+ "" 
            
                      map.data.loadGeoJson(res);
                      
                    
             
               
            }
            
          map.data.setStyle({
            fillColor: "red",       
        });
            
          map.data.addListener('mouseover', function(event) {
            alert(arrayContainingJsonFileNames[j-1].name + centerInfo[j-1][2])
            
});
       }
       }
       
       var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};



    
</script>

 <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
    </script>
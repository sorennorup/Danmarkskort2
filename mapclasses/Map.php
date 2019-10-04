<?php

require 'PodioConnect.php';

class Map{
            private $app_id;
            public $exValues = array();
            public $fieldNames = array();
  
    function __construct($app_id){
            $this->appId = $app_id;        
            $this->getPodioData();
        }

    function getPodioData(){
        try{
            $podio_data=new PodioConnect($this->appId);          
            $this->exValues = $podio_data->getAllFieldValues();
            $this->fieldNames = $podio_data->getAllFieldNames();  
            }
        catch(PodioError $e) {
            echo $e;           
            }       
        }
    
    public function createMap(){          
            $count = 0;
            $fields = $this->fieldNames;
            $keys = json_encode($fields);
            $values = $this->exValues;          
?>
        <script>
            var centerInfo = <?php echo json_encode($values); ?>;
            var keyStr = <?php echo $keys; ?>; 
        </script>
            
            <!DOCTYPE html>
            <html>
            <head>
            <meta charset="UTF-8">   
            <script type="text/javascript" src="js/objectContrukt.js"> </script>
            <script type="text/javascript" src="js/polygon.js"> </script>
            <script src="js/jquery.min.js"></script>
            <script src="js/jquery-ui.min.js"></script>
            <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript" src="js/uucentre.js"></script>
            <script type="text/javascript" src="js/uucentrelist.js"></script>
            <script type="text/javascript" src="js/uucentrelistKml.js"></script>
            <link rel="stylesheet" type="text/css" href = "css/style.css">
            <script>
            google.charts.load('current', {packages: ['corechart']});
            google.charts.setOnLoadCallback(drawChart);
            
            var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
            
            map.setOptions({zoomControl:true, scrollwheel: false ,navigationControl: false,
                mapTypeControl: true,
                scaleControl: true,
                draggable: true,
                zooom:true,
                //styles: styles
                }  
        )};
    
    var obj = createCenterObject();
 
        for(var i=0;i<jArray.length;i++){
          obj[i].marker(map).setMap(map);
        }         
              center.marker.setMap(map);
        }   

function initialize(zoom,place) {
        var place = place;
         if (place=="1") {
        var center=new google.maps.LatLng(56.266427,10.292759);
        var zoom = zoom;
        }
        else if (place=="2"){
        var center=new google.maps.LatLng(55.635889, 12.623913899999934);
        var zoom = zoom;
        }
        else if (place=="3"){
        var center=new google.maps.LatLng(56.633072, 9.811927999999966);
        var zoom = zoom;
        }
        else if (place=="4"){
        var center=new google.maps.LatLng(55.472174, 9.134411);
        var zoom = zoom;
        } 
        else {
        var center=new google.maps.LatLng(56.266427,10.292759);
        }
        var mapProp = {
                center:center,
                zoomControl:false,
                scaleControl:false,
                scrollwheel:false,
                keyboardShortcuts:false,
                disableDefaultUI: false,
                zoom:zoom,
        };
} 

</script>
          
        </head>
        <body onload="initialize(7,'1','googleMap')">
        <button onclick="initialize(7,'1','googleMap')">Danmark</button>
        <button onclick="initialize(8,'2','googleMap')">Sjælland/Hovedstaden</button>
        <button onclick="initialize(8,'3', 'googleMap')">Nord og MidtJylland</button>
        <button onclick="initialize(8,'4', 'googleMap')">Midtjylland og Syddanmark</button>

        <select id="names" onclick="zoominOnCenter(18)"></select>
        <div id="googleMap" style="width:100%; height: 100%;"> </div>
    
            <div id="googleMap">  </div>
            <div id="chart_div"></div>
<script>
      
        var obj2 = createCenterObject();
        for (var i=0; i<obj2.length; i++) {
        document.getElementById("names").options[i] = new Option(obj2[i].centerName, obj2[i].lat+","+obj2[i].lng);
   
}

function onIndexClicked() {
        var elementId =  document.getElementById("names");
        var space = elementId.options[elementId.selectedIndex].value;
        return space;
        }
function zoominOnCenter(zoom){
       
      var latLng = onIndexClicked();
      splitStr = latLng.split(",");
      var center = new google.maps.LatLng(parseFloat(splitStr[0]),parseFloat(splitStr[1]));
    var zoom = zoom; 
    
    var mapProp = {
        center:center,
        zoomControl:false,  
        scaleControl:false,
        scrollwheel:false,
        keyboardShortcuts:false,
        disableDefaultUI: false,
        zoom:zoom,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    //styling the map
    map.setOptions({zoomControl:true, scrollwheel: false ,navigationControl: false,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        zooom:true,
        //styles: styles
        });

       var obj = createCenterObject();

     for(var i=0;i<obj2.length;i++){
             obj[i].marker(map).setMap(map);
        }
        center.marker.setMap(map);  
        }

</script>
         
           </body>

    <!-- the Api key loadet asyncrounus -->
            <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
            </script>
</html>

<?php
}  
    
}
?>
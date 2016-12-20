     // Markerer med farve UU centres dækning af kommuner
     
     var url = "http://uudanmark.dk/kommuner-kml-files/";
      
 
   
             
    function getKommune(mapId,arr){
            var map = new google.maps.Map(document.getElementById(mapId));
             
            for(var i = 0; i<arr.length;i++){              
                var src = url + arr[i]
                
                loadKmlLayer(src,map);
            }          
             setStreetView(arr,map);  
                              
            }
              // Get the kmlfiles from the server and load the kmlLayer to the googlemap
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
        // Finds the kml filename that belong to the UU Center. 
   function getUUCenter(arr){
        var res;
          
        for(var i = 0; i< kommune_daekning.length; i++){
        switch (arr[0]) {
                case kommune_daekning[i].name:
                        res = kommune_daekning[i].kommuner
                        break;               
                }                           
                              
        }
         
           
         // Displays centerinfo in the infobox
         document.getElementById("info").innerHTML = 
                      
                      "<div class = 'overskrift'><b>UU Center: </b></div>" +   arr[0] +
                      "</br><b><div class = 'overskrift'> Leder:</b></div>" +  arr[1] +
                      "</br><b><div class = 'overskrift'> Adresse:</b></div>"+ arr[2] +
                      "</br><b><div class = 'overskrift'> Dækker:</b> </div>"+ arr[8];
                       
          return res;       
        
   }
   
   function backToMap(){
        document.getElementById("buttonId").addEventListener('click',function(){
                 
                        initialize(7,'1','googleMap');
                
                
                })
        
   }
   
   function setStreetView(arr,map){
        
         
   var panorama = new google.maps.StreetViewPanorama(
            document.getElemenctById("pano"),
            {
              position: {lat: 37.869260, lng: -122.254811},
              pov: {heading: 165, pitch: 0},
              zoom: 1
            });
      }

   
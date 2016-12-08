     // Markerer med farve UU centres dækning af kommuner
     
     var url = "http://uudanmark.dk/kommuner-kml-files/";
      
 
   
             
    function getKommune(mapId,arr){
            var map = new google.maps.Map(document.getElementById(mapId));
            for(var i = 0; i<arr.length;i++){              
                var src = url + arr[i]
                
                loadKmlLayer(src,map);
            }
           
            
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
   function getUUCenter(uucenter){
        var kommuner;
        var res; 
        switch (uucenter) {
                case "UU Vallensbæk":
                        res = ['vallensbaek.kml'];
                        kommuner = "Vallensbæk kommune"
                        break;             
                case  "UU Hedensted":
                        res = ['hedensted.kml'];
                        kommuner = "Hedensted kommune"
                        break;
                case "UU Jammerbugt":
                        res = ['jammerbugt.kml'];
                        break;              
                case  "UU Vejen":
                        res = ['vejen.kml'];
                        break;
                case "UU Billund":
                        res = ['billund.kml'];
                        break;               
                case  "UU Bornholm":
                        res = ['bornholm.kml'];
                        break;
                case "UU Center Syd":
                        res = ['hvidovre.kml','broendby.kml','ishoej.kml'];
                        kommuner = "Hvidovre,Brøndby og Ishøj kommune"
                        break;                
                case  "UU Center Sydfyn":
                        res = ['faaborg.kml','langeland.kml','svendborg.kml','aeroe.kml'];
                        break;
                case  "UU Djursland":
                        res = ['norddjurs.kml','syddjurs.kml'];
                        break;
                case  "UU Esbjerg":
                        res = ['esbjerg.kml','fanoe.kml'];
                        break;
                case  "UU Favrskov":
                        res = ['favrskov.kml'];
                        break;
                                          
        }
         document.getElementById("info").innerHTML = "UU Center: " + uucenter + "</br> Dækker kommuner: "+ kommuner;
         return res; 
        
        
   }
   
   function backToMap(){
        document.getElementById("buttonId").addEventListener('click',function(){
                 
                initialize(7,'1','googleMap');
                
                
                })

       

        
        
   }
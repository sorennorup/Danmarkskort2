     // Markerer med farve UU centres dækning af kommuner
     
     var url = "http://uudanmark.dk/kommuner-kml-files/";
      
 
   
             
    function getKommune(mapId,arr){
            var map = new google.maps.Map(document.getElementById(mapId));
            for(var i = 0; i<arr.length;i++){              
                var src = url + arr[i]
                
                loadKmlLayer(src,map);
            }
            
            }
 
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
        
   function getUUCenter(uucenter){
        var res; 
        switch (uucenter) {
                case "UU Vallensbæk":
                        res = ['vallensbaek.kml'];
                        break;             
                case  "UU Hedensted":
                        res = ['hedensted.kml'];
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
                
                
                
                asdfsa
        }
        
         return res; 
        
        
   }
var geocoder = new google.maps.Geocoder();

           
           var res = findLatLng("A P Møllers Vej 37, 5700 Svendborg, Danmark",geocoder);
           alert(res);
            
            
            
            function findLatLng(address,geocoderObject){
            geocoderObject.geocode( { 'address': address }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var latlng = results[0].geometry.location;
                    return latlng; 
                   
                }
                else {
                   return false; 
                }
            });
            }

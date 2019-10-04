 
  //uucenter object 
 var size;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var pinColor = "ca1d28";
var answerd = true;


var arr;
  var geocoder = new google.maps.Geocoder();

alert(args[0])

 function uuCenter(centerName,leader,adress,lat,lng){
   
  if (answerd == true) {
   pinColor = "336699";
  }
   
this.centerName = centerName;

this.leader = leader;
this.adress = adress;

this.lat = lat;
this.lng = lng;
this.space=
function(){
   var pos=new google.maps.LatLng(this.lat,this.lng);
   
    return pos;
}
zoomIt = function(){
   alert("clicked");
   
}

this.marker=
function(map){
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+pinColor);
    var mark=new google.maps.Marker({
        icon: pinImage,
        position:this.space(),
        url:this.url, 
    })
    mark.setAnimation();
     
   /*var infoW = new google.maps.InfoWindow({
         maxWidth:500,
       
        content:" <div style='width:auto;height:100px;font-family:calibri;z-index:-1; font-size: 16px;'> <b>Centernavn:</b> "+this.centerName+"<br> "+"<b>Centerleder:</b> "+this.leader+"<br/> "+"<b>Adresse:</b> "+this.adress
        +"</div>"
       
});
*/
    var infoW2 = new google.maps.InfoWindow({
      maxWidth:500,
      content:" <div style='width:auto;height:auto;font-family:calibri;z-index:-1; font-size: 18px;'>"+ this.centerName+"<p><i>Klik på ikonet nedenfor</i></p></div>"
      
      
      });
      
      google.maps.event.addListener(mark, "click", function() {
            
           infoW.open(map,mark);
           infoW2.close();
                    
    });

       google.maps.event.addListener(mark, "mouseover", function(){
         
         infoW2.open(map,mark);
         
         });
       
       google.maps.event.addListener(mark, "mouseout", function(){
         
         infoW2.close();
         
         });
      
    return mark
}



}
 

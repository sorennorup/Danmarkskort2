     
  //uucenter object
  //Creates an object of a Googlemap pin
  //and displayes the fieldvalues from a Podio app in a infowindow
   var size;
   var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
   var pinColor = "336699";
   var answerd = true;
   var mapId;



function uuCenter(mapId,arr = [], keys = [] ){
     
   this.centerName = arr[0]; // must not be changed

   this.lat = arr[3]; // must not be changed

   this.lng = arr[4]; // must not be changed

   this.propArrCreate = // set the fieldlabels and the fieldvalues in a twodimensional array
   function(){   
   
   var propArr = [];
      for(var k = 0;k<arr.length;k++ ){
         if (k!=3&&k!=4){
            propArr.push([keys[k],arr[k]])
   }
}
    
      return propArr
}

   this.space= // set the postion of the centeraddress
   function(){
      var pos=new google.maps.LatLng(this.lat,this.lng);
      return pos;
}
   this.streetView =
   function(id){
      var panorama = new google.maps.StreetViewPanorama(
            document.getElementById(id), {
              position: this.space(),
              pov: {
                heading: 34,
                pitch: 10
              }
            });
      map.setStreetView(panorama);
   }
      
   this.returnContent = // create all the content to be displayed in the infoWindow
   function(){
        
      var propertyArr = this.propArrCreate();  //get the twodimentional array created by the proparrCreate function  
     
      var str="<div style = 'width:300px;height:auto;font-family:calibri;z-index:-1; font-size: 16px;'>" //some style to display in the infowindow
      
      str+="<b>Centernavn: "+ this.centerName+"</b><br/>"// The first field will allways be centername 
        + '<button id = "kommune"> Se området UU centeret dækker</div>'
         for(var j = 0; j< propertyArr.length;j++){                     
            str+= "<b>" +propertyArr[j][0]+":</b>  "+ propertyArr[j][1]+"<br/>" // inserts the fieldtitles and the values in the content                        
            }   
            +"</div>";                  
     
      return(str)     
    }
                    
   this.marker =  // display the pin on the map og sets all the content in the infowindow
   function(map){
         
    
      var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+pinColor);
    
      var mark = new google.maps.Marker({
        icon: pinImage,
        position:this.space(),
        url:this.url, 
    })
         
      mark.setAnimation();
        
      var infoW = new google.maps.InfoWindow({
         maxWidth:800,       
         content: this.returnContent()              
});
      
      google.maps.event.addListener(infoW, 'domready', function() {         
      document.getElementById("kommune").addEventListener('click',function(){
        
         var kommuner = getUUCenter(arr);
         getKommune(mapId,kommuner);
         
         });        
    });
      
   var infoW2 = new google.maps.InfoWindow({
        maxWidth:500,
        content: " <div style='width:auto;height:auto;font-family:calibri;z-index:-1; font-size: 18px;'>"+ this.centerName+"<p><i>Klik på ikonet nedenfor</i></p></div>"
           
      });
        //Open infoW and close infoW2 when marker is clicked
        google.maps.event.addListener(mark, "click", function() {
        
         
        infoW.open(map,mark)
        //this.getElementById("kommune").addEventListener(click,function(){getKommuner(mapId,uuaarhus_samsoe)});
        infoW2.close();             
    });
     
      
          // open infoW2 when marker is mouseovered
       google.maps.event.addListener(mark, "mouseover", function(){
         
      infoW2.open(map,mark);
         
         });
       
       google.maps.event.addListener(mark, "mouseout", function(){
         
      infoW2.close();
         
         });
        
        
        
      google.maps.event.addListener(mark,"click",function(){
         
         
        });      
      return mark
}
   
}
// End of the centerObject


   function createCenterObject(mapId){     
    
      var centerObject=new Array();
       
      for (var i=0;i<centerInfo.length;i++) {       
                    
          centerObject[i]= new uuCenter(
                 mapId,
                 centerInfo[i],
                 keyStr
                 
                 );               
           }         
      return centerObject;     
     }

   function initialize(zoom,place,mapId)
{
 
   var center = new google.maps.LatLng(56.266427,10.292759);
   
 
   var mapProp = {
     center:center,
     zoomControl:false,  
     scaleControl:false,
     scrollwheel:false,
     keyboardShortcuts:false,
     disableDefaultUI: false,
     zoom:zoom,

  };  
     var map = new google.maps.Map(document.getElementById(mapId),mapProp);

   
    
//styling the map
   map.setOptions({zoomControl:true, scrollwheel: false ,navigationControl: false,
      mapTypeControl: true,
      scaleControl: true,
      draggable: true,
      zooom:true,
    
    }  
    );

     
    
    
 var regionChoords = [
      
new google.maps.LatLng(56.047500,12.557373),
new google.maps.LatLng(55.720923,12.634277),
new google.maps.LatLng(55.615589,12.744141),
new google.maps.LatLng(55.553495,12.546387),
new google.maps.LatLng(55.627996,12.337646),
new google.maps.LatLng(55.683779,12.062988),
new google.maps.LatLng(55.689972,11.931152),
new google.maps.LatLng(55.795105,11.810303),
new google.maps.LatLng(55.936895,11.898193),
new google.maps.LatLng(55.986092,11.843262),
new google.maps.LatLng(56.145550,12.271729),
new google.maps.LatLng(56.102683,12.480469)
]

      
     var bornholm = [
         new google.maps.LatLng(55.285372,14.765625),
new google.maps.LatLng(55.235228,15.007324),
new google.maps.LatLng(55.147488,15.161133),
new google.maps.LatLng(55.002826,15.040283),
new google.maps.LatLng(55.002826,15.073242),
new google.maps.LatLng(55.028004,14.837036),
new google.maps.LatLng(55.078367,14.710693),
new google.maps.LatLng(55.197683,14.699707) 
      ]
 
 
     var southDenmark = [
     new google.maps.LatLng(55.163181,10.945129),
new google.maps.LatLng(54.936038,10.844879),
new google.maps.LatLng(54.734136,10.722656),
new google.maps.LatLng(54.833918,10.604553),
new google.maps.LatLng(54.822843,10.409546),
new google.maps.LatLng(54.966578,10.198059),
new google.maps.LatLng(54.854478,9.989319),
new google.maps.LatLng(54.852896,9.733887),
new google.maps.LatLng(54.835500,9.401550),
new google.maps.LatLng(54.922407,8.657227),
new google.maps.LatLng(55.460171,8.511658),
new google.maps.LatLng(55.355697,8.432007),
new google.maps.LatLng(55.464842,8.322144),
new google.maps.LatLng(55.569028,8.088684),
new google.maps.LatLng(55.847566,8.151855),
new google.maps.LatLng(55.859900,9.184570),
new google.maps.LatLng(55.831967,9.700928),
new google.maps.LatLng(55.624895,9.832764),
new google.maps.LatLng(55.621793,10.321655),
new google.maps.LatLng(55.615589,10.612793),
new google.maps.LatLng(55.175731,10.909424),
new google.maps.LatLng(55.163181,10.997314)
          
]
     
     var Zeland = [
      
      new google.maps.LatLng(55.967650,11.777344),
new google.maps.LatLng(56.029087,11.244507),
new google.maps.LatLng(55.924586,11.502686),
new google.maps.LatLng(55.832144,11.392822),
new google.maps.LatLng(55.745666,11.315918),
new google.maps.LatLng(55.742574,10.969849),
new google.maps.LatLng(55.742574,10.865479),
new google.maps.LatLng(55.677584,11.068726),
new google.maps.LatLng(55.668291,10.953369),
new google.maps.LatLng(55.550388,11.129150),
new google.maps.LatLng(55.407189,11.178589),
new google.maps.LatLng(55.354135,11.090698),
new google.maps.LatLng(55.213356,11.255493),
new google.maps.LatLng(55.207088,11.332397),
new google.maps.LatLng(55.144349,11.711426),
new google.maps.LatLng(55.075223,11.744385),
new google.maps.LatLng(55.068932,11.689453),
new google.maps.LatLng(55.005976,11.848755),
new google.maps.LatLng(54.952386,11.821289),
new google.maps.LatLng(54.961848,11.744385),
new google.maps.LatLng(54.946076,11.700439),
new google.maps.LatLng(54.987070,11.502686),
new google.maps.LatLng(54.968155,11.332397),
new google.maps.LatLng(54.949231,11.118164),
new google.maps.LatLng(54.873446,11.019287),
new google.maps.LatLng(54.788017,10.991821),
new google.maps.LatLng(54.613436,11.447754),
new google.maps.LatLng(54.661124,11.821289),
new google.maps.LatLng(54.721448,11.887207),
new google.maps.LatLng(54.572062,11.914673),
new google.maps.LatLng(54.565693,11.953125),
new google.maps.LatLng(54.552952,11.980591),
new google.maps.LatLng(54.702408,11.969604),
new google.maps.LatLng(54.835500,12.156372),
new google.maps.LatLng(54.898724,12.238770),
new google.maps.LatLng(54.971308,12.381592),
new google.maps.LatLng(54.955540,12.535400),
new google.maps.LatLng(55.015426,12.524414),
new google.maps.LatLng(55.072078,12.244263),
new google.maps.LatLng(55.031171,12.222290),
new google.maps.LatLng(54.993373,12.227783),
new google.maps.LatLng(55.002826,12.172852),
new google.maps.LatLng(55.075223,12.134399),
new google.maps.LatLng(55.112943,12.194824),
new google.maps.LatLng(55.128649,12.046509),
new google.maps.LatLng(55.178868,12.084961),
new google.maps.LatLng(55.291628,12.463989),
new google.maps.LatLng(55.363503,12.442017),
new google.maps.LatLng(55.410307,12.326660),
new google.maps.LatLng(55.522412,12.205811),
new google.maps.LatLng(55.606281,12.343140),
new google.maps.LatLng(55.665193,12.233276),
new google.maps.LatLng(55.665193,11.986084),
new google.maps.LatLng(55.668291,11.843262),
new google.maps.LatLng(55.754941,11.744385),
new google.maps.LatLng(55.816715,11.711426),
new google.maps.LatLng(55.847566,11.694946),
new google.maps.LatLng(55.887635,11.711426),
new google.maps.LatLng(55.909194,11.716919),
new google.maps.LatLng(55.936895,11.744385),
new google.maps.LatLng(55.961501,11.799316),
new google.maps.LatLng(55.973798,11.788330)    
      
     ]
      
var  midtjylland = [
            new google.maps.LatLng(56.686408,8.184814),
new google.maps.LatLng(56.486762,8.074951),
new google.maps.LatLng(56.346990,8.162842),
new google.maps.LatLng(56.231139,8.085938),
new google.maps.LatLng(56.065903,8.085938),
new google.maps.LatLng(56.078167,8.305664),
new google.maps.LatLng(55.998381,8.338623),
new google.maps.LatLng(55.943048,8.382568),
new google.maps.LatLng(55.899956,8.305664),
new google.maps.LatLng(55.924586,8.184814),
new google.maps.LatLng(55.807456,8.448486),
new google.maps.LatLng(55.844482,8.591309),
new google.maps.LatLng(55.844482,8.668213),
new google.maps.LatLng(55.825973,8.745117),
new google.maps.LatLng(55.825973,8.778076),
new google.maps.LatLng(55.862982,8.822021),
new google.maps.LatLng(55.881474,8.876953),
new google.maps.LatLng(55.887635,8.920898),
new google.maps.LatLng(55.862982,8.964844),
new google.maps.LatLng(55.844482,8.997803),
new google.maps.LatLng(55.856817,9.052734),
new google.maps.LatLng(55.881474,9.118652),
new google.maps.LatLng(55.949200,9.217529),
new google.maps.LatLng(55.943048,9.283447),
new google.maps.LatLng(55.936895,9.371338),
new google.maps.LatLng(55.906115,9.393311),
new google.maps.LatLng(55.881474,9.448242),
new google.maps.LatLng(55.850650,9.591064),
new google.maps.LatLng(55.832144,9.667969),
new google.maps.LatLng(55.788929,9.733887),
new google.maps.LatLng(55.720923,9.711914),
new google.maps.LatLng(55.689972,9.744873),
new google.maps.LatLng(55.683779,9.832764),
new google.maps.LatLng(55.689972,9.975586),
new google.maps.LatLng(55.739482,10.008545),
new google.maps.LatLng(55.764213,10.030518),
new google.maps.LatLng(55.813629,10.041504),
new google.maps.LatLng(55.832144,9.997559),
new google.maps.LatLng(55.869147,9.898682),
new google.maps.LatLng(55.881474,9.986572),
new google.maps.LatLng(55.881474,10.096436),
new google.maps.LatLng(55.856817,10.162354),
new google.maps.LatLng(55.906115,10.239258),
new google.maps.LatLng(56.016808,10.283203),
new google.maps.LatLng(56.151669,10.228271),
new google.maps.LatLng(56.225031,10.316162),
new google.maps.LatLng(56.286059,10.426025),
new google.maps.LatLng(56.273861,10.491943),
new google.maps.LatLng(56.218923,10.480957),
new google.maps.LatLng(56.200593,10.415039),
new google.maps.LatLng(56.176139,10.360107),
new google.maps.LatLng(56.163906,10.415039),
new google.maps.LatLng(56.163906,10.491943),
new google.maps.LatLng(56.133307,10.480957),
new google.maps.LatLng(56.096556,10.513916),
new google.maps.LatLng(56.114936,10.546875),
new google.maps.LatLng(56.157788,10.557861),
new google.maps.LatLng(56.218923,10.601807),
new google.maps.LatLng(56.218923,10.656738),
new google.maps.LatLng(56.163906,10.656738),
new google.maps.LatLng(56.145550,10.689697),
new google.maps.LatLng(56.145550,10.722656),
new google.maps.LatLng(56.188368,10.766602),
new google.maps.LatLng(56.231139,10.777588),
new google.maps.LatLng(56.298253,10.843506),
new google.maps.LatLng(56.419978,10.953369),
new google.maps.LatLng(56.541315,10.832520),
new google.maps.LatLng(56.529199,10.579834),
new google.maps.LatLng(56.571589,10.338135),
new google.maps.LatLng(56.632064,10.338135),
new google.maps.LatLng(56.662265,10.360107),
new google.maps.LatLng(56.699982,10.349121),
new google.maps.LatLng(56.701490,10.302429),
new google.maps.LatLng(56.693950,10.239258),
new google.maps.LatLng(56.680374,10.189819),
new google.maps.LatLng(56.668302,10.162354),
new google.maps.LatLng(56.610909,10.074463),
new google.maps.LatLng(56.601838,10.011292),
new google.maps.LatLng(56.582179,9.915161),
new google.maps.LatLng(56.565536,9.862976),
new google.maps.LatLng(56.554942,9.851990),
new google.maps.LatLng(56.556455,9.813538),
new google.maps.LatLng(56.554942,9.753113),
new google.maps.LatLng(56.588229,9.692688),
new google.maps.LatLng(56.588229,9.640503),
new google.maps.LatLng(56.619977,9.667969),
new google.maps.LatLng(56.630553,9.613037),
new google.maps.LatLng(56.657736,9.525146),
new google.maps.LatLng(56.666793,9.530640),
new google.maps.LatLng(56.681882,9.494934),
new google.maps.LatLng(56.659246,9.467468),
new google.maps.LatLng(56.641127,9.437256),
new google.maps.LatLng(56.647167,9.401550),
new google.maps.LatLng(56.662265,9.376831),
new google.maps.LatLng(56.668302,9.327393),
new google.maps.LatLng(56.565536,9.291687),
new google.maps.LatLng(56.556455,9.327393),
new google.maps.LatLng(56.565536,9.371338),
new google.maps.LatLng(56.538287,9.354858),
new google.maps.LatLng(56.527684,9.299927),
new google.maps.LatLng(56.538287,9.291687),
new google.maps.LatLng(56.576128,9.250488),
new google.maps.LatLng(56.601838,9.283447),
new google.maps.LatLng(56.626021,9.261475),
new google.maps.LatLng(56.627531,9.179077),
new google.maps.LatLng(56.651697,9.143372),
new google.maps.LatLng(56.619977,9.126892),
new google.maps.LatLng(56.603350,9.129639),
new google.maps.LatLng(56.556455,9.066467),
new google.maps.LatLng(56.644147,9.069214),
new google.maps.LatLng(56.718073,9.165344),
new google.maps.LatLng(56.793358,9.099426),
new google.maps.LatLng(56.800878,9.030762),
new google.maps.LatLng(56.818921,9.039001),
new google.maps.LatLng(56.820424,9.055481),
new google.maps.LatLng(56.841461,9.063721),
new google.maps.LatLng(56.838457,8.953857),
new google.maps.LatLng(56.805390,8.992310),
new google.maps.LatLng(56.802382,8.959351),
new google.maps.LatLng(56.766273,8.857727),
new google.maps.LatLng(56.706013,8.822021),
new google.maps.LatLng(56.627531,8.717651),
new google.maps.LatLng(56.626021,8.676453),
new google.maps.LatLng(56.567050,8.745117),
new google.maps.LatLng(56.548886,8.753357),
new google.maps.LatLng(56.489795,8.734131),
new google.maps.LatLng(56.483729,8.618774),
new google.maps.LatLng(56.517079,8.602295),
new google.maps.LatLng(56.580666,8.665466),
new google.maps.LatLng(56.577641,8.618774),
new google.maps.LatLng(56.542830,8.577576),
new google.maps.LatLng(56.574615,8.563843),
new google.maps.LatLng(56.633574,8.594055),
new google.maps.LatLng(56.630553,8.629761),
new google.maps.LatLng(56.656226,8.635254),
new google.maps.LatLng(56.692442,8.574829),
new google.maps.LatLng(56.677356,8.508911),
new google.maps.LatLng(56.684900,8.473206),
new google.maps.LatLng(56.677356,8.415527),
new google.maps.LatLng(56.699982,8.201294)     
                                 
                 ]
 var northjutland = [
   new google.maps.LatLng(56.672829,9.327393),
new google.maps.LatLng(56.640371,9.455109),
new google.maps.LatLng(56.681882,9.500427),
new google.maps.LatLng(56.650187,9.559479),
new google.maps.LatLng(56.629042,9.567719),
new google.maps.LatLng(56.629798,9.666595),
new google.maps.LatLng(56.616954,9.678955),
new google.maps.LatLng(56.599571,9.644623),
new google.maps.LatLng(56.584448,9.633636),
new google.maps.LatLng(56.588985,9.698181),
new google.maps.LatLng(56.560239,9.750366),
new google.maps.LatLng(56.554185,9.827271),
new google.maps.LatLng(56.557212,9.879456),
new google.maps.LatLng(56.575372,9.880829),
new google.maps.LatLng(56.579910,9.939880),
new google.maps.LatLng(56.596547,9.960480),
new google.maps.LatLng(56.595034,10.011292),
new google.maps.LatLng(56.626021,10.121155),
new google.maps.LatLng(56.649432,10.132141),
new google.maps.LatLng(56.684900,10.198059),
new google.maps.LatLng(56.701490,10.171967),
new google.maps.LatLng(56.710536,10.139008),
new google.maps.LatLng(56.712797,10.122528),
new google.maps.LatLng(56.720334,10.155487),
new google.maps.LatLng(56.706767,10.177460),
new google.maps.LatLng(56.706013,10.195313),
new google.maps.LatLng(56.720334,10.217285),
new google.maps.LatLng(56.709029,10.328522),
new google.maps.LatLng(56.725608,10.332642),
new google.maps.LatLng(56.760251,10.296936),
new google.maps.LatLng(56.821927,10.268097),
new google.maps.LatLng(56.944225,10.277710),
new google.maps.LatLng(56.983905,10.302429),
new google.maps.LatLng(57.186135,10.465851),
new google.maps.LatLng(57.238192,10.550995),
new google.maps.LatLng(57.397624,10.519409),
new google.maps.LatLng(57.447166,10.550995),
new google.maps.LatLng(57.506233,10.486450),
new google.maps.LatLng(57.574779,10.424652),
new google.maps.LatLng(57.634375,10.456238),
new google.maps.LatLng(57.747412,10.655365),
new google.maps.LatLng(57.753274,10.603180),
new google.maps.LatLng(57.720286,10.496063),
new google.maps.LatLng(57.590975,10.125275),
new google.maps.LatLng(57.590975,9.946747),
new google.maps.LatLng(57.491476,9.812164),
new google.maps.LatLng(57.219608,9.522400),
new google.maps.LatLng(57.156354,9.343872),
new google.maps.LatLng(57.139965,9.218903),
new google.maps.LatLng(57.158589,9.034882),
new google.maps.LatLng(57.157844,8.968964),
new google.maps.LatLng(57.100452,8.743744),
new google.maps.LatLng(57.126550,8.616028),
new google.maps.LatLng(57.082546,8.545990),
new google.maps.LatLng(57.045959,8.477325),
new google.maps.LatLng(57.040730,8.460846),
new google.maps.LatLng(56.962198,8.367462),
new google.maps.LatLng(56.801630,8.231506),
new google.maps.LatLng(56.705259,8.237000),
new google.maps.LatLng(56.773798,8.275452),
new google.maps.LatLng(56.707521,8.335876),
new google.maps.LatLng(56.683391,8.346863),
new google.maps.LatLng(56.675093,8.392181),
new google.maps.LatLng(56.692442,8.441620),
new google.maps.LatLng(56.685654,8.506165),
new google.maps.LatLng(56.698474,8.544617),
new google.maps.LatLng(56.673584,8.650360),
new google.maps.LatLng(56.702244,8.769836),
new google.maps.LatLng(56.743687,8.824768),
new google.maps.LatLng(56.785084,8.868713),
new google.maps.LatLng(56.813659,8.871460),
new google.maps.LatLng(56.864739,8.824768),
new google.maps.LatLng(56.888003,8.852234),
new google.maps.LatLng(56.866991,8.887939),
new google.maps.LatLng(56.932987,8.915405),
new google.maps.LatLng(56.968936,8.929138),
new google.maps.LatLng(56.872996,9.195557),
new google.maps.LatLng(56.815914,9.179077),
new google.maps.LatLng(56.779818,9.179077),
new google.maps.LatLng(56.712044,9.201050),
new google.maps.LatLng(56.678865,9.319153)  
 ]
       
       //create the polygon and add a listener to the object
      createRegion(northjutland,"#07513b",map).addListener('mouseover',function(){show("Region Nordjylland",57.163057,9.860229)});
      createRegion(midtjylland,"#000",map).addListener('click',function(){show("Region Midtjylland",56.483729,8.618774)});
      createRegion(regionChoords,"#FF0000",map).addListener('click',function(){show("Region Hovedstaden",55.683779,12.062988)});
      createRegion(southDenmark,"#336699",map).addListener('click',function(){show("Region Syddanmark",54.835500,9.401550)});
      createRegion(Zeland,"#000",map).addListener('click',function(){show("Region Sjælland",55.742574,10.969849)});
      createRegion(regionChoords,"#FF0000",map).addListener('click',function(){show("Region Hovedstaden",55.683779,12.062988)});
      
  
   function show(regionStr,lat,lng){
  
   infoWindow = new google.maps.InfoWindow;
 
    var contentString = regionStr;

    infoWindow.setContent(contentString);
    infoWindow.setPosition(new google.maps.LatLng(lat,lng));
   
    infoWindow.open(map);
    
  }
  
 
 
  //var myLatLng = {lat: 55.9474566, lng: 12.3772604};

 
  
  

 
 var obj = createCenterObject(mapId);
  
 for(var i=0;i<centerInfo.length;i++){
          obj[i].marker(map).setMap(map);
          
            }         
               
              center.marker.setMap(map);
              
              function createRegion(pathObj,color,mapObj){

   var region = new google.maps.Polygon({
    paths: pathObj,
    strokeColor: color,
    strokeOpacity: 0.7,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35
  });
   region.setMap(mapObj)
   return region
 }
 
 
}


 
 
 
    
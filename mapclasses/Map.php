<?php

require 'PodioConnect.php';

class Map{
            private $app_id;
           
            public $exValues = array();
            public $fieldNames = array();
  
    function __construct($app_id){
            $this->appId = $app_id;        
            
            $this->getPodioData();
            //$this->createMap();
   
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
           
            var keyStr = <?php echo $keys; ?>; </script>
            
            <!DOCTYPE html>
            <html>
            <head>
                      
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
    function drawChart() {
      // Define the chart to be drawn.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Choice');
            data.addColumn('number', 'Answers');
            data.addRows([
            ['svaret', <?php echo "test" ?>],
            ['ikke besvaret', <?php echo "test";  ?>],
        
             ]);
     
            var options = {'title':'Fordeling af besvarelser',
                     'width':400,
                     'height':400,
                     'is3D':true,
                      colors: ['#477e07', '#930a0a'],
                      sliceVisibilityThreshold:0
                     
                     };     

      // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
    }
    

            
            
            </script>
          
            </head>
            <body onload="initialize(7,'1','googleMap')">
   
            <script>
       
                
            
            
    $(function(){
                    
            //making the infobox dragable
            $("#draggable-infobox").draggable();
            
            //display number off answers when on mouseover
            $(".infoClass").hide();
            $(".infoClassRed").hide();
            $(".canvas.green").mouseover(function(){
            $(".infoClass").show();
            })
            $(".canvas.green").mouseout(function(){
            $(".infoClass").hide();
            })
            
            $(".canvas.red").mouseover(function(){
            $(".infoClassRed").show();
            })
            $(".canvas.red").mouseout(function(){
            $(".infoClassRed").hide();
            })
             })
                        
            </script>
           
            <div class="infoBox" id = draggable-infobox 
            id = "text-field">  <input type="button" id = buttonId value="Tilbage til hele kortet" onclick="backToMap()" />
             
            <div id = "info"> </div>
           
            </div>
    
            <div id="googleMap">  </div>
            <div id="chart_div"></div>
            <script>
                        
                
            </script>
         
            </body>

            </script>   
    <!-- the Api key loadet asyncrounus -->
            <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnCH6jSQb-BkkDGFriXjaImHSob6YaVNU&callback=initMap">
            </script>
</html>

<?php
}  
    
}
?>
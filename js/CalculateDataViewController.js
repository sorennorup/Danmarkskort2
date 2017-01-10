
 function CalculateDataViewController(dataArray = []){
    
    this.dataArr = dataArray
    
    this.datObj = new CalculateData(this.dataArr)

    var number;
   
    //display color in the infobox
    this.displayColors = function(colorStr){
      var res = '<span style = "background-color:'+colorStr+ ';color:'+colorStr+ '; width:50px; height:100px;">----</span> '
      return res;
      }
     //put colorboxes and numbers info the infobox
    this.dataInBox = function(){
     //first line show the category with the lowest interval
      var l1 = this.displayColors("green") + this.datObj.findLowestValue() + "% - "+ this.datObj.findLowerQuartile()+ "%" ;
     
     //second line show the category with medium interval
      var l2 = this.displayColors("yellow") + parseInt(this.datObj.findLowerQuartile()+1)+ " % - "+ parseInt(this.datObj.calMedian()-1)+ " % ";
       //third line show the category with the highest interval
      var l3 = this.displayColors("red") + parseInt(this.datObj.calMedian())+ " % - "+ this.datObj.findHigestValue()+ " % ";
      
      var l4 = this.displayColors("black") + "Ingen data";
       
      return  l1 +  "</br></br>" + l2 + "</br></br>"+l3 + "</br></br>"+ l4
   }
    // calculate what color the area on map should have
    this.calculateColor = function(number){
      var color;
         if (number) {
           
        
        if(number < this.datObj.findLowerQuartile() || number == this.datObj.findLowerQuartile())
            {color = "green"}
          else if (number > this.datObj.findLowerQuartile() && number < this.datObj.calMedian() || number == this.datObj.findLowerQuartile() || number == this.datObj.calMedian() ) {
            color = "yellow"
        }
            else if (number > this.datObj.calMedian()){
            color = "red"
          
        }
        else if(number == "ikke angivet") {
            color = "white"
        }
         }
         
         return color;
    }
     

    }
   function initialize(dataArray = []){
        var r = new CalculateDataViewController(dataArray)
        document.getElementById("box").innerHTML = r.dataInBox();
    
    
  }
   function createDataArray(value,obj1,obj2){
     var arr = []
      for(var i = 0; i < obj1.length; i++ ){
         for(var j = 0; j < obj2.length; j++) {    
           if (obj1[i].name == obj2[j][0] && obj2[j][value] != 0 ) {
            var num = obj2[j][value];
                if(num % 1 === 0){
            
                arr.push(num)
              
            }
              
           }
          
         }
        
       }
         return arr
  }


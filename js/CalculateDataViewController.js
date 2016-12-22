
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
    var l2 = this.displayColors("yellow") + parseInt(this.datObj.findLowerQuartile()+1)+ " % - "+ this.datObj.calMedian()+ " % ";
       //third line show the category with the highest interval
    var l3 = this.displayColors("red") + parseInt(this.datObj.calMedian()+1)+ " % - "+ this.datObj.findHigestValue()+ " % ";
       
     return  l1 +  "</br></br>" + l2 + "</br></br>"+l3 + "</br></br>"
  }
    // calculate what color the area on map should have
   this.calculateColor = function(number){
    var color;
         if (number) {
           
        
        if(number < this.datObj.findLowerQuartile())
            {color = "green"}
          else if (number > this.datObj.findLowerQuartile() && number < this.datObj.calMedian()) {
            color = "yellow"
        }
            else if (number > this.datObj.calMedian()){
            color = "red"
          
        }
         }
         return color;
    }
     

    }
    function initialize(dataArray = []){
        var r = new CalculateDataViewController(dataArray)
        document.getElementById("box").innerHTML = r.dataInBox();
    
    
  }

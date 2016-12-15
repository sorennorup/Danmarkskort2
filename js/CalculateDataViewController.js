
function CalculateDataViewController(dataArray = []){
    
    this.dataArr = dataArray
    
    this.datObj = new CalculateData(this.dataArr)

     
   
    
     this.displayColors = function(colorStr){
      var res = '<span style = "background-color:'+colorStr+ ';color:'+colorStr+ '; width:50px; height:100px;">----</span> '
      return res;
    }
    
   this.dataInBox = function(){
    
    var l1 = this.displayColors("green") + this.datObj.findLowestValue() + "% - "+ this.datObj.findLowerQuartile()+ "%" ;
  
    var l2 = this.displayColors("yellow") + this.datObj.findLowerQuartile()+ " % - "+ this.datObj.calMedian()+ " % ";
  
    var l3 = this.displayColors("red") + this.datObj.calMedian()+ " % - "+ this.datObj.findHigestValue()+ " % ";
       
    
    
     return  l1 +  "</br></br>" + l2 + "</br></br>"+l3 + "</br></br>"
  }
     
     
  
     //ViewController
  /*function partIntoCat(num){
      var res
   
    if (num < findLowerQuartile()) {
        res = findLowestValue() + "% - "+ findLowerQuartile()+ "% - ";
        var color = "green";
        return res
    }   
      return "No"
  }
  */
    
    
    
}
function initialize(dataArray = []){
    var r = new CalculateDataViewController(dataArray)
      document.getElementById("box").innerHTML = r.dataInBox();
    
    
    
    
  }

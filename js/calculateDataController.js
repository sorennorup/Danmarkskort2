  
  function CalculateData(dataArray = []) {
   this.dataArray = dataArray;
   
  //dataController
  this.findHigestValue = function(){  
     var hVal =  Math.max.apply(Math,this.dataArray)
    return hVal;    
 }
   //dataController
  this.findLowestValue = function(){
    var lVal = Math.min.apply(Math,this.dataArray)
    return lVal;
 }
   //dataController
  this.calMedian = function(){
     var sum = 0;
    for(var i = 0; i < this.dataArray.length; i++){
        sum += this.dataArray[i]
    }
    return Math.round(sum/this.dataArray.length);
    
 }
 
  this.findLowerQuartile = function(){
    return Math.round(this.calMedian()/2);
    
 }
 
  this.findhigherQuartile = function(){
    var half = this.calMedian()/2
    return Math.round(this.calMedian()+ half);
    
 }
  }
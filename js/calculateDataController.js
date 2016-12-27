  
  function CalculateData(dataArray = []) {
   this.dataArray = dataArray.map(Number);
   this.rowLength = (this.dataArray.length)+1 
   
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
  this.calAverage = function(){
     var sum = 0;
    
    for(var i = 0; i < this.dataArray.length; i++){
        sum += parseInt(this.dataArray[i])
    }
    
    
    return Math.round((sum+1)/this.dataArray.length);
     
    
 }
 
  this.findLowerQuartile = function(){
      var index
      var value
    var res = this.rowLength
  
    if (res % 4 == 0) {
     index = res/4;
     value = this.dataArray[index-1]
   }
   else{
      var index1 = Math.round(res/4)
      var index2 =  Math.round(res/4)+1
       
      value = (this.dataArray[index1-1] + this.dataArray[index2-1] )/ 2
     
     
   }
      return value
 }
 
  this.findhigherQuartile = function(){
      var half = this.calMedian()/2
      return Math.round(this.calMedian()+ half);
    
 }
 this.calMedian = function(){
      var value
      var index;
      var res = (this.dataArray.length)+1;
   //alert(res)
      if (res % 2 == 0) {
         index = res/2;
         value = dataArray[index-1] 
      }
      else{
         var index1 = res/2 - 0.5
         var index2 =  res/2 + 0.5
         value = (this.dataArray[index1-1] + this.dataArray[index2-1] )/ 2 
       
         }
   
   return value
   
   }
}
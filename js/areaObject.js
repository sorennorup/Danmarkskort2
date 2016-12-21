

function areaObject(map,arr = []){
    
    this.map = map
    this.filenames =  arr
    
    this.urlStart = "Json-files/"
    
    
    this.loadGeoJ =
    function(){
                     

        var url;
        for(var i = 0 ; i < this.filenames.length;i++){
            
            url = this.urlStart+this.filenames[i]
            this.map.data.loadGeoJson(url);
        }
        
    }

     
    return   this.loadGeoJ()
    
    
}
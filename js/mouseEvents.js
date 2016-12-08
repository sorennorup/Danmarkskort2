$(function(){
     $("#draggable-infobox").draggable();
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
            
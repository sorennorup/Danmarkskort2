<?php
/*this Class is making connection with the podio API 
just include podio_connect.php in your script and create an podio_connect object and you kan start interacting with Podio*/
/* The methods in this class get all the values of the fields in a Podio App and all the field names. */
require  "podio-php/PodioAPI.php";
include '../../log/config.php';


Podio::setup($client_secret,$client_token , array(
  "session_manager" => "PodioSession"
));

  class PodioConnect {
   private $allItems=array();
   private $itemArray=array();
   private  $allValue=array();
   private  $allExteral_ids=array();
   public $app_id;
   
 //constructor for connecting with podio when creating the object
   function __construct($app_id){
     include '../../log/config.php' ;
     if (Podio::is_authenticated()) {       
       }
       else {
     
          try {
   
                Podio::authenticate('password', array('username' => $username, 'password' =>$password ));  
 
              }
                catch (PodioError $e) {
                }
   }
    
       $this->app_id = $app_id;
     
       $this->allExteral_ids = $this->getExternalIds();
   }
  
   public function getAllFieldValues(){     
      $i=0;
      $items =  PodioItem::filter($this->app_id,array('limit' => 100));
    
      foreach ($items['items'] as $item) {
  // Now you can extract values from the individual item. E.g.:
         for($j=0;$j < count($this->allExteral_ids);$j++){   
            
             $field = $item->field($this->allExteral_ids[$j]);

             if(isset($field)){
           
                 $this->allValue[$j] = $field->humanized_value();
               }
                 else{
                     //$this->allValue[$j] = "ikke besvaret";
                  }
        }
      $allItems[$i] = $this->allValue;
  
 $i++;
}

             return $allItems;
 }
 
   public function countFields(){
     $items =  PodioItem::filter($this->app_id,array('limit' => 100));
     $countFields;
      // Get the first item of the app, only 1 item
      //$items = PodioItem::filter($this->app_id,array('limit' => 1));
      // Create external_id array
     $exIds = array();
      // find all the external Ids of the item and put them in the array
     for($j=0;$j <count($items['items'][0]->fields);$j++){
           $countFields = $j;    
           }
      //return the external Id array; 
             return $countFields;
    }
   
   public function getAllExternalIds(){
     
         // Get the first item of the app, only 1 item
      $items = PodioItem::filter($this->app_id,array('limit' => 1));
     
         // Create external_id array
      $exIds = array();
         // find all the external Ids of the item and put them in the array
      for($j=0;$j < count($items['items'][0]->fields)  ;$j++){
          $exIds[$j] = $items['items'][0]->fields[$j]->external_id;       
           }
         //return the external Id array; 
             return $exIds;
    }
   
   public function getAllFieldNames(){
     $items = PodioItem::filter($this->app_id,array('limit' => 1));
  
      $fieldNames = [];
      for($j=0;$j <count($items['items'][0]->fields) ;$j++){  
  
          $fieldNames[$j] = $items['items'][0]->fields[$j]->label;
           }
    
            return $fieldNames;
    }
       
  private function getExternalIds(){
    $exIds = array();
    $items = PodioApp::get( $this->app_id);
   
    $j = 0;
    foreach($items->fields as $if){
     $exIds[$j] = $if->external_id;
     $j++;
   }
   
    return $exIds;
   
  }
}
 
  
  
  ?>

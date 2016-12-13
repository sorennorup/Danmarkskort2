var kommune_daekning = [
    {"name": "UU Aarhus Samsø","kommuner":['aarhus.kml','samsoe.kml']},
    {"name": "UU Aalborg","kommuner":['aalborg.kml']},
    {"name": "UU Aabenraa","kommuner":['aabenraa.kml']},
    {"name": "UU Billund","kommuner":['billund.kml']},
    {"name": "UU Bornholm","kommuner":['bornholm.kml']},
    {"name": "UU Center Syd","kommuner": ['hvidovre.kml','broendby.kml','ishoej.kml']},
    {"name": "UU Center Sydfyn","kommuner":['faaborg.kml','langeland.kml','svendborg.kml','aeroe.kml']},
    {"name": "UU Djursland","kommuner": ['norddjurs.kml','syddjurs.kml']},
    {"name": "UU Esbjerg","kommuner":['esbjerg.kml','fanoe.kml'] },
    {"name": "UU Favrskov","kommuner":['favrskov.kml']},
    {"name": "UU Frederiksberg" ,"kommuner":['frederiksberg.kml']},
    {"name": "UU Frederikshavn" ,"kommuner":['frederikshavn.kml']},
    {"name": "UU Gribskov" ,"kommuner":['gribskov.kml']},
    {"name": "UU Haderslev" ,"kommuner":['haderslev.kml']},
    {"name": "UU Halsnæs/Hillerød","kommuner":['halsnaes.kml','hilleroed.kml']},
    {"name": "UU Hedensted" ,"kommuner":['hedensted.kml']},
    {"name": "UU Herning" ,"kommuner":['herning.kml']},
    {"name": "UU Horsens","kommuner": ['horsens.kml']},
    {"name": "UU Hjørring","kommuner":['hjoerring.kml']},
    {"name": "UU Ikast Brande" ,"kommuner":['ikast.kml']},
    {"name": "UU Vallensbæk" ,"kommuner":['vallensbaek.kml']},
];

  /*case "UU Vallensbæk":
                        res = ['vallensbaek.kml'];                      
                        break;             
                
                case "UU Jammerbugt":
                        res = ['jammerbugt.kml'];
                        break;              
                case  "UU Vejen":
                        res = ['vejen.kml'];
                        break;             
                
               
                
                
                
                
                
                
                
               
               
                case  "UU Kolding":
                        res = ['kolding.kml'];
                        break;
                case  "UU København":
                        res = ['koebenhavn.kml'];
                        break;
                case  "UU Lillebælt":
                        res = ['fredericia.kml','middelfart.kml'];
                        break;
                case  "UU Lolland Falster":
                        res = ['lolland.kml','guldborgsund.kml'];
                        break;
                case  "UU Mariagerfjord":
                        res = ['mariagerfjord.kml'];
                        break;
                case  "UU Mors":
                        res = ['morsoe.kml',];
                        break;
                case  "UU Lillebælt":
                        res = ['fredericia.kml','middelfart.kml'];
                        break;
                case  "UU Nord":
                        res = ['gladsaxe.kml','lyngby.kml','gentofte.kml','herlev.kml'];
                        break;
                case  "UU Nordvestjylland":
                        res = ['holstebro.kml','struer.kml','lemvig.kml'];
                        break;
                case  "UU Nordvestsjælland":
                        res = ['odsherred.kml','kalundborg.kml','holbaek.kml'];
                        break;
                case  "UU Odder Skanderborg":
                        res = ['odder.kml','skanderborg.kml'];
                        break;
                case  "UU Odense og Omegn":
                        res = ['nordfyns.kml','kerteminde.kml','nyborg.kml','odense.kml','assens.kml'];
                        break;
                case  "UU Randers":
                        res = ['randers.kml'];
                        break;
                case  "UU Rebild":
                        res = ['rebild.kml'];
                        break;
                case  "UU Ringkøbing Skjern":
                        res = ['ringkobing.kml'];
                        break;
                case  "UU Odense og Omegn":
                        res = ['nordfyns.kml','kerteminde.kml','nyborg.kml','odense.kml','assens.kml'];
                        break;
                case  "UU Roskilde Lejre":
                        res = ['roskilde.kml','lejre.kml'];
                        break;
                case  "UU Silkeborg":
                        res = ['silkeborg.kml'];
                        break;
                case  "UU Sjælland Syd":
                        res = ['naestved.kml','vordingborg.kml','faxe.kml'];
                        break;
                case  " UU Sjælsø":
                        res = ['alleroed.kml','furesoe.kml','hoersholm.kml','rudersdal.kml'];
                        break;
                case  "UU Skive":
                        res = ['skive.kml'];
                        break;
                case  "UU Sønderborg":
                        res = ['soenderborg.kml'];
                        break;
                case  "UU Thy":
                        res = ['skive.kml'];
                        break;
                case  "UU Tønder":
                        res = ['toender.kml'];
                        break;
                case  "UU Tårnby":
                        res = ['taarnby.kml','dragoe.kml'];
                        break;
                case  "UU V Køge Bugt":
                        res = ['greve.kml','koege.kml','solroed.kml','stevns.kml'];
                        break;
                case  "UU Varde":
                        res = ['varde.kml'];
                        break;
                case  "UU Vejle Study Support Center":
                        res = ['vejle.kml'];
                        break;
                case  "UU Brønderslev":
                        res = ['broenderslev.kml'];
                        break;
                case  "UU Vest Region Hovedstaden":
                        res = ['egedal.kml','frederikssund.kml'];
                        break;
                case  "UU Vestegnen":
                        res = ['albertslund.kml','glostrup.kml','ballerup.kml','hoejetaastrup.kml','roedovre.kml'];
                        break;
                case  "UU Vesthimmerland":
                        res = ['vesthimmerlands.kml'];
                        break;
                case  "UU Vestsjælland":
                        res = ['ringsted.kml','soroe.kml','slagelse.kml'];
                        break;
                case   "UU Viborg":
                        res = ['viborg.kml'];
                        break;
                case  "UU Øresund":
                        res = ['fredensborg.kml','helsingoer.kml'];
                        break;
                case  "UU Aabenraa":
                        res = ['aabenraa.kml'];
                        break;
                case   "UU Aalborg":
                        res = ['aalborg.kml','laesoe.kml'];
                        break;
                case  "UU Aarhus Samsø":
                        res = ['aarhus.kml','samsoe.kml'];
                        break;
                
                */
              
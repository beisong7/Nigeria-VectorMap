$(document).ready(function(){  
  

});

 $.getJSON('./vm-ng.json', function (data) {
//     console.log(data)
     //do a tiny delay
     setTimeout(function(){
         //add map name to be available in vectormap function
         // in this case the map name is 'nigeria_map'
         jQuery.fn.vectorMap(
             'addMap', 'nigeria_map', data
         );
         
         $('#vmap').vectorMap({    
            map: 'nigeria_map',
            enableZoom: true,
            showTooltip: true,
            backgroundColor: '#e8ffec',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#f4f3f0',
            hoverColor: '#c9dfaf',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            regionsSelectable:true,
            regionStyle:{
                        initial: {
                            fill: '#eee',
                            "fill-opacity": 1,
                            stroke: 'black',
                            "stroke-width": 0.5,
                            "stroke-opacity": 1
                        },
                        hover: {
                            fill: '#0f8400',
                            "fill-opacity": 0.5,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: '#0f8400'
                        },
                        selectedHover: {
                        }
                    },
             regionsSelectableOne: true,
            regionLabelStyle:{
                        initial: {
                            'font-family': 'Verdana',
                            'font-size': '12',
                            'font-weight': 'bold',
                            cursor: 'default',
                            fill: 'black'
                        },
                        hover: {
                            cursor: 'pointer'
                        }
                    },
            onRegionSelected: function(element, code, region)
            {
                      //Aqui val algo :P
                if(region){
                    var map = $('#vmap').vectorMap('get', 'mapObject');
                    var regionName = map.getRegionName(code);
                    console.log(regionName, code);
                }

    //                    console.log(code)
    //                    console.log(element)
            },
    //        onRegionClick: function (event, code) {
    //            console.log("region clicked")
    //          // Get the name of the clicked region
    //          // Now you can use 'regionName' as needed (e.g., link to a page with region-specific information)
    //          // Example: window.location.href = 'yourpage?regionName=' + regionName;
    //        },
        });
         
         console.log("wait done")
     }, 100)
     
 });


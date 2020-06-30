
//url for fetching corona virus patients from countries
url="https://corona-api.com/countries";
updateMap()
function updateMap(){
    fetch(url).then(Response=>Response.json())
    .then((rsp)=>{
        console.log(rsp.data)
       rsp.data.forEach(element => {
           longitude=element.coordinates.longitude;
          latitude= element.coordinates.latitude;
          cases=element.latest_data.confirmed;
        death=element.latest_data.deaths;
        recovered=element.latest_data.recovered;
        critical=element.latest_data.critical;
         country=element.name;
         //create a popup
        
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
    `country:${country}
    total cases:${cases}
    deaths:${death}
    critical:${critical}
    recovered:${recovered}`
    
    );
         
    
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
          // create the marker

      new mapboxgl.Marker({
            draggable:false
        })
        .setLngLat([longitude,latitude])
        .setPopup(popup)
         .addTo(map)
        
          });
    
    })
}
setInterval(updateMap,20000)
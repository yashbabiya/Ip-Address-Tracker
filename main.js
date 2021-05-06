const url="https://geo.ipify.org/api/v1?apiKey=at_mIMMEFsSNRLm2YadhyTVCxfflHe7t&ipAddress=8.8.8.8"
var ip=document.querySelectorAll(".ip");
var loc=document.querySelectorAll(".loc");
var tz=document.querySelectorAll(".tz");
var isp=document.querySelectorAll(".isp");


function getIpDestails(){

var ip = document.querySelector(".zz").value;
console.log(ip);
    var api_key = "at_mIMMEFsSNRLm2YadhyTVCxfflHe7t";
    $(function () {
       $.ajax({
           url: "https://geo.ipify.org/api/v1?apiKey=at_mIMMEFsSNRLm2YadhyTVCxfflHe7t&ipAddress=8.8.8.8",
           data: {apiKey: api_key, ipAddress: ip},
           success: function(data) {
             console.log(data.location.lat);
             console.log(data.location.lng);
              var x = data.location.lat;
              var y = data.location.lng;
              
              maps(x,y,data);
              console.log(data);
            //   $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           }
       });
    });
  }




  var mymap = L.map('mapid').setView([23,72], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmFiaXlhIiwiYSI6ImNrbzl4Zml1NzMxOTMycHBnY3gyN2VtanMifQ.1Qww9NvN-GU4Ja5xhQuDZA'
}).addTo(mymap);

var greenIcon = L.icon({
    iconUrl: './images/icon-location.svg',
   

    iconSize:     [25,30], // size of the icon
    
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


function maps(x,y,data){
    
  L.marker([x,y], {icon: greenIcon}).addTo(mymap); 
  mymap.setView([x+.02,y],13)
  ip[0].innerHTML = data.ip;
  loc[0].innerHTML = `${data.location.city}, ${data.location.country} ${data.location.geonameId}`;
  tz[0].innerHTML = `UTC ${data.location.timezone}`
  isp[0].innerHTML = data.isp

  ip[1].innerHTML = data.ip;
  loc[1].innerHTML = `${data.location.city}, ${data.location.country} ${data.location.geonameId}`;
  tz[1].innerHTML = `UTC ${data.location.timezone}`
  isp[1].innerHTML = data.isp
}

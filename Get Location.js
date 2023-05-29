<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getpos);
  } else {
  }
function getpos(position) {
           latx=position.coords.latitude;
           lonx=position.coords.longitude;
         // Show Lat and Lon 
           document.write('<div>Lat: '+latx+'<br> Long: '+lonx+'</div>');
}
</script>

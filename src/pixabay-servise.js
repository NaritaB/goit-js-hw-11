import axios from 'axios';


// const API_KEY = '36554001-c9bcc04dc5b15c9dbed4164c2';

// const BASE_URL = 'https://pixabay.com/api/';

var API_KEY = '36554001-c9bcc04dc5b15c9dbed4164c2';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});
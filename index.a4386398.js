var o="https://pixabay.com/api/?key=36554001-c9bcc04dc5b15c9dbed4164c2&q="+encodeURIComponent("red roses");$.getJSON(o,(function(o){parseInt(o.totalHits)>0?$.each(o.hits,(function(o,c){console.log(c.pageURL)})):console.log("No hits")}));
//# sourceMappingURL=index.a4386398.js.map

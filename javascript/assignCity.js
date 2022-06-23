document.getElementById('in183').onclick = (event) => {
    event.preventDefault();
    { history.pushState({  'https://community-open-weather-map.p.rapidapi.com/weather' : {"queryParams":{"q": document.getElementById('iwqyx').value}} }, '', 'viewCity');  location.href= '/viewCity' ;}};$(window).bind("popstate", function() {
      window.location = location.href
    });window.onload = () => {};
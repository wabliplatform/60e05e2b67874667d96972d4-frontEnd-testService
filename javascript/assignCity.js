document.getElementById('in183').onclick = (event) => {
    event.preventDefault();
    { sessionStorage.setItem('serviceData',JSON.stringify( {  'https://community-open-weather-map.p.rapidapi.com/weather' : {"queryParams":{"q": document.getElementById('iwqyx').value}} }));  location.href= '/viewCity' ;}};window.onload = () => {};
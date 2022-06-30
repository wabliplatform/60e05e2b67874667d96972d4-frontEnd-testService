window.onload = () => {
            
            const serviceData = JSON.parse(sessionStorage.getItem('serviceData'));
            const service = serviceData ? serviceData['https://community-open-weather-map.p.rapidapi.com/weather'] : null;
                const header0 = (service && service.headers && service.headers['X-RapidAPI-Key'] !== undefined) ? service.headers['X-RapidAPI-Key'] : '53489752c7msh9de81d046117cacp12b1e0jsnfb9ed7c0f048';const header1 = (service && service.headers && service.headers['X-RapidAPI-Host'] !== undefined) ? service.headers['X-RapidAPI-Host'] : 'community-open-weather-map.p.rapidapi.com';
                const queryPar0 = (service && service.queryParams && service.queryParams['q'] !== undefined) ? service.queryParams['q'].replaceAll(',','%2C') : 'Thessaloniki';
                
        
            fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${queryPar0}`,{
                method: "GET", 

                headers: {'X-RapidAPI-Key' : header0, 
'X-RapidAPI-Host' : header1}

                
            })
            .then(response => 
                response.json().then(data => {
                    
            try{
                document.getElementById('i6i7k').textContent = data.name;
            }
            catch(e){
                console.log(e);
            }

            try{
                document.getElementById('i2d8h').textContent = data.main.temp;
            }
            catch(e){
                console.log(e);
            }

                })
            )
        };
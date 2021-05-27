let url = 'https://api.covid19india.org/v4/min/data.min.json';

fetch(url, {
    method: 'GET',
  })
  .then(Response => Response.json())
  .then((json) => {
     console.log(json);  
    document.getElementById('show').innerText = 'success1';
  })
  .catch(()=>{
        document.getElementById('show').innerText = 'oops fail';

  })
      
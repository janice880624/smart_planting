var dataUrl= "https://script.google.com/macros/s/AKfycbwNTGOIVs5liP2LhudEk3MQZ87aS9VROHWHwko__fkvqZgsmrQ29slfKbAPedawyNeBgg/exec"
let tempdata = "";
$.ajax({
    url: dataUrl,
    method: 'GET',
    dataType: 'json',
    data: '',
    async: true,　
   
    success: res =>{
      console.log(res)

      tempdata = res.data.temperature;
      humiditydata = res.data.humidity;
      soilhumiditydata = res.data.soilhumidity;
      pm10pdata = res.data.pm10;
      pm25data = res.data.pm25;
      waterqualitydata = res.data.waterquality;

      const temp = document.querySelector('.temperature');
      const hum = document.querySelector('.humidity');
      const soilhum = document.querySelector('.soilhumidity');
      const pm10 = document.querySelector('.pm10');
      const pm25 = document.querySelector('.pm25');
      const water = document.querySelector('.waterquality');

      temp.innerHTML = `<div class="temperature">${tempdata}</div>`;
      hum.innerHTML = `<div class="humidity">${humiditydata}</div>`;
      soilhum.innerHTML = `<div class="soilhumidity">${soilhumiditydata}</div>`;
      pm10.innerHTML = `<div class="pm10">${pm10pdata}</div>`;
      pm25.innerHTML = `<div class="pm25">${pm25data}</div>`;
      water.innerHTML = `<div class="waterquality">${waterqualitydata}</div>`;
    },
    error: err =>{
      console.log(err)
    },
});


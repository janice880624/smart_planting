var g3;
var photocell;
var myData;
var dht;
var water;
var hum;
var ph;
var soil;
var pm10;
var pm25;
var tem;


myData= {};
myData.sheetUrl = 'https://docs.google.com/spreadsheets/d/1i8nsUwJ9aJJ9tbJifoww9mlNA1bM_VN2LPeWA-kmyJk/edit?usp=sharing';
myData.sheetName = '工作表1';
readSheetData({
  row : 1,
  col : 4,
  sheetUrl : myData.sheetUrl,
  sheetName : myData.sheetName
}, function(googleSheetReadData){
  document.getElementById('demo-area-01-show').innerHTML = googleSheetReadData;
});

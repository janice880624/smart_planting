var url = 'https://docs.google.com/spreadsheets/d/1i8nsUwJ9aJJ9tbJifoww9mlNA1bM_VN2LPeWA-kmyJk/edit?usp=sharing';
var name = '工作表1'
var SpreadSheet = SpreadsheetApp.openByUrl(url);
var SheetName = SpreadSheet.getSheetByName(name);
var lastColumn = SheetName.getLastColumn();
var lastRow = SheetName.getLastRow();

console.log(SheetName.getSheetValues(1,1,lastRow,lastColumn))
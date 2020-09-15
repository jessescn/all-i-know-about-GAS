## Manipulating spreadsheets

In this tutorial, you gonna learn the basic of spreadsheet manipulation (create, open, write, read). I will asume that you already have a script project. 

### Create a spreadsheet

To create a new spreadsheet, you can use the **create** function, it will receive the name of the new spreadsheet and you can pass the number of rows and columns to create a spreadsheet with specific size. Copy and paste this code, change the **n_rows** and **n_columns** for some value and execute the script (click in _execute_ -> _execute function_ -> _createSpreadsheetByRowsAndColumns_). 

``` javascript

function createSpreadsheet() {
  const ss = SpreadsheetApp.create('NAME_OF_SPREADSHEET')
}

// or

function createSpreadsheetByRowsAndColumns() {
  const ss = SpreadsheetApp.create('NAME_OF_SPREADSHEET', n_rows, n_columns)
}

```

After you execute the script, you can find your new spreadsheet in the root directory of your google drive.

### Open a spreadsheet

There are some ways to open a spreadsheet, you can use a ID, URL or pass a [File](https://developers.google.com/apps-script/reference/drive/file.html) type. Most of them will return a [Spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet) type, and thats the object we want.

``` javascript

function open() {
  const file = DriveApp.getFilesByName('Hello World').next()
  const ss = SpreadsheetApp.open(file)
}

function openById() {
  const id = "YOUR_SPREADSHEET_ID"
  const ss = SpreadsheetApp.openById(id)
}


function openByURL() {
  const url = "YOUR_SPREADSHEET_URL"
  const ss = SpreadsheetApp.openByUrl(url)
}

```

The _ss_ variable is the a Spreadsheet type, we can work w/ that now.

### write in a spreadsheet

There a lot of ways you can write in spreadsheets, you can just append a new line or add a bunch of columns and rows in a specific range of cells.

``` javascript

function write() {
  const ss = SpreadsheetApp.create('new spreadsheet')
  const sheet = ss.getActiveSheet()
  const newRow = ['value1', 'value2']
  sheet.appendRow(newRow)
}

```

I use the function [**getActiveSheet**](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getactivesheet) because i need to select which [Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet) i want to manipulate (in this case, the current sheet). The function [**appendRow**](https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendrowrowcontents) receive a Object[] value and append to the end of the spreadsheet.


``` javascript

function write() {
  const ss = SpreadsheetApp.create('new spreadsheet')
  const sheet = ss.getActiveSheet()
  const newRow = ['value1', 'value2']
  sheet.appendRow(newRow)
}

```

To write in a specific range of cells, first you need to get the corresponding [Range](https://developers.google.com/apps-script/reference/spreadsheet/range). There's some examples of ranges you can get.

``` javascript

function writeByRange() {
  const url = "YOUR_SPREADSHEET_URL"
  const ss = SpreadsheetApp.openByUrl(url)

  const sheet = ss.getActiveSheet()
  //sheet.getRange(row, column)
  const range1 = sheet.getRange(2, 1) // passing only this two arguments, will return a range with a simple cell
  //sheet.getRange(row, column, numRows)
  const range2 = sheet.getRange(2, 1, 3) // will return a range with 3 rows, starting in row 2 w/ just the first column each
  //sheet.getRange(row, column, numRows, numColumns)
  const range3 = sheet.getRange(2, 1, 3, 2) // range starting in cell 2/1 w/ 3 rows and 2 columns
  //sheet.getRange(a1Notation)
  const range4 = sheet.getRange('B1')
  
  const values1 = 10
  range1.setValue(values1)
  // or
  // const values1 = [10]
  // range1.setValues(values1)
  
  const values2 = [[1], [2], [3]]
  range2.setValues(values2)
  
  const values3 = [[1,2],[3,4],[5,6]]
  range3.setValues(values3)
}

```

Remember to change the **url** value before executing. The functions [**setValue**](https://developers.google.com/apps-script/reference/spreadsheet/range#setvaluevalue) and [**setValues**](https://developers.google.com/apps-script/reference/spreadsheet/range#setvaluesvalues) will receive a Object and Object[][], respectively, and set this values in the range (the size of Object[][] need to match of the size of the range).


function write() {
  const ss = SpreadsheetApp.create('new spreadsheet')
  const sheet = ss.getActiveSheet()
  const newRow = ['value1', 'value2']
  sheet.appendRow(newRow)
}

function writeByRange() {
  const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/15gmpuEqiWnK95fKufM4Jhgc_KdiJNeLTGoKQzXGnxn0/edit?usp=sharing')
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
  range1.setv
  // or
  // const values1 = [10]
  // range1.setValues(values1)
  
  const values2 = [[1], [2], [3]]
  range2.setValues(values2)
  
  const values3 = [[1,2],[3,4],[5,6]]
  range3.setValues(values3)
}

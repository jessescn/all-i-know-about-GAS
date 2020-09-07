function open() {
  const iter = DriveApp.getFilesByName('Hello World')
  if(iter.hasNext()){ // check if 'Hello World file exists'
    const file = iter.next() 
    const ss = SpreadsheetApp.open(file)
  }
}

function openById() {
  const id = "YOUR_SPREADSHEET_ID"
  const ss = SpreadsheetApp.openById(id)
}


function openByURL() {
  const url = "YOUR_SPREADSHEET_URL"
  const ss = SpreadsheetApp.openByUrl(url)
}


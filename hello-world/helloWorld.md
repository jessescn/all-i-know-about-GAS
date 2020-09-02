## Hello World

First step you need to do is create a Google Spreadsheet (you can name whatever you want, i will call 'Hello World'), go in **Tools** -> **Script Editor**. It will open another tab in _script.google.com/xx_. 

This is the environment where we gonna work most part of time. Copy and paste this code below in Code.gs file:

``` javascript

function myFunction() {
  SpreadsheetApp.getActiveSheet().getActiveCell().setValue('Hello World!')
}

```

But before run, let's understand what's happening: 

- **SpreadsheetApp** is the GAS Class where we can manipulate Google Spreadsheets (create, open, delete, etc)
- **getActiveSheet** is the function where we can get the currentSheet which this script is related ('Hello World' in my case)
- **getActiveCell** will get the current active cell in the Spreadsheet
- **setValue()** will set the value 'Hello World!' in the specific cell


Now we just need to click in **Publish** -> **Implement as web app** -> **Deploy** (probably its gonna ask you permission to access your spreadsheet, just accept), and that's it! If you go to your Spreadsheet, you gonna see 'Hello World!' in the current cell! :tada: :) :tada:


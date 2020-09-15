## Creating Custom Menu

One of the most useful things to learn is to create custom menus, with which you can create various tools for manipulating your Excel data. First thing you need to do is open your Spreadsheet, go to Tools -> Script Editor and open your App Script editor.

### Creating a custom function

I will use a simple function that get a number in first column and multiply by 10. It's just to be simple, but you can do anything you want in this function.

``` javascript

function multiplyBy10() {
    // Get the active sheet  
    const sheet = SpreadsheetApp.getActiveSheet();
    // Get all values on sheet
    const values = sheet.getRange(2, 1, sheet.getRange("A1").getDataRegion().getLastRow(), sheet.getRange("A1").getDataRegion().getLastColumn()).getValues().filter(function(e){ return e[0] != ""})

    // Iterate over values, multiply by 10 and add value to sheet
    for(let i = 0; i < values.length; i++){
        const value = parseInt(values[i][0])
        sheet.getRange(i + 2, 2).setValue(value * 10)
    }
}

```

If you don't understand this code below, i advise you to read the spreadsheet tutorial [part 2](../2. manipulating-spreadsheets). 

### Creating the custom menu

there is a function callled **onOpen** that is executed when excel is opened, this is where we will define our [custom menu](https://developers.google.com/apps-script/quickstart/custom-functions).

``` javascript

function onOpen() {
    const spreadsheet = SpreadsheetApp.getActive();
    const menuItems = [
        { name: 'Multiply', functionName: 'multiplyBy10'},
    ];
    spreadsheet.addMenu('Execute', menuItems);
}

```

This code above we define a list of objects, where each object is a option in your menu, in our case, the menu will be called **Execute** and will have only one option: _Multiply_.
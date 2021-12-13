// Load the Visualization API and the controls package.
google.load('visualization', '1.0', { packages: ['table'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawDashboard);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it.
function drawDashboard() {
  // Create our data table.
  var data = google.visualization.arrayToDataTable([
    ['Sex', 'Name', 'Donuts eaten', 'Html'],
    ['Male', 'Michael', 5, '<input type="checkbox" id="1" name="check">'],
    ['Female', 'Elisa', 7, '<input type="checkbox" id="2" name="check">'],
    ['Male', 'Robert', 3, '<input type="checkbox" id="3" name="check">'],
    ['Male', 'John', 2, '<input type="checkbox" id="4" name="check">'],
    ['Female', 'Jessica', 6, '<input type="checkbox" id="5" name="check">'],
    ['Male', 'Aaron', 1, '<input type="checkbox" id="6" name="check">'],
    ['Female', 'Margareth', 8, '<input type="checkbox" id="7" name="check">'],
  ]);
  var table = new google.visualization.Table(document.getElementById('table'));
     
  var options = 
  {
    allowHtml: true, 
    showRowNumber: true, 
    width: '100%', 
    height: '100%'
    ,
    cssClassNames: { 
      headerRow: 'headerRow',
      tableRow: 'tableRow',
      oddTableRow: 'oddTableRow',
      selectedTableRow: 'selectedTableRow',
      // hoverTableRow: 'hoverTableRow',
      headerCell: 'headerCell',
      tableCell: 'tableCell',
      rowNumberCell: 'rowNumberCell'
    }    

  };

  table.draw(data, options);
}





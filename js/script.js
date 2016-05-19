console.log('hello world js')

/*button on top*/


/*creates a table*/
var colrow = 16;

$(document).ready(grid =function(){
	$('body').append('<table></table>');
	/*create 16 rows in the table*/
		var row = '<tr></tr>'
		for (var i = 0; i<colrow; i++){
			$('table').append(row);
		};
		/*creates 16 columns in the table*/
		var col = '<td></td>'
		for (var i = 0; i<colrow; i++){
			$('tr').append(col);
		};
		/*puts a div in each td of table*/
		$('td').append('<div></div>');
		/*makes div fit inside 800px*/
		var dimension = 600/colrow;
		$('div').css('width', dimension+'px');
		$('div').css('height', dimension+'px');
		/*sets hover over to be black*/
		$('div').hover(function(){
			$(this).css('background-color', 'black');
		})
		/*adds button to create another grid*/
		$('table').before('<button type="button">Click me to create another grid within 600px</button><br>');
		$('button').click(function(){
			colrow = prompt('enter how many rows and columns you want for the new grid');
			$('body').empty();
			$('body').append(grid);
		})

});















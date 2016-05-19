console.log('hello world js')

/*button on top*/


/*creates a table*/
var colrow = 16;
$(document).ready(function(){
	$('body').append('<table></table>');
	/*create 16 rows in the table*/
		var row = '<tr></tr>'
		for (var i = 0; i<16; i++){
			$('table').append(row);
		};
		/*creates 16 columns in the table*/
		var col = '<td></td>'
		for (var i = 0; i<16; i++){
			$('tr').append(col);
		};
		/*puts a div in each td of table*/
		$('td').append('<div></div>');
		/*makes div fit inside 800px*/
		var dimension = 800/colrow;
		$('div').css('width', dimension+'px');
		$('div').css('height', dimension+'px');
		/*sets hover over to be black*/
		$('div').hover(function(){
			$(this).css('background-color', 'black');
		})

});














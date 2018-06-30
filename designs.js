const heightInput = $('#input_height');
const widthInput = $('#input_width');
const colorInput = $('#colorPicker');

//makeGrid function that removes previous table and then new grid is built with help of for-loop

makeGrid = () => {

  let heightValue = heightInput.val();
  let widthValue = widthInput.val();

  let pixelCanvas = $('#pixel_canvas');
  pixelCanvas.children().remove(); // clears previously built table if any


// grid is built

  for (let h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let w = 0; w < widthValue; w++) {
    $('tr').append("<td></td>");
  }
}


//Changes the background color of the cell, with respective chosen color

$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});


// When size is submitted by the user, call makeGrid()

form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); // stops page from refreshing upon submit
    makeGrid();
});

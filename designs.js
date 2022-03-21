//defining vars for width and height
const $inputHeight = $("#inputHeight");
const $inputWidth = $("#inputWidth");
//var for event listener for changing the color on user input.
const $td = document.getElementById("td");
// Select color input for the tables
const $colorPicker = $("#colorPicker");

// Select size input at launch for the grids
const $sizePicker = $("#sizePicker");
$("#sizePicker").submit((event) => {
  event.preventDefault();
  //redefining vars width and height assigning value
  let width = $inputWidth.val();
  let height = $inputHeight.val();
// assign value to grid with height and weights
  makeGrid(width, height);
  //testing my code to make sure its pulling the width and height.
  console.log(width, height);
  //remove
  //$("#sizePicker").remove();

  // When size is submitted by the user, call makeGrid()
});
function makeGrid(width, height) {
  //reset input after user has already entered content when clicking submit
  $("tr").remove();
  //setting the height loop to allow to increase by increments
  for (let i = 0; i < height; i++) {
    $("#pixelCanvas").append("<tr></tr>");
  }
  //setting the width loop to increase the grid by increments
  for (let i = 0; i < width; i++) {
    $("tr").append("<td></td>");
  }
 
  //addEventListener("click", function () {
     //changing color to user input 
    $("td").click((event) => {
      let color = $colorPicker.val();
      $(event.target).css("background-color", color);
    });
    //colorPicker used
    //(function addClickListener() {
    // $("td").click;
    // let color = $colorPicker.val();
    //});
  
}

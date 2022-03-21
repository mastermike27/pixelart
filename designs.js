//defining vars
const $inputHeight = $("#inputHeight");
const $inputWidth = $("#inputWidth");
//var for event listener
const $td = document.getElementById("td");
// Select color input
const $colorPicker = $("#colorPicker");

// Select size input
const $sizePicker = $("#sizePicker");
$("#sizePicker").submit((event) => {
  event.preventDefault();
  //defining vars
  let width = $inputWidth.val();
  let height = $inputHeight.val();

  makeGrid(width, height);
  //testing my code
  console.log(width, height);
  //remove
  //$("#sizePicker").remove();

  // When size is submitted by the user, call makeGrid()
});
function makeGrid(width, height) {
  //reset input
  $("tr").remove();
  // Your code goes here!
  for (let i = 0; i < height; i++) {
    $("#pixelCanvas").append("<tr></tr>");
  }
  for (let i = 0; i < width; i++) {
    $("tr").append("<td></td>");
  }
  //changing color to user input
  addEventListener("click", function () {
    $("td").click((event) => {
      let color = $colorPicker.val();
      $(event.target).css("background-color", color);
    });
    //colorPicker used
    //(function addClickListener() {
    // $("td").click;
    // let color = $colorPicker.val();
    //});
  });
}

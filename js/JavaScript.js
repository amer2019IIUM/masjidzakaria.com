// // jQuery effect used to show the target panel ONLY when a tab is selected
// ///
// $( function() {
//   $( "#accordion" ).accordion({
//     collapsible: true
//   });
// } );
// $( function() {
//     $( "#Treatment_tabs" ).tabs(); //target the tabs in services page
// } );
// $( function() {
//   $( "#PatientAndVisitorsTabs" ).tabs(); //target the tabs in Patient And Visitors page
// } );
// $( function() {
//   $( "#tabs" ).tabs(); //target the tabs in navigation_bar
// } );

// // datepicker
// $( function() {
//   $( "#datepicker" ).datepicker();
// } );

// This feature is used to make background animates when scroll down or up
function parallax(){
  var prlx_layer_1 = document.getElementById('prlx_layer_1');
  prlx_layer_1.style.top = -(window.pageYOffset / 6)+'px';
}
window.addEventListener("scroll", parallax, false);
var myIndex = 0;
carousel();
// End of parallax

// Automatic Slideshow - change image every 3 seconds
function carousel() {
    var i;
    var x = document.getElementsByClassName("marquee");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}
// End of the Slideshow


// $(document).ready(function(){
//   $(".contact-form-btn").click(function(){
//     alert("Thanks a lot for your intersting ");
//   });
//   $("#btn2").click(function(){
//     alert("HTML: " + $("#test").html());
//   });
// });
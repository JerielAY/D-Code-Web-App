

$(function()
{
   // executes when HTML-Document is loaded and DOM is ready
   console.log("(document).ready was called - document is ready!");
});

$( "#login" ).submit(function( event ) {
   alert( "Handler for .submit() called." );

   document.getElementById("welcomeuser").innerHTML = `Welcome ${user}`;
 });

$( "#joinbuttons" ).submit(function( event ) {
   alert( "Handler for .join() called." );

   document.getElementById("welcomeuser").innerHTML = `Welcome ${user}`;
 });

 
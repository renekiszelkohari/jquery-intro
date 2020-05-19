// this makes sure that the page is loaded before any action of jquery
$(document).ready(function(){
/* BASIC SELECTION
 jQuery("a");
 $("a"); // short version of the above;  they select all <a></a> tags
 $(".my_footer"); //select all .my_footer class
 $("#logoNav"); //select the logoNav id

// SELECT BASED ON PARENT
$("p>a"); // select all direct child to parent
$("p a"); // select all descendants of parent - including child and everything below that

// PSEUDO SELECTORS :header, :first, :last
$(":first"); // selects first element of the page
$(":header"); // select all header element h1-h6
$("a:first"); // selects first <a></a> element of the page
$("ul>li:first"); // selects first li element of the ul element

// ATTRIBUTE SELECTORS
$("[href]"); // selects all elements with href attribute

// QUERY A STYLE PROPERTY TO FIND OUT WHAT IT IS:
$("p").css("background-color");
$("p").css("font-family");

// USING .css() TO MODIFY CSS PROPERTIES:
$("h2").css("text-decoration", "underline");
$("ul").css("", "2px solid #ccc");

// SELECT & CHANGE HTML
$("#my_footer").html(); // selects all content from #my_footer
$("body").html(); // selects all body content
$("#my_footer").html("<p>Hello there!</p>"); // replaces current element and content with new element and content
$("#my_footer").text("Hello There!"); // replaces current element and content with new text

// APPEND NEW CONTENT AT THE END OF AN EXISTING ELEMENT
$("#my_footer").append("<span>&copy; 2017</span>"); // adds span element at the end of #my_footer div

// REMOVE, EMPTY
$("#my_footer").empty(); // takes no argument; empties all content of #my_footer div, including tags and contents
$("#my_footer").remove(); // removes #my_footer div with everything inside

// USING .addClass(), .removeClass() INSTEAD OF .css() - PREFERRED WAY
$("h2").addClass("underline");
$("ul").removeClass("border");

*/

$("tr:odd").addClass("odd");
$("tr:even").addClass("even");

});
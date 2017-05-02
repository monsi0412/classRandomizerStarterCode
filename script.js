/*global $*/
/*global math*/

$(document).ready(function(){

var students=[
    "Monserrat", "Leslie", "Adonis"
];
var teachers=[
    "Aaron", "Zack", "Justin", "Alyxe", "Julia"
];

var randomStudent=Math.floor(Math.random()*students.length);
var randomTeacher=Math.floor(Math.random()*teachers.length);

$("#studentButton").click(function(){
    $("#studentDisplay").append("<p>", students[randomStudent], "</p>");
});
$("#teacherButton").click(function(){
    $("#teacherDisplay").append("<p>", teachers[randomTeacher], "</p>");
});


});

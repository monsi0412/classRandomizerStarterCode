/*global $*/
/*global math*/

$(document).ready(function(){

var students=[
    "Monserrat", "Leslie", "Adonis"
];
var teachers=[
    "Aaron", "Zack", "Justin", "Alyxe", "Julia"
];




$("#studentButton").click(function(){
    var randomStudent=Math.floor(Math.random()*students.length);
    $("#studentDisplay").html(students[randomStudent]);
});
$("#teacherButton").click(function(){
    var randomTeacher=Math.floor(Math.random()*teachers.length);
    $("#teacherDisplay").html(teachers[randomTeacher]);
});


});

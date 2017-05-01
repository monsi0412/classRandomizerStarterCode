/*global $*/
/*global math*/

$(document).ready(function(){

var students=[
    "Monserrat", "Leslie", "Adonis" 
];
var teachers=[
    "Aaron", "Zack", "Justin", "Alyxe", "Julia"
];

var randomStudent=math.floor(math.random()*students.length);
var randomTeacher=math.floor(math.random()*teachers.length);

$("#studentButton").click(function(){
    ("#studentDisplay").append(students[randomStudent]);
});
$("#teacherButton").click(function(){
    ("teacherDisplay").append(teachers[randomTeacher]);
});

});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

document.getElementById("startdate").setAttribute("min", today);

document.getElementById("enddate").setAttribute("min", today);


function SubmitFormData() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var startdate = $("#startdate").val();
    var enddate = $("#enddate").val();
    var room = $("#Room :selected").text();
    var package = $("#Package :selected").text();
    $.post("static/php/booking.php", { fname: fname, lname: lname, email: email, startdate: startdate, enddate: enddate, room: room, package: package },
    function(data) {
	 $('#results').html(data);
	 $('#bookform')[0].reset();
    });
}
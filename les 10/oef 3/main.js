var sender = "";
var reciever = "";
var message = "";

function generatecard() {
    sender = prompt("Please enter your name.", sender);
    reciever = prompt("Who are you sending this to?.", reciever);
    message = prompt("What would you like to tell them?.", message);

    var x = document.getElementById("container");
    x.querySelector(".send").innerHTML = "<b>Zender:</b> " + sender;
    x.querySelector(".rec").innerHTML = "<b>Ontvanger:</b> " + reciever;
    x.querySelector(".mssg").innerHTML = "<b>Bericht:</b>\n" + message;

    var image = Math.floor((Math.random() * 3) + 1);

    switch (image) {
        case 1:
            document.getElementById("bg").src = "1.png";
            break;
        case 2:
            document.getElementById("bg").src = "2.png";
            break;
        case 3:
            document.getElementById("bg").src = "3.png";
            break;
        default:
    }
}
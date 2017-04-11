var socket = io();

$(document).ready(function () {
    console.log("Document ready");
});

$(window).on("load", function () {
    console.log("Window loaded");
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("vanilla document loaded");
});

// denne metode uden brug af jquery er ca. dobbelt så hurtig, men det er stadig marginaler.
//
// document.getElementById("chat-input").addEventListener("keydown", function(event) {
//     if (event.keyCode == 13) {
//         event.preventDefault();
//         var message = document.getElementById("chat-input").value.trim();
//         if (message != "") {
//             socket.emit("chat-message", message);
//         }
//         document.getElementById('chat-input').value = "";
//     }
// });

$("#chat-input").keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        var message = $("#chat-input").val().trim();
        if (message != "") {
            socket.emit("chat-message", message);
        }
        $("#chat-input").val("");
    }
});

socket.on("chat-message", function (message) {
    $("#chat-container").append(message + "<br />");
});
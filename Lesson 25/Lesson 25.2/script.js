function showHide() {
  let inp = document.getElementById("inp").getAttribute("type");
  console.log(inp);
  if (inp === "text") {
    document.getElementById("inp").setAttribute("type", "password");
    document.getElementById("hide").style.display = "block";
    document.getElementById("show").style.display = "none";
  } else {
    document.getElementById("inp").setAttribute("type", "text");
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
  }
}

function Password() {
  let inp = document.getElementById("inp").value.length;
  console.log(inp);
  if (inp <= 4) {
    document.getElementById("chizk").style.height = "2px";
    document.getElementById("chizk").style.width = inp * 8.4 + "%";
    document.getElementById("chizk").style.backgroundColor = "red";
    document.getElementById("yozu").innerText = "too weak";
    document.getElementById("yozu").style.color = "red";
  } else if (inp > 4 && inp <= 8) {
    document.getElementById("chizk").style.height = "2px";
    document.getElementById("chizk").style.width = inp * 8.4 + "%";
    document.getElementById("chizk").style.backgroundColor = "orange";
    document.getElementById("yozu").innerText = "not bad";
    document.getElementById("yozu").style.color = "orange";
  } else if (inp > 8 && inp <= 12) {
    document.getElementById("chizk").style.height = "2px";
    document.getElementById("chizk").style.width = inp * 8.4 + "%";
    document.getElementById("chizk").style.backgroundColor = "green";
    document.getElementById("yozu").innerText = "strong";
    document.getElementById("yozu").style.color = "green";
  }
}

function Clear() {
  let inp = (document.getElementById("inp").value = "");
  document.getElementById("chizk").style.width = "0px";
  document.getElementById("yozu").innerText = "";
}

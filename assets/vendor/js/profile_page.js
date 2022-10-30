function editBio() {
  var x = document.getElementById("text_id");
  var y = document.getElementById("def_block");
  var z = document.getElementById("edit-btn");
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
}

function saveBio() {
  var x = document.getElementById("text_id");
  var y = document.getElementById("def_block");
  var z = document.getElementById("edit-btn");
  var text = document.getElementById("textarea").value;
  y.innerHTML = text;
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "table";
}

window.onload = function () {
  var bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>";
  var x = document.getElementById("def_block");
  x.innerHTML = bio;
  var y = document.getElementById("textarea");
  y.innerHTML = bio;
}
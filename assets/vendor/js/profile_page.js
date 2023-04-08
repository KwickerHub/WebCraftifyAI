
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

  // var bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>";
  // var x = document.getElementById("def_block");
  // x.innerHTML = bio;
  var y = document.getElementById("textarea");
  y.innerHTML = bio;
  $.get("../../backend/profile_page.php", {
    
  },
  function(data, status){
    dataJson = JSON.parse(data);
    if(dataJson["status"] == "True"){
            alert(data);
            console.log(data);
            
            var name=dataJson["name"];
            var z=document.getElementById("nameid");
            z.innerHTML=name;
            var projects=dataJson["projects"];
            var a=document.getElementById("project1");
            a.innerHTML=projects;
            var bio=dataJson["bio"];
            var b=document.getElementById("bio");
            b.innerHTML=bio;
            var designation=dataJson["designation"];
            var c=document.getElementById("designation");
            c.innerHTML=designation;
            var intro=dataJson["intro"];
            var d=document.getElementById("intro");
            d.innerHTML=intro;
            var age=dataJson["age"];
            var e=document.getElementById("age");
            e.innerHTML=age; 
            var location=dataJson["location"];
            var f=document.getElementById("location");
            f.innerHTML=location; 
            var status=dataJson["status"];
            var g=document.getElementById("status");
            g.innerHTML=status;
            var date=dataJson["date"];
            var h=document.getElementById("date");
            h.innerHTML=date;
            var skills=dataJson["skills"];
            var i=document.getElementById("skills");
            i.innerHTML=skills;
            var achievements=dataJson["achievements"];
            var j=document.getElementById("achievements");
            j.innerHTML=achievements;
    }

            




    
  });

}
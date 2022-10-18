/*global height = $("attr_height");
global width = $("attr_width");
global background = $("back_color");*/

var selectedId = "the_dev_dashboard";
var selectedElement;
// window.onload = function(){
// 	setup();
// 	alert(document.readyState);
// }

//$(document).ready(setup());
// var the_setuptimer_2 = setInterval(() => {
// 	if(document.readyState == "complete"){
// 		main('the_dev_dashboard'); clearInterval(the_setuptimer_2);
// 	}
// }, 1000);
// var the_setuptimer_2 = setInterval(() => {
// 	if(document.readyState == "complete"){
// 		loadSaveContent(); clearInterval(the_setuptimer_2);
// 	}
// }, 1200);

// var the_setuptimer_3 = setInterval(() => {
// 	if(document.readyState == "complete"){
// 		loadElements();; clearInterval(the_setuptimer_3);
// 	}
// }, 1300);

// var the_setuptimer_4 = setInterval(() => {
// 	if(document.readyState == "complete"){
// 		load_Adder_maker('element'); clearInterval(the_setuptimer_4);
// 	}
// }, 1400);

// var the_setuptimer_5 = setInterval(() => {
// 	if(document.readyState == "complete"){
// 		loadAllSides("Style"); clearInterval(the_setuptimer_5);
// 	}
// }, 1500);

// window.addEventListener("load",function(event) {
// 	var $input2 = document.getElementById('dec');
// 	var $input1 = document.getElementById('parenta');
// 	$input1.addEventListener('keyup', function() {
// 		$input2.value = $input1.value;
// 	});
// },false);

//window.addEventListener("load", function(event){main('the_dev_dashboard');}, false);
//window.addEventListener("load", function(event){loadSaveContent();}, false);
//window.addEventListener("load", function(event){setup();}, false);
//window.addEventListener("load", function(event){load_Adder_maker('element');}, false);
//window.addEventListener("load", function(event){loadAllSides("Style");}, false);
function setup() {
  main("the_dev_dashboard");
  loadSaveContent();
  loadElements();
  load_Adder_maker("element");
  loadAllSides("Style");
}

//window.onload = loadSaveContent();
// window.onload = loadElements();
//window.onload = load_Adder_maker('element');

function main(id) {
  selectedElement = document.querySelector("#" + id);
  selectedId = id;
}

//global selectedElement = '#the_dev_dashboard';

function add_element_2_dashboard (tag_name) {
    //specs.element.setAttribute(attribute, value);
    var newElem = document.createElement(tag_name);

    //height = ($("#style_height").val() != "") ? $("#style_height").val() : "120px";
    //width = ($("#style_width").val() != "") ? $("#style_width").val() : "120px";
    //background = ($("#style_background-color").val() != "") ? $("#back_color").val() : "#fed342";

    height = document.getElementById("settings_height").value + document.getElementById("settings_size_representation").value
    width =  + document.getElementById("settings_width").value + document.getElementById("settings_size_representation").value ;
    background = colorCodeGenetor(6);
    if (document.getElementById("settings_background").checked) {
        defaultStyle = 'height: '+ height + '; width: '+ width + '; background-color: ' + background + '; ';
    }else{
        defaultStyle = 'height: '+ height + '; width: '+ width + '; ';
    }
  
    elemId = generate_strings_id(7);
    //console.log(elemId);
    newElem.setAttribute("style", defaultStyle);
    newElem.setAttribute("id", elemId);
    newElem.setAttribute("ondblclick", "change_selected(event, "+ "'"+tag_name+"' , "+ "'"+elemId+"'"+ ")" );

    //var ref = document.querySelector('#the_dev_dashboard');
    selectedElement = document.getElementById(selectedId);
    var ref = selectedElement;
    home_msg = ref.textContent;
    //alert("flow o");
    //alert(home_msg.indexOf("This is the main dashboard arena"));
    if ( home_msg.indexOf("This is the main dashboard arena") > -1 ) {
        //ref.innerHTML = document.createElement(tag_name).toString();
        //var content = '<' + tag_name + ' id="'+elemId+'" ondblclick="change_selected(event, "'+tag_name+'", "'+elemId+'" ) style= "height: '+ height + '; width: '+ width + '; background-color: ' + background + ' ;"'   + '></' + tag_name + '>';
        /*'<' + tag_name + ' ondblclick="change_selected(event,'+ '"'+tag_name+'"' , '"'+elemId+'"' +') id="'+elemId+'" style= "height: '+ height + '; width: '+ width + '; background-color: ' + background + ' ;"'   + '></' + tag_name + '>';*/
      
        // This is the innerHTML of the development dashboard
      ref.innerHTML = ""; 
var your_comment = `
<head>
<title> #Particular Project Name</title>
<script>
    //Plugin Start
    //##
    //Plugin End 
</script>
</head> 
`;
 ref.innerHTML= your_comment;  
        proper_fitting = "\n" + "\t";
        //alert( document.getElementById('the_dev_dashboard').compareDocumentPosition(ref) );
        ref.append(proper_fitting);

        ref.appendChild(newElem, ref);
        getElementStyleDetails(elemId);
        getElementAttrDetails(elemId);
        selectCreated(elemId, tag_name);
    
    }else{
        proper_fitting = "\n" + "\t";
        ref.append(proper_fitting);
        
        //alert( document.getElementById('the_dev_dashboard').compareDocumentPosition(ref) );
        ref.appendChild(newElem, ref);
        getElementStyleDetails(elemId);
        getElementAttrDetails(elemId);
        selectCreated(elemId, tag_name);
    }
    loadSaveContent();
    //ref.appendChild(newElem, ref);
}

function selectCreated(id, type) {
  selectedId = id;
  selectedElement = document.getElementById(id);
  $("#the_selected_elem_left").text(type + " - #" + id + " : Selected");
  $("#the_selected_elem_right").text(type + " - #" + id + " : Selected");
}

function generate_strings_id(length) {
  var alhpa_lets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var code = "";
  for (var i = 0; i < length; i++) {
    if (i == 0) {
      code = code + alhpa_lets[Math.floor(Math.random() * alhpa_lets.length)];
    } else if (Math.floor(Math.random() * 2) == 1) {
      code = code + Math.floor(Math.random() * 10).toString();
    } else {
      code = code + alhpa_lets[Math.floor(Math.random() * alhpa_lets.length)];
    }
  }
  return code;
}

function colorCodeGenetor(length) {
  alhpa_lets = ["a", "b", "c", "d", "e", "f"];

  code = "";
  for (i = 0; i < length; i++) {
    if (Math.floor(Math.random() * 2) == 1) {
      code = code + Math.floor(Math.random() * 10).toString();
    } else {
      //alhpa_lets.g
      code = code + alhpa_lets[Math.floor(Math.random() * alhpa_lets.length)];
    }
  }
  return "#" + code;
}

function change_selected(e, type, id) {
  if (e.target.id == id) {
    selectedId = id;
    selectedElement = document.getElementById(id);
    $("#the_selected_elem_left").text(type + " - #" + id + " : Selected");
    $("#the_selected_elem_right").text(type + " - #" + id + " : Selected");
    getElementStyleDetails(selectedId);
    getElementAttrDetails(selectedId);
  }
}

function attr_changed(attribute) {
  var statusId = "attr_" + attribute + "_status";
  var attrValue = "attr_" + attribute;
  if (document.getElementById(statusId).checked == true) {
    var newValue = document.getElementById(attrValue).value;
    //alert(newValue);
    if (newValue != null || newValue != "") {
      document.getElementById(selectedId).setAttribute(attribute, newValue);
    } else {
      document.getElementById(selectedId).removeAttribute(attribute);
    }
  } else {
    var newValue = null;
    document.getElementById(selectedId).removeAttribute(attribute);
  }
}

function style_changed(property) {
  var statusId = "style_" + property + "_status";
  var propertyValue = "style_" + property;
  if (document.getElementById(statusId).checked == true) {
    var newValue = document.getElementById(propertyValue).value;
    if (newValue != null || newValue != "") {
      //document.getElementById(selectedId).style.property = newValue;
      document.getElementById(selectedId).style.cssText +=
        property + ":" + newValue + ";";
    } else {
      document.getElementById(selectedId).style.removeProperty(property);
    }
  } else {
    var newValue = null;
    //document.getElementById(selectedId).style.height = null;
    document.getElementById(selectedId).style.removeProperty(property);
  }
}

function elem_allowDrop(ev) {
  ev.preventDefault();
}

function elem_drag(ev, tag) {
  //alert(e.target.id);
  //ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("content", tag);
}

function elem_drop(ev) {
  ev.preventDefault();
  var tag = ev.dataTransfer.getData("content");
  //var tag_id = ev.dataTransfer.getData("text");
  add_element_2_dashboard(tag);
}

function getElementStyleDetails(elem_id) {
  elem = document.getElementById(elem_id);
  if (!elem) return []; // Element does not exist, empty list.
  var win = document.defaultView || window,
    style,
    styleNode = [];
  if (win.getComputedStyle) {
    // Modern browsers
    style = win.getComputedStyle(elem, "");
    for (var i = 0; i < style.length; i++) {
      propertyDis = "style_" + style[i].toString();
      property = document.getElementById(propertyDis);
      if (property) {
        property.value = style.getPropertyValue(style[i]);
      }
    }
  } else if (elem.currentStyle) {
    // IE
    style = elem.currentStyle;
    for (var name in style) {
      propertyDis = "style_" + name;
      property = document.getElementById(propertyDis);
      if (!property) {
        property.value = style[name];
      }
    }
  } else {
    // Ancient browser..
    style = elem.style;
    for (var i = 0; i < style.length; i++) {
      propertyDis = "style_" + style[i].toString();
      property = document.getElementById(propertyDis);
      if (!property) {
        //alert(propertyDis);
        property.value = style[style[i]];
        //style[style[i]];
      }
    }
  }
}

function getElementAttrDetails(elem_id) {
  el = document.getElementById(elem_id);
  var nodes = [],
    values = [];
  for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
    attrDis = "attr_" + atts[i].nodeName.toString();
    attributeArea = document.getElementById(attrDis);
    if (attributeArea) {
      if (atts[i].nodeValue != null) {
        attributeArea.value = atts[i].nodeValue;
      } else {
        attributeArea.value = null;
      }
    }
  }
}

/* <div id="create_project_pop" class="theTextPopUp">
<input type="text" id="the_project_name" name="theTextSide">
<br/>
<button onclick="">Create</button>
<br/><br/>
</div> */
function newProject() {
  //$("create_project_pop", "id").fadeIn();
  document.getElementById("create_project_pop").style.display = "block";
}

function contains_special_char(str) {
  regex = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?]";
  ret = false;

  array = regex.split("");
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (str.includes(element)) {
      ret = true;
      //alert("Please remove this character:" + element + "from the project name")
      break;
    }
  }
  return ret;
}

function makeTheProject() {
  var projectName = document.getElementById("the_project_name").value;
  var currentPage = window.location.href;
  //projectName = projectName.replace(/ /g, "_").toString();
  //alert(projectName);
  if (contains_special_char(projectName)) {
    alert(
      "Project name should not include any of the special characters: " +
        "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?]"
    );
  } else {
    projectName = projectName.replace(/ /g, "_").toString();
    //alert(projectName);
    if (currentPage.includes("?project_title=")) {
      saveDevArena();
    } else {
      var cvalue = document.getElementById("the_dev_dashboard").innerHTML;
      var project_description = document.getElementById(
        "the_project_description"
      ).value;
      value = save_file(projectName, cvalue, project_description, "new");
    }
  }
}

function bringText() {
  var alreadyThere = document.getElementById(selectedId).textContent;
  if (alreadyThere != "") {
    document.getElementById("theTextPop").value = alreadyThere;
  }

  /* if (document.getElementById("text_pop_up_side").style.display = "block") {
        document.getElementById("text_pop_up_side").style.display = "none"
    }else{
        document.getElementById("text_pop_up_side").style.display = "block";
    } */
  document.getElementById("text_pop_up_side").style.display = "block";
}

function addTextBtn() {
  //var gotten = $("#theTextPop").val();
  var gotten = document.getElementById("theTextPop").value;
  addText(gotten);
}

function addText(text2add) {
  var secElem = document.getElementById(selectedId);
  var node = document.createTextNode(text2add);
  secElem.appendChild(node);
  document.getElementById("text_pop_up_side").style.display = "none";
  /*var para = document.createElement("p");
    para.appendChild(node);*/
}

function removeSelected() {
  var r = confirm("You are about to remove the selected element");
  if (r == true) {
    var secElem = document.getElementById(selectedId);
    secElem.remove();
    selectCreated("the_dev_dashboard", "div");
  } else {
    x = "You pressed Cancel!";
  }
}

function change2codeMode() {
  var bodyElem = document.getElementById("the_dev_dashboard");
  var body = bodyElem.innerHTML;
  //alert(body);
  //var textArea = document.getElementById("the_textarea_4_view");
  //if ( typeof(textArea) != 'undefined' && textArea != null ){
  var para = document.createElement("textarea");
  height = "100%";
  width = "100%";
  background = colorCodeGenetor(6);
  color = colorCodeGenetor(6);

  defaultStyle =
    "height: " +
    height +
    "; width: " +
    width +
    "; background-color: " +
    background +
    "; ";

  para.setAttribute("style", defaultStyle);
  para.setAttribute("id", "the_textarea_4_view");
  para.innerHTML = body;
  //alert(para);
  bodyElem.innerHTML = null;
  bodyElem.append(para);
  /* }else{
        alert("already in code view mode");
    } */
}

function change2webMode() {
  var bodyElem = document.getElementById("the_dev_dashboard");
  var body = bodyElem.innerHTML;
  var textArea = document.getElementById("the_textarea_4_view");
  if (typeof textArea != "undefined" && textArea != null) {
    var para = document.getElementById("the_textarea_4_view").value;
    //alert(para);
    bodyElem.innerHTML = para;
  } else {
    alert("You are already in Web mode");
  }
}

// copied from W3 school... Thank you W3 schools
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  console.log(ca);
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function checkCookie(cookiename) {
  var cookieName = getCookie(cookiename);
  ret = false;
  if (cookieName != "") {
    //alert("Welcome again " + user);
    ret = true;
  } else {
    /* cookieName = prompt("Please enter your name:", "");
        if (cookieName != "" && cookieName != null) {
            setCookie("username", cookieName, 365);
        } */
    ret = false;
  }
  return ret;
}

function saveDevArenaAsCookie() {
  var currentPage = window.location.href;

  if (currentPage.includes("?project_title=")) {
    var xmlhttp = new XMLHttpRequest();
    var pos = currentPage.indexOf("=");
    var findings = currentPage.slice(pos + 1);
    //$("#meta_description").attr("content", findings);
    //var cleaned_findings = findings.replace(/%20/g, " ").toString();
    //cleaned_findings = findings.replace(/-/g, " ").toString();
    cname = "the_dev_enviro_" + cleaned_findings;
    var cvalue = document.getElementById("the_dev_dashboard").innerHTML;
    //var body = bodyElem;
    //alert(cname + "$#$" +  cvalue);
    setCookie(cname, btoa(cvalue), 1000);
  } else {
    alert("could not find project name. Saving as untitle.");
    var cvalue = document.getElementById("the_dev_dashboard").innerHTML;
    //cname = "the_dev_enviro_" + currentPage;
    if (cvalue != "" && cvalue != null) {
      //alert(cvalue);
      setCookie(currentPage, btoa(cvalue), 1000);
    }
  }
}

function loadSaveContentAsCookie() {
  var currentPage = window.location.href;

  if (currentPage.includes("?project_title=")) {
    var xmlhttp = new XMLHttpRequest();
    var pos = currentPage.indexOf("=");
    var findings = currentPage.slice(pos + 1);
    //var cleaned_findings = findings.replace(/%20/g, " ").toString();
    //cleaned_findings = findings.replace(/-/g, " ").toString();
    cname = "the_dev_enviro_" + cleaned_findings;

    if (checkCookie(cname) == true) {
      var gottenStuff = atob(getCookie(cname));
      document.getElementById("the_dev_dashboard").innerHTML = gottenStuff;
    } else {
      alert("Sorry, this project could not be retrieved.");
    }
  } else {
    alert("No Project Name. Let's try to retrieve untitle project.");

    if (checkCookie(currentPage) == true) {
      var gottenStuff = atob(getCookie(currentPage));
      //alert(gottenStuff);
      document.getElementById("the_dev_dashboard").innerHTML = gottenStuff;
    }
  }
}

function replaceSelected() {
  /*var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.replaceChild(para,child);*/
}

function insertElementB4() {
  /*var element = document.getElementById("div1");
    var child = document.getElementById("p1");
    element.insertBefore(para,child);*/
}

function enableCustomiser(side) {
  var r = confirm(
    "You are about to enable customisation for the entire page. Are you ready?"
  );
  if (r == true) {
    id = side == "left" ? "theLeftSideBar" : "theRightSideBar";
    selectedId = id;
    selectedElement = document.getElementById(id);
    $("#the_selected_elem_left").text("aside" + " - #" + id + " : Selected");
    $("#the_selected_elem_right").text("aside" + " - #" + id + " : Selected");
    getElementStyleDetails(selectedId);
    getElementAttrDetails(selectedId);
  } else {
    x = "You pressed Cancel!";
  }
}

function removetheSideBars(side) {
  var r = confirm(
    "You are about to remove the entire bar. Please do not proceed If you have not saved your project"
  );
  if (r == true) {
    id = side == "left" ? "theLeftSideBar" : "theRightSideBar";
    if (id == "theLeftSideBar") {
      if ($("#theLeftSideBar").css("display") == "block") {
        document.getElementById("theLeftSideBar").style.display = "none";
        document.getElementById("leftBarRestore").style.display = "block";
        scaleViewLayoutAdjust();
      }
    } else if (id == "theRightSideBar") {
      if ($("#theRightSideBar").css("display") == "block") {
        document.getElementById("theRightSideBar").style.display = "none";
        document.getElementById("rightBarRestore").style.display = "block";
        scaleViewLayoutAdjust();
      }
    }
  } else {
    x = "You pressed Cancel!";
  }
}

//style_position
function scaleViewLayoutAdjust() {
  // if both bars are ON, readjust the main dev
  if (document.body.clientWidth >= 960) {
    if (
      $("#theLeftSideBar").css("display") == "block" &&
      $("#theRightSideBar").css("display") == "block"
    ) {
      document.getElementById("theLeftSideBar").style.width = "20%";
      document.getElementById("theRightSideBar").style.width = "20%";
      document.getElementById("the_dev_dashboard").style.width = "60%";

      document.getElementById("theLeftSideBar").style.maxWidth = "20%";
      document.getElementById("theRightSideBar").style.maxWidth = "20%";
      document.getElementById("the_dev_dashboard").style.maxWidth = "60%";
    }
    // if one bar is ON, readjust the main dev
    else if (
      $("#theLeftSideBar").css("display") == "block" &&
      $("#theRightSideBar").css("display") == "none"
    ) {
      document.getElementById("theLeftSideBar").style.width = "20%";
      document.getElementById("theRightSideBar").style.width = "0";
      document.getElementById("the_dev_dashboard").style.width = "80%";

      document.getElementById("theLeftSideBar").style.maxWidth = "20%";
      document.getElementById("theRightSideBar").style.maxWidth = "0";
      document.getElementById("the_dev_dashboard").style.maxWidth = "80%";
    } else if (
      $("#theLeftSideBar").css("display") == "none" &&
      $("#theRightSideBar").css("display") == "block"
    ) {
      document.getElementById("theLeftSideBar").style.width = "0";
      document.getElementById("theRightSideBar").style.width = "20%";
      document.getElementById("the_dev_dashboard").style.width = "80%";

      document.getElementById("theLeftSideBar").style.maxWidth = "0";
      document.getElementById("theRightSideBar").style.maxWidth = "20%";
      document.getElementById("the_dev_dashboard").style.maxWidth = "80%";
    }
    // If none of the bar is ON, readjust the main dev
    else if (
      $("#theLeftSideBar").css("display") == "none" &&
      $("#theRightSideBar").css("display") == "none"
    ) {
      document.getElementById("theLeftSideBar").style.width = "0";
      document.getElementById("theRightSideBar").style.width = "0";
      document.getElementById("the_dev_dashboard").style.width = "100%";

      document.getElementById("theLeftSideBar").style.maxWidth = "0";
      document.getElementById("theRightSideBar").style.maxWidth = "0";
      document.getElementById("the_dev_dashboard").style.maxWidth = "100%";
    }
  } else if (document.body.clientWidth < 960) {
  }
}

function removeParent(ev) {
  ev.target.parentElement.style.display = "none";
}

function removeSpecificId(id) {
  document.getElementById(id).style.display = "none";
}

function loadStyles() {
  display_by = document.getElementById("arrangement_type").value;
  url = "../../backend/style/get_style.php?echo=json&display_by=" + display_by;
  $.post(
    url,
    {
      key: "gjhtiidsimi09403jfjkdknf",
    },
    function (data, status) {
      dataJson = JSON.parse(data);
      //alert(data);
      result = dataJson["result"];
      if (dataJson["status"] == "true") {
        //$("#processor_shower").fadeOut();
        //$("#loader_side_success").fadeIn();
        //$("#msg_success").text(dataJson["msg"]);
        for (let index = 0; index < result.length; index++) {
          const element = result[index];
          description = element["description"];
          style_name = element["style_name"];
          //alert(style_name);
        }
      } else {
        console.log(
          "failed to load while using the json_javascript_displayer_function"
        );
      }
    }
  );
}

function loadAllLeftSides(ev) {
  if (typeof ev == "string") {
    tag = ev;
  } else {
    selected_Id = ev.target.id;
    selected_Element = document.getElementById(selected_Id);
    tag = selected_Element.value;
  }
  //alert(tag);
  display_by = document.getElementById("arrangement_type").value;
  url = "../../backend/style/get_style.php?echo=raw";
  if (tag == "Style") {
    url = "../../backend/style/get_style.php?echo=raw&display_by=" + display_by;
  } else if (tag == "Assitance/Modules") {
    url = "../../backend/assistance/get_assistance.php?echo=raw&display_by=" +
      display_by;
  } else if (tag == "Attributes") {
    url = "../../backend/attribute/get_attribute.php?echo=raw&display_by=" +
      display_by;
  } else if (tag == "Colors") {
    url = "../../backend/colors/get_color.php?echo=raw&display_by=" + display_by;
  } else if (tag == "File") {
    url = "../../backend/file/get_file.php?echo=raw&display_by=" + display_by;
  }
  //alert(url);
  $.post(
    url, {
      key: "gjhtiidsimi09403jfjkdknf",
    },
    function (data, status) {
      //dataJson = JSON.parse(data);
      //alert(data);
      //result = data["result"];
      if (status) {
        $(".full_left_aside_section").html(data);
        $("#The_left_header_side").text(tag);
      } else {
        console.log(
          "failed to load while using the direct Backend to HTML render."
        );
      }
    }
  );
}

function loadAllRightSides(ev) {
  if (typeof ev == "string") {
    tag = ev;
  } else {
    selected_Id = ev.target.id;
    selected_Element = document.getElementById(selected_Id);
    tag = selected_Element.value;
  }
  //alert(tag);
  display_by = document.getElementById("arrangement_type").value;
  url = "../../backend/style/get_style.php?echo=raw";
  if (tag == "Style") {
    url = "../../backend/style/get_style.php?echo=raw&display_by=" + display_by;
  } else if (tag == "Assitance/Modules") {
    url = "../../backend/assistance/get_assistance.php?echo=raw&display_by=" +
      display_by;
  } else if (tag == "Attributes") {
    url = "../../backend/attribute/get_attribute.php?echo=raw&display_by=" +
      display_by;
  } else if (tag == "Colors") {
    url = "../../backend/colors/get_color.php?echo=raw&display_by=" + display_by;
  } else if (tag == "File") {
    url = "../../backend/file/get_file.php?echo=raw&display_by=" + display_by;
  }
  //alert(url);
  $.post(
    url,
    {
      key: "gjhtiidsimi09403jfjkdknf",
    },
    function (data, status) {
      if (status) {
        $(".full_right_aside_section").html(data);
        $("#The_right_header_side").text(tag);
      } else {
        console.log(
          "failed to load while using the direct Backend to HTML render."
        );
      }
    }
  );
}

function post_request(url, parameters, type) {
  $.post(url, parameters, function (data, status) {
    //alert(data);
    if (status) {
      if (type == "json") {
        var dataJson = JSON.parse(data);
        return dataJson;
      } else {
        return data;
      }
    } else {
      return "could not make a successful post request. ****NOT REACHED****";
    }
  });
}

function loadElements(){
  display_by = document.getElementById("arrangement_type").value;
  url = '../../backend/elements/get_element.php?echo=raw&display_by=' + display_by ;
  $.post(url, {
      key: "gjhtiidsimi09403jfjkdknf",
  },
  function(data, status){
      //dataJson = JSON.parse(data);
      //alert(data);
      //result = data["result"];
      if (status){
          $('.the_bottom_bar').html(data);
          //$('#The_left_header_side').text(tag);
      }else{
          console.log('failed to load while using the direct Backend to HTML render.');
      }
  });
}

function save_file(project_name, project_content, project_description, type){
    var ret = "";
    //alert("entered here");
    if (type == "new") {
        url = '../../backend/projects/add_project.php';	
    }else{
        url = '../../backend/projects/save_project.php';
    }
    $.post(url, {
        user_id: 0,
        project_name: project_name,
        project_description: project_description,
        project_content: project_content,
        key: "gjhtiidsimi09403jfjkdknf"
    },
    function(data, status){
        
        if (status){
            if (type == "new"){
                alert(data);
                dataJson = JSON.parse(data);
                console.log(dataJson);
                if (dataJson["status"] == "true"){
                    var currentPage = window.location.href;
                    currentPage = currentPage + "?project_title=" + project_name;
                    window.oepn(currentPage, "_blank");
                    //saveDevArena();
                }else if(dataJson["msg"].includes("Invalid User")){
                    //let us take the person to the log-in page
                    alert("You are logged out. We will be redirecting you to Register(or Login) in a new tab ");
                    window.open("signup.html", "_blank");
                }
                else{
                    alert("We are facing some challenges with creating this project." );
                }
            }else{
                alert(data);
                dataJson = JSON.parse(data);
                console.log(dataJson);
                if (dataJson["status"] == "true"){
                    alert("project saved!!!");
                }else if(dataJson["msg"].includes("Invalid User")){
                    //let us take the person to the log-in page
                    alert("You are currently logged out. We will be redirecting you to Register(or Login) in a new tab");
                    window.open("signup.html", "_blank");
                }
                else{
                    alert("We are facing some challenges with saving this project. It may have been deleted or move" );
                }
            }
        }else{
            console.log('issues with saving the content online.');
        }
    });

    return ret;

}

function loadSaveContent(){
    if (get_url_data("project_title") != ""){
        var project_name = get_url_data("project_title");
        $.post('../../backend/projects/get_project_details.php', {
            user_id: 34, 
            project_name: project_name, 
            key: "gjhtiidsimi09403jfjkdknf",
        },
        function(data, status){
            if (status){
                //alert(data);
                dataJson = JSON.parse(data);
                //alert(dataJson['project']['project_location']);
                if (dataJson["status"] == "true"){
                    //var currentPage = window.location.href;
                    //currentPage = currentPage + "?project_title=" + project_name;
                    //window.location.assign(currentPage);
                    //saveDevArena();
                    $.post('../../backend/projects/load_saved_content.php', {
                        user_id: 34, 
                        project_name: project_name, 
                        project_location: dataJson['project']['project_location'],
                        key: "gjhtiidsimi09403jfjkdknf",
                    },
                    function(data, status){
                        //dataJson = JSON.parse(data);
                        //alert(data);
                        if (status){
                            if (data != "") {
                                $('#the_dev_dashboard').html(data);	
                            }else{
                                alert('could not load project');
                            }
                            //$('#The_left_header_side').text(tag);
                        }else{
                            console.log('failed to load project. But made the first connection.');
                        }
                    });
                }else if(dataJson["msg"].includes("Invalid User")){
                    //let us take the person to the log-in page
                    window.open("login.html", "_blank");
                }
                else{
                    alert("We are facing some challenges with loading this project." );
                }
                
            }else{
                console.log('failed to load saved project.');
                alert("project has failed to load. check your Network.");
            }
        });
        

        //This will be the future of all POST request on this platform or all our scripts. this will help reduce the lines of code drastically
        //data = post_request('../../backend/projects/get_project_details.php', 
        //{user_id: 34, project_name: project_name, key: "gjhtiidsimi09403jfjkdknf"}, "json");
        //alert(await data);
      }else {
        alert("No Project Name. Let's try to save this project first before we retrieve");
        newProject();
      }
    }

function saveDevArena() {
  if (get_url_data("project_title") != "") {
    var project_name = get_url_data("project_title");
    var cvalue = document.getElementById("the_dev_dashboard").innerHTML;
    var project_description = document.getElementById(
      "the_project_description"
    ).value;
    save_file(project_name, cvalue, project_description, "exist");
    // if(contains_special_char(project_name)){
    // 	alert("Project name should not include any of the special characters: "+ "!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]");
    // }else{
    // 	var cvalue = document.getElementById("the_dev_dashboard").innerHTML;
    // 	var project_description = document.getElementById("the_project_description").value;
    // 	save_file(project_name, cvalue, project_description);
    // }
  } else {
    alert(
      "could not find project name. However, You can save this project now."
    );
    var cvalue = document.getElementById("the_dev_dashboard").innerHTML;
    if (cvalue != "" && cvalue != null) {
      newProject();
      //saveDevArena();
    }
  }
}


function get_url_data(parameter) {
  var ret = "";
  var currentPage = window.location.href;
  var get_all_data = currentPage.indexOf("?");
  var only_data_side = currentPage.slice(get_all_data + 1);
  //alert(only_data_side);
  if (only_data_side.includes("&")) {
    splited_data = only_data_side.split("&");
    for (let index = 0; index < splited_data.length; index++) {
      const element = splited_data[index];
      //alert(element.slice(0, element.indexOf("=")));
      if (element.slice(0, element.indexOf("=")) == parameter) {
        ret = element.slice(element.indexOf("=") + 1);
      }
    }
  } else {
    //alert(only_data_side.slice(0, only_data_side.indexOf("=")));
    if (only_data_side.slice(0, only_data_side.indexOf("=")) == parameter) {
      ret = only_data_side.slice(only_data_side.indexOf("=") + 1);
    }
  }
  //alert(ret.toString());
  return ret;
}

function get_colors(ev) {
  colors = [];
  elemClass = document.getElementsByClassName("color_section");
  for (let index = 0; index < elemClass.length; index++) {
    if (document.getElementById("get_only_raw").checked == true) {
      const element = elemClass[index];
      str_index = index.toString();
      //parti_color = document.getElementById('color_input_'+str_index+str_index).value;
      parti_color_range = document.getElementById(
        "color_side_range_" + str_index + str_index
      ).value;
      new_Value = parti_color_range;
      colors.push(new_Value);
    } else {
      const element = elemClass[index];
      str_index = index.toString();
      parti_color = document.getElementById(
        "color_input_" + str_index + str_index
      ).value;
      parti_color_range = document.getElementById(
        "color_side_range_" + str_index + str_index
      ).value;
      new_Value =
        parti_color_range == 0 || parti_color_range == ""
          ? parti_color
          : parti_color + " " + parti_color_range + "%";
      colors.push(new_Value);
    }
  }
  // for (const iterator of elemClass) {
  //     parti_color = document.getElementsByClassName('color_input1').style.color;
  //     alert(parti_color);
  //     parti_color_range = document.getElementsByClassName('color_side_range').style.color;
  //     new_Value = (parti_color_range == 0 || parti_color_range == "") ? parti_color : parti_color + " " + parti_color_range +"%";
  //     colors.push(new_Value);
  // }
  /* elemClass.forEach(element => {

        parti_color = element.getElementsByClassName('color_input').value;
        parti_color_range = element.getElementsByClassName('color_side_range').value
        new_Value = (parti_color_range == 0) ? parti_color : parti_color + " " + parti_color_range +"%";
        colors.push(new_Value);
    }); */

  //alert(colors.toString());
  return colors.toString();
}

function the_add_colors(id, angle, color, type) {
  id = id.startsWith("#") ? id.replace("#", "") : id;
  if (type == "linear") {
    var repeat_struture = document.getElementById("the_chief_master_repeat");
    var value_gotten =
      repeat_struture.checked == true ? "repeating-linear" : "linear";
    // alert(value_gotten);
    // alert(angle);
    // alert(color);
    // alert(type);
    $(id.toString(), "id").style(
      "#" +
        id +
        "{ \
            background: " +
        color +
        ";\
            background: -webkit-" +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        "); \
            background: -o-" +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        ");  \
            background: -moz-" +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        "); \
            background: " +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        "); \
        }"
    );
  } else {
    var repeat_struture = document.getElementById("the_chief_master_repeat");
    var value_gotten =
      repeat_struture.checked == true ? "repeating-radial" : "radial";
    $(id.toString(), "id").style(
      "#" +
        id +
        "{ \
            background: " +
        color +
        ";\
            background: -webkit-" +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        "); \
            background: -o-" +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        ");  \
            background: -moz-" +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        "); \
            background: " +
        value_gotten +
        "-gradient(" +
        angle +
        ", " +
        color +
        "); \
        }"
    );
  }
}

function change_color_displayer(ev) {
  var color = get_colors(ev);
  // the_color_type = 'background: '+color+';\
  // background: -webkit-linear-gradient(-90deg, '+color+'); \
  // background: -o-linear-gradient(-90deg, '+color+');  \
  // background: -moz-linear-gradient(-90deg, '+color+'); \
  // background: linear-gradient(-90deg, '+color+');';
  var angle = document.getElementById("colors_angle_getter").value;
  var type = document.getElementById("type_color_getter").value;
  the_add_colors("the_color_displayer", angle, color, type);
  //document.getElementById('the_color_displayer').style.backgroundColor = color;
}

function add_colors_selector() {
  var new_Elem = document.createElement("LABEL");
  var already_exist = document.getElementById("already_existing_color_box");
  var default_val = parseInt(already_exist.value); // This element is created with the fact that we have two already existing color selectors 0 and 1
  default_val = default_val + 1;
  var new_val = default_val.toString() + default_val.toString();
  elem =
    `<span class="input_text_side">Color:</span>
        <input class="color_input" id="color_input_` +
    new_val +
    `" onchange="change_color_displayer(event)" type="color" value="testing" placeholder="colors picker"/>
        <input class="color_side_range" id="color_side_range_` +
    new_val +
    `" value="0" type="text"/>`;
  new_Elem.setAttribute("class", "color_section");
  new_Elem.innerHTML = elem;
  document.getElementById("the_color_Selection_boxes").append(new_Elem);
  already_exist.value = default_val;
}

function apply_the_color(ev) {
  var secElem = document.getElementById(selectedId);
  var color = get_colors(ev);
  var angle = document.getElementById("colors_angle_getter").value;
  var type = document.getElementById("type_color_getter").value;
  //the_add_colors('the_color_displayer', angle, color, type);
  the_add_colors(selectedId, angle, color, type);
}

function make_colorsBox_go() {
  if (document.getElementById("get_only_raw").checked == true) {
    elemClass = document.getElementsByClassName("color_input");
    for (let index = 0; index < elemClass.length; index++) {
      const element = elemClass[index];
      element.style.display = "none";

      str_index = index.toString();
      parti_color = document.getElementById(
        "color_input_" + str_index + str_index
      ).value;
      parti_color_range = document.getElementById(
        "color_side_range_" + str_index + str_index
      ).value = parti_color;
    }
  } else {
    elemClass = document.getElementsByClassName("color_input");
    for (let index = 0; index < elemClass.length; index++) {
      const element = elemClass[index];
      element.style.display = "inline";
      str_index = index.toString();
      parti_color_range = document.getElementById(
        "color_side_range_" + str_index + str_index
      ).value = "0";
    }
  }
}

function duplicate_element(elem, ref) {
  var secElem = elem ? elem : document.getElementById(selectedId);
  var newElem = secElem.cloneNode();
  tag_name = newElem.tagName;
  clone = document.getElementById(selectedId).cloneNode();
  var ref = ref ? ref : secElem.parentElement;

  elemId = generate_strings_id(7);
  background = colorCodeGenetor(6);
  newElem.setAttribute("id", elemId);
  newElem.setAttribute(
    "ondblclick",
    "change_selected(event, " +
      "'" +
      tag_name +
      "' , " +
      "'" +
      elemId +
      "'" +
      ")"
  );
  if (
    document.getElementById("settings_duplicate_background").checked == true
  ) {
    newElem.style.backgroundColor = background;
  }
  home_msg = ref.textContent;

  if (home_msg.indexOf("This is the main dashboard arena") > -1) {
    ref.innerHTML = "";
    ref.appendChild(newElem, ref);
    getElementStyleDetails(elemId);
    getElementAttrDetails(elemId);
    selectCreated(elemId, tag_name);
  } else {
    ref.appendChild(newElem, ref);
    getElementStyleDetails(elemId);
    getElementAttrDetails(elemId);
    selectCreated(elemId, tag_name);
  }
}

function clone_element(elem) {
  var secElem = elem ? elem : document.getElementById(selectedId);
  var newElem = secElem.cloneNode();
  tag_name = newElem.tagName;
  clone = document.getElementById(selectedId).cloneNode();

  var ref = secElem.parentElement;

  elemId = generate_strings_id(7);
  background = colorCodeGenetor(6);
  newElem.setAttribute("id", elemId);
  newElem.setAttribute(
    "ondblclick",
    "change_selected(event, " +
      "'" +
      tag_name +
      "' , " +
      "'" +
      elemId +
      "'" +
      ")"
  );
  if (
    document.getElementById("settings_duplicate_background").checked == true
  ) {
    newElem.style.backgroundColor = background;
  }

  return newElem;
}

function duplicate_children(elem, ref) {
  var secElem = elem ? elem : document.getElementById(selectedId);
  var ref = ref ? ref : secElem.parentElement;
  var mainParent = clone_element(secElem);
  count_children = secElem.childElementCount;

  if (ref.textContent.indexOf("This is the main dashboard arena") > -1) {
    ref.innerHTML = "";
    ref.appendChild(mainParent, ref);

    //getElementStyleDetails(elemId);
    //getElementAttrDetails(elemId);
    //selectCreated(elemId, tag_name);
  } else {
    ref.appendChild(mainParent, ref);
    //getElementStyleDetails(elemId);
    //getElementAttrDetails(elemId);
    //selectCreated(elemId, tag_name);
  }

  //alert(count_children);
  if (count_children > 0) {
    array = secElem.children;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      //clone_elem = duplicate_children(element);
      //ref.appendChild(mainParent, ref);
      duplicate_children(element, mainParent);
      //alert(element.id);
    }
  }
}

function showSettingsPage() {
  document.getElementById("the_settings_section_page").style.display = "block";
}

function showPopUpById(id) {
  document.getElementById(id).style.display = "block";
}

function add_FA_icon(icon_name) {
  var secElem = document.getElementById(selectedId);
  iconId = generate_strings_id(7);

  tag_name = "i";
  var new_icon = document.createElement(tag_name);
  new_icon.setAttribute("class", "fa fa-" + icon_name);
  new_icon.setAttribute("id", iconId);
  new_icon.setAttribute(
    "ondblclick",
    "change_selected(event, " +
      "'" +
      tag_name +
      "' , " +
      "'" +
      iconId +
      "'" +
      ")"
  );

  // method two
  // var new_icon_named = 'fa fa-'+icon_name;
  // var d_new_icon = '<i class="'+new_icon_named+'"></i>';
  //secElem.innerHTML = d_new_icon;

  secElem.append(new_icon);
  document.getElementById("the_icon_displayer_pop_up").style.display = "none";
}

function load_Adder_maker(adder) {
  var elem = document.getElementById("the_selected_adder_display");
  var frame = document.createElement("iframe");
  var adder_url = "";
  if (adder == "element") {
    adder_url = "pop_up_frames/add_element.html";
  } else if (adder == "attribute") {
    adder_url = "pop_up_frames/add_attribute.html";
  } else if (adder == "style") {
    adder_url = "pop_up_frames/add_style.html";
  } else if (adder == "module") {
    adder_url = "pop_up_frames/add_module.html";
  } else {
    adder_url = "pop_up_frames/add_element.html";
  }

  elem.innerHTML =
    '<iframe style="width: 100%; text-align: center;" src="' +
    adder_url +
    '"> </iframe>';
}

function now_display_adder_maker(event, adder) {
  var head_adders = document.getElementsByClassName(
    "the_adder_header_ adder_header_selected"
  );
  head_adders[0].setAttribute("class", "the_adder_header_");

  event.target.setAttribute("class", "the_adder_header_ adder_header_selected");
  load_Adder_maker(adder);
}

//TODO::Wanted to create something that will tell the tab to load when opening the pop-up.
function show_icon_popup(area) {
  document.getElementById("the_icon_displayer_pop_up").style.display = "block";
  iconType = "FontAwesome";
  display_this_icon_type(iconType);
}

function display_this_icon_type(iconType) {
  var head_adders = document.getElementsByClassName(
    "the_icon_header_ icon_header_selected"
  );
  head_adders[0].setAttribute("class", "the_icon_header_");

  //instead of sending the event, what if we set some unique ID for all the arts/icon categories
  document
    .getElementById("icon_type_id_" + iconType)
    .setAttribute("class", "the_icon_header_ icon_header_selected");
  load_icon_maker(iconType);
}

function load_icon_maker(iconType) {
  display_by = document.getElementById("arrangement_type").value;
  url_icon =
    "../../backend/icons/get_icon.php?echo=raw&display_by=" + display_by;

  var elem = document.getElementById("the_selected_icon_displayer");
  var ret_value = "";
  if (iconType == "FontAwesome") {
    $.post(
      url_icon,
      {
        key: "gjhtiidsimi09403jfjkdknf",
      },
      function (data, status) {
        //alert(data);
        elem.innerHTML = data;
      }
    );
  } else if (iconType == "GoogleIcon") {
    elem.innerHTML = "Update Coming Soon.";
  }
}

function handle_side_bars(restore_id) {
  //alert("entered here");
  if (restore_id == "leftBarRestore") {
    //alert(document.getElementById('theLeftSideBar').style.display);
    if ($("#theLeftSideBar").css("display") == "none") {
      document.getElementById("theLeftSideBar").style.display = "block";
      document.getElementById("leftBarRestore").style.display = "none";
      scaleViewLayoutAdjust();
    }
  } else if (restore_id == "rightBarRestore") {
    if ($("#theRightSideBar").css("display") == "none") {
      document.getElementById("theRightSideBar").style.display = "block";
      document.getElementById("rightBarRestore").style.display = "none";
      scaleViewLayoutAdjust();
    }
  }
}

var toolTipText = document.getElementById("toolTipText");
var popUp = document.getElementById("popUp");
toolTipText.onclick = (event) => {
  event.stopPropagation();
  popUp.classList.toggle("active");
  setTimeout(() => {
    popUp.classList.toggle("active");
  }, 4000);
};
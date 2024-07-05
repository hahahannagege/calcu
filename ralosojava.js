function designate(a){
  forms.display.value = forms.display.value+a;
}

function del() {
  var war = forms.display.value;
  forms.display.value = war.substring (0, war.length-1)
}

function ac() {
  forms.display.value = "";
}

function equal() {
  forms.display.value = eval(forms.display.value);
}

function sqrt() {
  var qwerty = forms.display.value;
  var store = Math.sqrt(qwerty);
  forms.display.value = store;
}

function square() {
  var sqr = forms.display.value;
  var redeem = Math.pow(sqr, 2);
  forms.display.value = redeem;
}

function sine() {
  var tri = forms.display.value;
  var result = Math.sin(tri);
  forms.display.value = result;
}

function tan() {
  var tri = forms.display.value;
  var result = Math.tan(tri);
  forms.display.value = result;
}

function cos() {
  var tri = forms.display.value;
  var result = Math.cos(tri);
  forms.display.value = result;
}

let memory = 0;

function addToMemory() {
  memory = parseFloat(document.getElementById("display").value);
}

function recallMemory() {
  document.getElementById("display").value = memory;
}


function clearMemory() {
  memory = 0;
}

function grade(){
  var a = parseFloat(document.getElementById("math").value);
  var b = parseFloat(document.getElementById("sci").value);
  var c = parseFloat(document.getElementById("eng").value);
  var d = parseFloat(document.getElementById("elec").value);
  var e = parseFloat(document.getElementById("ap").value);
  var f = parseFloat(document.getElementById("ict").value);
  var g = parseFloat(document.getElementById("fil").value);
  var h = parseFloat(document.getElementById("esp").value);
  var i = parseFloat(document.getElementById("research").value);
  var j = parseFloat(document.getElementById("music").value);
  var k = parseFloat(document.getElementById("arts").value);
  var l = parseFloat(document.getElementById("pe").value);
  var m = parseFloat(document.getElementById("health").value);
  var n = j+k+l+m;
  var mapeh = n/4; 
  var ab = a+b+c+d+e+f+g+h+i+mapeh;
  document.getElementById("r1").value = ab/10; 
}
function reset(){
  var a = document.getElementById("eng").value = "";
  var b = document.getElementById("sci").value = "";
  var c = document.getElementById("ict").value = "";
  var d = document.getElementById("math").value = "";
  var g = document.getElementById("ap").value = "";
  var h = document.getElementById("esp").value = "";
  var i = document.getElementById("fil").value = "";
  var j = document.getElementById("research").value = "";
  var k = document.getElementById("music").value = "";
  var l = document.getElementById("arts").value = "";
  var m = document.getElementById("pe").value = "";
  var q = document.getElementById("elec").value = "";
  var n = document.getElementById("health").value = "";
  var ad = document.getElementById("r1").value = "";
}
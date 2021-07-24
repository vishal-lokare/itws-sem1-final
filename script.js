
function login(){
    window.location = "login.html";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = "Current Time is : " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    if(h>=9 && (h<15 || h==15 && m<= 29) && (d>=1 && d<=5)){
        document.getElementById("status").innerHTML = "& Markets are open."
    }
    else{
        document.getElementById("status").innerHTML = "& Markets are closed."
    }
    
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function show(){
    alert("Demo account \nID : \"admin\" \nPassword : \"admin\"");
}

function logout(){
    alert("Logged out successfully");
    window.location = "index.html";
}
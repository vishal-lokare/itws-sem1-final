function tocheck(){
    var keys = localStorage.getItem('dets');
    let object = {name: document.getElementById("name"), username: document.getElementById("singid"), password: document.getElementById("signpass")};
    keys.push(object);
    localStorage.setItem('dets', JSON.stringify('keys'));
}

function check()
{
    var usern = document.getElementById('logid').value;
    var passw = document.getElementById('pass').value;
    
    for(i = 0; i < dets.length; i++)
    {
        if(usern == dets[i].username && passw == dets[i].password)
        {
            alert("Authencticated successfully and logged in as " + dets[i].name);
            window.location = "main.html";
            return
        }}
            alert("Wrong ID or password");
}

function signup(){
    
    var n = document.getElementById("name").value
    var u = document.getElementById("signid").value
    var p = document.getElementById("signpass").value
    var c = document.getElementById("conpass").value

    var result = p.localeCompare(c);
    if(p.length < 8){
        alert("Password less than 8 characters.");
        window.location = "#";
    }
    else if(result !== 0){
        alert("Password and Confirm Password do not match.")
        window.location = "#";
    }
    else{
        tocheck();
        alert("data saved");
        window.location = "login.html";
    }
    
}
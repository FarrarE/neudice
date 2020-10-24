let history = [];
let last = "";
let secondLast;

function roll(event){
    let alert = document.getElementById("alert");
    let parent = alert.parentNode;

    // resets div to prevent animation overlap
    parent.removeChild(alert);
    parent.appendChild(alert)

    let id = parseInt(event.target.id.substring(1));
    let badge = parseInt(document.getElementById(event.target.id + "-badge").innerHTML);
    let result = Math.floor((Math.random() * Math.floor(id) + 1) * badge );
    let log = badge + "d" + id + " + NA = " + result;  
    history.push(log);
    console.log(history);
    alert.innerHTML = result;
    alert.className = "show";

    secondLast = last;
    last = log;
    document.getElementById("p2").innerHTML = last;
    document.getElementById("p1").innerHTML = secondLast;
}

function showHistory(){
    alert("This feature is not implemented yet")
}
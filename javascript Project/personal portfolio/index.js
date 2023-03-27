let links = document.getElementsByClassName("info");
var content = document.getElementsByClassName("content");


function opentab(tabname,event) {
    for (i of links) {
        i.classList.remove("activelink");
    }

    for (i of content) {
        i.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");

}
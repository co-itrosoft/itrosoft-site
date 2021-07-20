function showzirmajmoee() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "block";
}
 function hidezirmajmoee() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "none";
}
function showzirmajmoee2() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "block";
    document.getElementById("style-of-zirmenu-of-tamirat2").style.display = "block";
}
function hidezirmajmoee2() {
    document.getElementById("style-of-zirmenu-of-tamirat").style.display = "none";
    document.getElementById("style-of-zirmenu-of-tamirat2").style.display = "none";
}
function showzirmajmoee3() {
    document.getElementById("style-of-zirmenu-of-tamirat3").style.display = "block";
}
 function hidezirmajmoee3() {
    document.getElementById("style-of-zirmenu-of-tamirat3").style.display = "none";
}
function showzirmajmoee4() {
    document.getElementById("style-of-zirmenu-of-tamirat4").style.display = "block";
}
 function hidezirmajmoee4() {
    document.getElementById("style-of-zirmenu-of-tamirat4").style.display = "none";
}
function displaynonefirstbrandpic() {
    document.getElementById("display-first-brand-pic").style.display = "none";
}
function dispalymenuitems() {
    document.getElementById("display-of-menu-icon").style.display = "none";
    document.getElementById("display-of-menu-zarbdar").style.display = "block";
    document.getElementById("style-of-all-menu-mo").style.display = "block";
}
function bardispalymenuitems() {
    document.getElementById("display-of-menu-icon").style.display = "block";
    document.getElementById("display-of-menu-zarbdar").style.display = "none";
    document.getElementById("style-of-all-menu-mo").style.display = "none";
}

setInterval(clock, 1000);

function clock() {
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    var  b = document.getElementById("clocktext");
    b.innerHTML = hour +":"+ min +":"+ sec;
}

clock();
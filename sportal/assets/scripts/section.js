document.getElementById("db1").style.background = "#00204a";
document.getElementById("db1").style.borderBottom = "2px solid #0085ca";

document.getElementById("homebtn").style.background = "#0085ca";
document.getElementById("homebtn").style.borderBottom = "2px solid #00204a";

document.getElementById("homebtn").addEventListener("mouseover", addHomeHover);
document.getElementById("homebtn").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("homebtn").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("navbar").addEventListener("mouseout", removeHomeHover);
document.getElementById("db1").addEventListener("mouseover", addHomeHoverFoto);
document.getElementById("db1").addEventListener("mouseout", removeHomeHoverFoto);
document.getElementById("db2").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db2").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db3").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db3").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db4").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db4").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db5").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db5").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db6").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db6").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db7").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db7").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db8").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db8").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dbs").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dbs").addEventListener("mouseout", addHomeHoverFoto);

document.getElementById("dc1").addEventListener("mouseover", addHomeHoverFoto);
document.getElementById("dc1").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc2").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc2").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc3").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc3").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc4").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc4").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc6").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc6").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dbs1").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dbs1").addEventListener("mouseout", addHomeHoverFoto);



function addHomeHoverFoto() {
    document.getElementById("db1").style.background = "#00204a";
    document.getElementById("db1").style.borderBottom = "2px solid #0085ca";
};

function removeHomeHoverFoto() {
    document.getElementById("db1").style.background = "#0085ca";
    document.getElementById("db1").style.borderBottom = "2px solid #00204a";
};

function removeHomeHover() {
    document.getElementById("homebtn").style.background = "#0085ca";
    document.getElementById("homebtn").style.borderBottom = "2px solid #00204a";
};

function addHomeHover() {
    document.getElementById("homebtn").style.background = "#00204a";
    document.getElementById("homebtn").style.borderBottom = "2px solid #0085ca";
};
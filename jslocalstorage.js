var brojac = localStorage.getItem("kolikoputa");
if (brojac == null) {
    brojac = 0;
} else {
    brojac++;
}

localStorage.setItem("kolikoputa", brojac);
document.getElementById("visit-times").innerHTML =brojac;

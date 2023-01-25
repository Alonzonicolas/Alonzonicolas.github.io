descripcion=false;

document.getElementById("aboutMe").onclick = function () {
    document.getElementById("descripcion").style.display = "block";
    document.getElementById("educacion").style.display = "none";
    document.getElementById("habilidades").style.display = "none";
    document.getElementById("idiomas").style.display = "none";
    document.getElementById("contacto").style.display = "none";
}

document.getElementById("boton1").onclick = function () {
    document.getElementById("descripcion").style.display = "none";
    document.getElementById("educacion").style.display = "block";
}

document.getElementById("boton2.1").onclick = function () {
    document.getElementById("descripcion").style.display = "block";
    document.getElementById("educacion").style.display = "none";
}

document.getElementById("boton2.2").onclick = function () {
    document.getElementById("educacion").style.display = "none";
    document.getElementById("habilidades").style.display = "block";
}

document.getElementById("boton3.1").onclick = function () {
    document.getElementById("habilidades").style.display = "none";
    document.getElementById("educacion").style.display = "block";
}

document.getElementById("boton3.2").onclick = function () {
    document.getElementById("habilidades").style.display = "none";
    document.getElementById("idiomas").style.display = "block";
}

document.getElementById("boton4.1").onclick = function () {
    document.getElementById("idiomas").style.display = "none";
    document.getElementById("habilidades").style.display = "block";
}

document.getElementById("boton4.2").onclick = function () {
    document.getElementById("idiomas").style.display = "none";
    document.getElementById("contacto").style.display = "block";
}

document.getElementById("boton5").onclick = function () {
    document.getElementById("contacto").style.display = "none";
    document.getElementById("idiomas").style.display = "block";
}
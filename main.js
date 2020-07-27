document.getElementById("lista").style.visibility = "hidden";

function lista() {
    if (document.getElementById("lista").style.visibility == "hidden") {
        document.getElementById("lista").style.visibility = "visible";
    } else {
        document.getElementById("lista").style.visibility = "hidden";
    }
}

//VARIABLES
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

var label_input1 = document.getElementById("label_input1");
var label_input2 = document.getElementById("label_input2");
var label_input3 = document.getElementById("label_input3");

var label_input1_normalizado = document.getElementById("label_input1_normalizado");
var label_input2_normalizado = document.getElementById("label_input2_normalizado");
var label_input3_normalizado = document.getElementById("label_input3_normalizado");

var roca = document.getElementById("roca");

var svg_punto = document.getElementById("punto");

var checkboxs = document.getElementsByClassName("checkboxs");

//>QAP

var check_QAP = document.getElementById("check_QAP");
var poligonos_QAP = document.getElementsByClassName("poligonos_QAP");

for (let i = 0; i < document.getElementsByClassName("poligonos").length; i++) {
    document.getElementsByClassName("poligonos")[i].style.visibility = "hidden";
}

for (let i = 0; i < poligonos_QAP.length; i++) {
    poligonos_QAP[i].style.visibility = "visible";
    poligonos_QAP[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    poligonos_QAP[i].style.opacity = "0.5 ";
}

//>QAPv

var check_QAPv = document.getElementById("check_QAPv");
var poligonos_QAPv = document.getElementsByClassName("poligonos_QAPv");

//>GABRO_hbl
var check_GABRO_hbl = document.getElementById("check_GABRO_hbl");
var poligonos_GABRO_hbl = document.getElementsByClassName("poligonos_GABRO_hbl");

//>GABRO_olv
var check_GABRO_olv = document.getElementById("check_GABRO_olv");
var poligonos_GABRO_olv = document.getElementsByClassName("poligonos_GABRO_olv");

//>GABRO_px
var check_GABRO_px = document.getElementById("check_GABRO_px");
var poligonos_GABRO_px = document.getElementsByClassName("poligonos_GABRO_px");

//>UM_hbl
var check_UM_hbl = document.getElementById("check_UM_hbl");
var poligonos_UM_hbl = document.getElementsByClassName("poligonos_UM_hbl");

//>UM_px
var check_UM_px = document.getElementById("check_UM_px");
var poligonos_UM_px = document.getElementsByClassName("poligonos_UM_px");

function general() {
    let suma = input1.value * 1 + input2.value * 1 + input3.value * 1;

    let input1_normalizado = input1.value * 100 / suma;
    let input2_normalizado = input2.value * 100 / suma;
    let input3_normalizado = input3.value * 100 / suma;

    if (suma != 0) {
        var x = input3_normalizado + input1_normalizado / 2;
        var y = input1_normalizado;

        svg_punto.setAttribute("cx", x + 5);
        svg_punto.setAttribute("cy", 105 - y);
    }

    //MOSTRAR VALORES INPUTS
    label_input1.innerHTML = input1.value + "%";
    label_input2.innerHTML = input2.value + "%";
    label_input3.innerHTML = input3.value + "%";

    if (suma <= 100) {
        label_input1.style.color = "white"
        label_input2.style.color = "white"
        label_input3.style.color = "white"
    } else {
        label_input1.style.color = "salmon"
        label_input2.style.color = "salmon"
        label_input3.style.color = "salmon"
    }

    //MOSTRAR PORCENTAJES NORMALIZADOS
    if (input1_normalizado != parseInt(input1_normalizado)) {
        label_input1_normalizado.innerHTML = input1_normalizado.toFixed(2) + "%";
    } else {
        label_input1_normalizado.innerHTML = input1_normalizado + "%";
    }

    if (input2_normalizado != parseInt(input2_normalizado)) {
        label_input2_normalizado.innerHTML = input2_normalizado.toFixed(2) + "%";
    } else {
        label_input2_normalizado.innerHTML = input2_normalizado + "%";
    }

    if (input3_normalizado != parseInt(input3_normalizado)) {
        label_input3_normalizado.innerHTML = input3_normalizado.toFixed(2) + "%";
    } else {
        label_input3_normalizado.innerHTML = input3_normalizado + "%";
    }

    //>QAP
    if (document.getElementById("QAP").checked == true) {
        let recta1_QAP = x * 2.5 - 25;
        let recta2_QAP = x * 6.666666666666667 - 233.33333333333337;
        let recta3_QAP = x * -2.5 + 225.0;
        let recta4_QAP = x * -6.666666666666667 + 433.33333333333337;

        if (y >= 90) {
            roca.innerHTML = "Cuarzolita (silexita)";
        } else if (y >= 60) {
            roca.innerHTML = "Granitoide rico en cuarzo";
        } else if (y >= 20) {
            if (y >= recta1_QAP) {
                roca.innerHTML = 'Granito de feldespato alcalino';
            } else if (y >= recta2_QAP) {
                roca.innerHTML = 'Sienogranito';
            } else if (y >= recta3_QAP) {
                roca.innerHTML = 'Tonalita';
            } else if (y >= recta4_QAP) {
                roca.innerHTML = 'Granodiorita';
            } else {
                roca.innerHTML = 'Monzogranito';
            }
        } else if (y >= 5) {
            if (y >= recta1_QAP) {
                roca.innerHTML = 'Cuarzosienita de feldespato alcalino';
            } else if (y >= recta2_QAP) {
                roca.innerHTML = 'Cuarzosienita';
            } else if (y >= recta3_QAP) {
                roca.innerHTML = 'Cuarzodiorita/Cuarzogabro';
            } else if (y >= recta4_QAP) {
                roca.innerHTML = 'Cuarzo-monzodiorita/Cuarzo-monzogabro';
            } else {
                roca.innerHTML = 'Cuarzomonzonita';
            }
        } else if (y >= 0) {
            if (y >= recta1_QAP) {
                roca.innerHTML = 'Sienita de feldespato alcalino';
            } else if (y >= recta2_QAP) {
                roca.innerHTML = 'Sienita';
            } else if (y >= recta3_QAP) {
                roca.innerHTML = 'Diorita/Gabro';
            } else if (y >= recta4_QAP) {
                roca.innerHTML = 'Monzodiorita/Monzogabro';
            } else {
                roca.innerHTML = 'Monzonita';
            }
        }
    } else if (document.getElementById("QAPv").checked == true) {
        //>QAPv
        let recta1_QAPv = x * 2.5 - 25;
        let recta2_QAPv = x * 6.666666666666667 - 233.33333333333337;
        let recta3_QAPv = x * -2.5 + 225.0;
        let recta4_QAPv = x * -6.666666666666667 + 433.33333333333337;

        if (y >= 60) {
            roca.innerHTML = "-";
        } else if (y >= 20) {
            if (y >= recta1_QAPv) {
                roca.innerHTML = 'Riolita de feldespato alcalino';
            } else if (y >= recta4_QAPv) {
                roca.innerHTML = 'Dacita';
            } else {
                roca.innerHTML = 'Riolita';
            }
        } else if (y >= 5) {
            if (y >= recta1_QAPv) {
                roca.innerHTML = 'Cuarzo - traquita de feldespato alcalino';
            } else if (y >= recta2_QAPv) {
                roca.innerHTML = 'Cuarzo - traquita';
            } else if (y >= recta3_QAPv) {
                roca.innerHTML = 'Basalto toelítico';
            } else if (y >= recta4_QAPv) {
                roca.innerHTML = 'Andesita calcoalcalina';
            } else {
                roca.innerHTML = 'Cuarzo - lacita';
            }
        } else if (y >= 0) {
            if (y >= recta1_QAPv) {
                roca.innerHTML = 'Traquita de feldespato alcalino';
            } else if (y >= recta2_QAPv) {
                roca.innerHTML = 'Traquita';
            } else if (y >= recta3_QAPv) {
                roca.innerHTML = 'Basalto calcoalcalino rico en Al';
            } else if (y >= recta4_QAPv) {
                roca.innerHTML = 'Mugearita';
            } else {
                roca.innerHTML = 'Lacita con feldespatoides';
            }
        }
    } else if (document.getElementById("GABRO_hbl").checked == true) {
        //>GABRO_hbl
        let recta1_GABRO_hbl = (x - 5) * 2 + 0;
        let recta2_GABRO_hbl = (x + 5) * -2 + 200;
        let recta3_GABRO_hbl = (x + 90) * -2 + 200;
        let recta4_GABRO_hbl = (x - 90) * 2 + 0;

        if (y >= 90) {
            roca.innerHTML = "Anortosita";
        } else if (y >= 10) {
            if (y >= recta1_GABRO_hbl) {
                roca.innerHTML = 'Gabro/Gabronorita/Norita';
            } else if (y >= recta2_GABRO_hbl) {
                roca.innerHTML = 'Gabro hornbléndico';
            } else if (x >= 50) {
                roca.innerHTML = 'Gabro/Gabronorita/Norita hornbléndica';
            } else {
                roca.innerHTML = 'Gabro/Gabronorita/Norita piroxénica';
            }
        } else if (y >= 0) {
            if (y <= recta3_GABRO_hbl) {
                roca.innerHTML = 'Piroxenita con plagioclasa';
            } else if (y <= recta4_GABRO_hbl) {
                roca.innerHTML = 'Hornblendita con plagioclasa';
            } else if (x >= 50) {
                roca.innerHTML = 'Hornblendita piroxénica con plagioclasa';
            } else {
                roca.innerHTML = 'Piroxenita hornbléndica con plagioclasa';
            }
        }
    } else if (document.getElementById("GABRO_olv").checked == true) {

        //>GABRO_olv
        let recta1_GABRO_olv = (x - 5) * 2 + 0;
        let recta2_GABRO_olv = (x + 5) * -2 + 200;
        let recta3_GABRO_olv = (x + 90) * -2 + 200;
        let recta4_GABRO_olv = (x - 90) * 2 + 0;

        if (y >= 90) {
            roca.innerHTML = "Anortosita";
        } else if (y >= 10) {
            if (y >= recta1_GABRO_olv) {
                roca.innerHTML = 'Gabro/Gabronorita/Norita';
            } else if (y >= recta2_GABRO_olv) {
                roca.innerHTML = 'Troctolita';
            } else {
                roca.innerHTML = 'Gabro/Gabronorita/Norita olivínica';
            }
        } else if (y >= 0) {
            roca.innerHTML = 'Rocas ultramáficas con plagioclasa';
        }
    } else if (document.getElementById("GABRO_px").checked == true) {
        //>GABRO_px
        let recta1_GABRO_px = (x - 5) * 2 + 0;
        let recta2_GABRO_px = (x + 5) * -2 + 200;
        let recta3_GABRO_px = (x + 90) * -2 + 200;
        let recta4_GABRO_px = (x - 90) * 2 + 0;

        if (y >= 40) {
            roca.innerHTML = "-";
        } else if (y >= 10) {
            if (y >= recta1_GABRO_px) {
                roca.innerHTML = 'Norita';
            } else if (y >= recta2_GABRO_px) {
                roca.innerHTML = 'Gabro';
            } else if (x >= 50) {
                roca.innerHTML = 'Gabro ortopiroxénico';
            } else {
                roca.innerHTML = 'Norita clinopiroxénica';
            }
        } else if (y >= 0) {
            roca.innerHTML = 'Piroxenita con plagioclasa';
        }
    } else if (document.getElementById("UM_hbl").checked == true) {

        //>UM_hbl
        let recta1_UM_hbl = (x - 5) * 2 + 0;
        let recta2_UM_hbl = (x + 5) * -2 + 200;
        let recta3_UM_hbl = (x + 90) * -2 + 200;
        let recta4_UM_hbl = (x - 90) * 2 + 0;

        if (y >= 90) {
            roca.innerHTML = "Dunita";
        } else if (y >= 40) {
            if (y >= recta1_UM_hbl) {
                roca.innerHTML = "Peridotita piroxénica";
            } else if (y >= recta2_UM_hbl) {
                roca.innerHTML = "Peridotita hornbléndica";
            } else {
                roca.innerHTML = "Peridotita hornbléndica con piroxeno";
            }
        } else if (y >= 5) {
            if (y <= recta3_UM_hbl) {
                roca.innerHTML = "Piroxenita";
            } else if (y >= recta1_UM_hbl) {
                roca.innerHTML = "Piroxenita olivínica";
            } else if (y <= recta4_UM_hbl) {
                roca.innerHTML = "Hornblendita";
            } else if (y >= recta2_UM_hbl) {
                roca.innerHTML = "Hornblendita olivínica";
            } else if (x >= 50) {
                roca.innerHTML = "Hornblendita piroxénica con olivino";
            } else {
                roca.innerHTML = "Piroxenita hornbléndica con olivino";
            }
        } else if (y >= 0) {
            if (y <= recta3_UM_hbl) {
                roca.innerHTML = "Piroxenita";
            } else if (y <= recta4_UM_hbl) {
                roca.innerHTML = "Hornblendita";
            } else if (x >= 50) {
                roca.innerHTML = "Hornblendita piroxénica";
            } else {
                roca.innerHTML = "Piroxenita hornbléndica";
            }
        }
    } else if (document.getElementById("UM_px").checked == true) {

        //>UM_px
        let recta1_UM_px = (x - 5) * 2 + 0;
        let recta2_UM_px = (x + 5) * -2 + 200;
        let recta3_UM_px = (x + 90) * -2 + 200;
        let recta4_UM_px = (x - 90) * 2 + 0;

        if (y >= 90) {
            roca.innerHTML = "Dunita";
        } else if (y >= 40) {
            if (y >= recta1_UM_px) {
                roca.innerHTML = "Harzburgita";
            } else if (y >= recta2_UM_px) {
                roca.innerHTML = "Wehrlita";
            } else {
                roca.innerHTML = "Lherzolita";
            }
        } else if (y >= 5) {
            if (y <= recta3_UM_px) {
                roca.innerHTML = "Ortopiroxenita";
            } else if (y >= recta1_UM_px) {
                roca.innerHTML = "Ortopiroxenita olivínica";
            } else if (y <= recta4_UM_px) {
                roca.innerHTML = "Clinopiroxenita";
            } else if (y >= recta2_UM_px) {
                roca.innerHTML = "Clinopiroxenita olivínica";
            } else {
                roca.innerHTML = "Websterita olivínica";
            }
        } else if (y >= 0) {
            if (y <= recta3_UM_px) {
                roca.innerHTML = "Ortopiroxenita";
            } else if (y <= recta4_UM_px) {
                roca.innerHTML = "Clinopiroxenita";
            } else {
                roca.innerHTML = "Websterita";
            }
        }
    }

    if (suma == 0) {
        svg_punto.style.visibility = "hidden";

        label_input1.innerHTML = "&nbsp;";
        label_input2.innerHTML = "&nbsp;";
        label_input3.innerHTML = "&nbsp;";

        label_input1_normalizado.innerHTML = "&nbsp;";
        label_input2_normalizado.innerHTML = "&nbsp;";
        label_input3_normalizado.innerHTML = "&nbsp;";

        roca.innerHTML = "&nbsp;";
    } else {
        svg_punto.style.visibility = "visible";
    }
}


function poligonos(actual) {

    let poligonosActual = document.getElementsByClassName("poligonos_" + actual);
    let poligonos = document.getElementsByClassName("poligonos");

    let opcion = document.getElementById(actual);

    //Mostrar poligonos
    for (let i = 0; i < poligonos.length; i++) {
        poligonos[i].style.visibility = "hidden";
    }

    for (let i = 0; i < poligonosActual.length; i++) {
        poligonosActual[i].style.visibility = "visible";
        poligonosActual[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        poligonosActual[i].style.opacity = "0.5 ";
    }

    //Mostrar minerales
    if (document.getElementById("QAP").checked == true) {
        document.getElementById("mx1").innerHTML = "Qz";
        document.getElementById("mx2").innerHTML = "Fdk";
        document.getElementById("mx3").innerHTML = "Plg";
    } else if (document.getElementById("QAPv").checked == true) {
        document.getElementById("mx1").innerHTML = "Qz";
        document.getElementById("mx2").innerHTML = "Fdk";
        document.getElementById("mx3").innerHTML = "Plg";
    } else if (document.getElementById("GABRO_hbl").checked == true) {
        document.getElementById("mx1").innerHTML = "Plg";
        document.getElementById("mx2").innerHTML = "Px";
        document.getElementById("mx3").innerHTML = "Hbl";
    } else if (document.getElementById("GABRO_olv").checked == true) {
        document.getElementById("mx1").innerHTML = "Plg";
        document.getElementById("mx2").innerHTML = "Px";
        document.getElementById("mx3").innerHTML = "Olv";
    } else if (document.getElementById("GABRO_px").checked == true) {
        document.getElementById("mx1").innerHTML = "Plg";
        document.getElementById("mx2").innerHTML = "Opx";
        document.getElementById("mx3").innerHTML = "Cxp";
    } else if (document.getElementById("UM_hbl").checked == true) {
        document.getElementById("mx1").innerHTML = "Olv";
        document.getElementById("mx2").innerHTML = "Px";
        document.getElementById("mx3").innerHTML = "Hbl";
    } else if (document.getElementById("UM_px").checked == true) {
        document.getElementById("mx1").innerHTML = "Olv";
        document.getElementById("mx2").innerHTML = "Opx";
        document.getElementById("mx3").innerHTML = "Cpx";
    }
}
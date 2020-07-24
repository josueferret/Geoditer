//VARIABLES
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

var label_nombre_input1 = document.getElementById("label_nombre_input1");
var label_nombre_input2 = document.getElementById("label_nombre_input2");
var label_nombre_input3 = document.getElementById("label_nombre_input3");

var label_input1 = document.getElementById("label_input1");
var label_input2 = document.getElementById("label_input2");
var label_input3 = document.getElementById("label_input3");

var label_input1_normalizado = document.getElementById("label_input1_normalizado");
var label_input2_normalizado = document.getElementById("label_input2_normalizado");
var label_input3_normalizado = document.getElementById("label_input3_normalizado");

var svg_punto = document.getElementById("punto");

var checkboxs = document.getElementsByClassName("checkboxs");

//>QAP
var label_nombre_QAP = document.getElementById("label_nombre_QAP");
var check_QAP = document.getElementById("check_QAP");
var poligonos_QAP = document.getElementsByClassName("poligonos_QAP");

//>QAPv
var label_nombre_QAPv = document.getElementById("label_nombre_QAPv");
var check_QAPv = document.getElementById("check_QAPv");
var poligonos_QAPv = document.getElementsByClassName("poligonos_QAPv");

//>GABRO_hbl
var label_nombre_GABRO_hbl = document.getElementById("label_nombre_GABRO_hbl");
var check_GABRO_hbl = document.getElementById("check_GABRO_hbl");
var poligonos_GABRO_hbl = document.getElementsByClassName("poligonos_GABRO_hbl");

//>GABRO_olv
var label_nombre_GABRO_olv = document.getElementById("label_nombre_GABRO_olv");
var check_GABRO_olv = document.getElementById("check_GABRO_olv");
var poligonos_GABRO_olv = document.getElementsByClassName("poligonos_GABRO_olv");

//>GABRO_px
var label_nombre_GABRO_px = document.getElementById("label_nombre_GABRO_px");
var check_GABRO_px = document.getElementById("check_GABRO_px");
var poligonos_GABRO_px = document.getElementsByClassName("poligonos_GABRO_px");

//>UM_hbl
var label_nombre_UM_hbl = document.getElementById("label_nombre_UM_hbl");
var check_UM_hbl = document.getElementById("check_UM_hbl");
var poligonos_UM_hbl = document.getElementsByClassName("poligonos_UM_hbl");

//>UM_px
var label_nombre_UM_px = document.getElementById("label_nombre_UM_px");
var check_UM_px = document.getElementById("check_UM_px");
var poligonos_UM_px = document.getElementsByClassName("poligonos_UM_px");

//FUNCIONES
function general() {
    let suma = input1.value * 1 + input2.value * 1 + input3.value * 1;

    if (suma !== 0) {
        //NORMALIZAR Y COORDENADAS
        let input1_normalizado = input1.value * 100 / suma;
        let input2_normalizado = input2.value * 100 / suma;
        let input3_normalizado = input3.value * 100 / suma;

        let x = input3_normalizado + input1_normalizado / 2;
        let y = input1_normalizado;

        //MOSTRAR EN PANTALLA
        svg_punto.style.display = "block";

        label_input1.style.display = "block";
        label_input2.style.display = "block";
        label_input3.style.display = "block";

        label_input1_normalizado.style.display = "block";
        label_input2_normalizado.style.display = "block";
        label_input3_normalizado.style.display = "block";

        //>QAP
        label_nombre_QAP.style.visibility = "visible";

        //>QAPv
        label_nombre_QAPv.style.visibility = "visible";

        //>GABRO_hbl
        label_nombre_GABRO_hbl.style.visibility = "visible";

        //>GABRO_olv
        label_nombre_GABRO_olv.style.visibility = "visible";

        //>GABRO_px
        label_nombre_GABRO_px.style.visibility = "visible";

        //>UM_hbl
        label_nombre_UM_hbl.style.visibility = "visible";

        //>UM_px
        label_nombre_UM_px.style.visibility = "visible";

        //MOVER PUNTO
        svg_punto.setAttribute("cx", x + 5);
        svg_punto.setAttribute("cy", 105 - y);

        //MOSTRAR VALORES INPUTS
        label_input1.innerHTML = input1.value + "%";
        label_input2.innerHTML = input2.value + "%";
        label_input3.innerHTML = input3.value + "%";

        if (suma <= 100) {
            label_input1.style.color = "black"
            label_input2.style.color = "black"
            label_input3.style.color = "black"
        } else {
            label_input1.style.color = "red"
            label_input2.style.color = "red"
            label_input3.style.color = "red"
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

        //NOMBRES

        //>QAP
        let recta1_QAP = x * 2.5 - 25;
        let recta2_QAP = x * 6.666666666666667 - 233.33333333333337;
        let recta3_QAP = x * -2.5 + 225.0;
        let recta4_QAP = x * -6.666666666666667 + 433.33333333333337;

        if (y >= 90) {
            label_nombre_QAP.innerHTML = "Cuarzolita (silexita)";
        } else if (y >= 60) {
            label_nombre_QAP.innerHTML = "Granitoide rico en cuarzo";
        } else if (y >= 20) {
            if (y >= recta1_QAP) {
                label_nombre_QAP.innerHTML = 'Granito de feldespato alcalino';
            } else if (y >= recta2_QAP) {
                label_nombre_QAP.innerHTML = 'Sienogranito';
            } else if (y >= recta3_QAP) {
                label_nombre_QAP.innerHTML = 'Tonalita';
            } else if (y >= recta4_QAP) {
                label_nombre_QAP.innerHTML = 'Granodiorita';
            } else {
                label_nombre_QAP.innerHTML = 'Monzogranito';
            }
        } else if (y >= 5) {
            if (y >= recta1_QAP) {
                label_nombre_QAP.innerHTML = 'Cuarzosienita de feldespato alcalino';
            } else if (y >= recta2_QAP) {
                label_nombre_QAP.innerHTML = 'Cuarzosienita';
            } else if (y >= recta3_QAP) {
                label_nombre_QAP.innerHTML = 'Cuarzodiorita/Cuarzogabro';
            } else if (y >= recta4_QAP) {
                label_nombre_QAP.innerHTML = 'Cuarzo-monzodiorita/Cuarzo-monzogabro';
            } else {
                label_nombre_QAP.innerHTML = 'Cuarzomonzonita';
            }
        } else if (y >= 0) {
            if (y >= recta1_QAP) {
                label_nombre_QAP.innerHTML = 'Sienita de feldespato alcalino';
            } else if (y >= recta2_QAP) {
                label_nombre_QAP.innerHTML = 'Sienita';
            } else if (y >= recta3_QAP) {
                label_nombre_QAP.innerHTML = 'Diorita/Gabro';
            } else if (y >= recta4_QAP) {
                label_nombre_QAP.innerHTML = 'Monzodiorita/Monzogabro';
            } else {
                label_nombre_QAP.innerHTML = 'Monzonita';
            }
        }

        //>QAPv
        let recta1_QAPv = x * 2.5 - 25;
        let recta2_QAPv = x * 6.666666666666667 - 233.33333333333337;
        let recta3_QAPv = x * -2.5 + 225.0;
        let recta4_QAPv = x * -6.666666666666667 + 433.33333333333337;

        if (y >= 60) {
            label_nombre_QAPv.innerHTML = "-";
        } else if (y >= 20) {
            if (y >= recta1_QAPv) {
                label_nombre_QAPv.innerHTML = 'Riolita de feldespato alcalino';
            } else if (y >= recta4_QAPv) {
                label_nombre_QAPv.innerHTML = 'Dacita';
            } else {
                label_nombre_QAPv.innerHTML = 'Riolita';
            }
        } else if (y >= 5) {
            if (y >= recta1_QAPv) {
                label_nombre_QAPv.innerHTML = 'Cuarzo - traquita de feldespato alcalino';
            } else if (y >= recta2_QAPv) {
                label_nombre_QAPv.innerHTML = 'Cuarzo - traquita';
            } else if (y >= recta3_QAPv) {
                label_nombre_QAPv.innerHTML = 'Basalto toelítico';
            } else if (y >= recta4_QAPv) {
                label_nombre_QAPv.innerHTML = 'Andesita calcoalcalina';
            } else {
                label_nombre_QAPv.innerHTML = 'Cuarzo - lacita';
            }
        } else if (y >= 0) {
            if (y >= recta1_QAPv) {
                label_nombre_QAPv.innerHTML = 'Traquita de feldespato alcalino';
            } else if (y >= recta2_QAPv) {
                label_nombre_QAPv.innerHTML = 'Traquita';
            } else if (y >= recta3_QAPv) {
                label_nombre_QAPv.innerHTML = 'Basalto calcoalcalino rico en Al';
            } else if (y >= recta4_QAPv) {
                label_nombre_QAPv.innerHTML = 'Mugearita';
            } else {
                label_nombre_QAPv.innerHTML = 'Lacita con feldespatoides';
            }
        }

        //>GABRO_hbl
        let recta1_GABRO_hbl = (x - 5) * 2 + 0;
        let recta2_GABRO_hbl = (x + 5) * -2 + 200;
        let recta3_GABRO_hbl = (x + 90) * -2 + 200;
        let recta4_GABRO_hbl = (x - 90) * 2 + 0;

        if (y >= 90) {
            label_nombre_GABRO_hbl.innerHTML = "Anortosita";
        } else if (y >= 10) {
            if (y >= recta1_GABRO_hbl) {
                label_nombre_GABRO_hbl.innerHTML = 'Gabro/Gabronorita/Norita';
            } else if (y >= recta2_GABRO_hbl) {
                label_nombre_GABRO_hbl.innerHTML = 'Gabro hornbléndico';
            } else if (x >= 50) {
                label_nombre_GABRO_hbl.innerHTML = 'Gabro/Gabronorita/Norita hornbléndica';
            } else {
                label_nombre_GABRO_hbl.innerHTML = 'Gabro/Gabronorita/Norita piroxénica';
            }
        } else if (y >= 0) {
            if (y <= recta3_GABRO_hbl) {
                label_nombre_GABRO_hbl.innerHTML = 'Piroxenita con plagioclasa';
            } else if (y <= recta4_GABRO_hbl) {
                label_nombre_GABRO_hbl.innerHTML = 'Hornblendita con plagioclasa';
            } else if (x >= 50) {
                label_nombre_GABRO_hbl.innerHTML = 'Hornblendita piroxénica con plagioclasa';
            } else {
                label_nombre_GABRO_hbl.innerHTML = 'Piroxenita hornbléndica con plagioclasa';
            }
        }

        //>GABRO_olv
        let recta1_GABRO_olv = (x - 5) * 2 + 0;
        let recta2_GABRO_olv = (x + 5) * -2 + 200;
        let recta3_GABRO_olv = (x + 90) * -2 + 200;
        let recta4_GABRO_olv = (x - 90) * 2 + 0;

        if (y >= 90) {
            label_nombre_GABRO_olv.innerHTML = "Anortosita";
        } else if (y >= 10) {
            if (y >= recta1_GABRO_olv) {
                label_nombre_GABRO_olv.innerHTML = 'Gabro/Gabronorita/Norita';
            } else if (y >= recta2_GABRO_olv) {
                label_nombre_GABRO_olv.innerHTML = 'Troctolita';
            } else {
                label_nombre_GABRO_olv.innerHTML = 'Gabro/Gabronorita/Norita olivínica';
            }
        } else if (y >= 0) {
            label_nombre_GABRO_olv.innerHTML = 'Rocas ultramáficas con plagioclasa';
        }

        //>GABRO_px
        let recta1_GABRO_px = (x - 5) * 2 + 0;
        let recta2_GABRO_px = (x + 5) * -2 + 200;
        let recta3_GABRO_px = (x + 90) * -2 + 200;
        let recta4_GABRO_px = (x - 90) * 2 + 0;

        if (y >= 40) {
            label_nombre_GABRO_px.innerHTML = "-";
        } else if (y >= 10) {
            if (y >= recta1_GABRO_px) {
                label_nombre_GABRO_px.innerHTML = 'Norita';
            } else if (y >= recta2_GABRO_px) {
                label_nombre_GABRO_px.innerHTML = 'Gabro';
            } else if (x >= 50) {
                label_nombre_GABRO_px.innerHTML = 'Gabro ortopiroxénico';
            } else {
                label_nombre_GABRO_px.innerHTML = 'Norita clinopiroxénica';
            }
        } else if (y >= 0) {
            label_nombre_GABRO_px.innerHTML = 'Piroxenita con plagioclasa';
        }

        //>UM_hbl
        let recta1_UM_hbl = (x - 5) * 2 + 0;
        let recta2_UM_hbl = (x + 5) * -2 + 200;
        let recta3_UM_hbl = (x + 90) * -2 + 200;
        let recta4_UM_hbl = (x - 90) * 2 + 0;

        if (y >= 90) {
            label_nombre_UM_hbl.innerHTML = "Dunita";
        } else if (y >= 40) {
            if (y >= recta1_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Peridotita piroxénica";
            } else if (y >= recta2_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Peridotita hornbléndica";
            } else {
                label_nombre_UM_hbl.innerHTML = "Peridotita hornbléndica con piroxeno";
            }
        } else if (y >= 5) {
            if (y <= recta3_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Piroxenita";
            } else if (y >= recta1_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Piroxenita olivínica";
            } else if (y <= recta4_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Hornblendita";
            } else if (y >= recta2_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Hornblendita olivínica";
            } else if (x >= 50) {
                label_nombre_UM_hbl.innerHTML = "Hornblendita piroxénica con olivino";
            } else {
                label_nombre_UM_hbl.innerHTML = "Piroxenita hornbléndica con olivino";
            }
        } else if (y >= 0) {
            if (y <= recta3_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Piroxenita";
            } else if (y <= recta4_UM_hbl) {
                label_nombre_UM_hbl.innerHTML = "Hornblendita";
            } else if (x >= 50) {
                label_nombre_UM_hbl.innerHTML = "Hornblendita piroxénica";
            } else {
                label_nombre_UM_hbl.innerHTML = "Piroxenita hornbléndica";
            }
        }

        //>UM_px
        let recta1_UM_px = (x - 5) * 2 + 0;
        let recta2_UM_px = (x + 5) * -2 + 200;
        let recta3_UM_px = (x + 90) * -2 + 200;
        let recta4_UM_px = (x - 90) * 2 + 0;

        if (y >= 90) {
            label_nombre_UM_px.innerHTML = "Dunita";
        } else if (y >= 40) {
            if (y >= recta1_UM_px) {
                label_nombre_UM_px.innerHTML = "Harzburgita";
            } else if (y >= recta2_UM_px) {
                label_nombre_UM_px.innerHTML = "Wehrlita";
            } else {
                label_nombre_UM_px.innerHTML = "Lherzolita";
            }
        } else if (y >= 5) {
            if (y <= recta3_UM_px) {
                label_nombre_UM_px.innerHTML = "Ortopiroxenita";
            } else if (y >= recta1_UM_px) {
                label_nombre_UM_px.innerHTML = "Ortopiroxenita olivínica";
            } else if (y <= recta4_UM_px) {
                label_nombre_UM_px.innerHTML = "Clinopiroxenita";
            } else if (y >= recta2_UM_px) {
                label_nombre_UM_px.innerHTML = "Clinopiroxenita olivínica";
            } else {
                label_nombre_UM_px.innerHTML = "Websterita olivínica";
            }
        } else if (y >= 0) {
            if (y <= recta3_UM_px) {
                label_nombre_UM_px.innerHTML = "Ortopiroxenita";
            } else if (y <= recta4_UM_px) {
                label_nombre_UM_px.innerHTML = "Clinopiroxenita";
            } else {
                label_nombre_UM_px.innerHTML = "Websterita";
            }
        }

    } else {
        //OCULTAR LABELS (SI SUMA=0)
        svg_punto.style.display = "none";

        label_input1.style.display = "none";
        label_input2.style.display = "none";
        label_input3.style.display = "none";

        label_input1_normalizado.style.display = "none";
        label_input2_normalizado.style.display = "none";
        label_input3_normalizado.style.display = "none";

        //>QAP
        label_nombre_QAP.style.visibility = "hidden";

        //>QAPv
        label_nombre_QAPv.style.visibility = "hidden";

        //>GABRO_hbl
        label_nombre_GABRO_hbl.style.visibility = "hidden";

        //>GABRO_olv
        label_nombre_GABRO_olv.style.visibility = "hidden";

        //>GABRO_px
        label_nombre_GABRO_px.style.visibility = "hidden";

        //>UM_hbl
        label_nombre_UM_hbl.style.visibility = "hidden";

        //>UM_px
        label_nombre_UM_px.style.visibility = "hidden";
    }
}

function mostrar_ocultar() {
    //DESCLICKEAR CHECHBOXS
    for (let i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i] != this) {
            checkboxs[i].checked = 0;
        }
    }

    //MOSTRAR/OCULTAR NOMBRES INPUTS

    //>QAP
    if (check_QAP.checked == true) {
        label_nombre_input1.innerHTML = "Qz";
        label_nombre_input2.innerHTML = "Fdk";
        label_nombre_input3.innerHTML = "Plg";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

        //>QAPv
    } else if (check_QAPv.checked == true) {
        label_nombre_input1.innerHTML = "Qz";
        label_nombre_input2.innerHTML = "Fdk";
        label_nombre_input3.innerHTML = "Plg";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

        //>GABRO_hbl
    } else if (check_GABRO_hbl.checked == true) {
        label_nombre_input1.innerHTML = "Plg";
        label_nombre_input2.innerHTML = "Px";
        label_nombre_input3.innerHTML = "Hbl";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

        //>GABRO_olv
    } else if (check_GABRO_olv.checked == true) {
        label_nombre_input1.innerHTML = "Plg";
        label_nombre_input2.innerHTML = "Px";
        label_nombre_input3.innerHTML = "Olv";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

        //>GABRO_px
    } else if (check_GABRO_px.checked == true) {
        label_nombre_input1.innerHTML = "Plg";
        label_nombre_input2.innerHTML = "Opx";
        label_nombre_input3.innerHTML = "Cpx";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

        //>UM_hbl
    } else if (check_UM_hbl.checked == true) {
        label_nombre_input1.innerHTML = "Olv";
        label_nombre_input2.innerHTML = "Px";
        label_nombre_input3.innerHTML = "Hbl";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

        //>UM_px
    } else if (check_UM_px.checked == true) {
        label_nombre_input1.innerHTML = "Olv";
        label_nombre_input2.innerHTML = "Opx";
        label_nombre_input3.innerHTML = "Cpx";

        label_nombre_input1.style.display = "block";
        label_nombre_input2.style.display = "block";
        label_nombre_input3.style.display = "block";

    } else {
        label_nombre_input1.style.display = "none";
        label_nombre_input2.style.display = "none";
        label_nombre_input3.style.display = "none";
    }

    //MOSTRAR/OCULTAR POLIGONOS

    //>QAP
    if (check_QAP.checked == true) {
        for (let i = 0; i < poligonos_QAP.length; i++) {
            poligonos_QAP[i].style.display = "block"
            poligonos_QAP[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_QAP.length; i++) {
            poligonos_QAP[i].style.display = "none";
        }
    }

    //>QAPv
    if (check_QAPv.checked == true) {
        for (let i = 0; i < poligonos_QAPv.length; i++) {
            poligonos_QAPv[i].style.display = "block"
            poligonos_QAPv[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_QAPv.length; i++) {
            poligonos_QAPv[i].style.display = "none";
        }
    }

    //>GABRO_hbl
    if (check_GABRO_hbl.checked == true) {
        for (let i = 0; i < poligonos_GABRO_hbl.length; i++) {
            poligonos_GABRO_hbl[i].style.display = "block"
            poligonos_GABRO_hbl[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_GABRO_hbl.length; i++) {
            poligonos_GABRO_hbl[i].style.display = "none";
        }
    }

    //>GABRO_olv
    if (check_GABRO_olv.checked == true) {
        for (let i = 0; i < poligonos_GABRO_olv.length; i++) {
            poligonos_GABRO_olv[i].style.display = "block"
            poligonos_GABRO_olv[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_GABRO_olv.length; i++) {
            poligonos_GABRO_olv[i].style.display = "none";
        }
    }

    //>GABRO_px
    if (check_GABRO_px.checked == true) {
        for (let i = 0; i < poligonos_GABRO_px.length; i++) {
            poligonos_GABRO_px[i].style.display = "block"
            poligonos_GABRO_px[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_GABRO_px.length; i++) {
            poligonos_GABRO_px[i].style.display = "none";
        }
    }

    //>UM_hbl
    if (check_UM_hbl.checked == true) {
        for (let i = 0; i < poligonos_UM_hbl.length; i++) {
            poligonos_UM_hbl[i].style.display = "block"
            poligonos_UM_hbl[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_UM_hbl.length; i++) {
            poligonos_UM_hbl[i].style.display = "none";
        }
    }

    //>UM_px
    if (check_UM_px.checked == true) {
        for (let i = 0; i < poligonos_UM_px.length; i++) {
            poligonos_UM_px[i].style.display = "block"
            poligonos_UM_px[i].style.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    } else {
        for (let i = 0; i < poligonos_UM_px.length; i++) {
            poligonos_UM_px[i].style.display = "none";
        }
    }

    //MOSTRAR/OCULTAR LABEL NOMBRE ROCA

    //>QAP
    if (check_QAP.checked == true) {
        label_nombre_QAP.style.display = "block";
    } else {
        label_nombre_QAP.style.display = "none";
    }

    //>QAPv
    if (check_QAPv.checked == true) {
        label_nombre_QAPv.style.display = "block";
    } else {
        label_nombre_QAPv.style.display = "none";
    }

    //>GABRO_hbl
    if (check_GABRO_hbl.checked == true) {
        label_nombre_GABRO_hbl.style.display = "block";
    } else {
        label_nombre_GABRO_hbl.style.display = "none";
    }

    //>GABRO_olv
    if (check_GABRO_olv.checked == true) {
        label_nombre_GABRO_olv.style.display = "block";
    } else {
        label_nombre_GABRO_olv.style.display = "none";
    }

    //>GABRO_px
    if (check_GABRO_px.checked == true) {
        label_nombre_GABRO_px.style.display = "block";
    } else {
        label_nombre_GABRO_px.style.display = "none";
    }

    //>UM_hbl
    if (check_UM_hbl.checked == true) {
        label_nombre_UM_hbl.style.display = "block";
    } else {
        label_nombre_UM_hbl.style.display = "none";
    }

    //>UM_px
    if (check_UM_px.checked == true) {
        label_nombre_UM_px.style.display = "block";
    } else {
        label_nombre_UM_px.style.display = "none";
    }

}

//AGREGAR EVENTOS
input1.addEventListener("input", general);
input2.addEventListener("input", general);
input3.addEventListener("input", general);

//CHECKS
//>QAP
check_QAP.addEventListener("click", mostrar_ocultar);

//>QAPv
check_QAPv.addEventListener("click", mostrar_ocultar);

//>GABRO_hbl
check_GABRO_hbl.addEventListener("click", mostrar_ocultar);

//>GABRO_olv
check_GABRO_olv.addEventListener("click", mostrar_ocultar);

//>GABRO_px
check_GABRO_px.addEventListener("click", mostrar_ocultar);

//>UM_hbl
check_UM_hbl.addEventListener("click", mostrar_ocultar);

//>UM_px
check_UM_px.addEventListener("click", mostrar_ocultar);
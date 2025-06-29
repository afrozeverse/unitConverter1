var val = "Length";
function callfunction() {
    switch (val) {
        case "Length":
            convertLength();
            break;
        case "Area":
            convertArea();
            break;
        case "DataTransferRate":
            convertDataTransferRate();
            break;
        case "DigitalStorage":
            convertDigitalStorage();
            break;
        default:
            break;
    }
}
//----------
function convertLength() {
    let val1 = document.getElementById("input-unitBox1").value;
    if (!val1) {
        window.alert("Enter a value");
        return;
    }

    let unit1 = document.getElementById("selectUnit-unitBox1");
    unit1 = unit1.options[unit1.selectedIndex].text;

    let unit2 = document.getElementById("selectUnit-unitBox2");
    unit2 = unit2.options[unit2.selectedIndex].text;

    let val2 = document.getElementById("input-unitBox2");
    val2.value = calculationLength(val1, unit1, unit2);

}

function calculationLength(val1, unit1, unit2) {
    switch (unit1) {
        //all the units are being converted into metre first
        case "Kilometre":
            val1 *= 1000;
            break;
        case "Metre":
            val1 *= 1;
            break;
        case "Centimetre":
            val1 /= 100;
            break;
        case "Milimetre":
            val1 /= 1000;
            break;
        case "Micrometre":
            val1 /= (1 * Math.pow(10, 6));
            break;
        case "Nanometre":
            val1 /= (1 * Math.pow(10, 9));
            break;
        default:
            break;
    }
    switch (unit2) {
        case "Kilometre":
            val1 /= 1000;
            break;
        case "Metre":
            val1 *= 1;
            break;
        case "Centimetre":
            val1 *= 100;
            break;
        case "Milimetre":
            val1 *= 1000;
            break;
        case "Micrometre":
            val1 *= (1 * Math.pow(10, 6));
            break;
        case "Nanometre":
            val1 *= (1 * Math.pow(10, 9));
            break;
        default:
            break;
    }
    return Number(val1);

}
function convertLengthUnit() {
    //for erasing border from div- starting
    let are = document.getElementById("area-div");
    are.style.border = "none";
    are.style.borderRadius = "0px";
    let dat = document.getElementById("dtr-div");
    dat.style.border = "none";
    dat.style.borderRadius = "0px";
    let sto = document.getElementById("digital-div");
    sto.style.border = "none";
    sto.style.borderRadius = "0";
    //ending
    let len = document.getElementById("length-div");
    len.style.border = "2px solid white";
    len.style.borderRadius = "10px";

    val = "Length";
    let unitBox1 = document.getElementById("selectUnit-unitBox1");
    unitBox1.options.length = 0;
    let unitBox2 = document.getElementById("selectUnit-unitBox2");
    unitBox2.options.length = 0;
    let areaunitList = ["Kilometre", "Metre", "Centimetre", "Milimetre", "Micrometre", "Nanometre"];
    for (i = 0; i < areaunitList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = areaunitList[i];
        unitBox1.appendChild(op1)
    }
    for (i = 0; i < areaunitList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = areaunitList[i];
        unitBox2.appendChild(op1)
    }
    let demo = document.getElementById("demo");
}
// Area --------------------------------------


function convertAreaUnit() {
    //for erasing border from div- starting
    let dat = document.getElementById("dtr-div");
    dat.style.border = "none";
    dat.style.borderRadius = "0px";
    let sto = document.getElementById("digital-div");
    sto.style.border = "none";
    sto.style.borderRadius = "0";

    let len = document.getElementById("length-div");
    len.style.border = "none";
    len.style.borderRadius = "0";
    //ending
    let are = document.getElementById("area-div");
    are.style.border = "2px solid white";
    are.style.borderRadius = "10px";
    val = "Area";
    let unitBox1 = document.getElementById("selectUnit-unitBox1");
    unitBox1.options.length = 0;
    let unitBox2 = document.getElementById("selectUnit-unitBox2");
    unitBox2.options.length = 0;
    let areaunitList = ["Square Kilometre", "Square Metre", "Square Mile", "Square Yard", "Square Foot"];
    for (i = 0; i < areaunitList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = areaunitList[i];
        unitBox1.appendChild(op1)
    }
    for (i = 0; i < areaunitList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = areaunitList[i];
        unitBox2.appendChild(op1)
    }
    let demo = document.getElementById("demo");
}

function convertArea() {

    let val1 = document.getElementById("input-unitBox1").value;
    if (!val1) {
        window.alert("Enter a value");
        return;
    }

    let unit1 = document.getElementById("selectUnit-unitBox1");
    unit1 = unit1.options[unit1.selectedIndex].text;

    let unit2 = document.getElementById("selectUnit-unitBox2");
    unit2 = unit2.options[unit2.selectedIndex].text;

    let val2 = document.getElementById("input-unitBox2");
    let demo = document.getElementById("demo");
    val2.value = calculationArea(val1, unit1, unit2);

}

function calculationArea(val1, unit1, unit2) {
    val1 = Number(val1);
    switch (unit1) {
        //all the units are been converted into square mile
        case "Square Kilometre":
            val1 /= 2.59;
            break;
        case "Square Metre":
            val1 /= 2.59 * Math.pow(10, 6);
            break;
        case "Square Mile":
            val1 *= 1;
            break;
        case "Square Yard":
            val1 /= 3.098 * Math.pow(10, 6);
            break;
        case "Square Foot":
            val1 /= 2.788 * Math.pow(10, 7);
            break;
        default:
            break;
    }
    switch (unit2) {
        case "Square Kilometre":
            val1 *= 2.59;
            break;
        case "Square Metre":
            val1 *= 2.59 * Math.pow(10, 6);
            break;
        case "Square Mile":
            val1 *= 1;
            break;
        case "Square Yard":
            val1 *= 3.098 * Math.pow(10, 6);
            break;
        case "Square Foot":
            val1 *= 2.788 * Math.pow(10, 7);
            break;
        default:
            break;
    }
    return Number(val1);

}
// data transfer rate --------------------------------------

function convertDataTransferRateUnit() {
    //for erasing border from div- starting
    let are = document.getElementById("area-div");
    are.style.border = "none";
    are.style.borderRadius = "0px";
    let sto = document.getElementById("digital-div");
    sto.style.border = "none";
    sto.style.borderRadius = "0";

    let len = document.getElementById("length-div");
    len.style.border = "none";
    len.style.borderRadius = "0";
    //ending
    let dat = document.getElementById("dtr-div");
    dat.style.border = "2px solid white";
    dat.style.borderRadius = "10px";
    val = "DataTransferRate";
    let unitBox1 = document.getElementById("selectUnit-unitBox1");
    unitBox1.options.length = 0;
    let unitBox2 = document.getElementById("selectUnit-unitBox2");
    unitBox2.options.length = 0;
    let dataUnitList = ["Bit Per Second", "Kilobit Per Second", "Kilobyte Per Second", "Kibibit Per Second", "Megabit Per Second"];
    for (i = 0; i < dataUnitList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = dataUnitList[i];
        unitBox1.appendChild(op1)
    }
    for (i = 0; i < dataUnitList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = dataUnitList[i];
        unitBox2.appendChild(op1)
    }
}

function convertDataTransferRate() {

    let val1 = document.getElementById("input-unitBox1").value;
    if (!val1) {
        window.alert("Enter a value");
        return;
    }

    let unit1 = document.getElementById("selectUnit-unitBox1");
    unit1 = unit1.options[unit1.selectedIndex].text;

    let unit2 = document.getElementById("selectUnit-unitBox2");
    unit2 = unit2.options[unit2.selectedIndex].text;

    let val2 = document.getElementById("input-unitBox2");
    let demo = document.getElementById("demo");
    val2.value = calculationDataTransferRateUnit(val1, unit1, unit2);

}

function calculationDataTransferRateUnit(val1, unit1, unit2) {

    let dataUnitList = ["Bit Per Second", "Kilobit Per Second", "Kilobyte Per Second", "Kibibit Per Second", "Megabit Per Second"];
    switch (unit1) {
        //all the units are been converted into kilobyte per second
        case dataUnitList[0]:
            val1 /= 8000;
            break;
        case dataUnitList[1]:
            val1 /= 8;
            break;
        case dataUnitList[2]:
            val1 *= 1;
            break;
        case dataUnitList[3]:
            val1 /= 7.812;
            break;
        case dataUnitList[4]:
            val1 *= 125;
            break;
        default:
            break;
    }
    switch (unit2) {
        case dataUnitList[0]:
            val1 *= 8000;
            break;
        case dataUnitList[1]:
            val1 *= 8;
            break;
        case dataUnitList[2]:
            val1 *= 1;
            break;
        case dataUnitList[3]:
            val1 *= 7.182;
            break;
        case dataUnitList[4]:
            val1 /= 125;
            break;
        default:
            break;
    }

    return Number(val1);

}
// digital storage --------------------------------------

function convertDigitalStorageUnit() {
    //for erasing border from div- starting
    let are = document.getElementById("area-div");
    are.style.border = "none";
    are.style.borderRadius = "0px";
    let dat = document.getElementById("dtr-div");
    dat.style.border = "none";
    dat.style.borderRadius = "0px";
    let len = document.getElementById("length-div");
    len.style.border = "none";
    len.style.borderRadius = "0";
    //ending
    let sto = document.getElementById("digital-div");
    sto.style.border = "2px solid white";
    sto.style.borderRadius = "10px";
    //-----
    val = "DigitalStorage";
    let unitBox1 = document.getElementById("selectUnit-unitBox1");
    unitBox1.options.length = 0;
    let unitBox2 = document.getElementById("selectUnit-unitBox2");
    unitBox2.options.length = 0;
    let digitalStorageList = ["Bit", "Kilobit", "Kibibit", "Megabit", "Mebibit"];
    for (i = 0; i < digitalStorageList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = digitalStorageList[i];
        unitBox1.appendChild(op1)
    }
    for (i = 0; i < digitalStorageList.length; i++) {
        let op1 = document.createElement("option");
        op1.innerHTML = digitalStorageList[i];
        unitBox2.appendChild(op1)
    }
}

function convertDigitalStorage() {

    let val1 = document.getElementById("input-unitBox1").value;
    if (!val1) {
        window.alert("Enter a value");
        return;
    }

    let unit1 = document.getElementById("selectUnit-unitBox1");
    unit1 = unit1.options[unit1.selectedIndex].text;

    let unit2 = document.getElementById("selectUnit-unitBox2");
    unit2 = unit2.options[unit2.selectedIndex].text;

    let val2 = document.getElementById("input-unitBox2");
    let demo = document.getElementById("demo");
    val2.value = calculationDigitalStorage(val1, unit1, unit2);

}

function calculationDigitalStorage(val1, unit1, unit2) {
    let dataUnitList = ["Bit", "Kilobit", "Kibibit", "Megabit", "Mebibit"];
    switch (unit1) {
        //all the units are been converted into kibibit
        case dataUnitList[0]:
            val1 /= 128;
            break;
        case dataUnitList[1]:
            val1 /= 1.024;
            break;
        case dataUnitList[2]:
            val1 *= 1;
            break;
        case dataUnitList[3]:
            val1 *= 976.6;
            break;
        case dataUnitList[4]:
            val1 *= 1024;
            break;
        default:
            break;
    }
    switch (unit2) {
        case dataUnitList[0]:
            val1 *= 1024;
            break;
        case dataUnitList[1]:
            val1 *= 1.024;
            break;
        case dataUnitList[2]:
            val1 *= 1;
            break;
        case dataUnitList[3]:
            val1 /= 976.6;
            break;
        case dataUnitList[4]:
            val1 /= 1024;
            break;
        default:
            break;
    }

    return Number(val1);

}
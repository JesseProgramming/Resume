window.onload = function () {
    var loadDate = new this.Date();
    loadDate.setDate(loadDate.getDate() - 1);
    document.getElementById('DateInput').valueAsDate = loadDate;

    DisplayDots();
}


var IncludeToday = true;

var DayDotsArray = [3, 5, 7, 14, 30, 60];
//load cookie
var name = 'DayDotCookie' + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        DayDotsArray = JSON.parse(c.substring(name.length, c.length));
    }
}

function DisplayDots() {

    for (var i = 0; i < DayDotsArray.length; i++) {
        var tablerow = document.createElement("TR");
        var tabledata = document.createElement("TD");
        var divModule = document.createElement("DIV");
        divModule.className = "module";
        var divDays = document.createElement("DIV");
        divDays.className = "days";
        divDays.id = DayDotsArray[i];

        var divSticker = document.createElement("DIV");
        divSticker.className = "sticker";

        var imgImage = document.createElement("IMG");
        imgImage.setAttribute("src", "_images/DayDot_Sun.png");

        var divDate = document.createElement("DIV");
        divDate.className = "date";

        var divDelete = document.createElement("DIV");
        divDelete.className = "delete";

        var trashElement = document.createElement("I");
        trashElement.className = "fas fa-trash";
        trashElement.style = "cursor: pointer";
        trashElement.onclick = function () {

            var indexToSplice = 0;
            for (var x = 0; x < DayDotsArray.length; x++) {
                if (DayDotsArray[x] == this.parentElement.parentElement.firstChild.id) {
                    indexToSplice = x;
                    break;
                }
            }
            DayDotsArray.splice(x, 1);

            //save cookie
            var d = new Date();
            d.setTime(d.getTime() + (31 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            var json_str = JSON.stringify(DayDotsArray);
            document.cookie = 'DayDotCookie' + "=" + json_str + ";" + expires + ";path=/";

            this.parentElement.parentElement.parentElement.parentElement.remove();
        };





        tablerow.appendChild(tabledata);
        tabledata.appendChild(divModule);
        divModule.appendChild(divDays);

        divModule.appendChild(divSticker);
        divSticker.appendChild(imgImage);
        divSticker.appendChild(divDate);

        divModule.appendChild(divDelete);
        divDelete.appendChild(trashElement);


        if (DayDotsArray[i] < 10) {
            var daydotText = document.createTextNode(DayDotsArray[i] + " Day: " + " ");

        }
        else {
            if (DayDotsArray[i] < 30) {
                var daydotText = document.createTextNode(DayDotsArray[i] + " Day:");
            }
            else {
                var MonthNumber = (DayDotsArray[i] / 30);
                var daydotText = document.createTextNode(MonthNumber + " Month:");
            }

        }

        divDays.appendChild(daydotText);




        var myDate = document.getElementById('DateInput').valueAsDate;
        myDate.setDate(myDate.getDate() + 1);




        myDate.setDate(myDate.getDate() + DayDotsArray[i] - 1);
        var m = myDate.getMonth() + 1;
        var d = myDate.getDate();

        if (document.getElementById("IncludeToday").checked == false) {
            d += 1;
            myDate.setDate(myDate.getDate() + 1);
        }


        var displayDate = m + "/" + d;


        divDate.textContent = displayDate.toString();
        imgImage.setAttribute("src", DayCase(myDate));
        document.getElementById("MainTable").appendChild(tablerow);

    }

}

function DayCase(selectedDate) //selectedDate
{
    var day;
    var anotherDate = new Date();
    anotherDate = selectedDate;
    switch (anotherDate.getDay()) {

        case 0:
            return "_images/DayDot_Sun.png";
        case 1:
            return "_images/DayDot_Mon.png";
        case 2:
            return "_images/DayDot_Tue.png";
        case 3:
            return "_images/DayDot_Wed.png";
        case 4:
            return "_images/DayDot_Thur.png";
        case 5:
            return "_images/DayDot_Fri.png";
        case 6:
            return "_images/DayDot_Sat.png";
    }
}


function UpdateDots() {

    while (document.getElementById("MainTable").firstChild) {
        document.getElementById("MainTable").removeChild(document.getElementById("MainTable").firstChild);
    }
    //if (typeof document.getElementById("DayInput").value == 'number') {

    AddToDate = new Date(document.getElementById("DateInput").value);
    AddToDate.setDate(AddToDate.getDate() + 1);
    //AddToDate = new Date(pulledDate.getDate);

    //console.log(pulledDate);

    var min = 0;
    DayDotsArray.sort((a, b) => a - b);

    //save cookie
    var d = new Date();
    d.setTime(d.getTime() + (31 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var json_str = JSON.stringify(DayDotsArray);
    document.cookie = 'DayDotCookie' + "=" + json_str + ";" + expires + ";path=/";



    DisplayDots();
}

function AddDayDot() {
    DayDotsArray.push(Number(document.getElementById("DayInput").value));
    console.log(DayDotsArray);
    UpdateDots();
}
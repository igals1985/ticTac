window.onload = function () {
    var cell11 = document.getElementById("cell11");
    var cell12 = document.getElementById("cell12");
    var cell13 = document.getElementById("cell13");
    var cell21 = document.getElementById("cell21");
    var cell22 = document.getElementById("cell22");
    var cell23 = document.getElementById("cell23");
    var cell31 = document.getElementById("cell31");
    var cell32 = document.getElementById("cell32");
    var cell33 = document.getElementById("cell33");
    var reset = document.getElementById("reset");
    var game1 = new Game([[cell11, cell12, cell13], [cell21, cell22, cell23], [cell31, cell32, cell33]], reset);
    cell11.onclick = function (e) { game1.ClickCell(0, 0, 0); };
    cell12.onclick = function (e) { game1.ClickCell(0, 1, 1); };
    cell13.onclick = function (e) { game1.ClickCell(0, 2, 2); };
    cell21.onclick = function (e) { game1.ClickCell(1, 0, 3); };
    cell22.onclick = function (e) { game1.ClickCell(1, 1, 4); };
    cell23.onclick = function (e) { game1.ClickCell(1, 2, 5); };
    cell31.onclick = function (e) { game1.ClickCell(2, 0, 6); };
    cell32.onclick = function (e) { game1.ClickCell(2, 1, 7); };
    cell33.onclick = function (e) { game1.ClickCell(2, 2, 8); };
    reset.onclick = function (e) { game1.Reset(); };
};
//# sourceMappingURL=app.js.map
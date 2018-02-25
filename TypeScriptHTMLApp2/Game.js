var Game = /** @class */ (function () {
    function Game(t, rst) {
        this.gameRunning = true;
        this.table = t;
        this.board = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ];
        this.reset = rst;
        this.WinBoard1 = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"]
        ];
    }
    Game.prototype.Reset = function () {
        this.board = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ];
        this.gameRunning = true;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.table[i][j].style.color = "white";
                this.table[i][j].innerHTML = "&nbsp;";
            }
        }
    };
    Game.prototype.IsFull = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] == "0")
                    return false;
            }
        }
        return true;
    };
    Game.prototype.ClickCell = function (i, j, tp) {
        if (!this.gameRunning) {
            alert("Game over");
        }
        else {
            if (this.board[i][j] != "0") {
                alert("already played");
            }
            else {
                this.table[i][j].style.color = "#25bfc4";
                this.table[i][j].innerHTML = "X";
                this.board[i][j] = "p";
                if (this.win(this.board) == "p") {
                    this.gameRunning = false;
                    alert("Player won");
                }
                else {
                    if (this.IsFull()) {
                        this.gameRunning = false;
                        alert("Draw match");
                    }
                    else {
                        this.randomComp(this.board);
                        if (this.win(this.board) == "c") {
                            this.gameRunning = false;
                            alert("Computer won");
                        }
                        else {
                            if (this.IsFull()) {
                                this.gameRunning = false;
                                alert("Draw match");
                            }
                        }
                    }
                }
            }
        }
    };
    Game.prototype.win = function (board) {
        var b = board[0][0];
        if (board[0][1] == b && b == board[0][2] && b != "0")
            return b;
        b = board[1][0];
        if (board[1][1] == b && b == board[1][2] && b != "0")
            return b;
        b = board[2][0];
        if (board[2][1] == b && b == board[2][2] && b != "0")
            return b;
        b = board[0][0];
        if (board[1][0] == b && b == board[2][0] && b != "0")
            return b;
        b = board[0][1];
        if (board[1][1] == b && b == board[2][1] && b != "0")
            return b;
        b = board[0][2];
        if (board[1][2] == b && b == board[2][2] && b != "0")
            return b;
        b = board[1][1];
        if (board[0][0] == b && b == board[2][2] && b != "0")
            return b;
        if (board[2][0] == b && b == board[0][2] && b != "0")
            return b;
        return "0";
    };
    Game.prototype.randomComp = function (board) {
        var r = board[0][0];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.board[i][j] == "0") {
                    this.table[i][j].style.color = "#fac95f";
                    this.table[i][j].innerHTML = "O";
                    this.board[i][j] = "c";
                    return r;
                }
            }
        }
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map
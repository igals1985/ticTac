class Game {
    public board: string[][]
    public table: HTMLElement[][];
    public reset: HTMLButtonElement;
    public WinBoard1: string[][]
    public gameRunning: boolean = true;

    constructor(t: HTMLElement[][], rst: HTMLButtonElement) {
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

    public Reset() {
        this.board = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ];
        this.gameRunning = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.table[i][j].style.color = "white";
                this.table[i][j].innerHTML = "&nbsp;";
            }
        }
    }

    public IsFull(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == "0")
                    return false;
            }
        }
        return true
    }


    public ClickCell(i: number, j: number, tp: number) {
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

                        this.randomComp(this.board)
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
    }

    public win(board: string[][]): string {
        var b = board[0][0];
        if (board[0][1] == b && b == board[0][2] && b != "0") return b;

        b = board[1][0];
        if (board[1][1] == b && b == board[1][2] && b != "0") return b;

        b = board[2][0];
        if (board[2][1] == b && b == board[2][2] && b != "0") return b;

        b = board[0][0];
        if (board[1][0] == b && b == board[2][0] && b != "0") return b;

        b = board[0][1];
        if (board[1][1] == b && b == board[2][1] && b != "0") return b;

        b = board[0][2];
        if (board[1][2] == b && b == board[2][2] && b != "0") return b;

        b = board[1][1];
        if (board[0][0] == b && b == board[2][2] && b != "0") return b;
        if (board[2][0] == b && b == board[0][2] && b != "0") return b;
        return "0";
    }

    public randomComp(board: string[][]): string {
        var r = board[0][0];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == "0") {
                    this.table[i][j].style.color = "#fac95f"
                    this.table[i][j].innerHTML = "O";
                    this.board[i][j] = "c";
                    return r
                }
            }
        }
    }
}

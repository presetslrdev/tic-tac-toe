class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winCombinations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        this.stepCount = 0;
        this.Player = 0;
    }

    getCurrentPlayerSymbol() {
        return this.Player ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.Player = this.Player ? 0 : 1;
            this.stepCount++;
        }
    }

    isFinished() {
        return this.stepCount === 9 || this.getWinner() !== null;
    }

    getWinner() {
        // if this.winCombinations[] === this.field;
    }

    noMoreTurns() {
        return this.stepCount === 9;
    }

    isDraw() {
        return this.stepCount === 9 && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

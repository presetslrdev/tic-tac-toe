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
        this.Player = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.Player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.Player = this.getCurrentPlayerSymbol() === 'x' ? 'o' : 'x';
            this.stepCount++;
        }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {
        if (this.stepCount > 2) {
            this.winCombinations.forEach(el => {
                    let winCountX = 0;
                    let winCount0 = 0;
                    el.forEach(winPosition => {
                        let position = 0;
                        this.field.forEach((el) => {
                            el.forEach((el) => {
                                position++;
                                if (el !== null) {
                                    if (el === 'x') winPosition === position ? winCountX++ : winCountX;
                                    if (el === 'o') winPosition === position ? winCount0++ : winCount0;
                                    if (winCountX > 2) {
                                        this.winner = 'x';
                                    } else if (winCount0 > 2) {
                                        this.winner = 'o';
                                    }
                                }
                            });
                        });
                    });
                }
            );
        }
        return this.winner;
    }

    noMoreTurns() {
        return this.stepCount === 9;
    }

    isDraw() {
        return this.noMoreTurns() && (this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

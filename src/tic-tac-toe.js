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
            this.getWinner();
        }
    }

    isFinished() {
        return this.stepCount === 9 || this.getWinner() !== null;
    }

    getWinner() {
        if (this.stepCount > 2) {
            this.winCombinations.forEach(el => {
                    let winCount = 0;
                    // console.log('WinElement - ' + el);

                    el.forEach(winPosition => {
                        let position = 0;
                        this.field.forEach((el) => {
                            el.forEach((el) => {
                                position++;
                                // console.log('position - ' + position);
                                el === this.getCurrentPlayerSymbol() ?
                                    winPosition === position ? winCount++ : '' : '';
                                // console.log('winCount - ' + winCount);
                                // return winCount === 3 ? this.getCurrentPlayerSymbol() : null;
                                if (winCount === 3) return this.getCurrentPlayerSymbol();
                            });
                        });
                    });
                }
            );
        } else
            return null;
    }

    noMoreTurns() {
        return this.stepCount === 9;
    }

    isDraw() {
        return this.stepCount < 9 || this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;


let turn = 0;
let cellNumber = 0

// let gameBoard = [0,1,2..,80]
class Box {
    constructor(rowNum) {
        this.x = null
        this.o = null
        this.rowNum = rowNum
        this.pointerEvents = false;
    }
    draw(x) {
        let div = document.createElement('div')
        div.classList.add('small-box')
        document.body.querySelector('.game-box').append(div)

        let table = document.createElement('table')
        div.append(table)
        for (let i = 1; i < 4; i++) {
            let tr = document.createElement('tr')
            table.append(tr)
            for (let j = 1; j < 4; j++) {
                new Cell(tr, i, j, this.rowNum).draw()
            }

        }

    }
}


class Cell {
    constructor(row, block, microBlock, rowNum) {
        this.x = null
        this.o = null
        this.rowNum = rowNum
        this.row = row
        this.block = block;
        this.microBlock = microBlock

    }
    draw() {
        let td = document.createElement("td")
        td.setAttribute('id', cellNumber)
        cellNumber++
        td.onclick = function (e) {
            turn++
            this.innerHTML = turn % 2 ? 'X' : 'O'
            console.log(e.target.id)
        }
        this.row.append(td)
    }
}
console.log("hi")


for (i = 1; i < 10; i++) {
    new Box(i).draw(i)
}
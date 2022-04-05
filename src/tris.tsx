import {useState} from "react";

export function Tris() {
    const [current, setCurrent] = useState("X");
    const [turn, setTurn] = useState(0);
    const [win, setWin] = useState(false);
    const [matrix, setMatrix] = useState([
        [" "," "," "],
        [" "," "," "],
        [" "," "," "],
    ]);

    const reset = ():any => {
        setMatrix([
            [" "," "," "],
            [" "," "," "],
            [" "," "," "]
        ]);
        setTurn(0);
        setCurrent("X");
        setWin(false);
    }

    const checkWin = (i:number, j:number):boolean => {
        var riga = matrix[i][j] + matrix[i][(j + 1) % 3] + matrix[i][(j + 2) % 3];
        var colonna = matrix[i][j] + matrix[(i + 1) % 3][j] + matrix[(i + 2) % 3][j];
        var winStr = "".concat(current).concat(current).concat(current)
        if (riga === winStr) return true;
        if (colonna === winStr) return true;
        if(matrix[0][0]+matrix[1][1]+matrix[2][2] === winStr) return true;
        if(matrix[0][2]+matrix[1][1]+matrix[2][0] === winStr) return true;
        return false;
    };

    const update = (i:number, j:number):any => {
        if (matrix[i][j] !== " ") return;
        let updatedMatrix:string[][] = matrix;
        updatedMatrix[i][j] = current;
        setMatrix(updatedMatrix);
        setTurn(turn + 1);
        if(turn < 4){
            current === "X" ? setCurrent("O") : setCurrent("X");
            return;
        }
        if(!checkWin(i,j)) {
            current === "X" ? setCurrent("O") : setCurrent("X")
            return;
        }
        setWin(true);
    }

    return (
        <div
            className="Game"
        >
            <div
                className="grid"
            >
                <div onClick={() => update(0,0)} className="tile">
                    <h1>{matrix[0][0]}</h1>
                </div>
                <div onClick={() => update(0,1)} className="tile">
                    <h1>{matrix[0][1]}</h1>
                </div>
                <div onClick={() => update(0,2)} className="tile">
                    <h1>{matrix[0][2]}</h1>
                </div>
                <div onClick={() => update(1,0)} className="tile">
                    <h1>{matrix[1][0]}</h1>
                </div>
                <div onClick={() => update(1,1)} className="tile">
                    <h1>{matrix[1][1]}</h1>
                </div>
                <div onClick={() => update(1,2)} className="tile">
                    <h1>{matrix[1][2]}</h1>
                </div>
                <div onClick={() => update(2,0)} className="tile">
                    <h1>{matrix[2][0]}</h1>
                </div>
                <div onClick={() => update(2,1)} className="tile">
                    <h1>{matrix[2][1]}</h1>
                </div>
                <div onClick={() => update(2,2)} className="tile">
                    <h1>{matrix[2][2]}</h1>
                </div>
            </div>
            <br/>
            <h2>{win ? (`${current} hai vinto`): (`Turno di ${current}`)}</h2>
            {win ? <button className="newGame" onClick={() => reset()}>Inizia una nuova partita</button> : <div className="spacer"></div>}
        </div>
    );
}

export default Tris;
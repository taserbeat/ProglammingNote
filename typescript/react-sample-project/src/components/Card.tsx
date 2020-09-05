import React from "react";

import Square from "./Square";
import BingoCard from "./Enums";

type Props = {
    appearanceNumbers: number[]
}

const squareValues = Array.from(new Array(100))
    .map((_, index) => index)
    .sort(() => Math.random() - 0.5)
    .slice(0, 25);
squareValues[12] = BingoCard.Free;

const Card: React.FC<Props> = ({ appearanceNumbers }) => {

    return (
        <div className={"card"}>
            <ul>
                {
                    squareValues.map(squareValue => (
                        <li>
                            <Square value={squareValue} appearanceNumbers={appearanceNumbers} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Card;
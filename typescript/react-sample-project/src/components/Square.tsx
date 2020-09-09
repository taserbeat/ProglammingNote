import React from "react";

import BingoCard from "./Enums";

type Props = {
    value: number,
    appearanceNumbers: number[]
}

const Square: React.FC<Props> = ({ value, appearanceNumbers }) => {

    return (
        <div
            className={appearanceNumbers.includes(value) || value == BingoCard.Free ? "square hit" : "square"}
        >
            {value == BingoCard.Free ? "Free" : value}
        </div>
    )
}

export default Square;
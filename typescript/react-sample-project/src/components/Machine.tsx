import React from "react";

type Props = {
    appearanceNumbers: number[]
    setAppearanceNumbers: React.Dispatch<React.SetStateAction<number[]>>
}

const remainNumbers = Array.from(new Array(100))
    .map((_, index) => index)
    .sort(() => Math.random() - 0.5);

const Machine: React.FC<Props> = ({ appearanceNumbers, setAppearanceNumbers }) => {

    const handleClick = () => {
        const appearanceNumber = remainNumbers.shift();
        if (appearanceNumber === undefined) {
            return;
        }

        setAppearanceNumbers([appearanceNumber, ...appearanceNumbers]);

    }

    return (
        <div className={"machine"}>
            <button
                className={"btn"}
                onClick={handleClick}
            >GO
            </button>
            <h2>{remainNumbers.length > 0 ? "ボタンを押してください" : "ビンゴは終了しました"}</h2>
            <div className={"appearances"}>{appearanceNumbers.join(", ")}</div>
        </div>
    )
}

export default Machine;
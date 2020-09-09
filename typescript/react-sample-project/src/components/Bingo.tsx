import React from "react";

import Machine from "./Machine";
import Card from "./Card";

const Bingo: React.FC = () => {
    const [appearanceNumbers, setAppearanceNumbers] = React.useState<number[]>([]);

    return (
        <div>
            <Card appearanceNumbers={appearanceNumbers} />
            <Machine appearanceNumbers={appearanceNumbers} setAppearanceNumbers={setAppearanceNumbers} />
        </div>
    )
}

export default Bingo;
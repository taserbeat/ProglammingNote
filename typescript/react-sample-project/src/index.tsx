import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import "./css/style.css";
import Bingo from "./components/Bingo";

const App: React.FC = () => {
    return (
        <div>
            <Bingo />
        </div>
    )
}
export default hot(App);
//export default App;  // react-hot-loaderを無効にする場合はこちらを使う

ReactDOM.render(<App />, document.getElementById("app"));
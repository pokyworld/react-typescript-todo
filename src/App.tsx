import * as React from "react";
import * as ReactDom from "react-dom";

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello World!</h1>
            </div>
        );
    }
};
export default App;

const rootElem = document.querySelector("#root");
ReactDom.render(<App />, rootElem);
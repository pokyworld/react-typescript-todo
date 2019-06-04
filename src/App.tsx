import * as React from "react";
import * as ReactDom from "react-dom";

const rootElem = document.querySelector("#root");

export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Hello World</h1>
            </div>
        );
    }
};
export default App;

ReactDom.render(<App />, rootElem);
// ReactDom.render(<h1>Hello World</h1>, rootElem);
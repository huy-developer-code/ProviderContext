import ContextProvider from "./component/ContextProvider";
import ContextSumer from "./component/ContextSumer";
import "./styles.css";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <ContextSumer.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Start</button>
            </div>
          )}
        </ContextSumer.Consumer>
      </div>
    </ContextProvider>
  );
}

import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <Buttons
        children="Click me"
        onClick={() => console.log("Clicked")}
        color="danger"
      ></Buttons>
    </>
  );
}

export default App;

import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Emergency Alert</Alert>
      )}
      <Buttons
        children="Click me"
        onClick={() => setAlertVisibility(true)}
        color="danger"
      ></Buttons>
    </>
  );
}

export default App;

import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
}

const buttonArray = ["Button 1", "Button 2", "Button 3"];

function Buttons({ children }: ButtonProps) {
  const [selectedButton, setSelectedButton] = useState("");

  return (
    <>
      <h1>Buttons</h1>
      {buttonArray.map((button, index) => (
        <button
          className={
            selectedButton === button ? "btn btn-primary" : "btn btn-secondary"
          }
          key={index}
          onClick={() => {
            setSelectedButton(button);
            console.log(`Selected Button: ${button}`);
          }}
        >
          {button}
        </button>
      ))}
      <div className="mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => console.log("Why did you click me..")}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default Buttons;

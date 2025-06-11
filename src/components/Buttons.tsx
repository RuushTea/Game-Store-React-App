import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

const buttonArray = ["Button 1", "Button 2", "Button 3"];

function Buttons({ children, onClick, color = "primary" }: ButtonProps) {
  const [selectedButton, setSelectedButton] = useState("");

  return (
    <>
      <h1>Buttons</h1>
      {buttonArray.map((button, index) => (
        <button className={"btn btn-" + color} onClick={onClick}>
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

import { ReactNode, useState } from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}

function Buttons({ children, onClick, color = "primary" }: ButtonProps) {
  const [selectedButton, setSelectedButton] = useState("");

  return (
    <>
      <h1>Buttons</h1>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Buttons;

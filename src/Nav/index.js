import { useState } from "react";
import Menu from "./Menu";
import Close from "./Close";

export default function Nav() {
  const [isAddingMenu, setIsAddingMenu] = useState(false);

  return (
    <nav className="nav">
      <p className="title">Website Title / Logo</p>

      <ul className={isAddingMenu ? "list" : "list none"}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      {isAddingMenu ? (
        <Menu setIsAddingMenu={setIsAddingMenu} />
      ) : (
        <Close setIsAddingMenu={setIsAddingMenu} />
      )}
    </nav>
  );
}

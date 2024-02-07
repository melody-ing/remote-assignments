import { useState } from "react";
import { Menu } from "./Menu";
import { Close } from "./Close";

export function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="nav">
      <p className="title">Website Title / Logo</p>

      <ul className={menu ? "list" : "list none"}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      {menu ? <Menu setMenu={setMenu} /> : <Close setMenu={setMenu} />}
    </nav>
  );
}

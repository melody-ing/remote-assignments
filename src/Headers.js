import { useState } from "react";

export default function Headers() {
  const [isChangingTitle, setIsChangeTitle] = useState("Welcome Message");
  return (
    <header
      className="header"
      onClick={() => setIsChangeTitle("Have a Good Time!")}
    >
      <h1 className="title">{isChangingTitle}</h1>
    </header>
  );
}

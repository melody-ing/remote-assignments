<<<<<<< HEAD
import { useState } from "react";

export default function Headers() {
  const [isChangingTitle, setIsChangeTitle] = useState("Welcome Message");
  return (
    <header
      className="header"
      onClick={() => setIsChangeTitle("Have a Good Time!")}
    >
      <h1 className="title">{isChangingTitle}</h1>
=======
export function Headers() {
  return (
    <header className="header">
      <h1 className="title">Welcome Message</h1>
>>>>>>> 234c389ea046719a97b0ae6514a6d1f82ad27d21
    </header>
  );
}

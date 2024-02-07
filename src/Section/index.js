import { useState } from "react";

export default function Section({ children }) {
  const [isClickingBtn, setIsClickingBtn] = useState(false);
  return (
    <section className="section">
      <h2 className="title">Section title</h2>
      {children}
      <div className="btn" onClick={() => setIsClickingBtn(!isClickingBtn)}>
        Call to Action
      </div>
      {isClickingBtn && children}
    </section>
  );
}

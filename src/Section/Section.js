import { useState } from "react";

export function Section({ children }) {
  const [btn, setBtn] = useState(false);
  return (
    <section className="section">
      <h2 className="title">Section title</h2>
      {children}
      <div className="btn" onClick={() => setBtn(!btn)}>
        Call to Action
      </div>
      {btn && children}
    </section>
  );
}

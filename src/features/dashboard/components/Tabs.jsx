import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button
          key={t}
          className={active === t ? "tab-active" : "tab"}
          onClick={() => setActive(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

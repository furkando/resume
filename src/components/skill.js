import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skill({ skill }) {
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    setProgress(50 + Math.floor(Math.random() * 50));
  }, []);

  return (
    <li>
      <div className="rowFlexRes">
        <span>{skill.name}</span>
        <span>
          {progress}
          {"%"}
        </span>
      </div>
      <div>
        <ProgressBar
          completed={progress}
          bgcolor={"var(--red)"}
          baseBgColor={"rgba(233, 233, 233, 0.8)"}
          width={"100%"}
          height={"0.5rem"}
          labelSize={"0"}
        />
      </div>
    </li>
  );
}

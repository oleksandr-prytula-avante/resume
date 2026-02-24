import { useMemo } from "react";

import "./LinesBackgorund.css";

type LineItem = {
  left: string;
  top: string;
  height: string;
  delay: string;
};

export const LINE_POSITIONS = [12, 35, 60, 82];

function createLines(): LineItem[] {
  return LINE_POSITIONS.map((pos, index) => ({
    left: `${pos}%`,
    top: `${Math.random() * 40}%`,
    height: `${Math.random() * 50 + 40}%`,
    delay: `${index * 1.5}s`,
  }));
}

export function LinesBackground() {
  const lines = useMemo<LineItem[]>(() => createLines(), []);

  return (
    <div className="lines" aria-hidden="true">
      {lines.map((line, index) => (
        <div
          key={index}
          className="line"
          style={{
            left: line.left,
            top: line.top,
            height: line.height,
            animationDelay: line.delay,
          }}
        />
      ))}
    </div>
  );
}

import { useMemo } from "react";

import "./LinesBackgorund.css";

export const VERTICAL_LINE_POSITIONS = [5, 21, 37, 53, 69, 85];
export const HORIZONTAL_LINE_POSITIONS = [10, 26, 42, 58, 74, 90];

type VerticalLineStyle = {
  left: string;
  top: string;
  width: string;
  height: string;
};

type HorizontalLineStyle = {
  left: string;
  top: string;
  width: string;
  height: string;
};

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function LinesBackground() {
  const verticalLines = useMemo(function () {
    return VERTICAL_LINE_POSITIONS.map(function (left) {
      const top = randomBetween(5, 55);
      const maxHeight = Math.max(1, 90 - top);
      const height = randomBetween(35, maxHeight);

      const style: VerticalLineStyle = {
        left: `${left}%`,
        top: `${top}%`,
        width: `2px`,
        height: `${height}%`,
      };

      return style;
    });
  }, []);

  const horizontalLines = useMemo(function () {
    return HORIZONTAL_LINE_POSITIONS.map(function (top) {
      const left = randomBetween(0, 70);
      const maxWidth = 90 - left;
      const width = randomBetween(20, maxWidth);

      const style: HorizontalLineStyle = {
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `2px`,
      };

      return style;
    });
  }, []);

  return (
    <div className="lines" aria-hidden="true">
      {verticalLines.map((style, index) => (
        <div
          key={`v-${index}`}
          className="line-vertical"
          style={style}
        />
      ))}

      {horizontalLines.map((style, index) => (
        <div
          key={`h-${index}`}
          className="line-horizontal"
          style={style}
        />
      ))}
    </div>
  );
}

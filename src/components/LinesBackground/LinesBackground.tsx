import { useEffect, useState } from "react";

import { DESKTOP_MIN_WIDTH_MEDIA_QUERY } from "../../constants/mediaQueries";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  generateHorizontalLineStyles,
  generateVerticalLineStyles,
} from "../../utils/linesBackground";

import "./LinesBackground.css";

export function LinesBackground() {
  const isDesktopViewport = useMediaQuery(DESKTOP_MIN_WIDTH_MEDIA_QUERY, true);
  const [verticalLines, setVerticalLines] = useState<
    ReturnType<typeof generateVerticalLineStyles>
  >([]);
  const [horizontalLines, setHorizontalLines] = useState<
    ReturnType<typeof generateHorizontalLineStyles>
  >([]);

  useEffect(
    function () {
      if (!isDesktopViewport) {
        return;
      }
      const animationFrameId = window.requestAnimationFrame(function () {
        setVerticalLines(generateVerticalLineStyles());
        setHorizontalLines(generateHorizontalLineStyles());
      });

      return function () {
        window.cancelAnimationFrame(animationFrameId);
      };
    },
    [isDesktopViewport],
  );

  if (!isDesktopViewport) {
    return null;
  }

  return (
    <div className="lines" aria-hidden="true">
      {verticalLines.map(function (style, index) {
        return (
          <div key={`v-${index}`} className="line-vertical" style={style} />
        );
      })}
      {horizontalLines.map(function (style, index) {
        return (
          <div key={`h-${index}`} className="line-horizontal" style={style} />
        );
      })}
    </div>
  );
}

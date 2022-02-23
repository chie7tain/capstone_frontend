import React, { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: any) => setMatches(e.matches);

    // mediaMatch.addListener(handler);
    mediaMatch.addEventListener("change", handler);

    // return () => mediaMatch.removeListener(handler);
    return () => mediaMatch.removeEventListener("change", handler);
  });

  return matches;
};

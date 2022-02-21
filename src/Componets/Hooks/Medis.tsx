import React, { useState, useEffect } from "react";

// type MediaQ = {
//   matches: boolean;
//   media: string
//   onchange: any;
// };

// export const useMediaQuery = (query: string) => {
//   const mediaMatch = window.matchMedia(query);
//   const [matches, setMatches] = useState<boolean>(mediaMatch.matches);

//   useEffect(() => {
//     const check = () => {
//       setMatches(mediaMatch.matches);
//     };
//     check();
//     setMatches(mediaMatch.matches);
//   }, [mediaMatch]);

//   console.log(matches);
//   return matches;
// };

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

// export const MyComponent = () => {
//     const isRowBased = useMediaQuery('(min-width: 500px)');

//     return (
//       <div style={styles.container(isRowBased)}>
//         <div>First item</div>
//         <div>Second item</div>
//       </div>);
//   };

//   const styles = {
//     container: isRowBased => ({
//       display: 'flex',
//       flexDirection: isRowBased ? 'row' : 'column',
//       justifyContent: 'space-around'
//     })
//   };

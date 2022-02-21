import styles from "./AudioMessage.module.scss";
import WaveSurfer from "wavesurfer.js";

const AudioMessage = () => {
  return (
    <div className={styles.video}>
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>
      <div className={styles.vidText}>
        <p>This is the video I Promised to send</p>
        <span>12:35pm</span>
      </div>
    </div>
  );
};

export default AudioMessage;

// export default function Chat(){
//   const waveformRef = useRef();

//   useEffect(() => {
//     if(waveformRef.current) {
//       const wavesurfer = WaveSurfer.create({
//         container: waveformRef.current,
//       });
//     }
//   }, []);

//   return(
//     <>
//       <div ref={waveformRef}>
//       </div>
//     </>
//   )
//  }

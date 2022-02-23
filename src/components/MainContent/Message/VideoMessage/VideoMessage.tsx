import styles from "./VideoMessage.module.scss";

const VideoMessage = () => {
  return (
    <div className={styles.video}>
      <video controls>
        <source
          src="http://techslides.com/demos/sample-videos/small.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.vidText}>
        <p>This is the video I Promised to send</p>
        <span>12:35pm</span>
      </div>
    </div>
  );
};

export default VideoMessage;

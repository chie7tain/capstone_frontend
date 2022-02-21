import styles from "./VideoMessage.module.scss";

const VideoMessage = () => {
  return (
    <div className={styles.video}>
      <video controls>
        <source
          src="https://vod-progressive.akamaized.net/exp=1645422072~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4699%2F12%2F323496013%2F1259751207.mp4~hmac=721b7ba9124954d62cb66f5c714ef1cdfa7e505472a7833be584ccd0051c4e81/vimeo-prod-skyfire-std-us/01/4699/12/323496013/1259751207.mp4?filename=Seoul+-+21985.mp4"
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

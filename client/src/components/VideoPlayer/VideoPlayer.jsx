import Video from "../../assets/videos/IMG_0551.mp4";

import "./VideoPlayer.css";

function VideoPlayer() {
  return <video src={Video} className="video" autoPlay muted loop />;
}

export default VideoPlayer;

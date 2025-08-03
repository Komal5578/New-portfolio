
import "./index.css"
export default function Bgvideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/bgvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

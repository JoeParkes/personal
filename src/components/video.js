import { motion } from "framer-motion";
export default function Video() {
  return (
    <>
      <div className="relative w-full h-full">
        <video
          className="h-full w-full object-cover"
          src={require("../assets/videos/cover.mp4")}
          type="video/mp4"
          playsInline
          muted
          autoPlay
          loop
        ></video>
      </div>
    </>
  );
}

"use client";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
};

export function Video(props: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    video?.addEventListener("loadeddata", () => {
      video.play();
    });

    return () => {
      video?.removeEventListener("loadeddata", () => {
        video.play();
      });
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-all shadow-sm"
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      controls
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src={props.src} type="video/mp4" />
      <track kind="captions" />
    </video>
  );
}
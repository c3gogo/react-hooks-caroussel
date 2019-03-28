import React, { useState, useEffect } from "react";
import "./Caroussel.css";
import Player from "./Player";

export default function Caroussel(props) {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log("isPlaying", isPlaying);
    if (isPlaying) {
      let timeout = setTimeout(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentImage, isPlaying]);

  const imageStyle = {
    backgroundImage: `url(${images[currentImage]})`
  };
  return (
    <div className="image-caroussel">
      <div className="image" style={imageStyle} />
      <Player
        onChangePlayingState={() => setIsPlaying(!isPlaying)}
        isPlaying={isPlaying}
      />
    </div>
  );
}

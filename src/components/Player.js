import React from "react";
import "./Player.css";

export default function Player(props) {
  return (
    <div className="player">
      {props.isPlaying ? (
        <i
          className="fas fa-pause fa-3x pause-button"
          onClick={() => props.onChangePlayingState()}
        />
      ) : (
        <i
          className="fas fa-play fa-3x play-button"
          onClick={() => props.onChangePlayingState()}
        />
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControl from "./PlayerControl";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (forward = true) => {
    if (forward) {
      props.setCurrentSongIndex(() => {
        let temp = props?.currentSongIndex;
        temp++;
        if (temp > props?.songs?.length - 1) {
          return 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props?.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props?.songs?.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioEl} src={props?.songs[props?.currentSongIndex]?.src}></audio>
      <h4>Playing now</h4>
      <PlayerDetails song={props?.songs[props?.currentSongIndex]} />
      <PlayerControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next up:</strong> {props?.songs[props?.nextSongIndex]?.title}{" "}
        from {props?.songs[props?.nextSongIndex]?.artist}
      </p>
    </div>
  );
};

export default Player;

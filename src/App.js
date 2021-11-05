import React, { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Run Away",
      artist: "EXO",
      img_src: "./images/EXO-Runaway.jpeg",
      src: "./music/EXO-Runaway.mp3",
    },
    {
      title: "Run Away",
      artist: "GOT7",
      img_src: "./images/GOT7-Runaway.jpeg",
      src: "./music/GOT7-Runaway.mp3",
    },
    {
      title: "Run Away",
      artist: "Eric Nam",
      img_src: "./images/Eric-Runaway.jpg",
      src: "./music/Eric-Runaway.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;

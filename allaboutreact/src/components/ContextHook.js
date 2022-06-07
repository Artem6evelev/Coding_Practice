import React, { createContext, useContext } from "react";

//? useContext - it allows you to work with react context API
//? it allows you share data, or scope values without passing props

const moods = {
  happy: "smile",
  sad: "cry",
};

const MoodContext = createContext(moods);

export const ContextHook = () => {
  return (
    <MoodContext.Provider value={moods.happy}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
};

function MoodEmoji() {
  const mood = useContext(MoodContext);

  return <p>{mood}</p>;
}

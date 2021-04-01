import React, { useEffect } from "react";
import "./App.css";

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 500);
  }, []);

  return (
    <div className="App">
      <p>Loading...</p>
    </div>
  );
};

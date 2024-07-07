import React, { createContext, useEffect } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    try {
      console.log("Sending prompt to API...");
      const response = await run(prompt);
      console.log("API response received:", response);
    } catch (error) {
      console.error("Error running prompt:", error);
    }
  };

  useEffect(() => {
    console.log("Running useEffect...");
    onSent("what is node js");
  }, []); // Empty dependency array ensures this runs only once after mount

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

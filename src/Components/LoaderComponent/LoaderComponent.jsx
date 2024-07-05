import React from "react";
import { quantum } from "ldrs";
const LoaderComponent = () => {
  quantum.register();
  return (
    <div style={{ 
      width: "100%", 
      height: "100vh",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
    }}>
      <l-quantum size="65" speed="0.75" color="white"></l-quantum>
    </div>
  );
};

export default LoaderComponent;
 
import React from "react";

const ProgressDisplay: React.FC<{ progress: string }> = ({ progress }) => {
  return (
    <div>
      <h3>Progress</h3>
      <p>{progress}</p>
    </div>
  );
};

export default ProgressDisplay;

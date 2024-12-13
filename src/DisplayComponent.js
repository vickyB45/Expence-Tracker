import React, { useContext } from 'react';
import { DataContext } from './App';

const DisplayComponent = () => {
  const { inputValue } = useContext(DataContext);

  return (
    <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
      <p>Value: {inputValue || "No value entered yet"}</p>
    </div>
  );
};

export default DisplayComponent;

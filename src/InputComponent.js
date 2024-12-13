import React, { useContext } from 'react';
import { DataContext } from './App';

const InputComponent = () => {
  const { setInputValue } = useContext(DataContext);

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update the context value
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter something..."
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default InputComponent;

import React from "react";

const SecretKeyPrompt = ({ secretKey, setSecretKey, handleFetchCode }) => {
  return (
    <div className="secret-key-prompt">
      <label>Enter Secret Key</label>
      <input
        type="password"
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
        required
      />
      <button onClick={handleFetchCode}>Fetch Code</button>
    </div>
  );
};

export default SecretKeyPrompt;

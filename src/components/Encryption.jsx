import React, { useState } from 'react';
import '../index.css'; // Make sure to create this CSS file
import { encrypt } from '../algorithms/encryption';

 export const Encryption = () => {
  const [message, setMessage] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [encryptedMsg, setEncryptedMsg] = useState('');

  const handleMsgChange = (event) => setMessage(event.target.value);
  const handlePassChange = (event) => setPassphrase(event.target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setEncryptedMsg(encrypt(message, passphrase));
  };

  const handleCopy = () => {
    if (encryptedMsg) {
      navigator.clipboard.writeText(encryptedMsg);
      alert('Encrypted message copied to clipboard!');
    }
  };

  return (
    <div className="encryption-container">
      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your message here."
            value={message}
            onChange={handleMsgChange}
            rows={15}
          />
          <input
            type="password"
            placeholder="Enter a secret passphrase for decryption."
            value={passphrase}
            onChange={handlePassChange}
          />
          <button type="submit" disabled={!message || !passphrase}>
            Generate Encrypted Message
          </button>
        </form>
      </div>

      <div className="output-section">
        <textarea
          placeholder="Encrypted message will appear here."
          value={encryptedMsg}
          readOnly
          rows={15}
        />
        <button onClick={handleCopy} disabled={!encryptedMsg}>
          Copy To Clipboard
        </button>
      </div>
    </div>
  );
};



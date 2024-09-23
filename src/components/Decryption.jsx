import React, { useState } from 'react';
import { decrypt } from '../algorithms/decryption';

 export const Decryption = () => {
  const [message, setMessage] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [decryptedMsg, setDecryptedMsg] = useState('');

  const handleMsgChange = (event) => setMessage(event.target.value);
  const handlePassChange = (event) => setPassphrase(event.target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setDecryptedMsg(decrypt(message, passphrase));
  };

  const handleCopy = () => {
    if (decryptedMsg) {
      navigator.clipboard.writeText(decryptedMsg);
      alert('Decrypted message copied to clipboard!');
    }
  };

  return (
    <div className="row">
      {/* Left Side: Input Message and Passphrase */}
      <div className="col-12 col-md-6 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              id="msg"
              placeholder="Enter the encrypted message here."
              value={message}
              onChange={handleMsgChange}
              rows={15}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              name="passphrase"
              id="pass"
              placeholder="Enter the secret passphrase."
              value={passphrase}
              onChange={handlePassChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={message.length === 0 || passphrase.length === 0}
          >
            Decrypt The Message
          </button>
        </form>
      </div>

      {/* Right Side: Decrypted Message */}
      <div className="col-12 col-md-6 mt-3">
        <div className="form-group">
          <textarea
            className="form-control"
            name="decrypted_msg"
            id="decrypted_msg"
            placeholder="Decrypted message will appear here."
            value={decryptedMsg}
            readOnly
            rows={15}
          />
        </div>
        <button
          className="btn btn-secondary"
          onClick={handleCopy}
          disabled={!decryptedMsg}
        >
          Copy To Clipboard
        </button>
      </div>
    </div>
  );
};



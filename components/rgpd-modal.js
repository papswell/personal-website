import { useEffect, useState } from "react";

import { get, set, clear } from "../utils/cookies";

const ACCEPT_VALUE = "1";

const RGPDModal = () => {
  const [shouldPrompt, updateShouldPrompt] = useState(true);

  useEffect(() => {
    const accept = get("accept_cookies");
    if (accept === ACCEPT_VALUE) {
      updateShouldPrompt(false);
    }
  }, []);

  const decline = () => {
    clear();
    updateShouldPrompt(false);
  };

  const handleAccept = () => {
    set("accept_cookies", ACCEPT_VALUE);
    updateShouldPrompt(false);
  };

  if (!shouldPrompt) {
    return null;
  }

  return (
    <div className="rgpd">
      <div>
        In order to improve the site quality, i need to use cookies. Do you
        agree ?
      </div>
      <div>
        <button className="button" onClick={decline}>
          <span>No</span>
        </button>
        <button className="button" onClick={handleAccept}>
          <span>Yes</span>
        </button>
      </div>
    </div>
  );
};

export default RGPDModal;

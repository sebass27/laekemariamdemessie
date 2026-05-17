import React, { useState, useEffect } from "react";

function Consent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookie-consent');
    if (hasAccepted) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setAccepted(true);
  };

  const handleDismiss = () => {
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="cookie-consent">
      <p>We use minimal cookies to ensure the best experience. No personal data is collected.</p>
      <button className="cookie-accept" onClick={handleAccept}>Accept</button>
      <button className="cookie-dismiss" onClick={handleDismiss}>Dismiss</button>
    </div>
  );
}

export default Consent;

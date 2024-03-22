import React, { useState, useEffect } from 'react';

const IntroPage = () => {
  const [showHi, setShowHi] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHi(false);
      setShowName(true);
    }, 6000);
    
    setTimeout(() => {
      setShowName(false);
      setShowWelcome(true);
    }, 6000); 
    
    setTimeout(() => {
        setShowWelcome(false);
    }, 3000); 
  }, []);

  return (
    <div className="intro-page" style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '50px' }}>
      {showHi && <h1>Hi</h1>}
      {showName && <h1>My name is Victoria</h1>}
      {showWelcome && <h1>Welcome to my Portfolio</h1>}
    </div>
  );
}

export default IntroPage;
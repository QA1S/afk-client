import { useState } from 'react';
import RadioGroupPopup from './Popover';

const Layout = ({ children }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handlePopupSubmit = () => {
    setShowPopup(false);
  };
  const centeredDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <div style={centeredDivStyle}>
      {showPopup && <RadioGroupPopup onSubmit={handlePopupSubmit} />}
      {!showPopup && children}
    </div>
  );
};

export default Layout;

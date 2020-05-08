const RGPDModal = ({ isOpen, onAccept, onDecline }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="rgpd">
      <div>
        In order to improve the site quality, i need to use cookies. Do you
        agree ?
      </div>
      <div>
        <button className="button" onClick={onDecline}>
          <span>No</span>
        </button>
        <button className="button" onClick={onAccept}>
          <span>Yes</span>
        </button>
      </div>
    </div>
  );
};

export default RGPDModal;

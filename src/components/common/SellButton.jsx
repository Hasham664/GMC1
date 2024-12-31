import React, { useState } from 'react';
import PropertyForm from './PropertyForm';

const SellButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <button onClick={toggleModal}>Sell</button>

      {/* Modal */}
      <div className={`modal ${isModalVisible ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>&times;</span>
          <h2>Sell Your Property</h2>
          <PropertyForm />
        </div>
      </div>
    </div>
  );
};

export default SellButton;

import React, { useState } from 'react';

function OnlineDonation() {
  const [donationData, setDonationData] = useState({
    amount: '',
    isAnonymous: false,
    donorName: '',
    donorEmail: '',
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setDonationData(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
   
    console.log('Dados da doação:', donationData);
   
    console.log('Comprovante de doação enviado por email.');
  };

  return (
    <div className="online-donation">
      <h2>Doação Online</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Valor da Doação:
          <input type="number" name="amount" value={donationData.amount} onChange={handleChange} />
        </label>
        <label>
          <input type="checkbox" name="isAnonymous" checked={donationData.isAnonymous} onChange={handleChange} />
          Doação Anônima
        </label>
        {!donationData.isAnonymous && (
          <div>
            <label>
              Nome:
              <input type="text" name="donorName" value={donationData.donorName} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="donorEmail" value={donationData.donorEmail} onChange={handleChange} />
            </label>
          </div>
        )}
        <button type="submit">Realizar Doação</button>
      </form>
    </div>
  );
}

export default OnlineDonation;

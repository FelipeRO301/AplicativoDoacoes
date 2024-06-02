import React, { useState } from 'react';

function DonorProfile() {

  const [donorData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    donations: [
      { id: 1, amount: 50, date: '2024-04-01', campaign: 'Campanha A' },
      { id: 2, amount: 100, date: '2024-03-15', campaign: 'Campanha B' },
      
    ],
    paymentInfo: {
      creditCard: '**** **** **** 1234',
      
    },

  });


  const handleEditProfile = () => {
 
    console.log('Editar perfil');
  };


  const handleEditPaymentInfo = () => {
   
    console.log('Editar informações de pagamento');
  };


  const handleCommunication = () => {
 
    console.log('Comunicação com instituições');
  };

  return (
    <div className="donor-profile">
      <h2>Perfil do Doador</h2>
      <div className="profile-info">
        <h3>Informações Pessoais</h3>
        <p><strong>Nome:</strong> {donorData.name}</p>
        <p><strong>Email:</strong> {donorData.email}</p>
        {}
      </div>
      <div className="donation-history">
        <h3>Histórico de Doações</h3>
        <ul>
          {donorData.donations.map(donation => (
            <li key={donation.id}>
              <strong>Data:</strong> {donation.date}, <strong>Valor:</strong> R${donation.amount}, <strong>Campanha:</strong> {donation.campaign}
            </li>
          ))}
        </ul>
      </div>
      <div className="payment-info">
        <h3>Dados de Pagamento</h3>
        <p><strong>Cartão de Crédito:</strong> {donorData.paymentInfo.creditCard}</p>
        {}
      </div>
      <button onClick={handleEditProfile}>Editar Informações Pessoais</button>
      <button onClick={handleEditPaymentInfo}>Editar Dados de Pagamento</button>
      <button onClick={handleCommunication}>Comunicação com Instituições Beneficiadas</button>
    </div>
  );
}

export default DonorProfile;

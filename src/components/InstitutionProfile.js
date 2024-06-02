import React, { useState } from 'react';

function InstitutionProfile() {

  const [institutionData] = useState({
    name: 'Instituição XYZ',
    mission: 'Nossa missão é...',
    values: 'Nossos valores são...',
    projects: 'Nossos projetos incluem...',
    goals: 'Nossas metas de captação são...',
    donationsReceived: [
      { id: 1, amount: 500, date: '2024-04-10', donor: 'John Doe' },
      { id: 2, amount: 1000, date: '2024-03-20', donor: 'Jane Smith' },
 
    ],
    ongoingCampaigns: [
      { id: 1, name: 'Campanha A', goal: 10000, amountRaised: 7500 },
      { id: 2, name: 'Campanha B', goal: 5000, amountRaised: 3000 },

    ],
   
  });

 
  const handleManageCampaigns = () => {
   
    console.log('Gerenciamento de campanhas');
  };


  const handleCommunicationWithDonors = () => {

    console.log('Comunicação com doadores');
  };

  return (
    <div className="institution-profile">
      <h2>Perfil da Instituição</h2>
      <div className="profile-info">
        <h3>Missão</h3>
        <p>{institutionData.mission}</p>
        <h3>Valores</h3>
        <p>{institutionData.values}</p>
        <h3>Projetos</h3>
        <p>{institutionData.projects}</p>
        <h3>Metas de Captação</h3>
        <p>{institutionData.goals}</p>
      </div>
      <div className="donations-received">
        <h3>Doações Recebidas</h3>
        <ul>
          {institutionData.donationsReceived.map(donation => (
            <li key={donation.id}>
              <strong>Data:</strong> {donation.date}, <strong>Doador:</strong> {donation.donor}, <strong>Valor:</strong> R${donation.amount}
            </li>
          ))}
        </ul>
      </div>
      <div className="ongoing-campaigns">
        <h3>Campanhas em Andamento</h3>
        <ul>
          {institutionData.ongoingCampaigns.map(campaign => (
            <li key={campaign.id}>
              <strong>Campanha:</strong> {campaign.name}, <strong>Meta:</strong> R${campaign.goal}, <strong>Arrecadado:</strong> R${campaign.amountRaised}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleManageCampaigns}>Gerenciar Campanhas</button>
      <button onClick={handleCommunicationWithDonors}>Comunicação com Doadores</button>
    </div>
  );
}

export default InstitutionProfile;

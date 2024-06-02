import React from 'react';

function CampaignsHighlight() {

  const campaigns = [
    {
      id: 1,
      title: 'Campanha 1',
      description: 'Descrição da Campanha 1...',
      imageUrl: 'https://example.com/campaign1.jpg',
    },
    {
      id: 2,
      title: 'Campanha 2',
      description: 'Descrição da Campanha 2...',
      imageUrl: 'https://example.com/campaign2.jpg',
    },
   
  ];

  return (
    <div className="campaigns-highlight">
      <h2>Campanhas em Destaque</h2>
      <div className="campaigns-list">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="campaign-item">
            <img src={campaign.imageUrl} alt={campaign.title} />
            <div className="campaign-details">
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignsHighlight;

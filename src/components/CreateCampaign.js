import React, { useState } from 'react';
import axios from 'axios';

function CreateCampaign() {
  const [campaignData, setCampaignData] = useState({
    name: '',
    goal: '',
    deadline: '',
    description: '',
    images: [],
    videos: [],
    documents: [],
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCampaignData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = e => {
    const files = Array.from(e.target.files);
    setCampaignData(prevState => ({
      ...prevState,
      images: prevState.images.concat(files),
    }));
  };

  const handleVideoUpload = e => {
    const files = Array.from(e.target.files);
    setCampaignData(prevState => ({
      ...prevState,
      videos: prevState.videos.concat(files),
    }));
  };

  const handleDocumentUpload = e => {
    const files = Array.from(e.target.files);
    setCampaignData(prevState => ({
      ...prevState,
      documents: prevState.documents.concat(files),
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://doacoesapp-a84bf-default-rtdb.firebaseio.com/criarcampanha.json', 
        campaignData,
        { headers: { 'Content-Type': 'application/json' } } 
      );

      console.log('Resposta da API:', response.data);

      setCampaignData({
        name: '',
        goal: '',
        deadline: '',
        description: '',
        images: [],
        videos: [],
        documents: [],
      });
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
    }
  };

  return (
    <div className="create-campaign" style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <h2 style={{ color: 'black' }}>Criar Campanha</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Nome da Campanha:
          <input type="text" name="name" value={campaignData.name} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Meta de Arrecadação:
          <input type="number" name="goal" value={campaignData.goal} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Prazo:
          <input type="date" name="deadline" value={campaignData.deadline} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Descrição:
          <textarea name="description" value={campaignData.description} onChange={handleChange} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Anexar Imagens:
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Anexar Vídeos:
          <input type="file" accept="video/*" multiple onChange={handleVideoUpload} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Anexar Documentos:
          <input type="file" accept=".pdf,.doc,.docx" multiple onChange={handleDocumentUpload} />
        </label>
        <button type="submit" style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Criar Campanha</button>
      </form>
    </div>
  );
  
}

export default CreateCampaign;

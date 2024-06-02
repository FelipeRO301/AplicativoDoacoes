import React, { useState } from 'react';
import axios from 'axios';

function InstitutionRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    cause: '',
    mission: '',
    projects: '',
    fundraisingGoals: '',
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      files: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://doacoesapp-a84bf-default-rtdb.firebaseio.com/instituicao.json', formData);

      
      console.log('Resposta da API:', response.data);

 
      setFormData({
        name: '',
        cnpj: '',
        cause: '',
        mission: '',
        projects: '',
        fundraisingGoals: '',
        files: [],
      });
    } catch (error) {
     
      console.error('Erro ao cadastrar instituição:', error);
    }
  };

  return (
    <div className="institution-registration-form" style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <h2>Cadastro de Instituição</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          CNPJ:
          <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Causa:
          <input type="text" name="cause" value={formData.cause} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Missão:
          <textarea name="mission" value={formData.mission} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Projetos e Metas de Captação:
          <textarea name="projects" value={formData.projects} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Metas de Arrecadação:
          <input type="text" name="fundraisingGoals" value={formData.fundraisingGoals} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Fotos, Vídeos e Documentos Comprovativos:
          <input type="file" name="files" onChange={handleFileChange} multiple />
        </label>
        <button type="submit" style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default InstitutionRegistrationForm;

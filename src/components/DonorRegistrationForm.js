import React, { useState } from 'react';
import axios from 'axios';

function DonorRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    monthlyDonation: false,
    creditCard: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://doacoesapp-a84bf-default-rtdb.firebaseio.com/doador.json', formData);

    
      console.log('Resposta da API:', response.data);

     
      setFormData({
        name: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        monthlyDonation: false,
        creditCard: '',
      });
    } catch (error) {
    
      console.error('Erro ao cadastrar doador:', error);
    }
  };

  return (
    <div className="donor-registration-form" style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <h2>Cadastro de Doador</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Confirma Email:
          <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Confirma Senha:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input type="checkbox" name="monthlyDonation" checked={formData.monthlyDonation} onChange={handleChange} />
          Desejo fazer uma doação mensal recorrente
        </label>
        {formData.monthlyDonation && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Cartão de Crédito/Débito:
            <input type="text" name="creditCard" value={formData.creditCard} onChange={handleChange} required />
          </label>
        )}
        <button type="submit" style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default DonorRegistrationForm;


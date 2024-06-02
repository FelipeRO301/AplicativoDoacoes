import React from 'react';

const Home = () => {
  return (
    <div className="home" style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <h1>Bem-vindo ao Sistema de Doações</h1>
      <p>Aqui você pode encontrar várias funcionalidades para facilitar doações e auxiliar instituições beneficentes.</p>
      <ul>
        <li><a href="/mission-and-values">Missão e Valores</a></li>
        <li><a href="/institutions-search">Busca de Instituições</a></li>
        <li><a href="/campaigns-highlight">Campanhas em Destaque</a></li>
        <li><a href="/donor-registration-form">Cadastro de Doadores</a></li>
        <li><a href="/institution-registration-form">Cadastro de Instituições</a></li>
        <li><a href="/donor-profile">Perfil do Doador</a></li>
        <li><a href="/institution-profile">Perfil da Instituição</a></li>
        <li><a href="/create-campaign">Criar Campanha</a></li>
        <li><a href="/online-donation">Doacao Online</a></li>
      </ul>
    </div>
  );
};

export default Home;

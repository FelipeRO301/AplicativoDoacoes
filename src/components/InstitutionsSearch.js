import React from 'react';

function InstitutionsSearch() {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log('Termo de busca:', searchTerm);
  };

  return (
    <div className="institutions-search" style={{ backgroundColor: 'navy', padding: '20px' }}>
      <h1 style={{ color: 'white' }}>Buscar Instituições</h1>
      <input
        type="text"
        placeholder="Nome, Causa ou Localização"
        onChange={handleSearch}
        style={{ fontSize: '18px', padding: '10px' }}
      />
    </div>
  );
}

export default InstitutionsSearch;


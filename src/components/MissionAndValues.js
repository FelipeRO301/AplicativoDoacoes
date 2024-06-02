import React from 'react';

function MissionAndValues() {
  return (
    <div className="mission-and-values" style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <h2 style={{ fontSize: '2em' }}>Missão e Valores</h2>
      <p style={{ fontSize: '1.2em' }}>
        "Nossa Missão é proporcionar esperança e ajuda para comunidades em necessidade.
        Junte-se a nós na missão de fornecer assistência vital,
        desde alimentos e abrigo até cuidados médicos e educação.
        Cada doação faz a diferença na vida daqueles que mais precisam.
        Seja parte desta jornada de compaixão e solidariedade,
        construindo um mundo mais justo e igualitário para todos."
      </p>
      <ul style={{ fontSize: '1.2em' }}>
        <li>Solidariedade: Estendemos nossa mão para ajudar aqueles que enfrentam dificuldades.</li>
        <li>Transparência: Comprometemo-nos a ser transparentes em como suas doações são usadas e os impactos que geram.</li>
        <li>Compromisso com a mudança: Acreditamos no poder das pequenas ações para criar grandes mudanças.</li>
        <li>Empoderamento: Capacitamos as comunidades a se tornarem autossuficientes através do apoio contínuo.</li>
        <li>Responsabilidade: Assumimos a responsabilidade de garantir que cada doação faça a diferença real na vida das pessoas.</li>
        <li>Inclusão: Valorizamos e respeitamos a diversidade em todas as suas formas, garantindo que todos tenham acesso igual às nossas iniciativas.</li>
        <li>Sustentabilidade: Buscamos soluções de longo prazo que promovam um futuro sustentável para todos.</li>
      </ul>
    </div>
  );
}

export default MissionAndValues;

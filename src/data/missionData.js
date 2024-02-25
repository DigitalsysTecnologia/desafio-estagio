const missionsData = [
    {
      id: 1,
      name: 'O Resgate de Cirilla',
      difficulty: 'Alta',
      status: 'Em Andamento',
      description: `A missão central de Geralt em The Witcher 3: Wild Hunt, envolvendo a busca e o resgate de Ciri, a filha adotiva de Geralt e uma figura-chave no mundo do jogo. A jornada leva Geralt a cruzar continentes e enfrentar inimigos mortais para encontrar e proteger Cirilla.`,
      image: require('./img/Resgate.png'),
    },
    {
      id: 2,
      name: 'Caça ao Dragão',
      difficulty: 'Média',
      status: 'Concluída',
      description: `Uma missão perigosa que envolve rastrear e derrotar um dragão feroz que está aterrorizando uma aldeia próxima. Geralt é contratado para lidar com a ameaça do dragão, enfrentando desafios mortais enquanto tenta proteger os habitantes locais.`,
      image: require('./img/Dragon.png'),
    },
    {
      id: 3,
      name: 'Contrato de Bruxo: Assassino de Monstros',
      difficulty: 'Baixa',
      status: 'Concluída',
      description: `Um contrato típico de bruxo que envolve rastrear e eliminar uma criatura perigosa que está atacando viajantes em uma determinada área. Geralt é contratado pelos locais para lidar com o assassino de monstros, utilizando suas habilidades e conhecimentos para resolver o problema.`,
      image: require('./img/Monstro.png')
    },
    {
      id: 4,
      name: 'O Segredo das Ruínas Antigas',
      difficulty: 'Média',
      status: 'Em Andamento',
      description: `Rumores de ruínas antigas emergiram das profundezas da floresta proibida. Dizem que essas ruínas guardam segredos perdidos e tesouros ocultos. Geralt é contratado para explorar essas ruínas e desvendar os mistérios escondidos dentro delas, enfrentando criaturas ancestrais e armadilhas mortais ao longo do caminho.`,
      image: require('./img/FlorestaProibida.png')
    },
    
    {
      id: 5,
      name: 'A Maldição do Pântano',
      difficulty: 'Alta',
      status: 'Não Iniciada',
      description: `Os moradores de uma vila remota estão sofrendo com uma terrível maldição que assola o pântano próximo. Os campos estão infestados de criaturas sombrias e o solo é encharcado de energia negativa. Geralt é convocado para investigar a origem da maldição e encontrar uma maneira de dissipar sua influência, enfrentando perigos desconhecidos e desvendando segredos obscuros que assombram a região.`,
      image: require('./img/Pantano.png')
    },
    
    
  ];
  
  export default missionsData;
  
const witcherCharacters = [
    {
      id: 1,
      name: 'Geralt de Rivia',
      profession: 'Feiticeiro.',
      description: 'O protagonista da série, um bruxo que caça monstros por dinheiro.',
      image: require('./img/Geralt.png'), // URL da imagem do personagem
      age: `A idade exata de Geralt é difícil de determinar, devido ao processo de mutação que os bruxos passam.
              No entanto, ele é considerado um bruxo experiente, com vários séculos de vida.`,
      race: `Humano (mutado).`,
      origin: 'Kaer Morhen, uma fortaleza nas montanhas de Kaedwen, no mundo de The Witcher.',
      appearance: `Geralt é descrito como um homem alto e musculoso, com cabelos prateados
       e olhos amendoados distintamente amarelos, uma característica dos bruxos.`,

      weaponsAndAbilities: `Como bruxo, Geralt é treinado em combate corpo a corpo, bem como no uso de magia. 
                            Ele é habilidoso em uma variedade de armas, incluindo espadas, machados e adagas. 
                            Além disso, ele possui habilidades especiais, como o uso de sinais (magia), 
                            alquimia e rastreamento de monstros.`,

      companions: `Geralt muitas vezes é acompanhado por seus companheiros leais, como o bardo Dandelion (Jaskier),
                  a feiticeira Yennefer de Vengerberg e a princesa Cirilla (Ciri) de Cintra.`,

      personalHistory: `A história de Geralt é complexa e envolve uma série de eventos e aventuras ao
                     longo dos livros e jogos da saga The Witcher. Ele é conhecido por sua natureza solitária
                      e sua moralidade cinzenta, buscando equilibrar seus próprios interesses com o senso de justiça e ética.`
    
    },
    {
      id: 2,
      name: 'Yennefer de Vengerberg',
      profession: 'Feiticeira.',
      description: 'Uma poderosa feiticeira e interesse amoroso de Geralt.',
      image: require('./img/Yennefer.png'),
      race: `Humana (feiticeira).`,
      origin: `Desconhecido (adotada por feiticeiras)`,
      age: `Idade desconhecida, Yennefer é uma das feiticeiras mais experientes e respeitadas.`,
      appearance: `Yennefer é descrita como uma mulher de beleza incomparável, com longos cabelos negros
                   e olhos violeta hipnotizantes. Sua postura elegante e confiante reflete sua determinação e poder.`,
      weaponsAndAbilities: `Yennefer é uma feiticeira poderosa, especializada em magia arcana e elementos como
                            fogo e relâmpagos. Ela domina uma ampla gama de feitiços e encantamentos, 
                            além de ser habilidosa em manipulação e intriga política.`,
      companions: `Yennefer muitas vezes é associada a Geralt de Rivia e Ciri, formando um trio improvável, 
                    mas forte. Ela também tem conexões com outras feiticeiras e feiticeiros, 
                    como Triss Merigold e Philippa Eilhart.`,
      personalHistory: `A história de Yennefer é envolta em mistério e intriga. 
                        Criada pelas feiticeiras de Aretuza, ela passou por uma jornada de autoconhecimento 
                        e amadurecimento. Seus relacionamentos complexos e conflitos internos desempenham 
                        um papel crucial em sua história.`
    },
    {
      id: 3,
      name: 'Ciri',
      profession: 'Princessa de Cintra.',
      description: 'A princesa de Cintra e uma guerreira treinada por Geralt.',
      image: require('./img/Ciri.png'),
      age: `Idade desconhecida, Ciri é uma jovem graciosa e determinada, com cabelos loiros e olhos verdes expressivos.`,
      race: `Humana (com habilidades especiais).`,
      origin: `Cintra, um reino no mundo de The Witcher.`,
      appearance: `Ciri é descrita como uma jovem graciosa e determinada, com cabelos loiros 
                   e olhos verdes expressivos. Sua aparência inocente esconde uma força 
                   interior e habilidades sobrenaturais.`,
      weaponsAndAbilities: `Ciri é uma espadachim habilidosa, treinada por Geralt de Rivia
                            nas artes da espada. Além disso, ela possui habilidades especiais, 
                            incluindo o dom da Prophecy e a capacidade de viajar entre dimensões.`,
      companions: `Ciri é próxima de Geralt e Yennefer, considerando-os como sua família.
                    Ela também desenvolve laços com outros personagens ao longo de suas aventuras, 
                    incluindo o cavaleiro errante Cahir Mawr Dyffryn aep Ceallach e o bardo Jaskier.`,
      personalHistory: `A história de Ciri é marcada por tragédia e destinação. 
                        Ela é uma personagem central em muitos eventos cruciais no mundo de The Witcher, 
                        e sua jornada é uma mistura de aventura, intriga e autodescoberta.`
    },
    
  ];
  
  export default witcherCharacters;
  
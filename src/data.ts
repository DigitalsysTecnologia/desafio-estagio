import { Character } from './types';
const Characters: Character[] = [
    {
        name: 'Thalgar',
        title: 'Guardião das Sombras',
        class: 'Assassino das Sombras',
        classDescription: 'Thalgar é um mestre na arte do sigilo e da furtividade. Como um Assassino das Sombras, ele emprega habilidades de combate corpo a corpo e técnicas de assassinato para eliminar seus alvos sem ser detectado.',
        history: 'Thalgar foi treinado desde jovem pelos misteriosos assassinos de uma guilda secreta. Ele se tornou uma lenda entre os que buscam justiça nas sombras, sempre à espreita para proteger os inocentes e eliminar os corruptos.',
        profilePicture: 'src/assets/Thalgar-profile.jpg',
        picture: 'src/assets/Thalgar.jpg'
    },
    {
        name: 'Ariael',
        title: 'Feiticeira Celestial',
        class: 'Feiticeira Elemental',
        classDescription: 'Ariael domina os elementos da natureza e os poderes celestiais. Como uma Feiticeira Elemental, ela é capaz de conjurar tempestades, controlar o fogo e curar feridas com a energia divina.',
        history: 'Ariael nasceu com uma conexão especial com os elementos e foi treinada pelos sábios das antigas ordens druídicas. Ela viaja pelo mundo em busca de equilíbrio e justiça, usando seus dons para proteger a natureza e combater as forças das trevas.',
        profilePicture: 'src/assets/Ariael-profile.jpg',
        picture: 'src/assets/Ariael.jpg'
    },
    {
        name: 'Draven',
        title: 'Cavaleiro da Ruína',
        class: 'Cavaleiro Sombrio',
        classDescription: 'Draven é um guerreiro implacável que canaliza as energias sombrias para destruir seus inimigos. Como um Cavaleiro Sombrio, ele empunha uma lâmina amaldiçoada e invoca poderes das trevas para subjugar seus adversários.',
        history: 'Draven é um ex-cavaleiro nobre que foi traído por seus próprios irmãos de armas. Consumido pelo desejo de vingança, ele jurou lealdade aos senhores das sombras e agora cavalga pela terra espalhando ruína e desespero.',
        profilePicture: 'src/assets/Draven-profile.jpg',
        picture: 'src/assets/Draven.jpg'
    },
    {
        name: 'Lyra',
        title: 'Guardiã da Floresta',
        class: 'Arqueira Silvestre',
        classDescription: 'Lyra é uma mestre arqueira que protege as vastas florestas com sua habilidade incomparável com o arco e flecha. Como uma Arqueira Silvestre, ela é rápida, ágil e mortalmente precisa.',
        history: 'Lyra foi criada pelas criaturas da floresta e treinada pelos elfos arqueiros das copas das árvores. Ela é uma guardiã dedicada da natureza, sempre pronta para defender seu lar contra invasores e predadores.',
        profilePicture: 'src/assets/Lyra-profile.jpg',
        picture: 'src/assets/Lyra.jpg'
    },
    {
        name: 'Ragnar',
        title: 'Bárbaro Indomável',
        class: 'Bárbaro Berserker',
        classDescription: 'Ragnar é um guerreiro selvagem que canaliza sua fúria interior para aniquilar seus inimigos. Como um Bárbaro Berserker, ele entra em um estado de frenesi durante o combate, aumentando sua força e resistência a níveis sobre-humanos.',
        history: 'Ragnar nasceu nas terras geladas do norte, onde as tribos bárbaras vivem em constante luta pela sobrevivência. Ele é um líder entre seu povo, temido pelos inimigos e reverenciado pelos aliados por sua coragem e determinação.',
        profilePicture: 'src/assets/Ragnar-profile.jpg',
        picture: 'src/assets/Ragnar.jpg'
    }
]
export default Characters;
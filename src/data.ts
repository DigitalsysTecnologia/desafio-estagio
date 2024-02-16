import { AdventureType, CharacterType } from './types';
const Characters: CharacterType[] = [
    {
        id: 1,
        name: 'Thalgar',
        title: 'O Guardião das Sombras',
        class: 'Assassino',
        classDescription: 'Thalgar é um mestre na arte do sigilo e da furtividade. Como um Assassino das Sombras, ele emprega habilidades de combate corpo a corpo e técnicas de assassinato para eliminar seus alvos sem ser detectado.',
        history: 'Thalgar foi treinado desde jovem pelos misteriosos assassinos de uma guilda secreta. Ele se tornou uma lenda entre os que buscam justiça nas sombras, sempre à espreita para proteger os inocentes e eliminar os corruptos.',
        profilePicture: 'src/assets/Thalgar-profile.jpg',
        picture: 'src/assets/Thalgar.jpg'
    },
    {
        id: 2,
        name: 'Ariael',
        title: 'A Feiticeira Celestial',
        class: 'Feiticeira',
        classDescription: 'Ariael domina os elementos da natureza e os poderes celestiais. Como uma Feiticeira Elemental, ela é capaz de conjurar tempestades, controlar o fogo e curar feridas com a energia divina.',
        history: 'Ariael nasceu com uma conexão especial com os elementos e foi treinada pelos sábios das antigas ordens druídicas. Ela viaja pelo mundo em busca de equilíbrio e justiça, usando seus dons para proteger a natureza e combater as forças das trevas.',
        profilePicture: 'src/assets/Ariael-profile.jpg',
        picture: 'src/assets/Ariael.jpg'
    },
    {
        id: 3,
        name: 'Draven',
        title: 'O Cavaleiro da Ruína',
        class: 'Cavaleiro',
        classDescription: 'Draven é um guerreiro implacável que canaliza as energias sombrias para destruir seus inimigos. Como um Cavaleiro Sombrio, ele empunha uma lâmina amaldiçoada e invoca poderes das trevas para subjugar seus adversários.',
        history: 'Draven é um ex-cavaleiro nobre que foi traído por seus próprios irmãos de armas. Consumido pelo desejo de vingança, ele jurou lealdade aos senhores das sombras e agora cavalga pela terra espalhando ruína e desespero.',
        profilePicture: 'src/assets/Draven-profile.jpg',
        picture: 'src/assets/Draven.jpg'
    },
    {
        id: 4,
        name: 'Lyra',
        title: 'A Guardiã da Floresta',
        class: 'Arqueira',
        classDescription: 'Lyra é uma mestre arqueira que protege as vastas florestas com sua habilidade incomparável com o arco e flecha. Como uma Arqueira Silvestre, ela é rápida, ágil e mortalmente precisa.',
        history: 'Lyra foi criada pelas criaturas da floresta e treinada pelos elfos arqueiros das copas das árvores. Ela é uma guardiã dedicada da natureza, sempre pronta para defender seu lar contra invasores e predadores.',
        profilePicture: 'src/assets/Lyra-profile.jpg',
        picture: 'src/assets/Lyra.jpg'
    },
    {
        id: 5,
        name: 'Ragnar',
        title: 'O Bárbaro Indomável',
        class: 'Berserker',
        classDescription: 'Ragnar é um guerreiro selvagem que canaliza sua fúria interior para aniquilar seus inimigos. Como um Bárbaro Berserker, ele entra em um estado de frenesi durante o combate, aumentando sua força e resistência a níveis sobre-humanos.',
        history: 'Ragnar nasceu nas terras geladas do norte, onde as tribos bárbaras vivem em constante luta pela sobrevivência. Ele é um líder entre seu povo, temido pelos inimigos e reverenciado pelos aliados por sua coragem e determinação.',
        profilePicture: 'src/assets/Ragnar-profile.jpg',
        picture: 'src/assets/Ragnar.jpg'
    }
]
const Adventures: AdventureType[] = [
    {
        id: 1,
        title: "Sombras Inquietantes",
        local: "Cidade das Sombras",
        goals: [
            "Descobrir a origem de uma onda de desaparecimentos misteriosos na cidade",
            "Desvendar os segredos ocultos nas sombras",
            "Trazer luz à escuridão que assola a população"
        ],
        plot: "Os aventureiros são convocados para investigar a série de desaparecimentos que assola a cidade. Eles descobrem uma rede de conspirações e intrigas liderada por um culto sombrio que pretende mergulhar a cidade em trevas eternas. Com habilidade furtiva e astúcia, os heróis devem se infiltrar nas fileiras do culto e impedir seus planos malignos antes que seja tarde demais.",
        picture: "src/assets/Adventure1.jpg"
    },
    {
        id: 2,
        title: "O Segredo dos Céus",
        local: "Templo Celestial",
        goals: [
            "Recuperar um artefato sagrado roubado pelas forças das trevas",
            "Restaurar o equilíbrio entre os planos divinos e terrenos",
            "Proteger o templo da corrupção iminente"
        ],
        plot: "Os heróis são chamados para o Templo Celestial quando um artefato sagrado é roubado por seguidores das trevas. Eles se aventuram pelos reinos celestiais e terrenos, enfrentando desafios divinos e sombrios, em busca do artefato perdido. No templo, eles descobrem uma conspiração maligna que ameaça desencadear uma guerra entre os deuses. Os aventureiros devem reunir aliados e empregar toda sua magia celestial para restaurar o equilíbrio e proteger o templo da destruição.",
        picture: "src/assets/Adventure2.jpg"
    },
    {
        id: 3,
        title: "O Pacto das Trevas",
        local: "Fortaleza Sombria",
        goals: [
            "Resgatar os reféns mantidos cativos nas masmorras da fortaleza",
            "Derrotar o lorde das trevas que governa o domínio",
            "Libertar a região do jugo da escuridão"
        ],
        plot: "Os aventureiros são convocados para libertar a Fortaleza Sombria de seu domínio sinistro. Eles reúnem um grupo de heróis determinados e partem em uma jornada perigosa até o coração da fortaleza, enfrentando armadilhas mortais e criaturas das trevas pelo caminho. Dentro das masmorras, eles encontram reféns cativos e descobrem os planos nefastos do lorde das trevas para dominar a região. Os aventureiros lideram a batalha final contra o lorde das trevas, enfrentando-o em um duelo épico pela liberdade do reino.",
        picture: "src/assets/Adventure3.jpg"
    },
    {
        id: 4,
        title: "O Chamado da Natureza",
        local: "Coração da Floresta Ancestral",
        goals: [
            "Despertar o espírito antigo adormecido",
            "Proteger a floresta do avanço da corrupção",
            "Restaurar o equilíbrio entre as criaturas da natureza"
        ],
        plot: "Os aventureiros são chamados para o Coração da Floresta Ancestral quando o equilíbrio natural é ameaçado por forças sombrias. Eles lideram uma expedição através dos bosques densos e encontram-se com os espíritos da floresta, buscando orientação para despertar o guardião antigo adormecido. Os heróis enfrentam criaturas corrompidas e desafios espirituais enquanto lutam para proteger a floresta do avanço da escuridão. No clímax da aventura, eles despertam o guardião antigo, que emerge das profundezas da floresta para restaurar a ordem e defender seu lar dos invasores.",
        picture: "src/assets/Adventure4.jpg"
    }

]

const GetCharacters = (): Promise<CharacterType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Characters);
        }, 500);
    });
}
const GetCharacter = (id: number | string): Promise<CharacterType> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const character = Characters.find((character) => character.id == id);
            if (character) resolve(character);
            else reject('Character not found');
        }, 500);
    });
}
const GetAdventures = (): Promise<AdventureType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Adventures);
        }, 500);
    });
}
const GetAdventure = (id: number | string): Promise<AdventureType> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const adventure = Adventures.find((adventure) => adventure.id == id);
            if (adventure) resolve(adventure);
            else reject('Adventure not found');
        }, 500);
    });
}
export { GetCharacter, GetCharacters, GetAdventures, GetAdventure }
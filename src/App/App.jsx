import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import Header from '../Header/Header.jsx';
import Grupo from '../Grupo/Grupo.jsx';
import Introducao from '../Intro/Intro.jsx';
import MenuTitulo from '../MenuTitulo/MenuTitulo.jsx';
import Missoes from '../Missoes/Missoes.jsx'

import styles from './App.module.css';

function App() {

  return(
    <BrowserRouter>
      <Header/>
      <Introducao/>
      <MenuTitulo id="personagemAnc" titulo="PERSONAGEM"/>
      <main className={styles.mainGrupo}>
        <Grupo imgPer={1} nome="Uersco" raca="Humano" classe="Guerreiro" origem={2} nivel={4} vida={48} def={12} mana={16} historia="Nascido nas vastas planícies dos Reinos Distantes, este  guerreiro foi criado entre clãs nômades. Com habilidades ímpares na espada e coragem indomável, embarca em uma jornada épica por terras selvagens, enfrentando desafios lendários para se tornar uma lenda viva." c={8} f={6} a={2} s={2}/>
        <Grupo imgPer={2} nome="Giovanne" raca="Elfo" classe="Mago" origem={3} nivel={3} vida={23} def={5} mana={42} historia='Nascido em uma aldeia remota, este mago descobriu seu dom para a magia desde jovem. Após anos de estudo solitário, dominou os elementos e os mistérios arcanos. Agora, embarca em uma busca pelo conhecimento além dos limites do mundo conhecido, desvendando segredos ancestrais e desafiando os deuses.' c={5} f={2} a={3} s={9}/>
        <Grupo imgPer={3} nome="Jotah Beele" raca="Anão" classe="Paladino" origem={4} nivel={5} vida={55} def={15} mana={27} historia='Criado nas profundezas das montanhas, este paladino anão carrega o fogo da justiça em seu coração robusto. Com sua armadura reluzente e martelo poderoso, defende os valores de honra e lealdade. Sua jornada o leva através de terras hostis, onde enfrenta males antigos e protege os indefesos com fervor inabalável..' c={9} f={5} a={2} s={4} />        
        <Grupo imgPer={4} nome="Gabristou" raca="Elfo Noturno" classe="Arqueira" origem={1} nivel={4} vida={28} def={8} mana={26} historia='Nascida nas florestas densas, esta arqueira é uma filha da natureza. Com sua habilidade incomparável no arco, ela desliza pelas sombras das árvores, uma guardiã silenciosa. Sua jornada a leva por terras selvagens, onde enfrenta perigos e protege os fracos com precisão mortal e coração valente.' c={6} f={4} a={8} s={3} />
        <Grupo/>        
      <MenuTitulo id="missoesAnc" titulo="MISSÕES"/>
      <Missoes nivelMissao={3} tituloMissao='Derrotar o Troll' textoMissao='Em uma terra assolada pela escuridão, um troll antigo ameaça a segurança das aldeias próximas. Sua maldade é um flagelo para os viajantes e uma sombra sobre a paz da região. Uma missão é convocada: derrotar o monstro e restaurar a tranquilidade.' recompensaMissao={340}/>

      <Missoes nivelMissao={1} tituloMissao='Cortar Madeira' textoMissao='O fazendeiro local precisa de 50 madeiras para consertar seu celeiro.' recompensaMissao={50}/>

      <Missoes nivelMissao={4} tituloMissao='Derrotar o Gigante' textoMissao='Em um reino afligido pelo medo e desespero, o rei convoca corajosos aventureiros para uma missão de proporções épicas: eliminar o gigante que aterroriza as terras. A recompensa é grande, mas a tarefa é árdua. A jornada exigirá bravura, estratégia e determinação para triunfar sobre a ameaça imponente que assola o reino.' recompensaMissao={750}/>

      <Missoes nivelMissao={2} tituloMissao='Escolte o nobre local' textoMissao='Em um mundo de intriga e perigos, uma escolta é convocada para garantir a segurança de um nobre em uma jornada perigosa. A missão é clara: proteger o nobre de ameaças e garantir sua chegada segura ao destino. ' recompensaMissao={220}/>    

      <Missoes nivelMissao={4} tituloMissao='Derrote a Bruxa do Pântano' textoMissao='Convocação ecoa na aldeia: a bruxa do pantano ameaça nossos lares. Sob o véu da noite, o ancião convoca bravos corações para enfrentar o mal. Heróis se erguem, olhos firmes e armas em punho, prontos para desafiar o desconhecido. O destino do pântano está em suas mãos.' recompensaMissao={680}/>   

      <Missoes nivelMissao={1} tituloMissao='Minério de Ferro' textoMissao='Com a guerra se aproximando, o Rei ordenou a fabricação de diversas armaduras e espadas, então solicito a algum aventureiro 50 peças de minériod e ferro.' recompensaMissao={140}/>

      <Missoes/>

      </main>
    </BrowserRouter>
  );

}

export default App

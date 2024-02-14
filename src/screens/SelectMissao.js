import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import { ProgressBar} from 'react-native-paper';

const Missoes = [
  {
    id: 1,
    title: "Vovó precisa de ajuda!",
    description:
    "Você foi encarregado de encontrar os ingredientes para uma poção mágica que pode restaurar as memórias perdidas da vovó e irá enfrentar criaturas determinadas a impedir sua jornada em troca de uma torta de maçã.",
    difficulty: 0.2,
    img: require('../../assets/image/grandma.png'),
  },
  {
    id: 2,
    title: "O Desafio do Pescador",
    description:
    "Você é enviado a um lago misterioso para pescar um peixe lendário que pode conceder desejos. Enfrentando condições climáticas adversas e criaturas aquáticas hostis, você deve demonstrar habilidade e paciência para capturar o peixe e completar a missão.",
    difficulty: 0.4,
    img: require('../../assets/image/fish.png'),

    
  },
  {
    id: 3,
    title: "A Profundeza da Caverna",
    description:
    "Você é enviado para explorar uma caverna escura e perigosa em busca de um artefato lendário. Navegando por passagens estreitas e enfrentando criaturas subterrâneas hostis, você deve usar sua astúcia e habilidades para superar os desafios e alcançar o artefato antes que seja tarde demais.",
    difficulty: 0.6,
    img: require('../../assets/image/cave.png'),

  },
  {
    id: 4,
    title: "A Prova da Caverna",
    description:
      "Você é convocado para derrotar o temível chefão que reside nas profundezas de uma caverna sinistra. Enfrente seus lacaios e desafios mortais enquanto busca o confronto final. Com coragem e estratégia, você deve superar o chefão e garantir a segurança da região.",
      difficulty: 0.9,
      img: require('../../assets/image/boss.png'),

  },
];

const SelectMissao = ({navigation}) => {
    return(
      <View style={styles.View}>
        <Image style={styles.Background} source={require('../../assets/image/background.jpg')}/>
          <FlatList data={Missoes} showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item})=>{
          return( 
            <View style={styles.List}>
              <View>
                <Text style={styles.Titulo}>{item.title}</Text>
                <Image style={styles.Imagem} source={item.img}/>
                <Text style={styles.TituloDescricao}>Descrição</Text>
                <Text style={styles.Descricao}>{item.description}</Text>
           
                <View style={styles.Dificuldade}>
                        <Text style={styles.TituloDescricao}>DIFICULDADE</Text>   
                        <ProgressBar style={styles.Barra} progress={item.difficulty} theme={{ colors: { primary: 'red' } }}/>
                </View>

                <TouchableOpacity style={styles.Button} >
                  <Text style={styles.ButtonTxt} onPress={()=>navigation.navigate('SelectHeroi')}>Vamos Nessa!</Text>
                </TouchableOpacity>
              </View>

            </View>
          );}} horizontal />
    </View>
    );
}
const styles = StyleSheet.create({
  Background : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Dificuldade : {
    flexDirection: 'row',
  },
  TituloDescricao : {
    fontSize: 27,
    fontFamily: 'PixelifySans-Bold',
    color: '#4A0404'
  },
  Button : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Barra : {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    width: 150,
    height: 20,
  },
  Imagem : {
    flex: 1,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,

  },
    Titulo : {
      fontSize: 30,
      marginTop: 20,
      alignSelf: 'center',
      color: '#4A0404',
      fontFamily: 'ProtestRevolution-Regular'
    },
    Descricao : {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4A0404',
      width: 350,
      textAlign: 'left',
    },
    View : {
      justifyContent: 'center',
      alignItems: 'center',
    },
    List : { 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 30,
    },
    ButtonTxt: {
      fontSize: 35,
      marginTop: 10,
      color: '#4A0404',
      fontFamily: 'PixelifySans-Bold'
    }
  });
export default SelectMissao;
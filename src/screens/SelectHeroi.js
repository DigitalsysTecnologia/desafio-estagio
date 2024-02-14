import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import { ProgressBar} from 'react-native-paper';
import Video from 'react-native-video'; 


const Herois = [
  {
    id: 1,
    title: "Charlotte",
    description: "Charlotte, a heroína arqueira, é uma mestra na arte do arco e flecha, defendendo os inocentes com precisão mortal.\nCom sua destreza incomparável, ela mira no coração da injustiça, lutando incansavelmente pela justiça e pela liberdade.",
    power: 0.6,
    health: 0.5,
    stamina: 0.8,
    img: require('../../assets/image/charlotte1.png'),
  },
  {
    id: 2,
    title: "Wizard",
    description: "Wizard, o mago supremo, manipula os elementos com poder incomparável, tecendo magia para proteger os reinos da ameaça das trevas.\nCom seu cajado como foco, ele conjura feitiços ancestrais, iluminando o caminho da verdade e da sabedoria.",
    power: 0.5,
    health: 0.6,
    stamina: 0.4,
    img: require('../../assets/image/wizard.png'),
    
  },
  {
    id: 3,
    title: "Vaulks",
    description: "Vaulks, o valquírio destemido, cavalga pelos céus em busca de glória e honra, brandindo sua lança contra os inimigos dos deuses. \nCom sua armadura reluzente e asas poderosas, ele é a personificação da coragem e da justiça divina.",
    power: 0.6,
    health: 1,
    stamina: 0.3,
    img: require('../../assets/image/vaulks.png'),
  },
  {
    id: 4,
    title: "Lee",
    description: "Lee, o ladrão sorrateiro, desliza pelas sombras com destreza inigualável, saqueando os mais impenetráveis tesouros com habilidade e astúcia.\nCom sua agilidade e perspicácia, ele desafia as defesas mais robustas, acumulando riquezas e fama na clandestinidade.",
    power: 0.4,
    health: 0.5,
    stamina: 1,
    img: require('../../assets/image/lee.png'),
  },
];

const SelectHeroi = ({navigation}) => {

    return(
        <View style={styles.View}>
        <Video source={require('../../assets/image/herois.mp4')} rate={1.0} resizeMode={"cover"} repeat style={styles.video} />
            <FlatList data={Herois} showsHorizontalScrollIndicator={false} pagingEnabled renderItem={({item})=>{     
              return(
                <View style={styles.List}>
                  <View>
                    <Text style={styles.Titulo}>{item.title}</Text>
                    <Image style={styles.Imagem} source={item.img}/>
                    <Text style={styles.TituloDescricao}>Descrição</Text>

                    <ScrollView style={styles.ScrollView}>
                    <View>
                    <Text style={styles.Descricao}>{item.description}</Text>
                    </View>
                    </ScrollView>

                    <View style={styles.Dificuldade}>
                      <View>
                        <Text style={styles.TituloDescricao}>PODER</Text>   
                        <Text style={styles.TituloDescricao}>SAÚDE</Text>       
                        <Text style={styles.TituloDescricao}>STAMINA</Text> 
                      </View>
                      <View>
                        <ProgressBar style={styles.Barra} progress={item.power} theme={{ colors: { primary: 'green' } }}/>
                        <ProgressBar style={styles.Barra} progress={item.health} theme={{ colors: { primary: 'red' } }}/>
                        <ProgressBar style={styles.Barra} progress={item.stamina}/>
                      </View>
                    </View>

                    <View style={styles.Button}>
                      <TouchableOpacity style={styles.List} onPress={()=>navigation.navigate('SelectMissao')}>
                      <Text style={styles.ButtonTxt}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.List}>
                      <Text style={styles.ButtonTxt}>Selecionar</Text>
                    </TouchableOpacity>
                      </View>

                  </View>
    
                </View> );}} horizontal />
        </View>
    );
}

const styles = StyleSheet.create({
  Loading : {
    flex: 1,
  },
  video : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Barra : {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    width: 200,
    height: 20,
  },
  Dificuldade : {
    marginTop:10,
    flexDirection: 'row',
  },
  ScrollView : {
    flex: 1,
    height: 50,
  },
  Button : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Imagem : {
    flex: 3,
    width: 200,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
    Titulo : {
      fontSize: 45,
      textAlign: 'center',
      fontFamily: 'ProtestRevolution-Regular',
      color: 'white'
    },
    Descricao : {
      fontSize: 20,
      width: 360,
      textAlign: 'left',
      alignSelf: 'center',
      fontWeight: 'bold',
      color: '#1b2b0d'
    },
    TituloDescricao : {
      fontSize: 27,
      fontFamily: 'PixelifySans-Bold',
      color: '#1b2b0d'
    },
    View : {
      paddingTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    List : { 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 25,
      marginTop: 0,
      marginBottom: 10,
    },
    ButtonTxt: {
      flex: 1,
      fontSize: 30,
      marginBottom: 5,
      marginTop: 20,
      fontFamily: 'PixelifySans-Medium',
      color: 'white'
    }
  });
export default SelectHeroi;
# Desafio Técnico - Temática RPG

Este é meu programa feito, para o desafio de estagio para a Digitalsys Tecnologia, no caso segui o desafio de DEV frontend, desenvolvendo por meio do react-native, para exibir players e missões e seus detalhes.

## NECESSARIO PARA EXECUTAR:
 - JAVA JDK (No caso o compactado, como neste link: https://download.oracle.com/java/18/archive/jdk-18.0.2.1_windows-x64_bin.zip);
    ### INSTALAR O JAVA JDK
      - Ao baixar este arquivo e abrir o mesmo terá:
      ![Java JDK compactado](https://i.imgur.com/LWHeFlV.png)
      - No caminho: C:\Program Files\ deve criar uma pasta com nome Java;
      - Dentro da pasta java deve ser colocado o arquivo que terá dentro do arquivo compactado java JDK ficando assim a pasta:
      ![Pasta Java](https://i.imgur.com/YQKu9Um.png)
 - Android Studio;
 - NodeJS.

## CONFIGURANDO JAVA JDK:
 Com o Java SDK instalado basta seguir os seguintes procedimentos:
 - Primeiramente é necessario acessar a tela de variaveis do ambiente, para isto basta seguir os passos a seguir:
   - Abrir uma pasta do computador, e nela clicar com botão direito no "Este Computador" e clicar em propriedades, como demonstrado na imagem a seguir:
   ![Caminho para configurações](https://i.imgur.com/3ldCCDb.png)
   - Com acesso a tela de configurações, no menu superior direito clique em "Configurações avançadas do sistema";
   ![Botão de configurações avançadas do sistema](https://i.imgur.com/P494yPd.png)
   - Clique no botão "Váriaveis de Ambiente...";
   - Na tela Váriaveis de ambiente, clique no botão "Novo...";
   - Preencha o campo Nome da variavel com: JAVA_HOME e Valor da variavel com o caminho do java jdk como demonstrado na imagem a seguir:
   ![Nova variavel de sistema](https://i.imgur.com/z5Pn7C7.png)
   - Após salvar a nova variavel, deve acessar o Path das variaveis do sistema com dois cliques:
   ![Caminho para paths](https://i.imgur.com/94GlyLT.png)
   - Na tela de editar variaveis de ambiente do path, se deve clicar em "Novo", e deve ser colocado o caminho novamente para o jdk, porém com um \bin adcionado ao fim como demonstrado na imagem a seguir:
   ![Definir o paths](https://i.imgur.com/T1nzcTH.png)
   - E após isto selecione o que foi adcionado uma vez, e em "Mover para cima" até ficar no topo da lista.
  
## CONFIGURAR ANDROID STUDIO;
 Durante a instalação não há nada demais a se fazer somente seguir passo a passo, porém é necessario configurar algumas coisas após isto que serão demonstradas a seguir:
 - Primeiramente abra o android studio;
 - Clique em "More actions" e em "SDK manager";
 ![Caminho para SDK manager](https://i.imgur.com/68LOXIy.png)
 - Na tela de configurações, clique na caixa para selecionar o SDK "Android 13.0 (Tiramisu)" e de Apply;
 ![Definir SDK](https://i.imgur.com/k9nt9x6.png)
 - Acesse a tela de variaveis de ambiente da mesma forma que foi orientado anteriormente;
 - Clique no botão "Novo...";
 - Defina a nova variavel com o nome: "ANDROID_HOME" e valor: o caminho que está no topo da tela de configurações do android studio (Onde está pode ser visto na imagem anterior), este caminho seria onde está o SDK;
 ![Definir váriavel de ambiente](https://i.imgur.com/GbpbODJ.png)
 - Novamente acesse o paths, como foi demonstrado em configurando o java JDK;
 - Clique em "Novo";
 - Coloque o caminho das pastas que acabou de ser utilizado como valor, porém no final do caminho coloque "\Sdk\emulator";
 - Clique em "Novo" novamente, e adcione o caminho de pastas para SDK que havia sido usado porém no final adcione desta vez: "\Sdk\platform-tools";
 ![Definir mais váriavel path](https://i.imgur.com/EsqVfYs.png)
 - Agora deve ser configurado o emulador do android, para isto novamente na tela inicial do Android Studio, acesse pelo "More actions" e em "Virtual Device Manager"
 ![Caminho Virtual Device Manager](https://i.imgur.com/DffyFMw.png)
 - Na tela Device Manager, no canto superior esquerdo acesse "Create Device"
 ![Create device](https://i.imgur.com/lGO4LIy.png)
 - Selecione um dispositivo qual será emulado;
 ![Selecione o hardware que estará emulando](https://i.imgur.com/d4hn6Jd.png)
 - Clique na setinha ao lado de Tiramisu para baixa-lo:
 ![Selecionar sistema tiramisu](https://i.imgur.com/WxBUJei.png)
 - Ao terminar de baixar selecione o tiramisu e de next;
 - De um nome ao dispositivo que está sendo criado no emulador e de finish;
 - Após isto para conferir, teste o emulador clicando em play e siga as configurações como achar melhor para o emulador.

## Inicializando o projeto
Com tudo baixado, instalado e configurado é hora de inicializar o projeto.

- Faça um clone deste projeto;
- Abra dois CMDs na pasta deste projeto;
- Rode o comando: npm i;
- Rode o comando: emulator -avd {Nome do emulador de dispositivo}, no caso seria o que vocÊ colocou nesta parte para ![Exemplo AVD nome](https://i.imgur.com/f7jXEv9.png)
- Rode o comando: npx react-native run-android
E pronto o programa irá carregar no emulador.

# SOBRE O PROGRAMA
O mesmo foi feito utilizando react-native, e através do mesmo fiz o que foi pedido, através dele se pode navegar entre duas paginas principais pelo menu inferior, e em cada uma delas pode se tocar em um jogador ou missão para aparecer uma tela onde mostra mais detalhes das missões ou jogadores, no caso não foi aplicado nada de backend ou adcionar novos jogadores, é somente possivel vizualizar as informações.
###Imagens do frontend:

![Tela main de jogadores](https://i.imgur.com/SDalZAS.png)

![Tela main de jogadores deitada](https://i.imgur.com/kmcne3V.png)

![Tela de jogador deitada](https://i.imgur.com/dh3YM0b.png)

![Tela das missões](https://i.imgur.com/loxsnSQ.png)

![Tela de uma missão](https://i.imgur.com/lANjJFy.png)

![Demonstração em gif](https://i.imgur.com/f6HUwQ0.gif)

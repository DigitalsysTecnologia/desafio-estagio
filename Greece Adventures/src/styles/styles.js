import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 50,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  viewContainer: {
    flex: 1,
    paddingBottom: 150,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  characterContainer: {
    width: 450,
    height: 750,
    marginBottom: 200,
    marginTop: -28,
    alignItems: "strech",
    resizeMode: "contain",
    justifyContent: "center",
  },
  buttonMenu: {
    width: 280,
    height: 90,
    marginBottom: 30,
  },
  characters: {
    width: 310,
    height: 200,
    resizeMode: "cover",
    flex: 1,
    alignSelf: "center",
    overflow: "visible",
    marginBottom: 40,
  },
  designList: {
    height: 650,
    width: "100%",
    marginTop: 114,
    marginBottom: 37,
    alignSelf: "center",
  },
  missions: {
    width: 120,
    height: 110,
    flex: 1,
    alignSelf: "center",
    overflow: "visible",
    resizeMode: "cover",
    marginBottom: 50,
    marginRight: 230,
  },
  buttonGoback: {
    marginLeft: 5,
    width: 65,
    height: 65,
  },
  title: {
    position: "absolute",
    alignItems: "flex-start",
    fontFamily: "dominica",
    color: "#431400",
    fontSize: 30,
    marginBottom: 50,
    marginTop: 80,
  },
  text: {
    fontFamily: "dominica",
    fontSize: 24,
    textAlign: "justify",
    marginRight: 50,
    marginLeft: 50,
    color: "#2f231e",
  },
  scrollview: {
    marginTop: 50,
    marginBottom: 20,
  },
  containerUniverse: {
    width: 450,
    marginBottom: 20,
    marginTop: 30,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
    marginRight: 300,
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: "15%",
    alignSelf: "center",
  },
});

export default Styles;

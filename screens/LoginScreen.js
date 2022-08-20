import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      {/* <Text>LoginScreen</Text> */}
      <View style={styles.top}>
        <Image source={require('../assets/small.png')} style={styles.logo} />

        <Image source={require("../assets/image1.png")} style={styles.image} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.loginA}>Log in</Text>

        <View style={styles.email}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
        placeholderTextColor="#949994"
        fontSize={20}
      />
        </View>

        <View style={styles.pass}>

        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        placeholderTextColor="#949994"
        fontSize={20}
      />
        </View>

        <TouchableOpacity title="Login" style={styles.login}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <TouchableOpacity>
          <Image
            source={require("../assets/goog.png")}
            style={styles.imageSmall}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require("../assets/fb.png")}
            style={styles.imageSmallA}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require("../assets/apple.png")}
            style={styles.imageSmallB}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require("../assets/twitter.png")}
            style={styles.imageSmallC}
          />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.account}
        >
          <Text style={styles.accountTxt}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    </View></View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green"
  },

  box:{
    // flex:1,
    height: "98%",
    width: "100%",
    // borderBottomLeftRadius: 60,
    // borderBottomRightRadius: 80,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    // backgroundColor: "red"
  },

  top: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    justifyContent: "center",
  },

  bottom: {
    flex: 1.1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  loginA: {
    // color: 'black'
    fontSize: 33,
    fontWeight: "800",
    paddingVertical: 15,
  },

  image: {
    height: 290,
    width: 290,
    alignSelf: "center",
  },

  imageSmall: {
    height: 30,
    width: 30,
  },

  imageSmallA: {
    height: 34,
    width: 34,
  },

  imageSmallB: {
    height: 40,
    width: 40,
  },

  imageSmallC: {
    height: 30,
    width: 30,
  },

  icons: {
    height: 50,
    width: 210,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5
  },

  logo: {
    height: 22,
    width: 150,
    marginHorizontal: 10,
  },

  email: {
    height: 60,
    width: 350,
    backgroundColor: "#caf8cf",
    borderRadius: 15,
    marginVertical: 26,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    // alignItems: "center",
  },

  pass: {
    height: 60,
    width: 350,
    backgroundColor: "#caf8cf",
    borderRadius: 15,
    marginVertical: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    // alignItems: "center",
  },

  login: {
    height: 60,
    width: 230,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1ef42c",
    borderRadius: 30,
    marginVertical: 25,
  },

  loginTxt: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  account: {
    color: "#fff",
    fontSize: 19,
  },

  accountTxt: {
    // color: "#fff",
    fontSize: 17,
    fontWeight: "500",
  },
});

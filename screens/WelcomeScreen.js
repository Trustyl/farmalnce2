import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.head}>Farm with the world</Text>
        <Text style={styles.sub}>Bring solutions and make sales</Text>
      </View>

      <View style={styles.second}>
        <Image source={require("../assets/image2.png")} style={styles.image} />
      </View>

      <View style={styles.third}>
        <TouchableOpacity
          title="Login"
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.account}
        >
          <Text style={styles.accountTxt}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  first: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  second: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  third: {
    flex: 2,
    alignItems: "center",
  },

  image: {
    height: 300,
    width: 300,
  },

  head: {
    fontSize: 25,
    fontWeight: "600",
    color: "#1ef42c",
  },

  sub: {
    fontSize: 15,
    // fontWeight: '500'
    color: "#fff",
  },

  login: {
    height: 40,
    width: 170,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1ef42c",
    borderRadius: 20,
    marginVertical: 10,
  },

  loginTxt: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },

  account: {
    color: "#fff",
  },

  accountTxt: {
    color: "#fff",
    fontSize: 12,
  },
});

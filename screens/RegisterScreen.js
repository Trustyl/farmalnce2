import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const RegisterScreen = () => {

  const [userName, onChangeUName] = React.useState(null);
  const [fullName, onChangeFName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [newPass, onChangeNewPass] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.signupA}>Sign Up</Text>

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
      </View>

      <View style={styles.second}>
      <View style={styles.input}>
        <TextInput
        style={styles.inputTxt}
        onChangeText={onChangeUName}
        value={userName}
        placeholder="Username"
        placeholderTextColor="#949994"
        fontSize={18}
      />
        </View>

        <View style={styles.input}>
        <TextInput
        style={styles.inputTxt}
        onChangeText={onChangeFName}
        value={fullName}
        placeholder="Full Name"
        placeholderTextColor="#949994"
        fontSize={18}
      />
        </View>

        <View style={styles.input}>
        <TextInput
        style={styles.inputTxt}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="#949994"
        fontSize={18}
      />
        </View>

        <View style={styles.input}>
        <TextInput
        style={styles.inputTxt}
        onChangeText={onChangeNewPass}
        value={newPass}
        placeholder="Re-enter Password"
        placeholderTextColor="#949994"
        fontSize={18}
      />
        </View>

        <View style={styles.input}>
        <TextInput
        style={styles.inputTxt}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="#949994"
        fontSize={18}
      />
        </View>


      </View>
      <View style={styles.third}>

      <TouchableOpacity title="Login" style={styles.signup}>
          <Text style={styles.signupTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  first: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  second: {
    flex: 2,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  third: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  signupA: {
    // color: 'black'
    fontSize: 25,
    fontWeight: "700",
    paddingVertical: 15,
  },

  imageSmall: {
    height: 25,
    width: 25,
  },

  imageSmallA: {
    height: 28,
    width: 28,
  },

  imageSmallB: {
    height: 32,
    width: 32,
  },

  imageSmallC: {
    height: 25,
    width: 25,
  },

  icons: {
    height: 40,
    width: 200,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
    marginVertical: 10
  },

  input: {
    height: 50,
    width: 310,
    backgroundColor: "#e3e3e3",
    borderRadius: 25,
    // marginVertical: 26,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  inputTxt: {
    fontSize: 18
  },

  signup: {
    height: 55,
    width: 250,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1ef42c",
    borderRadius: 30,
    marginVertical: 25,
  },

  signupTxt: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});

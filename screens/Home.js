import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.first}></View>

      <View style={styles.second}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
        />
        <ScrollView style={styles.scroll} horizontal={true}>
            {/* <View style={styles.scrollView}> */}
          <Text style={styles.scrollTxt}>Recommended</Text>
          <Text style={styles.scrollTxt}>Green House Plants</Text>
          <Text style={styles.scrollTxt}>Vegetables</Text>
          <Text style={styles.scrollTxt}>Crops</Text>
          {/* </View> */}
        </ScrollView>
      </View>
      <View style={styles.third}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  first: {
    flex: 0.7,
    backgroundColor: "red",
  },

  second: {
    flex: 3.5,
    backgroundColor: "blue",
  },

  third: {
    flex: 1.5,
    // backgroundColor: 'grey',
  },

  search: {
    width: 300,
    height: 40,
    marginVertical: 20,
    alignSelf: "center",
    borderRadius: 10,
  },

  scroll: {
    flexDirection: "row",
    flex: 1,
  },

//   scrollView: {
//     flexDirection: "row",
//     flex: 1,
//   },

  scrollTxt: {
    fontSize: 20,
    paddingHorizontal: 10
  },
});

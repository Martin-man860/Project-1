import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Verify = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 4,backgroundColor:"yellow", alignContent: "center" }}>
        
        <Text style={styles.text}>FAUZIYYA RESTAURANTS</Text>
      </View>

      {/* white space */}
      <View style={{ flex: 6, paddingTop: 30, paddingHorizontal: 20 }}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Telephone" />
        <TextInput style={styles.input} placeholder="Location" />
        <TextInput style={styles.input} placeholder="Credit Card no" />
      </View>

       <TouchableOpacity>
           <Text style={styles.button}>Verify</Text>
       </TouchableOpacity>
     
    </View>
  );
};
export default Verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 45,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 120,
    fontStyle:"italic",
    fontWeight:"bold"
  },
  input: {
    fontSize: 15,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 1,
    paddingTop: 25,
    alignContent: "center",
    borderColor:"black",
    borderRadius:10,
  },
button:{
    fontSize:30,
    alignSelf:"center",
    marginBottom:50,
    backgroundColor:"lightblue",
    borderRadius:50,
    borderWidth:1,
    fontStyle:"italic",
    height:40,
    width:200,
    textAlign:"center"
}
});
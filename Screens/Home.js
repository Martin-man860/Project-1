import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

const ListOfFood = () =>{
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize: 30,paddingTop:60,flex:1,fontWeight:"bold",borderBottomWidth:2,borderBottomColor:"yellow",color:"yellow"}}>LIST OF FOOD </Text>
        </ScrollView>
        <View style={styles.logo}>
        <TouchableOpacity>
        <Image style={{width:350,height:150,marginBottom:30,borderRadius:20,paddingHorizontal:20}} source={require("./assets/logo.jpeg")}/>
        </TouchableOpacity>
        </View>
        <View style={styles.logo}>
        <TouchableOpacity>
        <Image style={{width:350,height:150,marginBottom:30,borderRadius:20,paddingHorizontal:20}} source={require("./assets/logo2.jpeg")}/>
        </TouchableOpacity>
        </View>
        <View style={styles.logo}>
        <TouchableOpacity>
        <Image style={{width:350,height:150,marginBottom:30,borderRadius:20,paddingHorizontal:20}} source={require("./assets/logo5.jpeg")}/>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
        
      </View>
    )
}

export default ListOfFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom:20,
    paddingHorizontal:20
  },
  logo:{
    alignItems:"center",
    flexDirection:"row",
    flex:6
  },
  btn:{
    fontSize:45,
    borderBottomColor:"yellow",
    borderBottomWidth:2,
    height:1,
    borderRadius:10,
    width:100,
    height:50,
    textAlign:"center",
    color:"yellow"
  }
});

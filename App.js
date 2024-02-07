import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [entredGoalText, setEnterdGoalText] = useState('');

 const addTextHandler = (txt) => {
    setEnterdGoalText(txt);
 }

  const addGoalHandler = () => {
      setCourseGoals([...courseGoals, entredGoalText]);
      
  }
  console.log(courseGoals);
  return (
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1601191362988-ac6ebec629c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={{width: '100%', height: '100%'}}>
    <View style={styles.appContainer}>
      
        <View>
          <TextInput onChangeText={addTextHandler} style={styles.inputContainer} placeholder='Your Course Goal!' />
          
          <TouchableOpacity onPress={addGoalHandler}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Add Goalss</Text>
            </View>
          </TouchableOpacity>      
        </View>
        <View>
          < FlatList
            data={courseGoals} 
            renderItem={itemData =>  {
              <View>
                <Text style={styles.goalItem}>{itemData.item}</Text>
              </View>
            }} 
            alwaysBounceVertical={false}     
          />
        </View>
        
        <StatusBar style="auto" />
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  appContainer: {
    paddingTop: 50,
    paddingHorizontal:40, 
   

  },

  inputContainer :{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 2,
    margin: 4,
    width: 280,
  },

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'darkgreen',
    borderRadius: 8,
  



  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },

  goalItem:{
    padding: 8,
    margin: 8,
    borderRadius: 6,
    color: 'black',
    backgroundColor: 'goldenrod',
    borderWidth: 2,
    borderColor: 'darkgoldenrod',
  }
});

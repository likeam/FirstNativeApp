import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
    <View style={styles.appContainer}>
      <View>
        <TextInput onChangeText={addTextHandler} style={styles.inputContainer} placeholder='Your Course Goal!' />
        <View style={styles.buttonContainer}>
        <Button onPress={addGoalHandler} title='Add Goal'/>
        </View>
      </View>
      <View>
        {courseGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
     },
     inputContainer :{
      borderWidth: 1,
      borderColor: 'grey',
      padding: 2,
      margin: 4,
      width: 280,
     },
      buttonContainer:{
      paddingHorizontal: 40,
     },
     goalItem:{
      padding: 8,
      margin: 8,
      borderRadius: 6,
      color: 'white',
      backgroundColor: 'green',
     }
    });

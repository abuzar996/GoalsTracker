import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, TextInput,Text,View,Pressable,Button} from 'react-native';
import AddGoal from './Modals/AddGoal';
import List from './Components/List';
export default function App() {
  const [isVisible,setIsVisible] =useState(false);
  const [goalList,setGoalList]=useState([]);
  const [count,setCount]=useState(0);
  const [newGoal,setNewGoal] = useState('');
  function onButtonPressed(){
    if(newGoal!==''){
      setGoalList((goals)=>[...goals,{text:newGoal,key:count}]);
      setCount(count+1);
      setIsVisible(false);
      setNewGoal('')
    }
    
  }
  function onTextChanged(changedText){
    setNewGoal(changedText);
  }
  function onCancelPressed(){
    setIsVisible(false);
  }
  function deleteGoal(id){
    setGoalList(goalList.filter((goal)=>goal.key !== id))
  }
  function openModal(){
    setIsVisible(true)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Pressable style={styles.Addbutton} onPress={openModal}>
          <Text style={styles.text}> Add New Goal</Text>
        </Pressable>
        <AddGoal onTextChanged={onTextChanged}
                onButtonPressed={onButtonPressed}
                onCancelPressed={onCancelPressed}
                isVisible={isVisible}/>
      </View>
      <List
        deleteGoal={deleteGoal} 
        goalList={goalList}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
   
  },
  header:{
    padding:50,
    paddingTop:80,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
  input:{
      width:'80%',
      padding:10,
      color:'grey',
      borderWidth:1,
      borderColor:'grey'
  },
  Addbutton: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'90%',
    backgroundColor:'#e0194b',
    borderRadius:10,
   
  },
  text:{
    paddingTop:20,
    paddingBottom:20,
    fontFamily:'Helvetica',
    fontSize:20
  }
});

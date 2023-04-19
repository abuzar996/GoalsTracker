import React from 'react'
import { Modal,View,TextInput,Button ,StyleSheet} from 'react-native'
const AddGoal = ({onTextChanged,onButtonPressed,onCancelPressed,isVisible}) => {
  return (
    <Modal visible={isVisible}>
        <View style={styles.header}>
            <TextInput 
            style={styles.input} 
            placeholder='Add Goals Here...'
            onChangeText={onTextChanged}  
            />
            <View style={styles.button}>
                <View>
                    <Button title='Cancel' color="#e0194b"onPress={onCancelPressed}/>
                </View>
                <View>
                    <Button title='Add' onPress={onButtonPressed}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default AddGoal
const styles = StyleSheet.create({
    header:{
        padding:50,
        paddingTop:80,
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
       
      },
      button:{
        
        padding:50,
        flexDirection:'row',
        
      },
    input:{
        width:'80%',
        padding:10,
        color:'grey',
        borderWidth:1,
        borderColor:'grey'
    },
  });
  
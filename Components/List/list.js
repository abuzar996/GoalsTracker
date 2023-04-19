import React from 'react'
import { Pressable,StyleSheet,View,FlatList} from 'react-native';
import ListItem from '../ListItem';
const List = ({goalList,deleteGoal}) => {
  return (
    <View style={styles.list}>
        <FlatList
            data={goalList}
            renderItem={(itemData)=>
                <Pressable 
                    onPress={deleteGoal.bind(this, itemData.item.key)}
                    android_ripple={styles.rippleEffect}
                    style={({pressed})=>pressed && styles.rippleEffect}
                >
                    <ListItem item={itemData.item.text}/>
                </Pressable>}
                alwaysBounceVertical={false}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
      flex:10,
      backgroundColor:'#f5f5f5'
    },
   
    rippleEffect:{
      opacity:0.5
    }
  });
  
export default List
import React from 'react'
import {StyleSheet, View,Text } from 'react-native'
const ListItem = ({item}) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.listText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:'#e0194b',
        padding:20,
        margin:10,
        borderRadius:10
      },
      listText:{
        color:'black',
        fontWeight:'bold',
      },
});

export default ListItem
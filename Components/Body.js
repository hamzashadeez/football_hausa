import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView  } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Post from './Post';
import {data} from "../data"

const Body = () => {
    const [loading, setLoading] = useState(true);
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const postsData = [];
        const subscriber = firestore()
          .collection('posts')
          .onSnapshot(querySnapshot => {
      
            querySnapshot.forEach(documentSnapshot => {
              postsData.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
              console.log("data: ",documentSnapshot.data())
            });
      
            setPosts(postsData);
            console.log("postsData ",postsData)
            setLoading(false);
          });
      
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);
      if (loading) {
          return <ActivityIndicator style={{color: 'red', zIndex: 1000}} />;
        }
    return (
        <ScrollView style={styles.body}>
            {data.map(d=> <Post key={d.key} data={d} />)}
            
            
        </ScrollView>
    )
}

export default Body

const styles = StyleSheet.create({
    body:{
        backgroundColor: 'white',
        width: '100%',
        height: "93%",
        position: 'absolute',
        left: 0,
        top: 49,
        paddingBottom: 18
    }
})

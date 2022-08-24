import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from 'axios'
import { useState, useEffect } from "react";

const PostDetail = ({route}) => {
  //init Props
  console.log(route);

  const {id, title, body} = route.params

  //Init State
  const [comment, setComment] = useState([])
  const [isLoading, setIsLoding] = useState(false)


  const getComment = async() => {
    
    try {
      setIsLoding(true)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      console.log(response);
      setComment(response.data)
      setIsLoding(false)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getComment()
  },[])

  //   Create Component List

  const renderItem = ({item})=> {
    return(
      <ListItem>
        <ListItem.Title>
          {item.email}
        </ListItem.Title>

        <ListItem.Subtitle>
          {`${item.name} - ${item.body}`}
        </ListItem.Subtitle>

      </ListItem>
    )
  }

  return (
    <View style={style.container}>
      
    <Text>
      {title}
    </Text>
    <Text>{body}</Text>
    <Text>Comment</Text>

    <FlatList 
      data={comment}
      renderItem={renderItem}
      key={(item)=> item.id}
      refreshing={isLoading}
      onRefresh={getComment}
    
    />

    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});

import React, {useContext, useState} from 'react'
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import {Context} from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
    const [title, steTitle] = useState('')
    const [content, setContent] = useState('')
    const {addBlogPost} = useContext(Context)
    return(
        <View>
            <Text style={styles.label}>Your title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=> steTitle(text)}/>
            <Text style={styles.label}>Your content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>
            <Button 
                title='addpost'
                onPress= {()=> {addBlogPost(title, content, ()=>{
                    navigation.navigate('Index')
                }); 
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: 'gray',
        fontSize: 18,
        padding: 5,
        margin: 5,
        marginBottom: 15,
    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginLeft: 5,
    }
})

export default CreateScreen
import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const BlogPostForm = ({onSubmit, initialValues})=> {
    const [title, steTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return(
        <View>
            <Text style={styles.label}>Your title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=> steTitle(text)}/>
            <Text style={styles.label}>Your content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>
            <Button 
                title='Save blog post'
                onPress = {()=> onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps= {
    initialValues: {
        title: '',
        content: '',
        
    }
}

const styles = StyleSheet.create ({
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

export default BlogPostForm
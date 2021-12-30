import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
// import ChatBox from '../ChatBox/ChatBox'

const ChatShow = () => {

    const [chatList, setChatList] = useState([])

    useEffect(() => {
        fetch('https://agile-beyond-19792.herokuapp.com/message')
            .then(res => res.json())
            .then(data => setChatList(data.data))
    }, [chatList])

    return (
        <View style={styles.chatList}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={chatList}
                renderItem={({ item }) => (
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.text}>{item.message}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#0084FF',
        color: 'white',
        textAlign: 'right',
        // display: 'inline'
    },
    chatList: {
        marginTop: 220,
        bottom: 220,
        // backgroundColor: '#242526'
    }
})

export default ChatShow;

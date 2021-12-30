import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, TextInputField } from 'react-native';
import { useForm, Controller } from 'react-hook-form';


export default function ChatBox() {
    const { control, handleSubmit,reset, errors } = useForm();
    const onSubmit = (data, e) => {
        const sentMessage = {
            message: data.message,
        };
        // console.log(sentMessage);
        const url = `https://agile-beyond-19792.herokuapp.com/message`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sentMessage)
        })
            // .then(res => {
            //     console.log('server side response', res)
            // })
            reset({ message: '' })
        // e.target.reset()
    };
    return (
        <View style={styles.ChatBox}>
           
            <View>
                <View>
                    <Controller
                        control={control}
                        name="message"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <TextInput
                                style={styles.input}
                                iconName="person"
                                iconType="MaterialIcons"
                                placeholder="Enter your name here"
                                value={value}
                                onBlur={onBlur}
                                // required="true"
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                </View>
                <View>
                    <Button
                        color="#0084FF"
                        title="Send Message"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>

        </View >
    )
}
// }

const styles = StyleSheet.create({
    ChatBox: {
        bottom: 0 ,
        // backgroundColor: '#18191A',
        width: '100%',
        borderRadius: 5,
        padding: 20,
        alignItems: 'center',
        position: "absolute",
    },
    input: {
        width: 350,
        height: 50,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
    },
})

// export default ChatBox;
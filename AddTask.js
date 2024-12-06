import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { tasks } from './Data';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    inputContainer: {
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
});

const AddTask = ({ navigation }) => {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Not Complete');

    const handleAddTask = () => {
        const newTask = {
            key: (tasks.length + 1).toString(),
            description,
            status,
        };
        tasks.push(newTask);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Task Description:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Status:</Text>
                <RNPickerSelect
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                    items={[
                        { label: 'Completed', value: 'Completed' },
                        { label: 'Not Complete', value: 'Not Complete' },
                    ]}
                />
            </View>
            <Button title="SUBMIT" onPress={handleAddTask} />
        </View>
    );
};

export default AddTask;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
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
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    button: {
        marginTop: 20,
    },
});

const EditTask = ({ navigation, route }) => {
    const { id } = route.params; // Get the task's id from the navigation route
    const task = tasks.find((t) => t.id === id); // Locate the task by its id

    // State variables for task details
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    // Save changes to the task
    const handleSave = () => {
        task.description = description; // Update task description
        task.status = status; // Update task status
        navigation.navigate('Home'); // Return to the home screen
    };

    // Delete the task
    const handleDelete = () => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this task?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        const taskIndex = tasks.findIndex((t) => t.id === id);
                        tasks.splice(taskIndex, 1); // Remove the task from the array
                        navigation.navigate('Home'); // Return to the home screen
                    },
                },
                { text: 'No' },
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Task Description */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Task Name:</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                />
            </View>

            {/* Task Status Dropdown */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Task Status:</Text>
                <RNPickerSelect
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                    items={[
                        { label: 'Completed', value: 'Completed' },
                        { label: 'Not Complete', value: 'Not Complete' },
                    ]}
                />
            </View>

            {/* Save Button */}
            <View style={styles.button}>
                <Button title="SAVE" onPress={handleSave} />
            </View>

            {/* Delete Button */}
            <View style={styles.button}>
                <Button title="DELETE" color="red" onPress={handleDelete} />
            </View>
        </View>
    );
};

export default EditTask;

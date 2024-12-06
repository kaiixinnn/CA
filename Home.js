import React from 'react';
import { FlatList, Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { tasks } from './Data';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    taskContainer: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        marginVertical: 10,
    },
});

const Home = ({ navigation }) => {
    const calculateStatus = () => {
        const completedTasks = tasks.filter(task => task.status === 'Completed').length;
        const totalTasks = tasks.length;
        const incompleteTasks = totalTasks - completedTasks;
        const completionPercentage = ((completedTasks / totalTasks) * 100).toFixed(1);

        Alert.alert(
            'Overall Status',
            `Completed Tasks: ${completedTasks}\nIncomplete Tasks: ${incompleteTasks}\n${completionPercentage}% of tasks complete`
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id} // Use item.id
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.taskContainer}
                        onPress={() => navigation.navigate('EditTask', { id: item.id })} // Pass task id to EditTask
                    >
                        <Text style={styles.taskText}>{item.description} - {item.status}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="ADD TASK"
                    onPress={() => navigation.navigate('AddTask')}
                />
                <Button
                    title="OVERALL STATUS"
                    onPress={calculateStatus}
                />
            </View>
        </View>
    );
};

export default Home;

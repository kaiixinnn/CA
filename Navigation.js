import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import AddTask from './AddTask.js';
import EditTask from './EditTask.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddTask" component={AddTask} />
                <Stack.Screen name="EditTask" component={EditTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

import React from "react";
import HomeScreen from "./Screen/DetaileScreen";
import DetailsScreen from "./Screen/DetaileScreen";
import {navigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';
import {PaperProvider} from 'react-native-paper';
import CustomNavigationBar from './Screen/CustomNavigationBar';

const Stack = createStackNavigation();

const App=()=>
{
    return(
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigation 
                initialRouterName = "Home" 
                screenOptions={{
                    header:(props) => <CustomNavigationBar {...props}/>
                }}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>

            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;

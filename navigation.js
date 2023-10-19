import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showSplash, setShowSplash] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
        }
    );

    useEffect(() => {
        if (isLoaded) {
            setShowSplash(false);
        }
    }
    );

    if (showSplash) {
        return <Splash />;
    }

    return (
        <NavigationContainer 
            theme={{
                colors: {
                    background: 'black',
                    text: 'white',
                },
            }}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;

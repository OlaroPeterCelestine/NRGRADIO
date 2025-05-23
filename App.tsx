import React from 'react';
import { Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import NRGScreen from './screens/NRGScreen';
import NewsScreen from './screens/NewsScreen';
import EventsScreen from './screens/EventsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === 'NRG') {
              return (
                <Ionicons
                  name={focused ? 'radio' : 'radio-outline'}
                  size={size}
                  color={color}
                />
              );
            }

            const iconNames: any = {
              News: focused ? 'newspaper' : 'newspaper-outline',
              Events: focused ? 'calendar' : 'calendar-outline',
              Settings: focused ? 'settings' : 'settings-outline',
            };

            return (
              <Ionicons
                name={iconNames[route.name]}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#FF3B30',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarStyle: {
            backgroundColor: '#121212',
            paddingVertical: 6,
            height: 60,
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#FF3B30',
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 0 },
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#FF3B30',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
        })}
      >
        <Tab.Screen
          name="NRG"
          component={NRGScreen}
          options={{
            headerTitle: () => (
              <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#FF3B30',
              }}>
                <Text style={{ color: 'white' }}>106.5 </Text>
                NRG RADIO
              </Text>
            ),
          }}
        />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

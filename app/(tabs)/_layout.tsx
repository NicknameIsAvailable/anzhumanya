import { Tabs } from 'expo-router';
import { Atom, MessageSquareText, User } from "@tamagui/lucide-icons"
import { Button, XStack } from 'tamagui';
import { MenuBar } from 'components/root/menu';

const RootLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                headerRight: () => {
                    return (
                        <XStack padding="$2">
                            <MenuBar />
                        </XStack>
                    )
                }
            }}
        >
            <Tabs.Screen 
                name="train"
                options={{
                    title: 'Тренировка',
                    tabBarIcon: ({ color }) => <Atom color={color} />
                }}
            />
            <Tabs.Screen 
                name="chat"
                options={{
                    title: 'Чат с тренером',
                    tabBarIcon: ({ color }) => <MessageSquareText color={color} />
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Профиль',
                    tabBarIcon: ({ color }) => <User color={color} />
                }}
            />
        </Tabs>
    );
};

export default RootLayout;
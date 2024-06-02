import { Send } from '@tamagui/lucide-icons';
import { Avatar, Button, Card, H1, H3, H4, Input, ScrollView, XStack, YStack } from 'tamagui';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from "react-native"
import chatData from "@/data/chat.json"
import { Message } from '@/components/chat/message';
import { useEffect, useState } from 'react';

export interface IFunctionLabel {
    name: string;
    fn: string;
}

export const functions: IFunctionLabel[] = [ 
    {
        name: "Создать тренировку",
        fn: "createTrain"
    },
    {
        name: "Изменить тренировку",
        fn: "editTrain"
    },
]

const Chat = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <YStack gap="$4" padding="$4" style={{ flex: 1 }}>
                <Card padded bordered style={styles.messagesContainer}>
                    <XStack display="flex" gap="$4" alignItems="center">
                        <Avatar circular size="$4">
                            <Avatar.Image
                                src="/assets/images/avatar.jpg"
                                accessibilityLabel="Тренер"
                            />
                            <Avatar.Fallback backgroundColor="$blue10" />
                        </Avatar>
                        <H4>AI Тренер</H4>
                    </XStack>
                    <ScrollView paddingVertical="$4" style={styles.messageListContainer}>
                        <YStack gap="$4" style={styles.messagesList}>
                            {chatData.map((message, index) => 
                                <Message key={index} data={message} />
                            )}
                        </YStack>
                    </ScrollView>
                    <YStack gap="$2" style={keyboardVisible && {paddingBottom: 60, transitionDuration: "100ms", transitionDelay: "100ms"}}>
                        <ScrollView horizontal>
                            <XStack gap="$2">
                                {functions.map(fun => <Button key={fun.fn}>{fun.name}</Button>)}
                            </XStack>
                        </ScrollView>
                        <XStack gap="$2" display="flex">
                            <Input flex={1} placeholder="Напишите сообщение..." />
                            <Button icon={Send} />
                        </XStack>
                    </YStack>
                </Card>
            </YStack>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    messagesContainer: {
        height: '100%',
        display: "flex",
    },
    messageListContainer: {
        flex: 1,
        display: "flex"
    },
    messagesList: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    }
})

export default Chat;

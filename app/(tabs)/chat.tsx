import { Send } from '@tamagui/lucide-icons';
import { Avatar, Button, Card, H1, H3, H4, Input, ScrollView, XStack, YStack } from 'tamagui';
import { StyleSheet } from "react-native"
import chatData from "data/chat.json"
import { Message } from 'components/chat/message';

const Chat = () => {
    return (
        <YStack gap="$4" padding="$4">
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
                <ScrollView paddingVertical="$2" style={styles.messageListContainer}>
                    <YStack gap="$4" style={styles.messagesList}>
                        {chatData.map(message => 
                            <Message data={message}/>
                        )}
                    </YStack>
                </ScrollView>
                <XStack gap="$2" display="flex">
                    <Input flex={1} placeholder="Напишите сообщение..." />
                    <Button icon={Send}/>
                </XStack>
            </Card>
        </YStack>
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

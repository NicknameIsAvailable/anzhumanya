import { FC } from "react";
import { IMessageProps } from "../model";
import { Card, CardBackground, Text, View, YStack } from "tamagui";
import { StyleSheet } from "react-native";
import { Embedding } from "./embedding";

export const Message: FC<IMessageProps> = ({ data }) => {
    return (
        <View style={[styles.messageView, data.fromUser && styles.fromUser]}>
            <Card style={[styles.message]} padded bordered={!data.fromUser}>
                <Text>
                    {data.content.text}
                </Text>
                <YStack gap="$2"> 
                    <Embedding data={data.content.embeddings} />
                </YStack>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    messageView: {
        display: "flex",
    },
    message: {
        maxWidth: 300
    },
    fromUser: {
        color: "white",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
})

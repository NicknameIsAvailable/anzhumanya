import { Slot } from 'expo-router';
import { Card, H1, YStack } from 'tamagui';

const UserInfoLayout = () => {

    return (
        <YStack display="flex" gap="$4" padding="$4" paddingTop="$10">
            <H1>Расскажите о себе</H1>
            <Card padded bordered gap="$4" marginTop="$4">
                <Slot />
            </Card>
        </YStack>
    );
};

export default UserInfoLayout;
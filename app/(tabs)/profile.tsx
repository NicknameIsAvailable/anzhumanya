import { Link } from 'expo-router';
import { H1, YStack } from 'tamagui';

const Profile = () => {
    return (
        <YStack padding="$4">
            <H1>Профиль</H1>
            <Link href="login">Войти</Link>
            <Link href="user-info">Расскажи о себе</Link>
        </YStack>
    );
};

export default Profile;
import { WeekTabs } from '@/components/train/week-tabs';
import { Slot } from 'expo-router';
import { ScrollView, YStack } from 'tamagui';

const TrainLayout = () => {
    return (
        <ScrollView>
            <YStack padding="$4" gap="$4">
                <Slot />
            </YStack>
        </ScrollView>
    );
};

export default TrainLayout;
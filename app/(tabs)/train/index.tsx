import { WeekTabs } from 'components/train/week-tabs';
import { YStack } from 'tamagui';

const Root = () => {
    return (
        <YStack padding="$4" gap="$4">
            <WeekTabs />
        </YStack>
    );
};

export default Root;
import { TrainChart } from 'components/train/train-chart/ui';
import { WeekTabs } from 'components/train/week-tabs';
import { ScrollView, YStack } from 'tamagui';

const TrainLayout = () => {
    return (
        <ScrollView>
            <YStack padding="$4" gap="$4">
                <TrainChart />
                <WeekTabs />
            </YStack>
        </ScrollView>
    );
};

export default TrainLayout;
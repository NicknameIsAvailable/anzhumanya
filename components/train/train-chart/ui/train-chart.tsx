import { Card, H3, Text, XStack, YStack } from 'tamagui';
import { SelectMonth } from './select-month';

export const TrainChart = () => {
    return (
        <Card bordered>
            <Card.Header>
                <XStack ai="center" justifyContent='space-between'>
                    <H3>Статистика</H3>
                </XStack>
            </Card.Header>
            <YStack padding="$6">
                <Text>Статистика</Text>
            </YStack>
            <Card.Footer padded>
                <SelectMonth />
            </Card.Footer>
            <Card.Background>
            </Card.Background>
        </Card>
    );
};

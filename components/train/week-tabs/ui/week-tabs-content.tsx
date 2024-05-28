import React, { FC } from 'react';
import { Button, Card, H1, ListItem, ScrollView, Separator, Tabs, Text, View, XStack, YGroup, YStack } from 'tamagui';
import { IWeekTabsContentProps } from '../model';
import { Star } from '@tamagui/lucide-icons';

const train = [

]

const WeekTabsContent: FC<IWeekTabsContentProps> = ({ day }) => {
    return (
        <Tabs.Content paddingTop="$4" gap="$4" value={day.value}>
            <Card bordered>
                <Card.Header padded>
                    <XStack>
                        <H1>{day.name}</H1>
                    </XStack>
                </Card.Header>
                <YStack gap="$4" paddingHorizontal="$4">
                    <YGroup alignSelf="center" bordered size="$5" separator={<Separator />}>
                        <YGroup.Item>
                            <ListItem hoverTheme icon={Star} title="Анжуманя" subTitle="2x10" />
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem hoverTheme icon={Star} title="Анжуманя" subTitle="2x10" />
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem hoverTheme icon={Star} title="Анжуманя" subTitle="2x10" />
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem hoverTheme icon={Star} title="Анжуманя" subTitle="2x10" />
                        </YGroup.Item>
                    </YGroup>
                </YStack>
                <Card.Footer padded ai="center" justifyContent="center">
                    <Button width="100%">Начать тренировку</Button>
                </Card.Footer>
            </Card>
        </Tabs.Content>
    );
};

export default WeekTabsContent;
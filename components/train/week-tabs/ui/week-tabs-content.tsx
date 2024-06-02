import React, { FC } from 'react';
import { Button, Card, H1, H2, H3, ListItem, ScrollView, Separator, Tabs, Text, View, XStack, YGroup, YStack } from 'tamagui';
import { IWeekTabsContentProps } from '../model';
import { Smile, Star } from '@tamagui/lucide-icons';
import { Link, useRouter } from 'expo-router';
import { ITrain } from '@/types';
import { trains } from "@/data"
import { TrainView } from '../../train-view/ui';

const WeekTabsContent: FC<IWeekTabsContentProps> = ({ day }) => {
    const router = useRouter()

    const startTrain = () => {
        router.navigate(`train/${day.value}`)
    }

    const currentTrain = trains.find(train => train.day === day.value)

    return (
        <Tabs.Content paddingTop="$4" gap="$4" value={day.value}>
            <Card bordered padded gap="$4">
                <Card.Header>
                    <H1>{day.name}</H1>
                </Card.Header>
                {
                    currentTrain ?
                    <>
                        <TrainView data={currentTrain} />
                        <Card.Footer ai="center" justifyContent="center">
                            <Button onPress={startTrain} width="100%">Начать тренировку</Button>                    
                        </Card.Footer>
                    </>
                    :
                    <YStack gap="$4">
                        <H2>Сегодня тренировок нет</H2>
                        <H3>Отдыхай <Smile /></H3>
                    </YStack>
                }
            </Card>
        </Tabs.Content>
    );
};

export default WeekTabsContent;
import React from 'react';
import { H1, ScrollView, Separator, SizableText, Tabs, Text, ToggleGroup, View } from 'tamagui';
import { IWeekDay } from '../model';
import WeekTabsContent from './week-tabs-content';

export const days: IWeekDay[] = [ 
    {
        name: "Понедельник",
        symbol: "ПН",
        value: "monday"
    },
    {
        name: "Вторник",
        symbol: "ВТ",
        value: "tuesday"
    },
    {
        name: "Среда",
        symbol: "СР",
        value: "wednesday"
    },
    {
        name: "Четверг",
        symbol: "ЧТ",
        value: "thursday"
    },
    {
        name: "Пятница",
        symbol: "ПТ",
        value: "friday"
    },
    {
        name: "Суббота",
        symbol: "СБ",
        value: "saturday"
    },
    {
        name: "Воскресенье",
        symbol: "ВС",
        value: "sunday"
    },
]

const today = new Date();
let dayOfWeek = today.getDay();
dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

export const WeekTabs = () => {
    return (
        <View display="flex" justifyContent='center' alignItems='center'>
            <Tabs
                defaultValue={days[dayOfWeek - 1].value}
                orientation="horizontal"
                flexDirection="column"
                width="100%"
                borderRadius="$4"
                borderWidth="$0.25"
                overflow="hidden"
                borderColor="$borderColor"
            >
                <Tabs.List
                    separator={<Separator vertical />}
                    disablePassBorderRadius="bottom"
                    aria-label="Manage your account"
                >

                    {days.map(day => 
                        <Tabs.Tab key={day.value} flex={1} value={day.value}>
                            <SizableText fontFamily="$body">{day.symbol}</SizableText>
                        </Tabs.Tab>
                    )}
                </Tabs.List>
                <Separator />
                {days.map(day => 
                    <WeekTabsContent key={day.value} day={day} />
                )}
            </Tabs>
        </View>
    );
};

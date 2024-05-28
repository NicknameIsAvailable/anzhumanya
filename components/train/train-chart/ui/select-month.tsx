import { Check, ChevronDown } from '@tamagui/lucide-icons';
import { useMemo, useState } from 'react';
import { Adapt, Select, Sheet } from 'tamagui';

const months = [ 
    {
        name: "Май 2024",
        value: "may-2024"
    },
    {
        name: "Апрель 2024",
        value: "apr-2024"
    },
    {
        name: "Февраль 2024",
        value: "feb-2024"
    },
    {
        name: "Январь 2024",
        value: "jan-2024"
    },
]

export const SelectMonth = () => {
    return (
        <Select defaultValue={months[0].value}>
        <Select.Trigger iconAfter={ChevronDown}>
            <Select.Value placeholder="Something" />
        </Select.Trigger>
        <Adapt when="sm" platform="touch">
            <Sheet
                modal
                native={false}
                dismissOnSnapToBottom
                animationConfig={{
                    type: 'spring',
                    damping: 20,
                    mass: 1.2,
                    stiffness: 250,
                }}
            >
            <Sheet.Frame>
                <Sheet.ScrollView>
                <Adapt.Contents />
                </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
            />
            </Sheet>
        </Adapt>
        <Select.Viewport>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Выберите месяц</Select.Label>
                    {useMemo(
                        () =>
                            months.map((month, i) => {
                            return (
                                <Select.Item
                                index={i}
                                key={month.name}
                                value={month.value}
                                >
                                <Select.ItemText>{month.name}</Select.ItemText>
                                <Select.ItemIndicator marginLeft="auto">
                                    <Check size={16} />
                                </Select.ItemIndicator>
                                </Select.Item>
                            )
                            }),
                        [months]
                    )}
                </Select.Group>
            </Select.Content>
        </Select.Viewport>
        </Select>
    );
};

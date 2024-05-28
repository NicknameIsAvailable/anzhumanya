import { Check, ChevronDown } from '@tamagui/lucide-icons';
import React, { useMemo } from 'react';
import { Adapt, Select, Sheet } from 'tamagui';

const themes = [ 
    {
        name: "Светлая",
        value: "light"
    },
    {
        name: "Темная",
        value: "dark",
    },
    {
        name: "Системная",
        value: "system",
    }
]

export const ThemeSelect = () => {
    return (
        <Select defaultValue={themes[0].value}>
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
                    <Select.Label>Выберите тему</Select.Label>
                    {useMemo(
                        () =>
                            themes.map((theme, i) => {
                            return (
                                <Select.Item
                                index={i}
                                key={theme.name}
                                value={theme.value}
                                >
                                <Select.ItemText>{theme.name}</Select.ItemText>
                                <Select.ItemIndicator marginLeft="auto">
                                    <Check size={16} />
                                </Select.ItemIndicator>
                                </Select.Item>
                            )
                            }),
                        [themes]
                    )}
                </Select.Group>
            </Select.Content>
        </Select.Viewport>
        </Select>
    );
};

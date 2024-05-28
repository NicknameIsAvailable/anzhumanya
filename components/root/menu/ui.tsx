import { LogOut, Menu } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { Button, Sheet, Text, YStack } from 'tamagui';
import { ThemeSelect } from '../theme-select';

export const MenuBar = () => {
    const [position, setPosition] = useState(0)
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button chromeless onPress={() => setOpen(true)}>
                <Menu/>
            </Button>
            <Sheet 
                forceRemoveScrollEnabled={open}
                modal={true}
                open={open}
                onOpenChange={setOpen}
                snapPointsMode={"fit"}
                dismissOnSnapToBottom
                position={position}
                onPositionChange={setPosition}
                zIndex={100_000}
                animation="medium"
            >
                <Sheet.Overlay 
                    animation="medium"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                />
                <Sheet.Handle/>
                <Sheet.Frame>
                    <YStack padding="$4" gap="$4">
                        <ThemeSelect />
                        <Button icon={LogOut} theme="red">Выйти</Button>
                    </YStack>
                </Sheet.Frame>
            </Sheet>
        </>
    );
};

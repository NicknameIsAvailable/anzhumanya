import { ChevronLeft, ChevronRight, Radio, Save } from '@tamagui/lucide-icons';
import { ReactNode, useEffect, useState } from 'react';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Button, Card, CardFooter, CardHeader, Form, H4, Input, Label, LabelFrame, RadioGroup, Switch, Text, TextArea, XStack, YStack } from 'tamagui';

export interface IStep {
    name: string;
    element: ReactNode;
}

export interface IUserInfoInputs {
    height: number;
    weight: number;
    age: number;
    gender: "woman" | "man";
    purpose: string;
    isGym: boolean;
    diseases: string;
}

const UserInfo = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const form: UseFormReturn<IUserInfoInputs> = useForm<IUserInfoInputs>({
        defaultValues: {
            height: 0,
            weight: 0,
            age: 0,
            gender: "man",
            purpose: "",
            isGym: false,
            diseases: ""
        },
    });

    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const steps: IStep[] = [
        {
            name: "Рост, вес и возраст",
            element: 
                <YStack gap="$4">
                    <Text>
                        Только честно!
                    </Text>
                    <Controller
                        control={form.control}
                        name="height"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <>
                                <LabelFrame>
                                    <Label>Рост</Label>
                                </LabelFrame>
                                <Input 
                                    placeholder="177" 
                                    value={value.toString()}
                                    onChangeText={onChange} 
                                    keyboardType="decimal-pad" 
                                />
                                {form.formState.errors.height && <Text>{form.formState.errors.height.message}</Text>}
                            </>
                        }
                    />

                    <Controller
                        control={form.control}
                        name="weight"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <>
                                <LabelFrame>
                                    <Label>Вес</Label>
                                </LabelFrame>
                                <Input 
                                    placeholder="70" 
                                    value={value.toString()} 
                                    onChangeText={onChange} 
                                    keyboardType="decimal-pad" 
                                />
                                {form.formState.errors.weight && <Text>{form.formState.errors.weight.message}</Text>}
                            </>
                        }
                    />

                    <Controller
                        control={form.control}
                        name="age"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <>
                                <LabelFrame>
                                    <Label>Возраст</Label>
                                </LabelFrame>
                                <Input 
                                    placeholder="18" 
                                    value={value.toString()} 
                                    onChangeText={onChange} 
                                    keyboardType="numeric" 
                                />
                                {form.formState.errors.age && <Text>{form.formState.errors.age.message}</Text>}
                            </>
                        }
                    />
                </YStack>
        },
        {
            name: "Ваш пол",
            element: 
                <YStack gap="$4">
                    <Controller
                        control={form.control}
                        name="gender"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <>
                                <RadioGroup value={value} onValueChange={onChange}>
                                    <XStack gap="$2" ai="center">
                                        <RadioGroup.Item value="man">
                                            <RadioGroup.Indicator />
                                        </RadioGroup.Item>
                                        <Label>
                                            Мужской
                                        </Label>
                                    </XStack>
                                    <XStack gap="$2" ai="center">
                                        <RadioGroup.Item value="woman">
                                            <RadioGroup.Indicator />
                                        </RadioGroup.Item>
                                        <Label>
                                            Женский
                                        </Label>
                                    </XStack>
                                </RadioGroup>
                                {form.formState.errors.gender && <Text>{form.formState.errors.gender.message}</Text>}
                            </>
                        }
                    />
                </YStack>
        },
        {
            name: "Чего хотите добиться?",
            element: <YStack gap="$4">
            <Text>
                Хочешь быть как Шварцнеггер? А может как Гатс?
            </Text>
            <Controller
                control={form.control}
                name="purpose"
                rules={{
                    required: true
                }}
                render={({ field: { onChange, value } }) => 
                    <>
                        <LabelFrame>
                            <Label>Цель</Label>
                        </LabelFrame>
                        <TextArea 
                            placeholder="Хочу быть размером с грузовик" 
                            rows={3}
                            value={value} 
                            onChangeText={onChange} 
                        />
                        {form.formState.errors.purpose && <Text>{form.formState.errors.purpose.message}</Text>}
                    </>
                }
            />
        </YStack>
        },
        {
            name: "Ходишь в зал?",
            element: <YStack gap="$4">
                <YStack>
                    <Card padded>
                        <Controller
                            control={form.control}
                            name="isGym"
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, value } }) => 
                                <>
                                    <LabelFrame>
                                        <Label>Хожу (буду ходить)</Label>
                                    </LabelFrame>
                                    <Switch 
                                        onCheckedChange={onChange}
                                        value={value ? "true" : "false"}
                                    >
                                        <Switch.Thumb animation="quicker"/>
                                    </Switch>
                                    {form.formState.errors.isGym && <Text>{form.formState.errors.isGym.message}</Text>}
                                </>
                            }
                        />
                    </Card>
                </YStack>
        </YStack>
        },
        {
            name: "Есть какие-нибудь болячки?",
            element: <YStack gap="$4">
            <Text>
                Расскажи есть ли у тебя проблемы со спиной, ногами, руками, <Text style={styles.strikethroughText}>головой</Text>
            </Text>
            <Controller
                control={form.control}
                name="diseases"
                rules={{
                    required: true
                }}
                render={({ field: { onChange, value } }) => 
                    <>
                        <LabelFrame>
                            <Label>Цель</Label>
                        </LabelFrame>
                        <TextArea 
                            placeholder="У меня спина болит" 
                            rows={3}
                            value={value} 
                            onChangeText={onChange} 
                        />
                        {form.formState.errors.diseases && <Text>{form.formState.errors.diseases.message}</Text>}
                    </>
                }
            />
        </YStack>
        },
    ];

    const onSubmit = (data: IUserInfoInputs) => {
        console.log("data: ", data);
    }

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Form onSubmit={form.handleSubmit(onSubmit)} gap="$4">                
                <CardHeader>
                    <XStack ai="center" justifyContent='space-between' gap="$4">
                        <H4 flex={1}>{steps[currentStep].name}</H4>
                        <H4>{currentStep + 1}/{steps.length}</H4>
                    </XStack>
                </CardHeader>
                <YStack>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        {steps[currentStep].element}
                    </KeyboardAvoidingView>
                </YStack>
                <CardFooter ai="flex-end" justifyContent="space-around">
                    <Button icon={ChevronLeft} onPress={prevStep} disabled={currentStep === 0}/>
                    {currentStep === steps.length - 1
                        ?
                        <Form.Trigger asChild>
                            <Button icon={Save}>Сохранить</Button>
                        </Form.Trigger>
                        :
                        <Button icon={ChevronRight} onPress={nextStep} disabled={currentStep === steps.length - 1}/>                
                    }
                </CardFooter>
            </Form>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    strikethroughText: {
        textDecorationLine: 'line-through',
    },
})

export default UserInfo;

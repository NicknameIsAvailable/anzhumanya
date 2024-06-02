import { StyleSheet } from 'react-native';
import { Button, Card, CardFooter, CardHeader, Form, H1, Input, Label, LabelFrame, Spinner, Text, YStack } from 'tamagui';
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';

export const registrationSchema = z.object({
    email: z.string().email("Неверный формат почты"),
    nickname: z.string().min(6, "Имя слишком короткое").max(128, "Имя слишком длинное"),
    password: z.string()
        .min(8, "Пароль слишком короткий")
        .regex(/[A-Z]/, "В пароле должна быть хотя бы одна большая буква")
        .regex(/[a-z]/, "В пароле должна быть хотя бы одна маленькая буква")
        .regex(/[0-9]/, "В пароле должна быть хотя бы одна цифра")
        .regex(/[@$!%*?&#]/, "В пароле должен быть хотя бы один специальный символ"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Пароли не совпадают"
});

export interface IRegistrationInputs {
    email: string;
    nickname: string;
    password: string;
    confirmPassword: string;
}

const Registration = () => {
    const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')

    useEffect(() => {
        if (status === 'submitting') {
          const timer = setTimeout(() => setStatus('off'), 2000)
          return () => {
            clearTimeout(timer)
          }
        }
      }, [status])    

    const form = useForm<IRegistrationInputs>({
        resolver: zodResolver(registrationSchema)
    })

    const onSubmit = (data: IRegistrationInputs) => setStatus("submitting")

    return (
        <YStack gap="$4">
            <Card padded style={styles.authCard} gap="$4">
                <CardHeader>
                    <H1>Регистрация</H1>
                </CardHeader>
                <Form
                    onSubmit={form.handleSubmit(onSubmit)}
                    alignItems="center"
                    gap="$2"
                >
                    <Controller
                        control={form.control}
                        name="email"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <YStack
                                style={{
                                    width: "100%"
                                }}
                            >
                                <LabelFrame>
                                    <Label>Почта</Label>
                                </LabelFrame>
                                <Input 
                                    style={{
                                        width: "100%"
                                    }}
                                    placeholder="example@mail.com" 
                                    value={value}
                                    onChangeText={onChange}
                                    {...form.register("email")}
                                />
                                {form.formState.errors.email && <Text>{form.formState.errors.email.message}</Text>}
                            </YStack>
                        }
                    />

                    <Controller
                        control={form.control}
                        name="nickname"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <YStack
                                style={{
                                    width: "100%"
                                }}
                            >
                                <LabelFrame>
                                    <Label>Пароль</Label>
                                </LabelFrame>
                                <Input 
                                    style={{
                                        width: "100%"
                                    }}
                                    placeholder="bonbon213" 
                                    value={value}
                                    onChangeText={onChange}
                                    {...form.register("nickname")}
                                />
                                {form.formState.errors.nickname && <Text>{form.formState.errors.nickname.message}</Text>}
                            </YStack>
                        }
                    />

                    <Controller
                        control={form.control}
                        name="password"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <YStack
                                style={{
                                    width: "100%"
                                }}
                            >
                                <LabelFrame>
                                    <Label>Пароль</Label>
                                </LabelFrame>
                                <Input 
                                    style={{
                                        width: "100%"
                                    }}
                                    placeholder="Password123!" 
                                    value={value}
                                    onChangeText={onChange}
                                    {...form.register("password")}
                                />
                                {form.formState.errors.password && <Text>{form.formState.errors.password.message}</Text>}
                            </YStack>
                        }
                    />

                    <Controller
                        control={form.control}
                        name="confirmPassword"
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => 
                            <YStack
                                style={{
                                    width: "100%"
                                }}
                            >
                                <LabelFrame>
                                    <Label>Повторите пароль</Label>
                                </LabelFrame>
                                <Input 
                                    style={{
                                        width: "100%"
                                    }}
                                    placeholder="Password123!" 
                                    value={value}
                                    onChangeText={onChange}
                                    {...form.register("confirmPassword")}
                                />
                                {form.formState.errors.confirmPassword && <Text>{form.formState.errors.confirmPassword.message}</Text>}
                            </YStack>
                        }
                    />

                    <Form.Trigger style={{ width: "100%" }} asChild disabled={status !== 'off'}>
                        <CardFooter style={{ width: "100%" }}>
                            <Link href="user-info" asChild>
                                <Button style={{ width: "100%" }} icon={status === 'submitting' ? () => <Spinner /> : undefined}>
                                    Зарегистрироваться
                                </Button>
                            </Link>
                        </CardFooter>
                    </Form.Trigger>
                </Form>
            </Card>
            <Link href="/login" asChild>
                <Text>
                    У меня уже есть аккаунт
                </Text>
            </Link>
        </YStack>
    );
};

const styles = StyleSheet.create({
    authCard: {
        width: "100%"
    }
})

export default Registration;
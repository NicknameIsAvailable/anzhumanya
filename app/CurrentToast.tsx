import { Toast, useToastController, useToastState } from '@tamagui/toast'
import { Button, H4, Theme, XStack, YStack, isWeb } from 'tamagui'

export function CurrentToast() {
  const currentToast = useToastState()

  if (!currentToast || currentToast.isHandledNatively) return null

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      y={isWeb ? '$12' : 0}
      t={-25}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      animation="quick"
      viewportName={currentToast.viewportName}
      theme="green"
      br="$6"
    >
      <XStack ai="center" justifyContent='space-between' p="$2" gap="$2">
        <Toast.Title fow="bold">
          {currentToast.title}
        </Toast.Title>
        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
        <Button>Жопа</Button>
      </XStack>
    </Toast>
  )
}

export function ToastControl() {
  const toast = useToastController()

  return (
    <Theme name="green">
      <YStack gap="$2" ai="center">
          <H4 col="$color1">Toast demo</H4>
          <XStack gap="$2" jc="center">
            <Button
              onPress={() => {
                toast.show('Successfully saved!', {
                  message: "Don't worry, we've got your data.",
                })
              }}
            >
              Show
            </Button>
            <Button
              onPress={() => {
                toast.hide()
              }}
            >
              Hide
            </Button>
          </XStack>
        </YStack>
    </Theme>
  )
}

import { FC } from "react"
import { Card, H4, ListItem, ListItemSubtitle, ListItemTitle, Text, YStack } from "tamagui"
import { ITrainViewProps } from "./model"

export const TrainView: FC<ITrainViewProps> = ({ data }) => {
    return (
        <Card paddingTop="$2" gap="$2">
            <H4>{data?.name}</H4>
            <Text>{data?.description}</Text>
            <YStack paddingTop="$2">
                {data?.steps.map(step => 
                    <ListItem key={step.name} bordered>
                        <ListItemTitle>
                            {step.name}
                        </ListItemTitle>
                        <ListItemSubtitle>
                            {step.description}
                        </ListItemSubtitle>
                    </ListItem>
                )}
            </YStack>
        </Card>
    )
}
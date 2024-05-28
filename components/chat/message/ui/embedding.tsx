import { FC } from "react";
import { IEmbeddingProps } from "../model";
import { Button, Text, YStack } from "tamagui";
import { TrainView } from "components/train/train-view/ui";

const embeddings = {
    train: (data: any) => <YStack gap="$2">
        {data.map(train => <TrainView data={train} />)}
    </YStack>,
    button: (data: any) => <Button>Кнопка</Button>
}

export const Embedding: FC<IEmbeddingProps> = ({ data }) => {
    return (
        <YStack gap="$2">
            {data.map(embedding => 
                embeddings[embedding.type](embedding.content)
            )}
        </YStack>
    )
}
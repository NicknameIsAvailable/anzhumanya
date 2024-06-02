import { ChevronLeft } from "@tamagui/lucide-icons";
import { useNavigation } from "expo-router";
import { FC } from "react";
import { Button } from "tamagui";

export const GoBack: FC = () => {
    const navigation = useNavigation();
  
    return (
      <Button icon={ChevronLeft} width="$5" variant="outlined" onPress={() => navigation.goBack()} />
    );
  };
  
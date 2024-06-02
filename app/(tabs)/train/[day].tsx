import { GoBack } from '@/components/root';
import { days } from '@/components/train/week-tabs';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, Card, CardFooter, CardHeader, H1, H2, H4, Text, View, XStack, YStack } from 'tamagui';
import { trains } from "@/data"
import { useState, useEffect } from 'react';

const Train = () => {
  const { day } = useLocalSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentReps, setCurrentReps] = useState(0);
  const [timer, setTimer] = useState(0); 
  const [isTimerRunning, setIsTimerRunning] = useState(false); 

  const currentDay = days.find(item => item.value === day);
  const train = trains.find(train => train.day === currentDay?.value);

  const handleButtonClick = () => {
    if (!isTimerRunning) { 
      setIsTimerRunning(true);
      setTimer(train?.steps[currentStep].restTime || 30); 
    } else { 
      setIsTimerRunning(false);
      setTimer(0);
      setCurrentStep(currentStep + 1); 
    }
  };

  useEffect(() => {
    if (isTimerRunning && timer > 0) {
      const intervalId = setInterval(() => setTimer(prevTimer => prevTimer - 1), 1000);
      return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }
  }, [isTimerRunning, timer]); // Run effect on changes to isTimerRunning and timer

  return (
    <YStack gap="$4">
      <XStack justifyContent='space-between'>
        <GoBack />
        <H1>
          {currentDay?.name}
        </H1>
      </XStack>
      <YStack flex={1}>
        <Card padded height="$20">
          <CardHeader>
            <XStack ai="center" justifyContent='space-between' gap="$4">
              <H2 flex={1}>{train?.steps[currentStep].name}</H2>
              <H2>{currentReps + 1}/{train?.steps[currentStep].reps}</H2>
            </XStack>
          </CardHeader>
          <H4>
            {train?.steps[currentStep].description}
          </H4>
          <CardFooter>
            <Button flex={1} onPress={handleButtonClick}>
              {isTimerRunning && timer > 0 ? `Отдых (${timer}s)` : "Выполнено"}
            </Button>
          </CardFooter>
        </Card>
      </YStack>
    </YStack>
  );
};

export default Train;

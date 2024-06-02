import { ITrain } from "@/types";

export const trains: ITrain[] = [
    {
      id: "1",
      name: "Cardio Workout",
      description: "Improve endurance and burn calories.",
      day: "friday",
      steps: [
        {
          name: "Running",
          description: "Run on a treadmill for 30 minutes at a moderate pace.",
          reps: 1,
          sets: 3,
          restTime: 30,
        },
        {
          name: "Swimming",
          description: "Swim in a pool for 30 minutes.",
          reps: 1,
          sets: 2,
          restTime: 60,
        },
      ],
    },
    {
      id: "2",
      name: "Strength Training",
      description: "Build muscle and strength.",
      day: "monday",
      steps: [
        {
          name: "Squats",
          description: "Perform 3 sets of 10-12 repetitions.",
          reps: 10,
          sets: 3,
          restTime: 60,
        },
        {
          name: "Push-ups",
          description: "Perform 3 sets of as many repetitions as possible.",
          reps: 12,
          sets: 3,
          restTime: 30,
        },
        {
          name: "Pull-ups",
          description: "Perform 3 sets of as many repetitions as possible.",
          reps: 12,
          sets: 3,
          restTime: 60,
        },
      ],
    },
    {
      id: "3",
      name: "Yoga",
      description: "Improve flexibility and balance.",
      day: "tuesday",
      steps: [
        {
          name: "Downward-Facing Dog",
          description: "Hold for 5 breaths.",
          reps: 5,
          sets: 3,
          restTime: 30,
        },
        {
          name: "Warrior II Pose",
          description: "Hold each leg for 5 breaths.",
          reps: 5,
          sets: 3,
          restTime: 30,
        },
        {
          name: "Child's Pose",
          description: "Rest for 1 minute.",
          reps: 1,
          sets: 3,
          restTime: 0,
        },
      ],
    },
  ];
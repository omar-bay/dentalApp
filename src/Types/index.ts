import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
export type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

export interface Service {
    id: number,
    name: string,
    tasks: [task: Task]
}

export interface Task {
    id: number,
    name: string,
    description: string
}

export interface Patient {
    id: number,
    name: String,
    age: number,
    gender: String,
    cat_id: number
}
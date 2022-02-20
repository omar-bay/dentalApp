import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
export type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

export interface Service {
    id: number,
    service: Static_Service
    patient: Patient,
    assignee: HR_Assignee,
    date: Date,
    tasks: [task: Task]
}

export interface Static_Service {
    id: number,
    name: string,
    description?: string
}

export interface Task {
    id: number,
    stage: Stage,
    name: string,
    description: string,
    assignee_notes: string,
    date: Date,
}

export enum Stage {
    New = "New",
    Pending = "Pending",
    Done = "Done"
}

export interface Patient {
    id: number,
    profile_pic: string,
    name: String,
    age: number,
    gender: String,
    cat_id: number
}

export interface HR_Assignee {
    id: number,
    name: string,
    profile_pic: string,
    hr_type: HR_Type
}

export enum HR_Type {
    Admin = "Admin",
    Doctor = "Doctor",
    Student = "Student",
    Employee = "Employee"
}
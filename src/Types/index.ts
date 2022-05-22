import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
export type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

interface PFile {
    id: number,
    patient: Patient,
    services: [service: Service],
    teeth_pic?: Teeth_Pic[]
}

interface Teeth_Pic {
    id: number
    status: string
    type: string
    url: string
    date_created: Date
}

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
    service_log_id: number;
    id: number,
    stage: Stage,
    name: string,
    description: string,
    assignee_notes: string,
    date: string,
}

export enum Stage {
    New = "New",
    Pending = "Pending",
    Done = "Done"
}

export interface Patient {
    id: number,
    profile_pic_url: string,
    name: String,
    age: number,
    gender: String,
    cat_id: number,
    medical_file: Medical_File
}

export interface Medical_File {
    id: number
}

export interface HR_Assignee {
    id: number
    name: string
    email: string
    phone_num: string
    profile_pic: string
    hr_type: HR_Type
    home_num: string
    office?: string
    home_address: string
    cv?: string
    nationality?: string
    SSN?: number
    birth: Date
    marital_status?: string
}

export enum HR_Type {
    Admin = "Admin",
    Doctor = "Doctor",
    Student = "Student",
    Employee = "Employee"
}
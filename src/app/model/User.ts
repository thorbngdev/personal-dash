import { UserData } from './UserData';

export interface User {
    id: number;
    name: string;
    data: UserData;
}
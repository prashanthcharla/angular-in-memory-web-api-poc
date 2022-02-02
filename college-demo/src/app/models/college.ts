import { Lecturer } from "./lecturer";
import { Student } from "./student";

export interface College {
    id: number;
    location: string;
    name: string,
    principalId: number
}
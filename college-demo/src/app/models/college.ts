import { Lecturer } from "./lecturer";
import { Student } from "./student";

export interface College {
    location: string;
    students: Array<Student>;
    lecturers: Array<Lecturer>;
    principal: Lecturer;
}
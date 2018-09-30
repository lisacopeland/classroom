export interface Classroom {
    subject: string;
    days: string;
    roomNumber: string;
  }
  export interface ClassroomId extends Classroom {
    id: string;
  }

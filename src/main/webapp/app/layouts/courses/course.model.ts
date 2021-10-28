export class Course {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public creationDate: Date,
    public creator: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      role: string;
      enabled: boolean;
      createdCourseIds: number[];
    }
  ) {}
}

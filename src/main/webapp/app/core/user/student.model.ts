export class Student {
  constructor(
    public assignedCourseIds: number[],
    public email: string,
    public firstName: string,
    public lastName: string,
    public role: string,
    public enabled: boolean,
  ) {}
}

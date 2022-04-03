export class Teacher {
  constructor(
    public enabled: boolean,
    public role: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public createdCourseIds: string[]
  ) {}
}

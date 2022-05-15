export class SimpleAccountModel {
  constructor(public enabled: boolean, public role: string, public email: string, public firstName: string, public lastName: string) {}
}

export class TeacherModel {
  constructor(
    public enabled: boolean,
    public role: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public createdCourseIds: string[]
  ) {}
}

export class StudentModel {
  constructor(
    public assignedCourseIds: number[],
    public email: string,
    public firstName: string,
    public lastName: string,
    public role: string,
    public enabled: boolean
  ) {}
}

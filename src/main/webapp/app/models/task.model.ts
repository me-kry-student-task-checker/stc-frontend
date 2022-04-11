export class TaskModel {
  constructor(
    public comments: string[],
    public completedStudents: string[],
    public courseId: number,
    public creationDate: Date,
    public description: string,
    public done: boolean,
    public file: File[],
    public helpNeededStudents: string[],
    public id: number,
    public name: string
  ) {}
}

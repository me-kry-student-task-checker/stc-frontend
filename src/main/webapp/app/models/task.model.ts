export class TaskModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public creationDate: Date,
    public file: File[],
    public courseId: number,
    public helpNeededStudents: string[],
    public comments: string[],
    public done: boolean
  ) {}
}

export class TaskModel {
  constructor(
    public comments: [
      {
        authorId: string;
        courseId: number;
        createDate: Date;
        id: number;
        text: string;
      }
    ],
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

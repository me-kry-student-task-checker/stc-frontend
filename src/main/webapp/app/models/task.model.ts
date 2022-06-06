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
    public completedStudents: [
      {
        email: string;
        firstName: string;
        lastName: string;
        role: string;
      }
    ],
    public courseId: number,
    public creationDate: Date,
    public description: string,
    public done: boolean,
    public files: [
      {
        id: string;
        name: string;
        contentType: string;
        uploadDate: Date;
        uploadedBy: string;
        downloadLink: string;
      }
    ],
    public helpNeededStudents: [
      {
        email: string;
        firstName: string;
        lastName: string;
        role: string;
      }
    ],
    public id: number,
    public name: string
  ) {}
}

export class NewTaskModel {
  constructor(public id: null, public courseId: number, public name: string, public description: string) {}
}

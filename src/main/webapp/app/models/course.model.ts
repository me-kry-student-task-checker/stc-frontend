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
    },
    public student: string[],
    public tasks: [],
    public comments: [
      {
        authorId: string;
        courseId: number;
        createDate: Date;
        id: number;
        text: string;
      }
    ],
    public files: [
      {
        id: string;
        name: string;
        contentType: string;
        uploadDate: Date;
        uploadedBy: string;
        downloadLink: string;
      }
    ]
  ) {}
}

export class CourseComment {
  constructor(
    public courseId: number,
    public text: string
  ) {
  }
}

export class TaskComment {
  constructor(
    public taskId: number,
    public text: string
  ) {
  }
}

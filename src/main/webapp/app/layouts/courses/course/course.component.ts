import { Component, OnInit } from '@angular/core';
import { Course } from 'app/models/course.model';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from '../../tasks/new-task/newTask.component';
import { ActivatedRoute } from '@angular/router';
import { TasksListComponent } from '../../tasks/tasks-list/tasksList.component';
import { CourseInviteComponent } from 'app/layouts/courses/course-invite/courseInvite.component';
import { AccountService } from 'app/core/auth/account.service';
import { Student } from 'app/core/user/student.model';
import students from 'app/files/students.json';
import { CourseFileUploadComponent } from 'app/layouts/courses/course-file-upload/courseFileUpload.component';

@Component({
  selector: 'jhi-tasks',
  templateUrl: './course.component.html',
  styleUrls: ['../../../../content/scss/layout/_course.scss'],
})
export class CourseComponent implements OnInit {
  course!: Course;
  courseSubscription?: Subscription;
  students: Student[] = [];
  student!: Student;
  accSubscription?: Subscription;
  descCollapsed = true;
  studentCollapsed = true;
  studentsList = students;
  assignedStudents: Student[] = [];

  constructor(
    private courseService: CourseService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ course }) => {
      this.course = course;
    });

    for (let i = 0; i < this.studentsList.length; i++) {
      if (this.studentsList[i].assignedCourseIds.includes(this.course.id)) {
        this.assignedStudents.push(this.studentsList[i]);
      }
    }

    this.accSubscription = this.accountService
      .getStudentsByAssignedCourseId(this.course.id)
      .subscribe(student => (this.students = student));
  }
  newTask(course: Course): void {
    const modalRef = this.modalService.open(NewTaskComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

  taskList(course: Course): void {
    const modalRef = this.modalService.open(TasksListComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }

  courseInvite(courseId: Course): void {
    const modalRef = this.modalService.open(CourseInviteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = courseId;
  }
  fileUpload(course: Course): void {
    const modalRef = this.modalService.open(CourseFileUploadComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.course = course;
  }
}

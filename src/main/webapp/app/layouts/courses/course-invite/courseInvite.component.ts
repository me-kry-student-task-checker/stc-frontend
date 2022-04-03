import {Component, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AccountService} from "app/core/auth/account.service";
import {Subscription} from "rxjs";
import {Course} from "app/models/course.model";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {CourseService} from "app/layouts/courses/course.service";
import  students  from "app/files/students.json";
import {Student} from "app/core/user/student.model";

@Component({
  selector: 'jhi-course-invite',
  templateUrl: 'courseInvite.component.html',
})


export class CourseInviteComponent implements OnInit{
  students: Student[] = [];
  student!: Student;
  course!: Course;
  accSubscription?: Subscription;
  displayTask: string[] = ["név", "email", "meghívás"];
  faEnvelope = faEnvelope;
  notAssignedStudents: Student[] = [];
  emails: string[] = [];
  studentsList = students;
  public isChecked = false;

  constructor(private coursesService: CourseService, private activeModal: NgbActiveModal, private accountService: AccountService, ) {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.studentsList.length; i++){
        if (!(this.studentsList[i].assignedCourseIds.includes(this.course.id))) {
          this.notAssignedStudents.push(this.studentsList[i])
        }
    }
    this.accSubscription = this.accountService.getNonAssignedStudents(this.course.id).subscribe(student => (this.students = student));
  }

  inviteStudents(): void {
    for (let i = 0; i< this.notAssignedStudents.length; i++){
      if (this.notAssignedStudents[i].enabled){
        this.emails.push(this.notAssignedStudents[i].email)
      }
    }
    this.coursesService.inviteStudents(this.course.id, this.emails).subscribe()
    for (let i = 0; i< this.studentsList.length; i++){
      this.studentsList[i].enabled = false;
    }
    this.activeModal.close()
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}

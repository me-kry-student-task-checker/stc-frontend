import {Component, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Account} from "app/core/user/account.model";
import {AccountService} from "app/core/auth/account.service";
import {Subscription} from "rxjs";
import {Course} from "app/models/course.model";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {CourseService} from "app/layouts/courses/course.service";

@Component({
  selector: 'jhi-course-invite',
  templateUrl: 'courseInvite.component.html',
})

export class CourseInviteComponent implements OnInit{
  students: Account[] = [];
  student!: Account;
  course!: Course;
  accSubscription?: Subscription;
  displayTask: string[] = ["név", "email", "meghívás"];
  faEnvelope = faEnvelope;

  constructor(private coursesService: CourseService, private activeModal: NgbActiveModal, private accountService: AccountService, ) {
  }

  ngOnInit(): void {
    this.accSubscription = this.accountService.getNonAssignedStudents(this.course.id).subscribe(account => (this.students = account));
  }

  inviteStudents(email: string): void {
    this.coursesService.inviteStudents(this.course.id, email).subscribe()
  }

  cancel(): void {
    this.activeModal.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../shared/user.service';
import { QuestionService} from '../../../shared/question.service';
import {Question} from '../../../shared/question.model';
import { Result} from '../../../shared/result.model';
import {ResultService} from '../../../shared/result.service';



@Component({
  selector: 'app-quesubmit',
  templateUrl: './quesubmit.component.html',
  styleUrls: ['./quesubmit.component.css']
})
export class QuesubmitComponent implements OnInit {
  userDetails;
  public id = '';
  public selectedQuestion = new Question();
  public answer = new Result();
  constructor(private userService: UserService, private route: ActivatedRoute, private qservice: QuestionService ,
     private resservice: ResultService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);
      }
    );

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getQuesbyid(this.id);
    });
  }
  getQuesbyid(id) {
    this.qservice.getqueid(id).subscribe((res) => {
      this.selectedQuestion = res as Question;
      console.log(this.selectedQuestion);
    }, (err) => {
      console.log(err);
    });
  }

  onAnswer(form: NgForm) {
    this.answer.email = this.userDetails.email;
    this.answer.qid = form.value.qid;
    this.answer.uanswer = form.value.uanswer;
    this.answer.canswer = form.value.canswer;
    this.answer.marks = (form.value.uanswer === form.value.canswer) ? 1 : 0;
    this.answer.category_id = form.value.category_id;
    this.resservice.insertans(this.answer).
    subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    ) ;
  }

}

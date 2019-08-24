import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question1.model';

@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {
  public questions =[];
  constructor(private router:Router,private qservice:QuestionService) { }

  ngOnInit() {
    this.getquestion();
    this.refresh();
  }

  getquestion() {
    this.qservice.getquestion().subscribe((res) => {
    this.questions = res as Question[];
    });
  }


  refresh() {
    this.qservice.getquestion().subscribe((res) => {
      this.questions = res as Question[] ;
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.qservice.deletequestion(_id).subscribe((res) => {
      });
      this.router.navigateByUrl('userprofile/Viewq');
      this.refresh();
    }
  }

}

import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Category } from '../../shared/category.model';
import { Question } from '../../shared/question.model';
import { QuestionService } from '../../shared/question.service';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public category = '';
  userDetails = new User();
  public questions = [];
  @Input() childMessage: string;
  constructor(private route: ActivatedRoute , private qservice: QuestionService , private userService: UserService ,
    private router: Router) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category_id');
    this.getques(this.category);
    this.userService.getUserProfile().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    console.log(this.userDetails);
  }
  getques(category) {
    this.qservice.getques(category).subscribe((res) => {
      this.questions = res as Question[];
      });
  }
}

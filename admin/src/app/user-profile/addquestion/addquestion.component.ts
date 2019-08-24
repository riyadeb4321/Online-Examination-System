import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';
import { QuestionService } from '../../shared/question.service';
import { Question} from '../../shared/question1.model';


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  public selectedquestion = new Question();
  public category = [];
  constructor(private catservice: CategoryService, private qservice: QuestionService, private router:Router) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id === '' || form.value._id == null) {
   this.qservice.insertquestion(this.selectedquestion).
   subscribe(
     data => console.log('Success', data),
     error => console.error('Error', error)
   );
   alert(' Data Saved Successfully ');
   this.router.navigateByUrl('userprofile/Viewq');
    } else {
      console.log(form.value);
    }
   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';
import { QuestionService } from '../../shared/question.service';
import { Question} from '../../shared/question1.model';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class EditquestionComponent implements OnInit {
  public id='';
  public selectedquestion= new Question();
  public category=[];
  constructor(private route:ActivatedRoute,private router:Router,private catservice:CategoryService,private qservice:QuestionService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getquestion(this.id);
    this.getCategory();
    
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  getquestion(id){
    this.qservice.getqueid(id).subscribe((res) => {
      this.selectedquestion = res as Question;
      console.log(this.selectedquestion);
    }, (err) => {
      console.log(err);
    });

  }


  onEdit(form: NgForm) {
    if (confirm('Are you sure to Update this record ?') === true) {
      this.qservice.updatequestion(form.value).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('userprofile/Viewq');
    } else {
      this.router.navigate ( [ '/Editq', this.id ] );
      this.refresh();
    }
    }
    refresh() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getquestion(this.id);
    }

}

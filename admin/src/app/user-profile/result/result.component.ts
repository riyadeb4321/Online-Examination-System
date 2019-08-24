import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public category = [];
  public subject = '';
  constructor(private catservice: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getCategory();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.subject = form.value.subject;
    this.router.navigate ( [ 'userprofile/resdetail', {category_id: this.subject} ] );
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/category.model';
import { UserService } from '../../shared/user.service';
import {ResultService} from '../../shared/result.service';
import { Result} from '../../shared/result.model';
import { isEmpty } from 'rxjs/operators';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category = [];
  subject = '';
  userDetails;
  public results = [];
  constructor(private catservice: CategoryService, private router: Router, private userService: UserService ,
    private result: ResultService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
      },
      err => {
        console.log(err);

      }
    );
    this.getCategory();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.subject = form.value.subject;
    console.log(this.userDetails.email);
    this.result.attendexam(this.userDetails.email, this.subject).subscribe((res) => {
      console.log(res);
      this.results = res as Result[];
      if (this.results.length === 0) {
        this.router.navigate ( [ 'userprofile/questions', {category_id: this.subject} ] );
      } else {
        alert('You Already Appeared Examination');
        this.router.navigateByUrl('userprofile/result');
      }
      });
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
}

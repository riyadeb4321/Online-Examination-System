import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { Category} from '../../shared/categoty.model';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  public selectedCategory = new Category();
  constructor(private router: Router, private catservice: CategoryService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
     if (form.value._id === '' || form.value._id == null) {
    this.catservice.insertCategory(this.selectedCategory).
    subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
    alert(' Data Saved Successfully ');
    this.router.navigateByUrl('userprofile/ViewCategory');
     } else {
       console.log(form.value);
     }
    }

}

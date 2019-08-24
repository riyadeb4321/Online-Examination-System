import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CategoryService } from '../../shared/category.service';
import { Category } from '../../shared/categoty.model';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
  public category = [];
  constructor(private router: Router, private catservice: CategoryService) { }

  ngOnInit() {
    this.getCategory();
    this.refresh();
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }

  refresh() {
    this.catservice.getCategory().subscribe((res) => {
      this.category = res as Category[] ;
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.catservice.deleteCategory(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }

}


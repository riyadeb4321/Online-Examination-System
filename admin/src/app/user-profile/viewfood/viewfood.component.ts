import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { uploads } from '../../../../../server';
import { Router} from '@angular/router';
import { FoodService } from '../../shared/food.service';
import { Food } from '../../shared/food.model';
declare var  require: any;

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {
  // imgname = require('F:/login/server/uploads/download1.jpg');
  public foods = [];
  constructor(private fservice: FoodService) { }
  getFOoddetails() {
    this.fservice.getFood().subscribe((res) => {
    this.foods = res as Food[];
    });
  }

  ngOnInit() {
    this.getFOoddetails();
  }

}

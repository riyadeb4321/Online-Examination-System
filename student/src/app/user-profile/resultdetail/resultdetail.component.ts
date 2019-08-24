import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import {ResultService} from '../../shared/result.service';
import { Userres } from '../../shared/userres.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultdetail',
  templateUrl: './resultdetail.component.html',
  styleUrls: ['./resultdetail.component.css']
})
export class ResultdetailComponent implements OnInit {
  public userDetails;
  public email = '';
  public results = [];
  constructor(private userService: UserService, private resultservice: ResultService ) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        this.email = this.userDetails.email;
        this.getRes();
      },
      err => {
        console.log(err);

      }
    );
  }
  getRes() {
    this.resultservice.getresult(this.email).subscribe((res) => {
      this.results = res as Userres[];
      console.log(this.results);

    });
  }

}

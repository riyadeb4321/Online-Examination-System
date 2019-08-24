import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ResultService} from '../../shared/result.service';
import { Userres } from '../../shared/usrres.model';

@Component({
  selector: 'app-resdetail',
  templateUrl: './resdetail.component.html',
  styleUrls: ['./resdetail.component.css']
})
export class ResdetailComponent implements OnInit {
  public category = '';
  public results = [];
  constructor(private route: ActivatedRoute, private resservice: ResultService) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category_id');
    console.log(this.category);
    this.resservice.getresult(this.category).subscribe((res) => {
      this.results = res as Userres[];
    });
  }
}

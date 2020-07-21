import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }
  onSelectionChange(evt){
    console.log(evt.detail.value)
    this.router.navigate(['/user/'+evt.detail.value]);
  }
  ngOnInit() {}

}
